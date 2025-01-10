import { Person, Food } from "./Person";

function App() {
  return (
    <div>
      <Person
        name="sai"
        address="adslakdj"
        age={25}
        email="adsfadf"
        friends={["sourav", "sai", "harami"]}
        favFood={Food.momo}
      />
    </div>
  );
}

export default App;
