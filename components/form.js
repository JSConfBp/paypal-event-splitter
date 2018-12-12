import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center'
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  button: {
	  marginTop: theme.spacing.unit * 5,
  },
  input: {
	  display: 'none'
  }
});

class ComposedTextField extends React.Component {
	state = {
	  name: 'Composed TextField',
	};
  
	handleChange = event => {
	  const reader = new FileReader();
	  reader.readAsText(event.target.files[0]);
	  reader.onload = (event) => {
		this.props.onFile(event.target.result)
	  };
	};

	render() {
	  const { classes } = this.props;

	  return (
		<div className={classes.container}>
			<input
				accept="text/csv"
				className={classes.input}
				id="raised-button-file"
				multiple
				type="file"
				onChange={this.handleChange}
			/>
			<label htmlFor="raised-button-file">
				<Button
					variant={'contained'}
					color="primary"
					component="span"
					className={classes.button}>
					Upload CSV
				</Button>
			</label>
		</div>
		);
	}
  }

  export default withStyles(styles)(ComposedTextField);