import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';



import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

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
	},
	download_button: {
		transform: 'translate(100%, -50%)'
	}
});

class Download extends React.Component {
	state = {
	  name: 'Composed TextField',
	};

	onClick = file => {
		const fileName = file.file
		const blob = new Blob([file.csv], { type: 'text/csv;charset=utf-8;' });

		if (navigator.msSaveBlob) { // IE 10+
			navigator.msSaveBlob(blob, fileName);
		} else {
			var link = document.createElement("a");
			if (link.download !== undefined) { // feature detection
				// Browsers that support HTML5 download attribute
				var url = URL.createObjectURL(blob);
				link.setAttribute("href", url);
				link.setAttribute("download", fileName);
				link.style.visibility = 'hidden';
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}

	};

	render() {
	  const { result, classes } = this.props;

	  return (
			<div>
				<div className={classes.container}>
					<List dense={ true }>
						{result.map((file) => (
							<ListItem key={ file.file }>
								<ListItemIcon>
									<FolderIcon />
								</ListItemIcon>
								<ListItemText
									primary={file.event.replace(' Ticket Purchase', '')}
									secondary={file.file}
								/>
								<ListItemSecondaryAction className={ classes.download_button }>
										<IconButton aria-label="Download" onClick={e => this.onClick(file)}>
											<CloudDownloadIcon />
										</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
						))}
						</List>
				</div>
				<div className={classes.container}>
						<Button variant={'contained'} onClick={this.props.onNext} className={classes.button}>
							Process another one
						</Button>
				</div>
			</div>
		);
	}
  }

  export default withStyles(styles)(Download);