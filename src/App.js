import Main from './Main'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
    palette: {
        primary:{
            main:'#1D1C1C'
        },
        secondary: {
            main:'#F3C54D'
        },
      },
})
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Main />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
