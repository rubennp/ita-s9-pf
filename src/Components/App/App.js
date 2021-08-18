import { useState } from 'react';
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

// import VideoList from './VideoList';
// import VideoDetail from './VideoDetail';

// Hooks
// import useGetVideoList from '../../hooks';

/*
 * App(): main Component
 */
const App = () => {
  const [search, setSearch] = useState('');
  // const [videoSelected, setVideoSelected] = useState(null);

  // const videoList = useGetVideoList(search, [search]);
  
  const handleSubmit = search => setSearch(search);  
  // const handleVideoSelect = idx => setVideoSelected(videoList.items[idx]);
  
  return (
    <Main fluid>
      <Menu />
      <SearchBar search={search} handleSubmit={handleSubmit}/>
      <Screen>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/history" component={History} />
          <Route path="/liked" component={Liked} />
          <Route path="/saved" component={Saved} />
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