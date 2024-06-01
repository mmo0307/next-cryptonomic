// import BuilderDevTools from '@builder.io/dev-tools/next';

// DEVTOOLS BUILDER enabled wrap nextConfig
// const nextConfig = BuilderDevTools()({...})

import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true
  },

  reactStrictMode: true,

  // sassOptions: {
  //     includePaths: [path.join(__dirname, './src/shared/styles/custom.scss')]
  // },

  webpack: (config) => {
    const rules = config.module.rules
        .find((rule) => typeof rule.oneOf === 'object')
        .oneOf.filter((rule) => Array.isArray(rule.use));

    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (
            moduleLoader.loader !== undefined &&
            moduleLoader.loader.includes('css-loader') &&
            typeof moduleLoader.options.modules === 'object'
        ) {
          moduleLoader.options = {
            ...moduleLoader.options,
            modules: {
              ...moduleLoader.options.modules,
              // This is where we allow camelCase class names
              exportLocalsConvention: 'camelCase',
            },
          };
        }
      });
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@/*': './src/*',
      '@styles/globals': './src/shared/styles/globals.scss',
      '@styles/customs': './src/shared/styles/customs.scss'
    }

    // config.resolve.alias['@'] = path.join(__dirname, 'src');
    // config.resolve.alias['@styles'] = path.join(__dirname, 'src/shared/styles/globals.scss');

    return config;
  },
};

export default nextConfig;

