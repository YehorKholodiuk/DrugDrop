import React, {useState} from 'react';
import {
    Button,
    Checkbox,
    FormControlLabel,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import DragDropRow from "./DragDropRow";

const DragDropTable = () => {
    const initialColumns = ['Name', 'Data']
    const initialTableData = [
        {Name: 'Julia', Data: 'Data 1', editable: false},
        {Name: 'Mark', Data: 'Data 2', editable: false},
        {Name: 'Andrew', Data: 'Data 3', editable: false},
    ]


    const [columns, setColumns] = useState(initialColumns)
    const [newColumn, setBewColumn] = useState('')
    const [showColumnInputs, setShowColumnInputs] = useState(false)
    const [tableData, setTableData] = useState(initialTableData)
    const [newRow, setNewRow] = useState({})
    const [showRowInputs, setShowRowInputs] = useState(false)
    return (
        <>
        <div>
            <Button> Add Column</Button>

            {showColumnInputs && (
                <div>
                    <TextField
                        value={newColumn}
                        //todo onChange write a function
                        label='new column'
                    />
                    <Button
                        // onClick = {}
                    >Add</Button>

                    <div>
                        {columns.map((col, idx) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={columns.includes(col)}
                                        //todo onChange - function will transfer from true to false and backwards
                                        name={col}
                                    />
                                }
                                label={col}
                            />
                        ))}
                    </div>

                </div>


            )}

            <Button>Add row</Button>

            {showRowInputs && (
                <div>


                    {columns.map((col, idx) => (
                        <TextField
                            key={idx}
                            label={col}
                            name={col}
                            value={newRow[col] || ''}
                            //onChange
                        />
                    ))}
                    <Button>Add</Button>
                </div>
            )}

        </div>

            <TableContainer>
                <Table>
                    <TableHead>
          <TableRow>
              {columns.map((col, idx) => (
                  <TableCell key = {idx}>{col}</TableCell>
              ))}
          </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tableData.map((row, index) => (
                                <DragDropRow/>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            </>
    );
};

    export default DragDropTable


