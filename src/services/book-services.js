const apiKey = "AIzaSyD-JT5iVkio-fHPXtt5IHczNqHd6iKPamI";
export const getBooks = async (searchTerm, searchBy, maxResult, startIndex) => {
  if (searchTerm === "") {
    throw new Error("Search must have a value");
  }
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+${searchBy}:${searchTerm}&maxResults=${maxResult}&startIndex=${startIndex}&key=${apiKey}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  if (data.items.length === 0) {
    throw new Error(`No book found for search ${searchTerm}`);
  }
  return data;
};
