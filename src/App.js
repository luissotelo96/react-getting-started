import './css/App.css';
import React from './components/React.js'
import CardList from './components/CardList.js'

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

function App({ tittle }) {
  return (
    <div className="App">
      <h1>{tittle}</h1>
      <CardList cards={testData} />
    </div>
  );
}

export default App;
