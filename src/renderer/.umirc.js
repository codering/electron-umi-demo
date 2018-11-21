
export default {
  history: 'hash',
  publicPath: './',
  outputPath: '../../app/renderer',
  plugins: [
    ['umi-plugin-react',
      {
        dva: true,
        antd: true,
      }
    ]
  ],
}