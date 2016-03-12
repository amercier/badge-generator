export default class BadgeService {
  constructor(config, data) {
    this.name = config.name;
    this.url = config.url;
    this.imageUrl = config.imageUrl;
    this.title = config.title;
    this.data = data;
  }

  static parseTemplate(template, { repository, branch }) {
    return template
      .replace('{repository}', repository)
      .replace('{branch}', branch);
  }

  static parseUrl(url, data, noCache) {
    var parsed = BadgeService.parseTemplate(url, data);
    if (noCache) {
      parsed += (url.indexOf('?') === -1 ? '?' : '&') + Math.floor(new Date().getTime() / 1000);
    }
    return parsed;
  }

  getUrl(noCache) {
    return BadgeService.parseUrl(this.url, this.data, noCache);
  }

  getImageUrl(style, noCache) {
    return BadgeService.parseUrl(this.imageUrl + (style === 'default' ? '' : '?style=' + style), this.data, noCache);
  }
}
