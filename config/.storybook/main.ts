import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';
import { RuleSetRule } from 'webpack';

const config: StorybookConfig = {
  stories: [
    '../../src/**/*.mdx',
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    'storybook-addon-sass-postcss',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  webpackFinal: async (config) => {
    config?.module?.rules?.forEach((rule: any) => {
      if (Array.isArray(rule.use)) {
        rule.use.forEach((use: any) => {
          if (
            use.loader !== undefined &&
            use.loader.includes('css-loader') &&
            typeof use.options.modules === 'object'
          ) {
            use.options = {
              ...use.options,
              modules: {
                ...use.options.modules,
                exportLocalsConvention: 'camelCase'
              }
            };
          }
        });
      }
    });

    config!.resolve!.extensions!.push('.ts', '.tsx');

    // alias
    config!.resolve!.alias = {
      ...config!.resolve!.alias,
      '@': path.resolve(__dirname, '../../src'),
      '@styles/globals': path.resolve(
        __dirname,
        '../../src/shared/styles/globals.scss'
      ),
      '@styles/custom': path.resolve(
        __dirname,
        '../../src/shared/styles/custom.scss'
      )
    };

    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });

    config!.module!.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  framework: {
    name: '@storybook/nextjs',
    options: {
      image: {
        loading: 'eager'
      },
      nextConfigPath: path.resolve(__dirname, '../next.config.js')
    }
  },
  staticDirs: ['../../public']
};

export default config;
