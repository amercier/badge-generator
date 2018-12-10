// @flow

import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import {
  type Service,
  services as badgeServices,
  styles as badgeStyles,
} from './config';
import Output from './Output';

type AppProps = {|
  classes: {
    container: string,
    paper: string,
    gridItem: string,
    subtitle: string,
    badges: string,
    badge: string,
    code: string,
  },
|};

type AppState = {|
  repository: string,
  style: string,
  services: any[],
|};

type InputEvent = SyntheticInputEvent<HTMLInputElement>;

function styleName(style: string) {
  const name = style.replace(/-/g, ' ');
  return name.charAt(0).toUpperCase() + name.slice(1);
}

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
  gridItem: {
    marginTop: 2 * spacing.unit,
    marginBottom: 2 * spacing.unit,
  },
});

class App extends Component<AppProps, AppState> {
  state = {
    repository: '',
    style: badgeStyles[0],
    services: badgeServices.map(badgeService => !!badgeService.enabled),
  };

  get enabledServices(): Service[] {
    const { services } = this.state;
    return badgeServices.filter((service, index) => services[index]);
  }

  handleRepositoryChange = (event: InputEvent) => {
    this.setState({ repository: event.target.value });
  };

  handleServiceToggle = (index: number) => (event: InputEvent) => {
    const { services } = this.state;
    const updatedServices = [...services];
    updatedServices[index] = event.target.checked;
    this.setState({ services: updatedServices });
  };

  handleStyleChange = (event: InputEvent, style: string) => {
    this.setState({ style });
  };

  render() {
    const { classes } = this.props;
    const { repository, services, style } = this.state;
    const { enabledServices } = this;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <CssBaseline />
        <Typography variant="h4" headlineMapping={{ h4: 'h1' }}>
          Github Badge Generator
        </Typography>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs={12} className={classes.gridItem}>
              <TextField
                label="Repository"
                helperText='Ex: "lodash" (npm name), "facebook/react" (Github slug), etc.'
                margin="normal"
                fullWidth
                value={repository}
                onChange={this.handleRepositoryChange}
              />
            </Grid>
            <Grid item xs={12} sm={10} className={classes.gridItem}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Services</FormLabel>
                <Grid container>
                  {badgeServices.map(({ name }, index) => (
                    <Grid
                      key={`service-${name.replace(/ /g, '-').toLowerCase()}`}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                    >
                      <FormControlLabel
                        label={name}
                        title={name}
                        control={
                          <Checkbox
                            checked={services[index]}
                            onChange={this.handleServiceToggle(index)}
                            value={`${index}`}
                          />
                        }
                      />
                    </Grid>
                  ))}
                </Grid>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2} className={classes.gridItem}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Style</FormLabel>
                <RadioGroup
                  aria-label="Style"
                  name="style"
                  value={style}
                  onChange={this.handleStyleChange}
                >
                  {badgeStyles.map(badgeStyle => (
                    <FormControlLabel
                      key={`style-${badgeStyle}`}
                      value={badgeStyle}
                      control={<Radio />}
                      label={styleName(badgeStyle)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
        {repository && enabledServices.length > 0 && (
          <Paper className={classes.paper}>
            <Output
              services={enabledServices}
              repository={repository}
              style={style}
            />
          </Paper>
        )}
      </form>
    );
  }
}

export default withStyles(styles)(App);
