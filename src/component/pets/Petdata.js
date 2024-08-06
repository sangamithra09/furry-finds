import cat1 from '../../Assets/cat1.webp';
import dogl1 from '../../Assets/dogl1.avif';
import birdc1 from '../../Assets/birdc1.webp';

const pets = [
  {
    id: 1,
    image: dogl1,
    age: '2 months',
    price: 5000,
    pet: 'Dog',
    breed: 'Labrador' // Added breed
    // category: 'Food'   // Added category
  },
  {
    id: 2,
    image: cat1,
    name: 'Whiskas Ocean Fish Flavour Cat Dry Food',
    description: 'Nutritious cat food.',
    price: 15.99,
    pet: 'Cat',
    breed: 'Siamese', // Added breed
    // category: 'Food'  // Added category
  },
  {
    id: 3,
    image: birdc1,
    name: '30 Inch Alloy Steel Cage',
    description: 'Spacious bird cage with multiple perches.',
    price: 75.00,
    pet: 'Birds',
    breed: 'Parrot', // Added breed
    category: 'Accessories' // Added category
  }
  ];
  
  export default pets;
  