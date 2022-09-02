import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import Home from './components/Home'

import About from './components/About'

import ThemeContext from './context/ThemeContext'

import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  renderTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    const resultTheme = isDarkTheme ? 'dark-theme' : 'white-theme'
    return (
      <div className={resultTheme}>
        <ThemeContext.Provider
          value={{isDarkTheme, toggleTheme: this.renderTheme}}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App
