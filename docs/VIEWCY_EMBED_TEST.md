# Viewcy embedded checkout — test harness

`/tickets` is a third-party host for Viewcy's embedded checkout. It exists so the
embed can be walked on a domain Viewcy does not own, which is the only place the
interesting failures happen: cross-site cookies, framing, and `postMessage`.

The page is a plain event page plus the two things the snippet asks for — a
`<div data-viewcy-checkout>` and the loader `<script>`. Config lives in one
`VIEWCY` object at the top of `src/app/tickets/page.tsx`.

## Before it will fully work

Two prerequisites, and both fail *quietly* if missed.

**1. The modal is behind a feature gate.** `embedded_checkout` decides which
surface the loader opens, and its off state is the popup that predates the modal.
Until that gate is on for this environment, clicking the button opens a window
rather than a framed modal — so steps 2, 4 and 5 below cannot be tested at all.
The gate is read server-side and the loader is cached, so flipping it takes up to
~65 minutes to reach this page.

**2. This page's origin must be registered on the organizer's profile.** The
loader reports a completed purchase with `postMessage`, and Viewcy names the
exact target origin, which the browser then enforces. An unregistered origin
means the message is never sent: checkout works, the buyer sees their thank-you,
and no confirmation ever appears on this page — step 5 silently fails.

The event is owned by `damianwieteska`, so register it at
`https://www.v-u.us/manage/damianwieteska/marketing/checkout-embed`, adding:

```text
https://portfolio-ianchege.vercel.app
http://localhost:3000
```

Origins normalize to scheme + host + non-default port, so a path or a trailing
slash reduces to the same entry — but `www.` is a different origin, and so is a
Vercel deploy-preview subdomain.

## The flow

Load `/tickets` fresh — a full page load, not a client-side navigation. The
loader mounts once, on the document it lands in.

1. **The button.** Reads "Get Tickets", inline where the snippet sits. No popup,
   no navigation.
2. **The modal.** Clicking it opens a dialog over this page with Viewcy checkout
   framed inside. The page behind is scroll-locked and stays where it was.
3. **Buy.** Pick a ticket, fill in buyer info, pay with `4242 4242 4242 4242`
   and any future expiry / any CVC.
4. **The thank-you stays inside the modal.** This is the point of the exercise.
   Nothing closes on completion — the buyer reads their own confirmation in the
   frame, for as long as they like.
5. **Dismiss.** The loader's `×`, Escape, or a click on the backdrop. You land
   back on this page, scrolled where you left it, with
   "Thanks! Your purchase is confirmed." where the button used to be.

## Worth checking while you are in there

- **Escape and the backdrop** both dismiss, and both release the held tickets
  when the order was never paid for.
- **Two `×` buttons.** The loader draws one at the top-right of the dialog; the
  framed checkout draws its own. Both should dismiss the modal. Neither should
  ever render another site *inside* the dialog.
- **Wallets** need a real device — an iPhone in Safari or an Android in Chrome
  with a card in the wallet. The Apple Pay / Google Pay button should render and
  complete inside the modal.
- **3DS**: `4000 0027 6000 3184` should challenge and complete in the frame.
- **A blocked frame.** Serve the page with `Content-Security-Policy: frame-src
  'none'` and after roughly six seconds the modal should offer "Open checkout in
  a new window" rather than taking one by itself.

## Repointing at a different preview

Change `VIEWCY.loader` to that app's host — the script injects its own checkout
and API origins server-side, so the host in that URL decides which app is under
test. Either the Rails host directly or the frontend's `/backend/...` proxy path
works; both answer with the same injected origins. Then set `VIEWCY.event` and `VIEWCY.occurrence` to an event there,
and register this page's origin on that app.

`VIEWCY.event` takes a course uuid or a slug. On a slug the live button-label
lookup 404s, which is why the snippet passes `data-label` instead of letting the
loader resolve the organizer's own wording.
