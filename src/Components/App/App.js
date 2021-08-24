/* eslint-disable react-hooks/exhaustive-deps */

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
import Searches from './Screens/Searches';
import Video from './Screens/Video';

// Hooks
import useGetVideoList from '../../hooks';

/*
 * App(): main Component
 */
const App = () => {
  const history = useHistory();

  // State
  const [search, setSearch] = useState('');
  const [lastSearch, setLastSearch] = useState(null);
  const [searches, setSearches] = useState(null);
  const [videoSelected, setVideoSelected] = useState(null);
  const [videoLiked, setVideoLiked] = useState([]);
  const [videoList, setVideoList] = useState(null);
  const [fromSavedSearch, setFromSavedSearch] = useState(null);
  
  // on search change: fetch search
  const videoSearch = useGetVideoList({action: 'SEARCH', search: search, lastSearch: lastSearch}, [search]);

  // Handles
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

  const handleDelSearch = (idx) => {
    setSearches(prevSearches => {
      const newSearches = prevSearches.filter((el, pos) => idx !== pos);
      if (newSearches === []) return null;
      else return newSearches;
    });
  };

  const handleRepeatSearch = (idx) => {
    handleSubmit(searches[idx].search);
  };

  const handleLoadSearch = (idx) => {
    setFromSavedSearch(searches[idx].search);
    setVideoList(searches[idx].videos);
  };

  const handleExitFromSavedList = () => {
    setFromSavedSearch(null);
  };

  // Effects
  useEffect(function onLastValidSearch() {
    if ((videoSearch && search !== '') && lastSearch) {
      handleExitFromSavedList();
      if (!searches) {
        setSearches([{
          search: lastSearch,
          imgUrl: videoSearch[0].snippet.thumbnails.default.url,
          videos: videoSearch,
          date: new Date()
        }]);
      } 
      else {
        setSearches(prevSearches => [
          {
            search: lastSearch,
            imgUrl: videoSearch[0].snippet.thumbnails.default.url,
            videos: videoSearch, 
            date: new Date()
          },
          ...prevSearches, 
        ]);
      }
    }

    setVideoList(videoSearch);
  }, [videoSearch]);

  /*
   * REDIRECTS on ACTION
   */
  useEffect(function onVideoSelected(){
    history.push('/video');
  }, [videoSelected]);

  useEffect(function onSearch() {
    history.push('/home');
  }, [videoSearch]); 

  console.log(videoList);
  console.log(videoSelected);
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
            {videoList &&
              <Home 
                search={search}
                searches={searches}
                handleDelSearch={handleDelSearch}
                handleRepeatSearch={handleRepeatSearch}
                handleLoadSearch={handleLoadSearch}
                fromSavedSearch={fromSavedSearch}
                handleExitFromSavedList={handleExitFromSavedList}
                list={videoList}
                handleSelect={handleVideoSelect}
                videoLiked={videoLiked}
                handleVideoLiked={handleVideoLiked}
            />}
          <Route path="/video">
            <Video 
              selected={videoSelected}
              handleVideoSelect={handleVideoSelect}
              videoLiked={videoLiked}
              handleVideoLiked={handleVideoLiked}
            />
          </Route>
          </Route>
          <Route path="/history" component={History}/>
          <Route path="/liked">
            <Liked 
              list={videoLiked} 
              handleVideoSelect={handleVideoSelect} 
              handleVideoLiked={handleVideoLiked}
            />
          </Route>
          <Route path="/searches">
            <Searches 
              searches={searches}
              handleDelSearch={handleDelSearch}
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