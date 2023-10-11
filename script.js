const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
	
  // write your code here
  let readBooks=0;

	
  for(int i=0;library.length;i++){
	  if(library[i].readingStatus==true){
		  readBooks++;
	  }
  }
	return readBooks;
};

// Do not change the code below

alert(numberOfBooksRead(library));
