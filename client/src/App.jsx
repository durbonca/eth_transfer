import { Navbar, Footer, Loader, Services, Transactions, Welcome } from './components'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Services />
      <Loader />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
