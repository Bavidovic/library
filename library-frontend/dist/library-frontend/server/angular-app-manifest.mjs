
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/books"
  },
  {
    "renderMode": 2,
    "route": "/add-book"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 703, hash: 'af6b1437dbbb3cfe7df96422b5ef4ba52d71f6795d1ab92c7c4b6f3258ba152f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '06769de574e92cef0c068fc94525108297f264b674c17cc586b2c51e68c4e91b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3171, hash: '19ff704c2f407e2d3b636d4c0dfd71fa3439035396d1ea67c54be1a91fed01b0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'add-book/index.html': {size: 3018, hash: '7ef308b23aa1103d66af4cd91e3c11795058a634ac6970c5d262a083eddc0bdf', text: () => import('./assets-chunks/add-book_index_html.mjs').then(m => m.default)},
    'books/index.html': {size: 2020, hash: 'ae0f19d0f05872fc18d2cb162f10474918f1ac300cf75162462619d5ac4f7249', text: () => import('./assets-chunks/books_index_html.mjs').then(m => m.default)},
    'styles-C5FUK4UO.css': {size: 574, hash: 'e4/Vef6SxTE', text: () => import('./assets-chunks/styles-C5FUK4UO_css.mjs').then(m => m.default)}
  },
};
