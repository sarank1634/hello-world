/** @type {import('next').NextConfig} */
const nextConfig = {
  // In dev we disable Webpack's persistent filesystem cache because it
  // occasionally becomes corrupted (e.g. missing pack files) and causes
  // ENOENT errors like:
  //   Error: ENOENT: no such file or directory, rename '.../0.pack.gz_' -> '.../0.pack.gz'
  // Disabling the cache forces Webpack to rebuild modules in-memory every
  // time, which is more reliable while you are coding. You can re-enable it
  // in production by removing this block.
  webpack(config, { dev }) {
    if (dev) {
      // Disable both filesystem and memory caches for dev to avoid corruption
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;
