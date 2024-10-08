// Task 1. Creating a Teacher interface
interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

//Task 2. Extending the Teacher class

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);

//Task 3. Printing teachers

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]} ${lastName}`;
}

printTeacher("John", "Doe")

//Task 4. Writing a class

interface Class {
    workOnHomework(): string;
    displayName(): string;
}

interface Constructor {
    firstName: string;
    lastName: string;
}

class StudentClass implements Class {
    firstName: string;
    lastName: string;

    constructor(args: Constructor) {

        this.firstName = args.firstName;
        this.lastName = args.lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }

}