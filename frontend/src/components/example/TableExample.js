import Task2Table from "../table/Table";

const doAlert = (rowData) => {
    alert(`button alert for row with id: ${rowData["rowNo"]} was clicked` )
}

function TableExample() {
    const tableHeadDefs = {
        extractRowKey: (rowData) => {
            return rowData["rowNo"]
        },
        columnDefinitions: [
            {
                columnName: "#",
                renderCell: (rowData) => {
                    return rowData["rowNo"];
                },
            },
            {
                columnName: "First name",
                renderCell: (rowData) => {
                    return rowData["firstName"];
                },
            },
            {
                columnName: "Actions",
                renderCell: rowData => {
                    return <button onClick={doAlert.bind(this, rowData)}>Alert!</button>
                } // here you can render data as well as components(for example a delete button, an update button, etc.)
            }
        ]
    };

    const tableData = [
        {
            rowNo: 1,
            firstName: "John Carmack"
        },
        {
            rowNo: 2,
            firstName: "Rob Pike",
        }
    ]

    // in this property you can add a component that is above the row with the column names
    // here you can insert for example a button which creates the Add Project modal and finally
    // updates the state of your Projects component(from Pages folder). Then the updated state
    // of the Projects component will be propagated in the table through parameters and render() eventually
    // being called
    const tableHeadComponent = <p>Hello world!</p>

    return <div>
        <h1>Projects</h1>
        <Task2Table tableHeadDefinitions={tableHeadDefs} tableData={tableData} tableHeadComponent={tableHeadComponent}/>
    </div>
}

export default TableExample
