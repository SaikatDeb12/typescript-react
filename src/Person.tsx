interface Person {
  name: string;
  age: number;
  email: string;
  address: string;
  friends: string[];
  favFood: Food;
}

export enum Food {
  pasta = "pasta",
  sweets = "sweets",
  momo = "momo",
}

export const Person = (props: Person) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>age: {props.age}</h1>
      <h1>email: {props.email}</h1>
      <h1>address: {props.address}</h1>
      <h1>Friends:</h1>
      {props.friends.map((ele) => {
        return <h1>{ele}</h1>;
      })}
      <h1>Fav Food: {props.favFood}</h1>
    </div>
  );
};
