import catp1 from '../../Assets/catp1.avif';
import dogl1 from '../../Assets/dogl1.avif';
import dogg1 from '../../Assets/dogg1.avif';
import birdco1 from '../../Assets/birdco1.avif'
import dogb1 from '../../Assets/dogb1.jpg'
import hams1 from '../../Assets/hams1.jpg'
import sell from '../../Assets/sell.jpg'
import dogshi1 from '../../Assets/dogshi1.jpg'
import rabbit1 from '../../Assets/rabbit1.jpg'
import doglab2 from '../../Assets/doglab2.jpg'
import birdl1 from '../../Assets/birdl1.jpg'
import { Description } from '@mui/icons-material';



const pets = [
  {
    id: 1,
    image: dogl1,
    age: '2 months',
    price: 9000,
    pet: 'Dog',
    breed: 'Labrador' ,
    gender:'Female',
    color:'Yellow',
    description:'Friendly And energetic',
    location:'Coimbatore',
    ownerName:'Adith',
    ownerContact:9897765439// Added breed
    // category: 'Food'   // Added category
  },
  {
    id: 2,
    image: catp1,
    age: '3 months',
    price: 3000,
    pet: 'Cat',
    breed: 'Persian' // Added breed
    // category: 'Food'  // Added category
  },
  {
    id: 3,
    image: birdco1,
    age: '1 Year',
    price: 5000,
    pet: 'Birds',
    breed: 'Cockatiels' // Added category
  },
  {
    id: 4,
    image: dogg1,
    age: '3 months',
    price: 8000,
    pet: 'Dog',
    breed: 'German Shepherd'
  },
  {
    id: 5,
    image: dogb1,
    age: '3 months',
    price: 6000,
    pet: 'Dog',
    breed: 'Beagle'
  },
  
  {
    id: 6,
    image: hams1,
    age: '--',
    price: 8000,
    pet: 'SmallPets',
    breed: 'Hamster'
  },
  {
    id: 7,
    image: sell,
    age: '4 months',
    price: 3000,
    pet: 'Cat',
    breed: 'Persian'
  },
  {
    id: 8,
    image: doglab2,
    age: '3 months',
    price: 8000,
    pet: 'Dog',
    breed: 'Labrador'
  },
  {
    id: 9,
    image: dogshi1,
    age: '3 months',
    price: 8000,
    pet: 'Dog',
    breed: 'Shih Tzu'
  },
  {
    id: 10,
    image: birdl1,
    age: '--',
    price: 8000,
    pet: 'Birds',
    breed: 'LoveBirds'
  },
  {
    id: 11,
    image: rabbit1,
    age: '3 months',
    price: 3000,
    pet: 'SmallPets',
    breed: 'Rabbit'
  },
  {
    id: 12,
    image: doglab2,
    age: '4 months',
    price: 8000,
    pet: 'Dog',
    breed: 'Labrador'
  }
  ];
  
  export default pets;
  