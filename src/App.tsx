import Landing from './pages/landing'
import CreatePlaylist from './pages/create-playlist'
import Header from './components/header'
import { useAppSelector } from './store'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  return (
    <BrowserRouter>
      <Header />
      <main>
        {/* <Sidebar /> */}
        <Switch>
          <Route exact path="/create-playlist">
            {isAuthenticated ? <CreatePlaylist /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App
