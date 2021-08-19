import { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

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

// import VideoList from './VideoList';

// Hooks
import useGetVideoList from '../../hooks';

/*
 * App(): main Component
 */
const App = () => {
  const [lastSearch, setLastSearch] = useState(null);
  const [search, setSearch] = useState('');
  const [videoSelected, setVideoSelected] = useState(null);

  const videoSearch = useGetVideoList({action: 'SEARCH', search: search, lastSearch: lastSearch}, [search]);
  const videoRecommended = useGetVideoList({action: 'RECOMMENDED'}, []);

  const handleSubmit = search => {
    setSearch(search);
    if (search !== '') setLastSearch(search); 
  };

  const handleVideoSelect = video => { setVideoSelected(video); };

  useEffect(function onVideoSelected(){
    console.log(videoSelected);
  }, [videoSelected]);

  return (
    <Main fluid>
      <Menu />
      <SearchBar search={search} handleSubmit={handleSubmit}/>
      <Screen>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home">
            { (videoSearch && videoRecommended) && <Home search={search} fromSearch={videoSearch} fromRecommended={videoRecommended} handleSelect={handleVideoSelect} /> }
          </Route>
          <Route path="/history" component={History} />
          <Route path="/liked" component={Liked} />
          <Route path="/saved" component={Saved} />
          <Route path="/video">
            <Video selected={videoSelected} />
          </Route>
        </Switch>
      </Screen>
      {/* <S.Detail>
        <VideoDetail video={videoSelected} />
      </S.Detail>
      <S.List>
        { videoList && <VideoList list={videoList.items} handleVideoSelect={handleVideoSelect}/> }
      </S.List>   */}
    </Main>
  );
}

export default App;