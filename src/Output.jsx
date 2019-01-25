// @flow

import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { type Service, type Format, formats } from './config';
import { type InputEvent, nameToKey } from './util';

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

/**
 * Output styles.
 *
 * @param {Object} theme - Material UI Theme object.
 * @returns {Object} Styles object.
 */
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

/**
 * Format an URL.
 *
 * @param {string} urlTemplate - The URL template.
 * @param {string} repository - The repository.
 * @param {string} branch - The branch.
 * @returns {string} The URL template with `{repository}` and `{branch}` replaced by their value.
 */
function formatUrl(urlTemplate: string, repository: string, branch: string) {
  return urlTemplate
    .replace('{repository}', repository)
    .replace('{branch}', branch);
}

/**
 * Output containing the preview badges, source code, and a format switch.
 */
export class Output extends Component<OutputProps, OutputState> {
  /**
   * Component state.
   *
   * @type {Object}
   */
  state = {
    formatIndex: formats.findIndex(f => f.default) || 0,
  };

  /**
   * @returns {Format} The currently selected format.
   */
  get format(): Format {
    const { formatIndex } = this.state;
    return formats[formatIndex];
  }

  /**
   * @returns {Service[]} The currently selected services.
   */
  get formattedServices(): Service[] {
    const { services, repository, badgeStyle } = this.props;
    const branch = 'master';
    const style = badgeStyle === 'default' ? '' : `?style=${badgeStyle}`;
    return services.map(({ url, imageUrl, ...props }) => ({
      url: formatUrl(url, repository, branch),
      imageUrl: `${formatUrl(imageUrl, repository, branch)}${style}`,
      ...props,
    }));
  }

  /**
   * Function called whenever the format changes.
   *
   * @param {InputEvent} event - The <input> event.
   * @param {string} value - The new format index.
   * @returns {undefined} Nothing.
   */
  handleFormatChange = (event: InputEvent, value: string) => {
    this.setState({ formatIndex: +value });
  };

  /**
   * Render the component.
   *
   * @returns {React.Element} The rendered element.
   */
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
                title={name}
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
