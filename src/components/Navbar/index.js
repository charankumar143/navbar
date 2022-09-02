import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <>
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value

        const onChangeTheme = () => {
          toggleTheme({isDarkTheme: !isDarkTheme})
        }

        const result = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

        const theme = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

        return (
          <div>
            <img src={result} alt="website logo" />
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <button type="button" testid="theme" onClick={onChangeTheme}>
              <img src={theme} alt="theme" />
            </button>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default Navbar
