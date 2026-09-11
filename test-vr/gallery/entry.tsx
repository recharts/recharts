import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { initializeMountGallery } from './main';

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('The gallery page must contain an element with id "root".');
}

if (document.body.dataset.galleryMode === 'preview') {
  import('./preview').then(({ PreviewApp }) => {
    createRoot(rootElement).render(<PreviewApp />);
  });
} else {
  initializeMountGallery(rootElement);
}
