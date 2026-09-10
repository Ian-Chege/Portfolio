import Script from "next/script";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// Viewcy embedded checkout — third-party test harness.
//
// This page stands in for an organizer's own website: it loads Viewcy's public
// loader script and drops the one <div> the snippet asks for. Everything else on
// the page is here so the flow can be walked without a second screen.
//
// Repointing at another preview app means changing these three values only.
const VIEWCY = {
  // The Rails host that serves the loader. It injects its own CHECKOUT_ORIGIN and
  // API_ORIGIN into the script body, so this host decides which app is under test.
  loader: "https://be-pr-1959.letstestv.com/embed/checkout.js",
  // The course. The loader also accepts a slug, which is what this is — the live
  // button-label lookup is uuid-only and quietly 404s on a slug, so `data-label`
  // below supplies the text instead.
  event: "session_americana_wit_1",
  // The occurrence being sold.
  occurrence: "2515f367-7fb0-4e26-8ac3-61a153daf149",
} as const;

export const metadata = {
  title: "Tickets",
  description: "Viewcy embedded-checkout test harness.",
  robots: { index: false, follow: false },
};

const CHECKS = [
  "The button reads “Get Tickets” and sits inline — no popup, no navigation.",
  "Clicking it opens a modal over this page with Viewcy checkout inside it.",
  "Tickets, buyer info and card all work inside the modal.",
  "On success the thank-you screen renders inside the modal and stays there.",
  "Closing the modal (×, Escape, or the backdrop) returns you to this page, scrolled where you left it, with a confirmation where the button was.",
];

export default function TicketsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:px-8 sm:pt-28">
          <p className="mb-6 text-sm font-medium tracking-wide text-accent uppercase">
            Live music · Brooklyn, NY
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl sm:leading-tight">
            Session Americana
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            with Kris Delmhorst in the band
          </p>

          <dl className="mt-10 grid gap-6 border-y border-border py-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-medium tracking-wide text-muted uppercase">When</dt>
              <dd className="mt-1 text-foreground">Thu, Sep 10 · 10:00 PM</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-muted uppercase">Where</dt>
              <dd className="mt-1 text-foreground">Barbès, Brooklyn</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-muted uppercase">Tickets</dt>
              <dd className="mt-1 text-foreground">$28</dd>
            </div>
          </dl>

          {/* The snippet. The loader renders its own button in here on mount, and
              replaces the whole element with a confirmation once an order lands. */}
          <div className="mt-10">
            <div
              data-viewcy-checkout
              data-event={VIEWCY.event}
              data-occurrence={VIEWCY.occurrence}
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
