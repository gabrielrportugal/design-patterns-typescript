import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();
const veganDishBuilder = new VeganDishBuilder();

const defaultMeal1 = mainDishBuilder
  .makeMeal()
  .makeDessert()
  .makeBeverage()
  .getMeal();

console.log('defaultMeal1 ->', defaultMeal1);
console.log('defaultMeal1 price ->', defaultMeal1.getPrice());

mainDishBuilder.reset();

const defaultMeal2 = mainDishBuilder.makeMeal().makeDessert().getMeal();

console.log('defaultMeal2 ->', defaultMeal2);
console.log('defaultMeal2 price ->', defaultMeal2.getPrice());

const veganMeal = veganDishBuilder.makeMeal().getMeal();

console.log('veganMeal ->', veganMeal);
console.log('veganMeal price ->', veganMeal.getPrice());
