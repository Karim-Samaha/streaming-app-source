import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/navbar';
import Hero from './components/Home';
import Series from './components/Series';
import Footer from './components/footer';
import SingleSeries from './components/singleSeries';
import MyList from './components/myList';
import ScrollToTOP from './components/scrollToTop'

function App() {

  return (

    <Router>
      <Navbar />
      <ScrollToTOP />
      <Routes>
        <Route exact path="/" element={<><Hero /><Series /></>}></Route>
        <Route exact path="/my-list" element={<><MyList /></>}></Route>
        <Route exact path="/series/:id" element={<><SingleSeries /></>}></Route>
      </Routes>
      <Footer />
    </Router>

  )
}

export default App;
