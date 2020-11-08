module.exports = {
  mount: {
    src: '/_dist_',
    public: '/'
  },
  plugins: ['@snowpack/plugin-vue', '@snowpack/plugin-typescript'],
  buildOptions: {
    out: 'dist',
    clean: true
  }
}
