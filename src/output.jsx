// @flow

import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { type Service, type Format, formats } from './config';
import { type InputEvent } from './util';

type OutputProps = {|
  services: Service[],
  repository: string,
  badgeStyle: string,
  classes: {
    subtitle: string,
    badges: string,
    badge: string,
    formats: string,
    radioGroup: string,
    code: string,
  },
|};

type OutputState = {|
  formatIndex: number,
|};

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
  formats: {
    marginTop: spacing.unit,
  },
  radioGroup: {
    flexDirection: 'row',
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

function nameToKey(name: string) {
  return name.replace(/ /g, '-').toLowerCase();
}

export class Output extends Component<OutputProps, OutputState> {
  state = {
    formatIndex: formats.findIndex(f => f.default) || 0,
  };

  get format(): Format {
    const { formatIndex } = this.state;
    return formats[formatIndex];
  }

  get formattedServices(): Service[] {
    const { services, repository, badgeStyle } = this.props;
    const branch = 'master';
    return services.map(({ url, imageUrl, ...props }) => ({
      url: formatUrl(url, repository, branch),
      imageUrl: `${formatUrl(
        imageUrl,
        repository,
        branch,
      )}?style=${badgeStyle}`,
      ...props,
    }));
  }

  handleFormatChange = (event: InputEvent, value: string) => {
    this.setState({ formatIndex: +value });
  };

  render() {
    const { classes } = this.props;
    const { formatIndex } = this.state;
    return (
      <>
        <Typography
          variant="h6"
          className={classes.subtitle}
          headlineMapping={{ h6: 'h2' }}
        >
          Preview
        </Typography>
        <p className={classes.badges}>
          {this.formattedServices.map(({ name, title, url, imageUrl }) => (
            <a
              key={`image-${nameToKey(name)}`}
              href={url}
              className={classes.badge}
              title={title}
            >
              <img src={imageUrl} alt={title} />
            </a>
          ))}
        </p>
        <Typography
          variant="h6"
          className={classes.subtitle}
          headlineMapping={{ h6: 'h2' }}
        >
          Source code
        </Typography>
        <form noValidate autoComplete="off" className={classes.formats}>
          <RadioGroup
            aria-label="Format"
            value={`${formatIndex}`}
            onChange={this.handleFormatChange}
            className={classes.radioGroup}
          >
            {formats.map(({ name }, index) => (
              <FormControlLabel
                key={`format-${nameToKey(name)}`}
                value={`${index}`}
                control={<Radio />}
                label={name}
              />
            ))}
          </RadioGroup>
        </form>
        <pre className={classes.code}>
          {this.formattedServices.map(
            ({ title, url, imageUrl }) =>
              `${this.format.template(title, url, imageUrl)}\n`,
          )}
        </pre>
      </>
    );
  }
}

export default withStyles(styles)(Output);
