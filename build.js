const esbuild = require('esbuild')
const manifestPlugin = require('esbuild-plugin-manifest')

const watchConfig = {
    onRebuild(error, result) {
        if (error) console.error('watch build failed:', error)
        else console.log('watch build succeeded:')
    },
}

esbuild.build({
    entryPoints: ['app.js'],
    bundle: true,
    minify: true,
    sourcemap: process.env.NODE_ENV === 'development',
    watch: process.env.NODE_ENV === 'development' ? watchConfig : false,
    outdir: './dist',
    plugins: [manifestPlugin()]
})