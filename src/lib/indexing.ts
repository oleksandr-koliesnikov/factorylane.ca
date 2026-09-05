// Set only for the approved production build, never for a preview deployment.
export const indexingEnabled = process.env.SITE_INDEXING_ENABLED === "true";
export function pageRobots(needsReview = false) {
  return { index: indexingEnabled && !needsReview, follow: indexingEnabled };
}
