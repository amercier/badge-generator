'use strict';

export default [
  {
    name: 'Markdown',
    template: (title, url, img) => `[![${title}](${img})](${url})`
  },
  {
    name: 'Org Mode',
    template: (title, url, img) => `[[${url}][file:${img}]]`
  }
];
