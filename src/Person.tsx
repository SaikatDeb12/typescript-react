interface Person {
  name: string;
  age: number;
  email: string;
  address: string;
}

export const Person = (props: Person) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>age: {props.age}</h1>
      <h1>email: {props.email}</h1>
      <h1>address: {props.address}</h1>
    </div>
  );
};
