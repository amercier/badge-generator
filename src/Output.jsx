// @flow

import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { type Service, type Format, formats } from './config';

type OutputProps = {|
  services: Service[],
  repository: string,
  style: string,
  classes: {
    subtitle: string,
    badges: string,
    badge: string,
    code: string,
  },
|};

const format: Format = formats.find(f => f.default) || formats[0];

const styles = ({ spacing, typography }) => ({
  subtitle: {
    marginTop: 2 * spacing.unit,
  },
  badges: {
    lineHeight: '20px',
  },
  badge: {
    marginRight: spacing.unit / 2,
  },
  code: {
    fontFamily: 'Roboto Mono, monospace',
    fontSize: typography.fontSize - 3,
    lineHeight: 1.8,
    overflowX: 'auto',
    paddingBottom: spacing.unit,
  },
});

function formatUrl(url: string, repository: string, branch: string) {
  return url.replace('{repository}', repository).replace('{branch}', branch);
}

const Output = ({ services, repository, style, classes }: OutputProps) => {
  const branch = 'master';
  const formattedServices = services.map(({ url, imageUrl, ...props }) => ({
    url: formatUrl(url, repository, branch),
    imageUrl: `${formatUrl(imageUrl, repository, branch)}?style=${style}`,
    ...props,
  }));

  return [
    <Typography
      key="output-1"
      variant="h6"
      className={classes.subtitle}
      headlineMapping={{ h6: 'h2' }}
    >
      Preview
    </Typography>,
    <p key="output-2" className={classes.badges}>
      {formattedServices.map(({ title, url, imageUrl }) => (
        <a
          key={`image-${title.replace(/ /g, '-').toLowerCase()}`}
          href={url}
          className={classes.badge}
          title={title}
        >
          <img src={imageUrl} alt={title} />
        </a>
      ))}
    </p>,
    <Typography
      key="output-3"
      variant="h6"
      className={classes.subtitle}
      headlineMapping={{ h6: 'h2' }}
    >
      Source code
    </Typography>,
    <pre key="output-4" className={classes.code}>
      {formattedServices.map(
        ({ title, url, imageUrl }) =>
          `${format.template(
            title,
            url
              .replace('{repository}', repository)
              .replace('{branch}', 'master'),
            imageUrl
              .replace('{repository}', repository)
              .replace('{branch}', 'master'),
          )}\n`,
      )}
    </pre>,
  ];
};

export default withStyles(styles)(Output);
