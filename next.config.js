const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true,
    },
  },
  env: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    GOOGLE_BOOKS_API_URL: process.env.GOOGLE_BOOKS_API_URL,
    DEFAULT_IMAGE_URL: process.env.DEFAULT_IMAGE_URL,
  },
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: "http://localhost:4000/graphql",
      },
    ];
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader",
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  images: {
    domains: [
      "www.google.com",
      "books.google.com",
      "picsum.photos",
      "play-lh.googleusercontent.com",
      "i0.wp.com",
      "images.ctfassets.net",
      "www.perfocal.com",
      "learn.zoner.com",
      "shotkit.com",
    ],
  },
};

module.exports = nextConfig;
