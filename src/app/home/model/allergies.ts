export enum Allergies {
  Gluten = 'Gluten',
  FoodAdditives = 'Food Additives',
  Sesame = 'Sesame',
  Lactose = 'Lactose'
}
export function fromString(dir: string): Allergies{
    return (Allergies as any)[dir];
}

