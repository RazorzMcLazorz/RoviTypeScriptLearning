import * as React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { WithStyles, createStyles } from '@material-ui/core';

const styles = theme => createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

interface IProps extends WithStyles<typeof styles> {}

class TextFields extends React.Component<IProps> {
    constructor(props) {
        super(props);
    }
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {

    return (
      <form className={this.props.classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Name"
          className={this.props.classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="standard-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          className={this.props.classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          className={this.props.classes.textField}
          margin="normal"
        />
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          className={this.props.classes.textField}
          margin="normal"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          className={this.props.classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          className={this.props.classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          className={this.props.classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="standard-dense"
          label="Dense"
          className={classNames(this.props.classes.textField, this.props.classes.dense)}
          margin="dense"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          className={this.props.classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          className={this.props.classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          className={this.props.classes.textField}
          helperText="Some important text"
          margin="normal"
        />
        <TextField
          id="standard-with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          className={this.props.classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-textarea"
          label="With placeholder multiline"
          placeholder="Placeholder"
          multiline
          className={this.props.classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-number"
          label="Number"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={this.props.classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className={this.props.classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          className={this.props.classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: this.props.classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency-native"
          select
          label="Native select"
          className={this.props.classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: this.props.classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-bare"
          className={this.props.classes.textField}
          defaultValue="Bare"
          margin="normal"
        />
      </form>
    );
  }
}

export default withStyles(styles)(TextFields);