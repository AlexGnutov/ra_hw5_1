import './App.css';
import Card from "./card/card";


function App() {

  const cardData = {
    image: process.env.PUBLIC_URL + '/img/pic.png',
    title: 'First Card',
    text: 'This is the first card text. This text is owned by the first card',
    buttonCaption: 'Click me',
    buttonOnClick: () => console.log('Card button clicked!'),
  }

  return (
    <>
      <Card {...cardData} />
      <br/>
      <Card {...cardData} image={null}/>
    </>
  );
}

export default App;
