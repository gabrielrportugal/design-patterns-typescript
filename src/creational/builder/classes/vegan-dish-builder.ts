import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { Beans, Rice } from './meal';
import { MealBox } from './meal-box';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _mealBox: MealBox = new MealBox();

  reset(): this {
    this._mealBox = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);

    this._mealBox.add(rice, beans);

    return this;
  }

  getMeal(): MealBox {
    return this._mealBox;
  }

  getPrice(): number {
    return this._mealBox.getPrice();
  }
}
