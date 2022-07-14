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

  getBookNames() {
    const bookNames = this.books.map(book => {
      return book.title
    })
    return bookNames
  }

  countPets() {
    return this.pets.length;
  }

  addBook(title, author) {
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

user.addBook('La rueda del tiempo', 'Brandon Sanderson');

user.addPet('Scooby');

console.log(`El nombre completo del usuario es: ${user.getFullName()}`);
console.log(`Los libros que lee el usuario son: ${user.getBookNames()}`);
console.log(`Las mascotas del usuario son: ${user.pets}`);