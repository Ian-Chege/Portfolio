import Script from "next/script";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// Viewcy embedded checkout — third-party test harness.
//
// This page stands in for an organizer's own website: it loads Viewcy's public
// loader script and drops the one <div> the snippet asks for. Everything else on
// the page is here so the flow can be walked without a second screen.
//
// Repointing at another app means changing these three values only.
const VIEWCY = {
  // The host that serves the loader. It injects its own checkout and API origins
  // into the script body, so this host decides which app is under test.
  loader: "https://be-pr-1966.letstestv.com/embed/checkout.js",
  // The course. The loader also accepts a slug, which is what this is — the live
  // button-label lookup is uuid-only and quietly 404s on a slug, so `data-label`
  // below supplies the text instead.
  event: "gry_test_event",
  // The occurrence being sold.
  occurrence: "ccea70c0-3fd5-4361-b2b5-cb056fffedab",
  // This event sells nothing else, but naming it keeps the intent on the page:
  // an online ticket is what makes checkout ask the buyer to sign in, which is
  // the path under test here.
  ticketType: "online",
} as const;

export const metadata = {
  title: "Tickets",
  description: "Viewcy embedded-checkout test harness.",
  robots: { index: false, follow: false },
};

const CHECKS = [
  "The button reads “Get Tickets” and sits inline — no popup, no navigation.",
  "Clicking it opens a modal over this page with Viewcy checkout inside it, streaming ticket already selected.",
  "A streaming ticket asks you to sign in. That happens inside the modal, and coming back from it leaves your basket where it was.",
  "Buyer info and card both work in the frame, three frames deep for 3DS.",
  "On success the thank-you screen renders inside the modal and stays there.",
  "Closing it — checkout’s own ×, Escape, or the backdrop — returns you to this page, scrolled where you left it, with a confirmation where the button was.",
];

export default function TicketsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:px-8 sm:pt-28">
          <p className="mb-6 text-sm font-medium tracking-wide text-accent uppercase">
            Livestream · Concerts
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl sm:leading-tight">
            Gry test event
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            A streamed set, watched from wherever you are.
          </p>

          <dl className="mt-10 grid gap-6 border-y border-border py-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-medium tracking-wide text-muted uppercase">When</dt>
              <dd className="mt-1 text-foreground">Sun, Sep 14 · 7:00 PM EDT</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-muted uppercase">Where</dt>
              <dd className="mt-1 text-foreground">Online only</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-muted uppercase">Presented by</dt>
              <dd className="mt-1 text-foreground">Barbès</dd>
            </div>
          </dl>

          {/* The snippet. The loader renders its own button in here on mount, and
              replaces the whole element with a confirmation once an order lands. */}
          <div className="mt-10">
            <div
              data-viewcy-checkout
              data-event={VIEWCY.event}
              data-occurrence={VIEWCY.occurrence}
              data-ticket-type={VIEWCY.ticketType}
              data-label="Get Tickets"
            />
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
            Checkout is Viewcy&apos;s, embedded here. Nothing about this page is
            aware of the purchase beyond the confirmation it is handed.
          </p>

          <div className="mt-16 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="font-serif text-xl font-medium text-foreground">
              What this page is for
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              A third-party host for Viewcy&apos;s embedded checkout, so the flow can be
              tested where it actually runs — someone else&apos;s domain. Walk it
              top to bottom:
            </p>
            <ol className="mt-6 space-y-3">
              {CHECKS.map((check, i) => (
                <li key={check} className="flex gap-3 text-sm leading-relaxed text-foreground">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{check}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-border pt-4 text-sm leading-relaxed text-muted">
              Load this page fresh rather than navigating to it — the loader mounts
              once, on the document it lands in.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <Script src={VIEWCY.loader} />
    </>
  );
}
