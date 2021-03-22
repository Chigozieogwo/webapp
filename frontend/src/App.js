import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header2 from './components/Header2'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'

const App = () => {
  return (
    <Router className="bg-gray-100">
      <Header2 />
      <main>
        <div>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/register" component={RegisterScreen} />
        </div>
      </main>
      <Footer />
    </Router>
  )
}

export default App
