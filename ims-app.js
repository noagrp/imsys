const coreUrl = 'https://cdn.jsdelivr.net/gh/noagrp/ims@52f1f153acc56c00a9ad026434ac51039e579af0/ims-app.js';
const localFirebaseConfigUrl = new URL('./firebase-config.js', import.meta.url).href;

const response = await fetch(coreUrl, { cache: 'no-store' });
if (!response.ok) {
  throw new Error(`Unable to load IMS core (${response.status})`);
}

let source = await response.text();
source = source.replace(
  "from './firebase-config.js'",
  `from '${localFirebaseConfigUrl}'`
);

const blobUrl = URL.createObjectURL(new Blob([source], { type: 'text/javascript' }));
try {
  await import(blobUrl);
} finally {
  URL.revokeObjectURL(blobUrl);
}
