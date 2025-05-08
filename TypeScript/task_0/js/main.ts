interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
  }
  
  const student1: Student = {
	firstName: "Alice",
	lastName: "Johnson",
	age: 20,
	location: "New York",
  };
  
  const student2: Student = {
	firstName: "Bob",
	lastName: "Smith",
	age: 22,
	location: "Los Angeles",
  };
  
  const studentsList: Student[] = [student1, student2];
  
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  const firstNameHeader = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  const locationHeader = document.createElement('th');
  locationHeader.textContent = 'Location';
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  table.appendChild(headerRow);
  
  studentsList.forEach((student) => {
	const row = document.createElement('tr');
	const firstNameCell = document.createElement('td');
	const locationCell = document.createElement('td');
	firstNameCell.textContent = student.firstName;
	locationCell.textContent = student.location;
	row.appendChild(firstNameCell);
	row.appendChild(locationCell);
	table.appendChild(row);
  });
  
  document.body.appendChild(table);
  