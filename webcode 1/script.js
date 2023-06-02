async function fetchData() {
    try {
      const response = await fetch('https://anapioficeandfire.com/api/books');
      const data = await response.json();
      // Process the data here
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function fetchData() {
    try {
      const response = await fetch('https://anapioficeandfire.com/api/books');
      const data = await response.json();
  
      const booksContainer = document.getElementById('books-container');
  
      data.slice(0, 10).forEach((book) => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
  
        const titleElement = document.createElement('h2');
        titleElement.textContent = book.name;
  
        const isbnElement = document.createElement('p');
        isbnElement.textContent = `ISBN: ${book.isbn}`;
  
        const pagesElement = document.createElement('p');
        pagesElement.textContent = `Pages: ${book.numberOfPages}`;
  
        const authorsElement = document.createElement('p');
        authorsElement.textContent = `Authors: ${book.authors.join(', ')}`;
  
        const publisherElement = document.createElement('p');
        publisherElement.textContent = `Publisher: ${book.publisher}`;
  
        const releasedElement = document.createElement('p');
        releasedElement.textContent = `Released: ${book.released}`;
  
        // Append the elements to the book container
        bookElement.append(
          titleElement,
          isbnElement,
          pagesElement,
          authorsElement,
          publisherElement,
          releasedElement
        );
        booksContainer.appendChild(bookElement);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  window.onload = fetchData;