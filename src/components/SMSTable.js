import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { SMS_data } from './SMS_data';

export default function BasicTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
    return (
        <TableContainer component={Paper}>
            <Table height='150px' aria-label="eror smss">
                <TableHead >
                    <TableRow  >
                    <TableCell className='t-head'>Reciver</TableCell>
                    <TableCell className='t-head'>SMS Status</TableCell>
                    <TableCell className='t-head'>Reason</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {SMS_data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((val, key) => (
                        <TableRow
                            key={key}
                            
                        >
                            <TableCell className='rec'>{val.reciver}</TableCell>
                            <TableCell className='sta'><p className={val.sms_status === 'Pending' ? 'Pending' : val.sms_status === 'Error' ? 'Error' : 'Successful'}>{val.sms_status}</p></TableCell>
                            <TableCell >{val.reason}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="tr"
                    count={SMS_data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Table>
        </TableContainer>

    );
}
