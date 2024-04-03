import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from './table-controls/Pagination';
import PageSize from './table-controls/PageSize';
import SortTable from './table-controls/SortTable';
import ErrorMessage from './error-message/ErrorMessage';
import LoadingCircle  from './loading-circle/LoadingCircle';

export default function DataTable() {

const URL = `https://api.stackexchange.com/2.3/tags`;

const [tags, setTags] = useState([]);  
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const [pageNumber, setPageNumber] = useState(1);
const [pageSize, setPageSize] = useState(5); 
const [sortedData, setSortedData] = useState('desc');

useEffect(() => {
  const fetchTags = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${URL}?page=${pageNumber}&pagesize=${pageSize}&order=${sortedData}&sort=popular&site=stackoverflow`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      setTags(data.items);
    } catch (error) {
      console.error('Error fetching tags:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  fetchTags();
}, [pageNumber, pageSize, sortedData]);

const handlePageChange = (pageNumber) => {
  setPageNumber(pageNumber); 
};

const handleItemsPerPageChange = (pageSize) =>  {
  setPageSize(pageSize);
};

const handleSortingData = (sortedData)  => {
  setSortedData(sortedData)
};

  return (
    <>
    <div className='tableControlers' style={{display: 'flex', justifyContent: 'space-around'}}>
      <PageSize onSizeChange={handleItemsPerPageChange} />
      <SortTable onSortChange={handleSortingData}/>
    </div>
    {isLoading && <LoadingCircle/>}
    {error && <ErrorMessage err = {error}/>}
    <TableContainer component={Paper} sx={{ maxWidth: 650 }}>
      <Table aria-label="tags table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Tag name</TableCell>
            <TableCell align="center">Number of related posts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tags.map((tag) => (
            <TableRow
              key={tag.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {tag.name}
              </TableCell>
              <TableCell align="center">{tag.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Pagination onPageChange={handlePageChange}/>
    </>
  );
}