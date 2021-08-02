import {Currency} from "./currency";
import {Review} from "./review";
import {FoodType} from "./food-type";
import {Allergies} from "./allergies";
import {Season} from "./season";

export interface Product {
  id:number;
  name:string;
  description:string;
  url:string;
  price:number;
  currency:Currency;
  weight:number;
  stock:number;
  order:number;
  reviews: Review |null;

  //Food
  type?: FoodType;
  allergies?: Allergies[];
  season?:Season;
  taste?:string;
  calories?: number;

  //Stuff

}
