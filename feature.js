const filter1 = document.getElementById("check1");
const filter2 = document.getElementById("check2");
const searchInput = document.getElementById("searchInput");
const allCategory = document.getElementById("allCategory");
const vegCategory = document.getElementById("vegCategory");
const nonVegCategory = document.getElementById("nonVegCategory");

// search function
searchInput.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase(); // Convert query to lowercase
  const filterData = data.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  foodContainer.innerHTML = getCardsData(filterData);
});

//  categories button..
allCategory.addEventListener("click", (event) => {
  event.preventDefault();
  foodContainer.innerHTML = getCardsData(data);
});

vegCategory.addEventListener("click", (event) => {
  event.preventDefault();
  const filterData = data.filter((item) => item.type === "veg");
  foodContainer.innerHTML = getCardsData(filterData);
});

nonVegCategory.addEventListener("click", (event) => {
  event.preventDefault();
  const filterData = data.filter((item) => item.type === "Non-veg");
  foodContainer.innerHTML = getCardsData(filterData);
});

//   filter..
filter1.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    const filterData = data.filter((item) => item.rating >= 4);
    showData = filterData;
  } else {
    showData = data;
  }
  foodContainer.innerHTML = getCardsData(showData);
});

filter2.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    const filterData = data.filter((item) => item.rating < 4);
    showData = filterData;
  } else {
    showData = data;
  }
  foodContainer.innerHTML = getCardsData(showData);
});

foodContainer.innerHTML = getCardsData(showData);



// like feature:-------------

const likeElement = document.querySelector("#like");

// Function to toggle the heart icon and change its color
function toggleLike(event) {
  const clickedElement = event.target;
  console.log(clickedElement);

  // Check if the clicked element is the heart icon (fa-heart)
  if (clickedElement.classList.contains("fa-heart")) {
    // Toggle the 'fa-solid' class to change the icon
    clickedElement.classList.toggle("fa-solid");
    clickedElement.style.color = clickedElement.classList.contains("fa-solid") ? "#dc582a" : "";

    // Now you can update the 'isLiked' property in your data array
    const status = showData.isLiked = !showData.isLiked;
    console.log(status);
  }
}

// Add a single event listener to the container element
foodContainer.addEventListener("click", toggleLike);