import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Steps from '../components/steps'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: theme.mixins.gutters({
		width: '80vw',
		paddingTop: 16,
		paddingBottom: 16,
		margin: '0 auto',
		marginTop: theme.spacing.unit * 5,
		marginBottom: theme.spacing.unit * 5,
	}),
	title: {
		marginBottom: theme.spacing.unit * 3,
	}
});

const Index = class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
	const { classes } = this.props;

    return (
			<MuiThemeProvider theme={theme}>
		<div className={classes.root}>
			<div className={classes.paper}>
				<Typography className={classes.title} variant="headline" component="h3">
					PayPal CSV Export split by Events
				</Typography>
				<Typography component="p">
					This script will separate Event income within a PayPal export CSV
				</Typography>

				<Steps />
			</div>
		</div>
		</MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(Index)