import Landing from './pages/landing'
import NewReleases from './pages/new-releases'
import CreatePlaylist from './pages/create-playlist'
import Header from './components/header'
import Sidebar from './components/sidebar'
import { Grid } from '@chakra-ui/react'
import { useAppSelector } from './store'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  return (
    <BrowserRouter>
      <Header />
      <Grid as={'main'} templateColumns={isAuthenticated ? '1fr 4fr' : '1fr'}>
        {isAuthenticated && <Sidebar />}
        <Switch>
          <Route exact path="/create-playlist">
            {isAuthenticated ? <CreatePlaylist /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/new-releases">
            {isAuthenticated ? <NewReleases /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </Grid>
    </BrowserRouter>
  )
}

export default App
