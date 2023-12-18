import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_08cb3edf.mjs';

const _page0  = () => import('./chunks/generic_dfe48510.mjs');
const _page1  = () => import('./chunks/index_53354a7b.mjs');
const _page2  = () => import('./chunks/contact_ad6a25b0.mjs');
const _page3  = () => import('./chunks/_slug__b0797483.mjs');
const _page4  = () => import('./chunks/blog_d46d4f8b.mjs');
const _page5  = () => import('./chunks/test_31922f81.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/contact.astro", _page2],["src/pages/blog/[slug].astro", _page3],["src/pages/blog.astro", _page4],["src/pages/api/test.ts", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
