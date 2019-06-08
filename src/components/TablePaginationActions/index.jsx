import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
    const classes = useStyles1();
		const theme = useTheme();
		console.log(props);

		const {count, page, rowsPerPage, onChangePage} = props;
  
    const handleFirstPageButtonClick = event => {
      onChangePage(event, 0);
    }
  
    const handleBackButtonClick = event => {
      onChangePage(event, page - 1);
    }
  
    const handleNextButtonClick = event => {
      onChangePage(event, page + 1);
    }
  
    const handleLastPageButtonClick = event => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    }

		return (
			<div>
				<IconButton
					onClick={handleFirstPageButtonClick}
					disabled={page === 0}
					aria-label="First Page"
				>
					<FirstPageIcon />
				</IconButton>
				<IconButton 
					onClick={handleBackButtonClick} 
					disabled={page === 0} 
					aria-label="Previous Page"
				>
					<KeyboardArrowLeft />
				</IconButton>
				<IconButton
					onClick={handleNextButtonClick}
					disabled={page >= Math.ceil(count / rowsPerPage) - 1}
					aria-label="Next Page"
				>
					<KeyboardArrowRight />
				</IconButton>
				<IconButton
					onClick={handleLastPageButtonClick}
					disabled={page >= Math.ceil(count / rowsPerPage) - 1}
					aria-label="Last Page"
				>
					<LastPageIcon />
				</IconButton>
			</div>
		);
	}
	
	export default TablePaginationActions;