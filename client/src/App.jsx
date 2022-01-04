import { Navbar, Footer, Loader, Services, Transactions, Welcome } from './components';

const App = () => {
  const helloYou = (name) => {
    name = 'you' || name;
    console.log('hello' + name + '!');
  };

  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Services />
      <Loader />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
