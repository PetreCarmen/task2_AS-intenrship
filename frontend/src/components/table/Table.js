import React from "react";
import Table from 'react-bootstrap/Table';

class Task2Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    renderRow(rowData) {
        return <tr key={this.props.tableHeadDefinitions.extractRowKey(rowData)}>{this.props.tableHeadDefinitions.columnDefinitions
            .map((columnDef, i) => <td key={i}>{columnDef.renderCell(rowData)}</td>)}</tr>;
    }

    render() {
        const {tableHeadDefinitions, tableData} = this.props;

        return (
            <Table striped bordered hover>
                <thead>
                {this.props.tableHeadComponent && <tr>
                    <th colSpan={tableHeadDefinitions.columnDefinitions.length}>{this.props.tableHeadComponent}</th>
                </tr>}
                <tr>
                    {tableHeadDefinitions.columnDefinitions.map(def => <th key={def.columnName.toString()}>{def.columnName}</th>)}
                </tr>
                </thead>

                <tbody>
                {tableData.map(rowData => this.renderRow(rowData))}
                </tbody>
            </Table>
        )
    }
}

export default Task2Table;
