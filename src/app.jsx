// @flow

import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { type Service, services, styles as badgeStyles } from './config';
import { type InputEvent } from './util';
import InputWithStyle from './input';
import OutputWithStyle from './output';

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

export class App extends Component<AppProps, AppState> {
  state = {
    repository: '',
    style: badgeStyles[0],
    serviceSelection: services.map(badgeService => !!badgeService.enabled),
  };

  get enabledServices(): Service[] {
    const { serviceSelection } = this.state;
    return services.filter((service, index) => serviceSelection[index]);
  }

  handleRepositoryChange = (event: InputEvent) => {
    this.setState({ repository: event.target.value });
  };

  handleServiceToggle = (index: number) => (event: InputEvent) => {
    const { serviceSelection } = this.state;
    const updatedSelection = [...serviceSelection];
    updatedSelection[index] = event.target.checked;
    this.setState({ serviceSelection: updatedSelection });
  };

  handleStyleChange = (event: InputEvent, style: string) => {
    this.setState({ style });
  };

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
