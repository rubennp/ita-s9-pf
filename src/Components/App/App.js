import { useEffect, useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

// Styled Components
import { Main, Screen } from './App.styled';

// Components
import SearchBar from './SearchBar';
import Menu from './Menu';

// Screen Components
import Home from './Screens/Home';
import History from './Screens/History';
import Liked from './Screens/Liked';
import Saved from './Screens/Saved';
import Video from './Screens/Video';

// Hooks
import useGetVideoList from '../../hooks';

/*
 * App(): main Component
 */
const App = () => {
  const history = useHistory();
  const [lastSearch, setLastSearch] = useState(null);
  const [search, setSearch] = useState('');
  const [videoSelected, setVideoSelected] = useState(null);
  
  const videoSearch = useGetVideoList({action: 'SEARCH', search: search, lastSearch: lastSearch}, [search]);

  const handleSubmit = search => {
    setSearch(search);
    if (search !== '') setLastSearch(search); 
  };

  const handleVideoSelect = video => { setVideoSelected(video); };

  useEffect(function onVideoSelected(){
    history.push('/video');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoSelected]);

  useEffect(function onSearch() {
    history.push('/home');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoSearch]);

  return (
    <Main fluid>
      <Menu />
      <SearchBar search={search} handleSubmit={handleSubmit}/>
      <Screen>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home">
            { videoSearch && <Home search={search} list={videoSearch} handleSelect={handleVideoSelect} /> }
          </Route>
          <Route path="/history" component={History} />
          <Route path="/liked" component={Liked} />
          <Route path="/saved" component={Saved} />
          <Route path="/video">
            <Video selected={videoSelected} handleVideoSelect={handleVideoSelect} />
          </Route>
        </Switch>
      </Screen>
    </Main>
  );
}

export default App;