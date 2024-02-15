const webpack = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^next\/(navigation|headers|compat\/router)$/,
        }),
      );
      return config;
    },
    images: {
        domains: ['fakestoreapi.com'],
    }
};

export default nextConfig;
