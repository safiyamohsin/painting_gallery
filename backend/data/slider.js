const products = [
    {
      // _id: '1', as mongoDB adds its own when we seed this
      name: 'Black Panther',
      image: '/myImages/Blackpanther.jpg',
      description: 'This 16x13 Black Panther painting, crafted with vibrant acrylics, adds elegance and mystery to any space.',
      size: '16in x 13in',
      category: 'Canvas',
      price: 2499,
      countInStock: 5,
      rating: 4.5,
      numReviews: 4,
    },
    {
      name: 'Itachi Uchiha',
      image: '/myImages/ItachiAnime.png',
      description: 'Capture the enigmatic presence of Itachi Uchiha with this acrylic painting, perfect for any Naruto fan.',
      size: '16in x 13in',
      category: 'Canvas',
      price: 2399,
      countInStock: 3,
      rating: 5,
      numReviews: 4,
    },
    {
      name: 'Roronoa Zoro',
      image: '/images/3.jpg',
      description: 'Showcase the fearless spirit of Roronoa Zoro with this dynamic acrylic painting, a must-have for One Piece enthusiasts.',
      size: '16in x 13in',
      category: 'Canvas',
      price: 2899,
      countInStock: 6,
      rating: 4.8,
      numReviews: 9,
    },

];

export default products;
