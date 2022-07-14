class User {
  name = '';
  lastName = '';
  books = [];
  pets = [];

  constructor(name, lastName, books, pets) {
    this.name = name;
    this.lastName = lastName;
    this.books = books;
    this.pets = pets;


  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }

  addPet(petName) {
    this.pets.push(petName)
  }

  addBooks(title, author) {
    const book = {
      title, author
    }
    this.books.push(book)
  }
}

const books = [
  {
    title: "Harry Potter",
    author: "JK Rowling",
  },
  {
    title: "Francotiradores",
    author: "Franco Pisso",
  },
]


const pets = ['Bella', 'Bondiola']

const user = new User('Joan', 'Vila', books, pets)

console.log(user)