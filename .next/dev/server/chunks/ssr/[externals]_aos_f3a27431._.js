module.exports = [
"[externals]/aos [external] (aos, cjs, [project]/node_modules/aos, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[externals]_aos_f8735213._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/aos [external] (aos, cjs, [project]/node_modules/aos)");
    });
});
}),
];