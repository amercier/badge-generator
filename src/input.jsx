// @flow

import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { services, styles as badgeStyles } from './config';
import { type InputEvent, nameToKey, styleName } from './util';

type InputProps = {|
  repository: string,
  serviceSelection: boolean[],
  style: string,
  handleRepositoryChange: (event: InputEvent) => void,
  handleServiceToggle: (index: number) => (event: InputEvent) => void,
  handleStyleChange: (event: InputEvent, style: string) => void,
  classes: {
    gridItem: string,
  },
|};

const styles = ({ spacing }) => ({
  gridItem: {
    marginTop: 2 * spacing.unit,
    marginBottom: 2 * spacing.unit,
  },
});

export const Input = ({
  repository,
  serviceSelection,
  style,
  handleRepositoryChange,
  handleServiceToggle,
  handleStyleChange,
  classes,
}: InputProps) => (
  <form noValidate autoComplete="off">
    <Grid container>
      <Grid item xs={12} className={classes.gridItem}>
        <TextField
          label="Repository"
          helperText='Ex: "lodash" (npm name), "facebook/react" (Github slug), etc.'
          margin="normal"
          fullWidth
          value={repository}
          onChange={handleRepositoryChange}
        />
      </Grid>
      <Grid item xs={12} sm={10} className={classes.gridItem}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Services</FormLabel>
          <Grid container>
            {services.map(({ name }, index) => (
              <Grid
                key={`service-${nameToKey(name)}`}
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
                      checked={serviceSelection[index]}
                      onChange={handleServiceToggle(index)}
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
            onChange={handleStyleChange}
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
  </form>
);

export default withStyles(styles)(Input);
