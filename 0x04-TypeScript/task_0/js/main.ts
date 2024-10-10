interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student_1: Student =
    {
        firstName: "Lionel",
        lastName: "Messi",
        age: 102,
        location: "Argentina"
    }

const student_2: Student = 
    {
        firstName: "Layi",
        lastName: "Wasabi",
        age: 121,
        location: "Nigeria"
    }

const studentsList: Student[] = [student_1, student_2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const table_head: HTMLTableSectionElement = document.createElement("thead");
const table_body: HTMLTableSectionElement = document.createElement("tbody");
const rowHead: HTMLTableRowElement = table_head.insertRow(0);
const first_cell_head: HTMLTableCellElement = rowHead.insertCell(0);
const second_cell_head: HTMLTableCellElement = rowHead.insertCell(1);

first_cell_head.innerHTML = "firstName";
second_cell_head.innerHTML = "location";
table.append(table_head);

studentsList.forEach(student => {
    const row: HTMLTableRowElement = table_body.insertRow(0);
    const first_cell: HTMLTableCellElement = row.insertCell(0);
    const second_cell: HTMLTableCellElement = row.insertCell(1);

    first_cell.innerHTML = student.firstName;
    second_cell.innerHTML = student.location;
});

table.append(table_body);
table.append(table);