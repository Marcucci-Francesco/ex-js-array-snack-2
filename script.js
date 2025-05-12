const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: 'Alice',
      age: 35
    },
    available: false,
    price: '101€',
    tags: ['advanced', 'js', 'react', 'senior']
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: 'Bob',
      age: 20
    },
    available: true,
    price: '25€',
    tags: ['advanced', 'js', 'mid-senior']
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: 'Alice',
      age: 17
    },
    available: true,
    price: '8€',
    tags: ['html', 'css', 'junior']
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: 'Charlie',
      age: 50
    },
    available: false,
    price: '48€',
    tags: ['html', 'advanced', 'junior', 'mid-senior']
  },
];


// Snack 1
const longBooks = books.filter(book => book.pages > 300);
const longBooksTitle = longBooks.map(l => l.title);
longBooksTitle.forEach(t => console.log(t))

// Snack 2
const availableBooks = books.filter(book => book.available);
const discountedBooks = availableBooks.map(book => {
  book.price = parseFloat(book.price.replace('€', '')) * 0.8;
  return book;
})
console.log(discountedBooks);

const fullPriceBooks = discountedBooks.find(d => d.price % 1 === 0);
console.log(fullPriceBooks);


// Snack 3
const authors = books.map(b => b.author);
const areAuthorsAdults = authors.every(author => author.age >= 18);
authors.sort((a, b) => a.age - b.age) * (areAuthorsAdults ? 1 : -1);


// Snack 4
const ages = books.map(b => b.author.age);
const agesSum = ages.reduce((sum, age) => sum + age, 0);
console.log(`The average age of the authors is: ${agesSum / ages.length}`);
