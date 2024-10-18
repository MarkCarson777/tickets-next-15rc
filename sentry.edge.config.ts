import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://fca5f88dd7c10cb9f55869a187eec9ff@o4508133934104576.ingest.us.sentry.io/4508133968183296",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
