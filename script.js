let data = [
  {
      "name": "Veggie Delight",
      "imageSrc": "https://source.unsplash.com/random?veggies-dish",
      "time": "30 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.2
  },
  {
      "name": "Chicken Grill",
      "imageSrc": "https://source.unsplash.com/random?chicken-grill",
      "time": "45 min",
      "type": "Non-veg",
      "isLiked": false,
      "rating": 4.5
  },
  {
      "name": "Cheese Pizza",
      "imageSrc": "https://source.unsplash.com/random?pizza",
      "time": "40 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.1
  },
  {
      "name": "Steak",
      "imageSrc": "https://source.unsplash.com/random?steak",
      "time": "60 min",
      "type": "Non-veg",
      "isLiked": false,
      "rating": 4.7
  },
  {
      "name": "Grilled Salmon",
      "imageSrc": "https://source.unsplash.com/random?salmon-dish",
      "time": "50 min",
      "type": "Non-veg",
      "isLiked": false,
      "rating": 4.6
  },
  {
      "name": "Tomato Pasta",
      "imageSrc": "https://source.unsplash.com/random?pasta-dish",
      "time": "35 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.0
  },
  {
      "name": "Vegan Salad",
      "imageSrc": "https://source.unsplash.com/random?vegan-salad",
      "time": "20 min",
      "type": "veg",
      "isLiked": false,
      "rating": 3.9
  },
  {
      "name": "Fried Chicken",
      "imageSrc": "https://source.unsplash.com/random?fried-chicken",
      "time": "55 min",
      "type": "Non-veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "Mushroom Risotto",
      "imageSrc": "https://source.unsplash.com/random?risotto",
      "time": "45 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.5
  },
  {
      "name": "Burger",
      "imageSrc": "https://source.unsplash.com/random?burger",
      "time": "30 min",
      "type": "Non-veg",
      "isLiked": false,
      "rating": 4.2
  },
  {
      "name": "Paneer Tikka",
      "imageSrc": "https://source.unsplash.com/random?paneer-tikka",
      "time": "40 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.4
  },
  {
      "name": "BBQ Ribs",
      "imageSrc": "https://source.unsplash.com/random?bbq-ribs",
      "time": "70 min",
      "type": "Non-veg",
      "isLiked": false,
      "rating": 4.6
  },
  {
      "name": "Caesar Salad",
      "imageSrc": "https://source.unsplash.com/random?caesar-salad",
      "time": "25 min",
      "type": "veg",
      "isLiked": false,
      "rating": 3.8
  },
  {
      "name": "Fish Tacos",
      "imageSrc": "https://source.unsplash.com/random?tacos",
      "time": "35 min",
      "type": "Non-veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "Chocolate Cake",
      "imageSrc": "https://source.unsplash.com/random?chocolate-cake",
      "time": "90 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.9
  }
];

let showData = data;

const foodContainer = document.getElementById("food-container");

const getCardsData = (dataArr) => {
  const cards =
    dataArr &&
    dataArr
      .map((item) => {
        const { name, imageSrc, time, type, isLiked, rating } = item;
        return `<div class="dish-card">
                    <div class="dish-img">
                        <img src="${imageSrc}" alt="${name}_image"/>
                    </div>
                    <div class="type">
                        <p>${type}</p>
                    </div>
                    <div class="name-rating">
                        <h1>${name}</h1>
                        <p class="rating">
                            <span><i class="fa-solid fa-star" style="color: #fdc040;"></i></span>
                            <span>${rating}</span>
                        </p>
                    </div>
                    <div class="lower-row">
                        <h3>${time}</h3>
                        <div class="like-comment">
                            <span id="like"><i class="fa-regular fa-heart"></i></span>
                            <span id="comment"><i class="fa-regular fa-comment"></i></span>
                        </div>
                    </div>
                </div>`;
      })
      .join("");
  return cards;
};
