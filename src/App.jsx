// @flow

import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { type Service, services, styles as badgeStyles } from './config';
import { type InputEvent } from './util';
import InputWithStyle from './Input';
import OutputWithStyle from './Output';

type AppProps = {|
  classes: {
    container: string,
    paper: string,
  },
|};

type AppState = {|
  repository: string,
  style: string,
  serviceSelection: boolean[],
|};

/**
 * App styles.
 *
 * @param {Object} theme - Material UI Theme object.
 * @returns {Object} Styles object.
 */
const styles = ({ spacing, typography }) => ({
  container: {
    width: '100%',
    maxWidth: 80 * typography.fontSize,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 4 * spacing.unit,
    marginBottom: 4 * spacing.unit,
    paddingRight: 2 * spacing.unit,
    paddingLeft: 2 * spacing.unit,
  },
  paper: {
    marginTop: 4 * spacing.unit,
    paddingTop: '1px', // prevents magin collapse
    paddingBottom: 4 * spacing.unit,
    paddingRight: 4 * spacing.unit,
    paddingLeft: 4 * spacing.unit,
  },
});

/**
 * Main application component.
 */
export class App extends Component<AppProps, AppState> {
  /**
   * Component state.
   *
   * @type {Object}
   */
  state = {
    repository: '',
    style: badgeStyles[0],
    serviceSelection: services.map(badgeService => !!badgeService.enabled),
  };

  /**
   * @returns {Service[]} All checked services.
   */
  get enabledServices(): Service[] {
    const { serviceSelection } = this.state;
    return services.filter((service, index) => serviceSelection[index]);
  }

  /**
   * Function called whenever the repository has changed.
   *
   * @param {InputEvent} event - The <input> event.
   * @returns {undefined} Nothing.
   */
  handleRepositoryChange = (event: InputEvent) => {
    this.setState({ repository: event.target.value });
  };

  /**
   * Get a function that will be called whenever the a service is checked.
   *
   * @param {number} index - The service index.
   * @returns {Function} The function called whenever the service has changed.
   */
  handleServiceToggle = (index: number) => (event: InputEvent) => {
    const { serviceSelection } = this.state;
    const updatedSelection = [...serviceSelection];
    updatedSelection[index] = event.target.checked;
    this.setState({ serviceSelection: updatedSelection });
  };

  /**
   * Function called whenever the style has changed.
   *
   * @param {InputEvent} event - The <input> event.
   * @param {string} style - The new style.
   * @returns {undefined} Nothing.
   */
  handleStyleChange = (event: InputEvent, style: string) => {
    this.setState({ style });
  };

  /**
   * Render the component.
   *
   * @returns {React.Element} The rendered element.
   */
  render() {
    const { classes } = this.props;
    const { repository, serviceSelection, style } = this.state;
    const { enabledServices } = this;
    return (
      <main className={classes.container}>
        <CssBaseline />
        <Typography variant="h4" headlineMapping={{ h4: 'h1' }}>
          Github Badge Generator
        </Typography>
        <Paper className={classes.paper}>
          <InputWithStyle
            repository={repository}
            serviceSelection={serviceSelection}
            badgeStyle={style}
            handleRepositoryChange={this.handleRepositoryChange}
            handleServiceToggle={this.handleServiceToggle}
            handleStyleChange={this.handleStyleChange}
          />
        </Paper>
        {repository && enabledServices.length > 0 && (
          <Paper className={classes.paper}>
            <OutputWithStyle
              services={enabledServices}
              repository={repository}
              badgeStyle={style}
            />
          </Paper>
        )}
      </main>
    );
  }
}

export default withStyles(styles)(App);
