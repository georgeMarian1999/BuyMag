import {Currency} from "./model/currency";
import {Season} from "./model/season";
import {Allergies} from "./model/allergies";
import {FoodType} from "./model/food-type";
import {Product} from "./model/product";

export const data: Product[] = [
  {
    id:1,
    name: 'Chocolate Laptop Hp 15-db1200ny cu procesor AMD Ryzen',
    type: FoodType.Carbohydrates,
    description: 'You think it is a laptop but it tastes better... Chocolate Laptop',
    allergies: [Allergies.Gluten, Allergies.Lactose],
    taste: 'Great',
    season: Season.All,
    weight: 2,
    url: 'https://placeholder.com/200',
    stock: 100,
    price: 100,
    currency: Currency.RON,
    reviews: {
      star: 4,
      reviewers: ['andra07', 'test']
    },
    order: 1,
    calories: 100,
  },
  {
    id:2,
    name: 'Cold Burger',
    type: FoodType.Carbohydrates,
    description: 'Cold is the way to eat it',
    allergies: [Allergies.Lactose],
    taste: 'Bitter',
    season: Season.Spring,
    url: 'https://placeholder.com/50',
    weight: 0.3,
    stock: 11,
    price: 1000,
    currency: Currency.RON,
    reviews: {
      star: 2,
      reviewers: ['andra07'],
    },
    order: 3,
    calories: 350,
  },
  {
    id:3,
    name: 'Hammer of Greed',
    url: 'https://cdn.pixabay.com/photo/2018/08/01/14/04/gavel-3577254_960_720.jpg',
    description: 'Gold Hammer to show your justice',
    weight: 0.5,
    stock: 1,
    reviews: null,
    price: 80,
    currency: Currency.EUR,
    order: 2,
  },
  {
    id:4,
    name: 'Iron 3-Bulk',
    url: 'https://placeholder.com/150',
    description: '3 kg of Iron',
    weight: 3,
    stock: 1,
    reviews: null,
    price: 300,
    currency: Currency.RON,
    order: 4
  },

]
