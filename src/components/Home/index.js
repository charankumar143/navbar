import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const Home = () => (
  <>
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const result = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

        return (
          <div>
            <Navbar />
            <img src={result} alt="home" />
            <h1>Home</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default Home
