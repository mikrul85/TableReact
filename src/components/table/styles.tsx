import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    root: {
      width: "100%",
      marginTop: theme.spacing(),
      position: 'absolute'
    },
    table: {
      minWidth: 650,
      width: "80%",
      margin: "auto"
    },
    tableCell: {
        border: "1px solid #B6BFB2",
        cursor: "pointer"
    },
    tableCellHead: {
      border: "1px solid #B6BFB2",
      backgroundColor: "#FDD9C5",
      fontWeight: "bold"
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    filterMenuItem: {
      height: theme.spacing(2),
      margin: theme.spacing(2),
      fontSize: '10pt',
      textAlign: 'left',
      '&:nth-child(2n)': {
        marginRight: theme.spacing(2),
      },
    },
    paper: {
      width: '150px',
      position: 'absolute',
      top: 36,
      right: 0,
      left: 0,
    },
    divMenuIcon: {
      marginTop: theme.spacing(2),
      position: 'relative',
    },
}));

export default useStyles