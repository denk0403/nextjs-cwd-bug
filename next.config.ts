import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from "next";
import path from "path";
import Webpack from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  experimental: {
    serverMinification: false,
    serverSourceMaps: true,
    fallbackNodePolyfills: false,
    webpackBuildWorker: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, params) => {
    const webpack = params.webpack as typeof Webpack;

    const resourcePath = path.resolve(__dirname, 'fake-module-resource.js');
    const loaderPath = path.resolve(__dirname, 'fake-module-loader.js');

    // Add loader rule for the fake module resource
    config.module.rules.push({
      test: /fake-module-resource\.js$/,
      loader: loaderPath,
    });

    // Redirect fake-module-{number} imports to the resource with number as query
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /^fake-module-\d+$/,
        (resource: { request: string }) => {
          const match = resource.request.match(/^fake-module-(\d+)$/);
          if (match) {
            resource.request = `${resourcePath}?${match[1]}`;
          }
        }
      )
    );

    return config;
  },
};


export default withBundleAnalyzer({ enabled: true })(nextConfig);
