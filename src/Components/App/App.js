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
import Video from './Screens/Video';

// Hooks
import useGetVideoList from '../../hooks';

/*
 * App(): main Component
 */
const App = () => {
  const history = useHistory();

  // state
  const [search, setSearch] = useState('');
  const [lastSearch, setLastSearch] = useState(null);
  const [searches, setSearches] = useState([{
    search: "",
    imgUrl: "",
    videos: [],
    date: null,
  }]);
  const [videoSelected, setVideoSelected] = useState(null);
  const [videoLiked, setVideoLiked] = useState([]);
  
  const videoSearch = useGetVideoList({action: 'SEARCH', search: search, lastSearch: lastSearch}, [search]);

  const handleVideoLiked = (video, like) => {
    if (like) setVideoLiked(prev => [...prev, video]);
    else setVideoLiked(prev => prev.filter(v => v.id !== video.id));
  };

  const handleSubmit = search => {
    setSearch(search);
    if (search !== '') setLastSearch(search);
  };

  const handleVideoSelect = video => { 
    setVideoSelected(video); 
  };

  useEffect(function onLastValidSearch() {
    if (videoSearch && lastSearch) {
      if (searches.filter(s => s.search === lastSearch).length === 0) {
        if (searches[0].search === "" || null) {
          setSearches([{
            search: lastSearch,
            imgUrl: videoSearch.items[0].snippet.thumbnails.default.url,
            videos: videoSearch.items,
            date: new Date()
          }]);
        } 
        else {
          setSearches(prevSearches => [
            {
              search: lastSearch,
              imgUrl: videoSearch.items[0].snippet.thumbnails.default.url,
              videos: videoSearch.items, 
              date: new Date()
            },
            ...prevSearches, 
          ]);
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoSearch]);

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
      <SearchBar 
        search={search}
        handleSubmit={handleSubmit}
      />
      <Screen>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route path="/home">
            {videoSearch && 
              <Home 
                search={search}
                searches={searches}
                list={videoSearch}
                handleSelect={handleVideoSelect}
                videoLiked={videoLiked}
                handleVideoLiked={handleVideoLiked}
            />}
          </Route>
          <Route path="/history" component={History}/>
          <Route path="/liked">
            <Liked 
              list={videoLiked} 
              handleVideoSelect={handleVideoSelect} 
              handleVideoLiked={handleVideoLiked}
            />
          </Route>
          <Route path="/video">
            <Video 
              selected={videoSelected}
              handleVideoSelect={handleVideoSelect}
              videoLiked={videoLiked}
              handleVideoLiked={handleVideoLiked}
            />
          </Route>
        </Switch>
      </Screen>
    </Main>
  );
}

export default App;