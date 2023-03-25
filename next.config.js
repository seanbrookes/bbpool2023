module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Fixes npm packages that depend on `fs` module

    config.node = {
      ...(config.node || {}),
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
    };
    if (!isServer) {
      config.node = {
        ...(config.node || {}),
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
      }
    }
    // Important: return the modified config
    return config
  },
}