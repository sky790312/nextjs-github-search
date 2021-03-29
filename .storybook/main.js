module.exports = {
  stories: ['../stories/*.stories.@(ts|tsx|js|jsx|mdx)'],
  // addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': '../components',
    }

    // Return the altered config
    return config
  },
}
