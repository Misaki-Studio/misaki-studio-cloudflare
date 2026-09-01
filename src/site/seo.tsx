import Head from "next/head";
import { useRouter } from "next/router";
import manifest from "../seo/pages.json";

/**
 * The <head> for a published site.
 *
 * Every site published from Misaki Studio is built from this template, so what
 * happens here happens to all of them. It used to be a single hardcoded
 * `<title>Design. Animate. to Code.</title>` in `_document`, which meant a
 * customer's published site carried Misaki Studio's tagline as its title on
 * every page — in search results, and in every link anyone shared.
 *
 * WHERE THE VALUES COME FROM
 * --------------------------
 * `src/seo/pages.json`, written by the exporter, carries what each page's author
 * typed into the SEO block of its DESIGN panel (and, for a documentation page,
 * into its row in the docs tree). This module reads that rather than inventing
 * anything: guessing a title from the route was a stopgap, and it is now only
 * the fallback for a page nobody has described.
 *
 * The manifest is imported, not fetched, so the values are in the prerendered
 * HTML — which is the whole point. A crawler that never runs JavaScript still
 * sees them.
 *
 * SITE_NAME and SITE_URL come from `.env` at build time (the publish pipeline
 * writes them; see PublishAction.updateWebsiteENV). Routes in the manifest are
 * RELATIVE and the origin is applied here, so one export can be published to a
 * preview host and to a custom domain without being rebuilt.
 */
const SITE_NAME = (process.env.SITE_NAME as string) || "";
const SITE_URL = ((process.env.SITE_URL as string) || "").replace(/\/$/, "");

type PageMeta = {
  route: string;
  title?: string;
  description?: string;
  llms?: string;
  priority?: number;
  index?: boolean;
};

const PAGES: PageMeta[] = Array.isArray((manifest as any)?.pages)
  ? ((manifest as any).pages as PageMeta[])
  : [];

/** Manifest routes carry no trailing slash; `asPath` does, plus query/hash. */
const normalize = (path: string) => {
  const clean = (path || "/").split(/[?#]/)[0].replace(/\/+$/, "");
  return clean === "" ? "/" : clean;
};

/** "/about-us" -> "About Us". Only used for a page nobody has titled. */
const titleFromRoute = (route: string) => {
  const last = route.split("/").filter(Boolean).pop();
  if (!last) return SITE_NAME;
  return last
    .replace(/[-_]+/g, " ")
    .trim()
    .replace(/\b\w/g, (character) => character.toUpperCase());
};

export const SiteHead = () => {
  const router = useRouter();
  const route = normalize(router.asPath);
  const meta = PAGES.find((page) => normalize(page.route) === route);

  // An AUTHORED title is used verbatim: someone who typed one has decided what
  // the page is called, and appending the site name to it both second-guesses
  // that and leaves no way to opt out — "Acme — build faster — Acme Docs".
  // Only the derived fallback gets the suffix, where it is what makes a bare
  // route segment identifiable in a list of search results.
  const title =
    meta?.title ||
    [route === "/" ? "" : titleFromRoute(route), SITE_NAME]
      .filter(Boolean)
      .join(" — ") ||
    SITE_NAME;
  const description = meta?.description;
  const canonical = SITE_URL
    ? `${SITE_URL}${route === "/" ? "/" : `${route}/`}`
    : undefined;
  // Absent means indexable: a page nobody has touched must not drop out of
  // search. Only an explicit `false` excludes it.
  const noindex = meta?.index === false;

  if (!title && !description && !canonical) return null;

  return (
    <Head>
      {!!title && <title>{title}</title>}
      {!!description && <meta name="description" content={description} />}
      {/*
        noindex rather than a robots.txt Disallow, deliberately: a disallowed
        page is never fetched, so the crawler never reads the rule telling it to
        stay out, and an external link can still get the bare URL indexed.
      */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />
      )}
      {!!canonical && <link rel="canonical" href={canonical} />}

      {!!SITE_NAME && <meta property="og:site_name" content={SITE_NAME} />}
      {!!title && <meta property="og:title" content={title} />}
      {!!description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={route === "/" ? "website" : "article"} />
      {!!canonical && <meta property="og:url" content={canonical} />}

      <meta name="twitter:card" content="summary" />
      {!!title && <meta name="twitter:title" content={title} />}
      {!!description && (
        <meta name="twitter:description" content={description} />
      )}
    </Head>
  );
};
