import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const About = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const result = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

        return (
          <div>
            <img src={result} alt="about" />
            <h1>About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default About
