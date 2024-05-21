const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");
//create a fucntion to add books to the dom
const addBooksToDom = (book) => {
  let element = document.createElement("div");
  let title = document.createElement("h3");
  let author = document.createElement("p");
  let released = document.createElement("p");
  let pages = document.createElement("p");

  title.textContent = book.name;
  author.textContent = book.authors[0];
  released.textContent = book.released.substr(0, 4); //use substr to get the year only
  pages.textContent = `${book.numberOfPages} pages`; // use `` and use $ for elements and we can add text

  element.append(title);
  element.append(author);
  element.append(released);
  element.append(pages);

  //add styles
  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.alignItems = "center";
  element.style.marginTop = "20px";

  app.append(element);
};

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then(
      // to access the body of the respose we need to use response.json()
      (response) => response.json() //this is anthor promsis we need more- then to excute the result
      // (error) => console.log(error)
    )
    // we have three different state for promsis- pending-fulfilled or rejected
    .then((data) => {
      console.log(data); // when fulfilled we can what we need
      // (error) => console.log(error)  // when rejected
      data.forEach((book) => {
        // console.log(
        //   book.name,
        //   book.authors[0],
        //   book.released,
        //   book.numberOfPages
        // );
        addBooksToDom(book);
      });
    })
    //to avoid repeating the error in each then, we have the catch at the end for all promsis
    .catch((error) => {
      console.error(error);
      let element = document.createElement("div");
      element.textContent = "An Error is Occured, please reload the page";
      app.append(element);
    })
    // to do something regardless to success of rejecting we need to use finally
    .finally(() => {
      let loader = document.querySelector("#loading");
      app.removeChild(loader);
    });
};
fetchData(url);
