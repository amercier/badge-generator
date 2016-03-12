'use strict';

export default [
  {
    name: 'URL',
    template: (title, url) => `${url}`
  },
  {
    name: 'Image URL',
    template: (title, url, img) => `${img}`
  },
  {
    name: 'Markdown',
    template: (title, url, img) => `[![${title}](${img})](${url})`,
    default: true
  },
  {
    name: 'Org Mode',
    template: (title, url, img) => `[[${url}][file:${img}]]`
  },
  {
    name: 'Textile',
    template: (title, url, img) => `!${img}!:${url}`
  },
  {
    name: 'Rdoc',
    template: (title, url, img) => `{<img src="${img}" alt="${title}" />}[${url}]`
  },
  {
    name: 'AsciiDoc',
    template: (title, url, img) => `image:${img}["Build Status", link="${url}"]`
  },
  {
    name: 'RST',
    template: (title, url, img) => `.. image:: ${img}\n  :target: ${url}`
  },
  {
    name: 'Pod',
    template: (title, url, img) => `=for HTML <a href="${url}"><img src="${img}"></a>`
  }
];
