import roastedCashews from "@/assets/roasted-cashews.jpg";
import saltedCashews from "@/assets/salted-cashews.jpg";
import honeyCashews from "@/assets/honey-cashews.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  weight: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Roasted Cashews",
    description: "Perfectly roasted cashews with a golden crispy texture. Our premium cashews are carefully selected and roasted to perfection.",
    price: 599,
    image: roastedCashews,
    category: "Roasted",
    weight: "500g",
    inStock: true,
  },
  {
    id: "2",
    name: "Salted Cashews",
    description: "Lightly salted cashews that make the perfect snack. Balanced saltiness enhances the natural nutty flavor.",
    price: 549,
    image: saltedCashews,
    category: "Salted",
    weight: "500g",
    inStock: true,
  },
  {
    id: "3",
    name: "Honey Glazed Cashews",
    description: "Sweet and crunchy honey-glazed cashews. A perfect blend of natural honey and premium cashews.",
    price: 649,
    image: honeyCashews,
    category: "Flavored",
    weight: "500g",
    inStock: true,
  },
  {
    id: "4",
    name: "Raw Cashews",
    description: "Unprocessed raw cashews, perfect for cooking and baking. Natural and healthy cashews in their purest form.",
    price: 499,
    image: roastedCashews,
    category: "Raw",
    weight: "500g",
    inStock: true,
  },
  {
    id: "5",
    name: "Masala Cashews",
    description: "Spicy masala-coated cashews with Indian spices. A perfect blend of heat and flavor for spice lovers.",
    price: 629,
    image: saltedCashews,
    category: "Flavored",
    weight: "500g",
    inStock: true,
  },
  {
    id: "6",
    name: "Cashew Butter",
    description: "Smooth and creamy cashew butter made from 100% cashews. Perfect spread for bread and smoothies.",
    price: 799,
    image: honeyCashews,
    category: "Butter",
    weight: "400g",
    inStock: true,
  },
];

export const categories = ["All", "Roasted", "Salted", "Flavored", "Raw", "Butter"];