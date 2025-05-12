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


// Snack Bonus 5
const ids = [2, 13, 7, 21, 19];
async function getBooks(ids) {
  const baseUrl = `https://freetestapi.com/api/v1/books/`;
  const bookPromises = ids.map(id => fetch(`${baseUrl}${id}`).then(r => r.json()));
  const books = await Promise.all(bookPromises);
  return books;
}

getBooks(ids).then(books => console.log(books));


// Snack Bonus 6
const areThereAvailableBooks = books.some(b => b.avalaible);
const booksByPrice = books.sort((a, b) => {
  const priceA = parseFloat(a.price.replace('€', ''))
  const priceB = parseFloat(b.price.replace('€', ''))
  return priceA - priceB;
})
booksByPrice.sort((a, b) => a.available === b.available ? 0 : a.available ? -1 : 1);


// Snack Bonus 7
const booksWithTags = books.reduce((acc, book) => {
  book.tags.forEach(tag => {
    if (!acc[tag]) {
      acc[tag]++;
    } else {
      acc[tag] = 1
    }
  })
  return acc;
}, {});
