import React, { useState } from "react";
import { TableProps } from "../types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from "./styles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


function TableUsers (props: TableProps) {
  const {data} = props
  const [open, setOpen] = useState(false);
  const [menuItem, setMenuItem] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Hooks for sorting
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');

  const classes = useStyles()
  
 // Methods for searching: start
  const handleClick = (event: any) => {
    setOpen(!open);
    const eventValue = event.target.innerHTML 
    if((eventValue === 'USERNAME') || (eventValue === 'WEBSITE')) {
      setMenuItem(eventValue.toLowerCase())
    }
  };

  const valueChangeHandler = (event: any) => {
    setSearchValue(event.target.value)
  }

  const searchHandler = () => {
    let resultFilter = []
    if(!menuItem) { 
      return alert('Select menu item')
    }
    resultFilter = data.filter((item: any) => {
      return item[menuItem].toLowerCase().startsWith(searchValue.toLowerCase())
    })
    setFilteredData(resultFilter)
  } 
  // Methods for searching: end
  
  // Methods for sorting: start
  function handleRequestSort(property: string) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
    onSort(order, property)
  }

  function onSort (order: string, orderBy: string ) {
    let sortData = []

    function getSorting(order: any, orderBy: any) {

      return order === 'desc' ? (a: any, b: any) => desc(a, b, orderBy) : (a: any, b: any) => -desc(a, b, orderBy);
    }

    sortData = filteredData.sort(getSorting(order, orderBy))
    return setFilteredData(sortData)
  }

  function desc(a: any, b: any, orderBy: string) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  // Methods for sorting: end

  return (
    <Typography component="div">
      <Typography component="div" className={classes.divMenuIcon}>     
        <IconButton className={classes.iconButton} onClick={handleClick}>
        <MenuIcon />
        <div>
          {open ? (
            <Paper className={classes.paper}>
              <p className={classes.filterMenuItem} >USERNAME</p>
              <p className={classes.filterMenuItem} >WEBSITE</p>
            </Paper>
          ) : null}
        </div>
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder={menuItem ? menuItem : 'Select menu item'}
          inputProps={{ 'aria-label': 'search google maps' }}
          onChange={valueChangeHandler}
          value={searchValue}
        />
        <IconButton className={classes.iconButton} aria-label="search" onClick={searchHandler.bind(null, searchValue)}>
          <SearchIcon />
        </IconButton>
      </Typography>     
      <Typography component="div">
        <Box textAlign="center" fontSize="h6.fontSize" m={1}>
          User table:
        </Box>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCellHead} >NAME</TableCell>
              <TableCell className={classes.tableCellHead} align="center">
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={order === 'asc' ? 'asc' : 'desc'}
                  onClick={handleRequestSort.bind(null, 'username')}
                >
                  USERNAME
                </TableSortLabel>
              </TableCell>
              <TableCell className={classes.tableCellHead} align="center">EMAIL</TableCell>
              <TableCell className={classes.tableCellHead} align="center">
                <TableSortLabel
                  active={orderBy === 'website'}
                  direction={order === 'asc' ? 'asc' : 'desc'}
                  onClick={handleRequestSort.bind(null, 'website')}
                >
                WEBSITE
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {filteredData.map((item, i) => {
              return (<TableRow key={item.id} onClick={props.userModalInitiate.bind(null, item.id)}>
                        <TableCell className={classes.tableCell} component="th" scope="row">
                          {item.name}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="center">{item.username}</TableCell>
                        <TableCell className={classes.tableCell} align="center">{item.email}</TableCell>
                        <TableCell className={classes.tableCell} align="center">{item.website}</TableCell>
                    </TableRow>)
            })}
          </TableBody>
        </Table>
    </Typography>
  </Typography>
  );
}

export default TableUsers