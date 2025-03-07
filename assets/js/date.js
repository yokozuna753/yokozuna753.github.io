const getDate = () => {
  const currentDate = new Date();
//   console.log(currentDate);
//   console.log(currentDate);

  const date = new Date(currentDate);

  // Format the date to a readable format, e.g., "March 7, 2025"
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  document.getElementById("date-output").innerText = formattedDate;

};

getDate();
