# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your DevEvents Next.js App Router project. The following changes were made:

- **`instrumentation-client.ts`** (new): Initializes PostHog client-side using the `instrumentation-client.ts` pattern recommended for Next.js 15.3+. Enables session replay, autocapture, and exception tracking via `capture_exceptions: true`.
- **`next.config.ts`** (updated): Added reverse proxy rewrites so PostHog requests route through `/ingest` on your own domain, improving ad-blocker resilience and data accuracy.
- **`app/components/ExploreBtn.tsx`** (updated): Captures `explore_events_clicked` when the user clicks the Explore Events CTA.
- **`app/components/EventCard.tsx`** (updated): Captures `event_card_clicked` with event title, slug, location, and date properties when a user clicks an event card.
- **`.env.local`** (updated): PostHog project token and host stored as environment variables (`NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`, `NEXT_PUBLIC_POSTHOG_HOST`).

| Event | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the "Explore Events" CTA button on the homepage, scrolling to the events list. Marks the top of the engagement funnel. | `app/components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card to navigate to the event detail page. Key engagement and conversion action. Properties: `event_title`, `event_slug`, `event_location`, `event_date`. | `app/components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/366470/dashboard/1423795
- **Insight — Explore Events CTA Clicks**: https://us.posthog.com/project/366470/insights/eaIDr7iG
- **Insight — Event Card Clicks by Event**: https://us.posthog.com/project/366470/insights/lHzVIZOp
- **Insight — Explore → Event Card Conversion Funnel**: https://us.posthog.com/project/366470/insights/8fjSkSaF

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
