import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Jorge", "Jairo"];
  return (
    <Card>
      <CardBody title="Jorge" text="Este es el parrafo" />
      <List data={list} />
    </Card>
  );
}

export default App;
