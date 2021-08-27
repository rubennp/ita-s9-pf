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

// Utils
import * as utils from '../../utils';

/*
 * App(): main Component
 */
const App = () => {
  const history = useHistory();

  /**** STATE ****/
  const [search, setSearch] = useState('');
  const [lastSearch, setLastSearch] = useState(null);
  const [searches, setSearches] = useState(null);
  const [videoSelected, setVideoSelected] = useState(null);
  const [videoLiked, setVideoLiked] = useState([]);
  const [videoList, setVideoList] = useState(null);
  const [fromSavedSearch, setFromSavedSearch] = useState(null);
  const [lastViewedVideos, setLastViewedVideos] = useState(null);
  const [videosFromYourSearches, setVideosFromYourSearches] = useState(null);

  /**** FETCHES ****/
  const videoSearch = useGetVideoList({action: 'SEARCH', search: search, lastSearch: lastSearch}, [search]);
  const recommendedVideos = useGetVideoList({action: 'RECOMMENDED'});

  /**** EFFECTS ****/
  useEffect(function init() {
    const onLocalStorage = JSON.parse(localStorage.getItem('reactube-data'));
    
    if (onLocalStorage) {
      setSearches(onLocalStorage.searches);
      setVideoLiked(onLocalStorage.videoLiked);
      setVideosFromYourSearches(onLocalStorage.videosFromYourSearches);
      setLastViewedVideos(onLocalStorage.lastViewedVideos);
    } else {
      saveDataOnLocalStorage();
    }
  }, []);

  useEffect(function saveData() {
    saveDataOnLocalStorage();
  }, [searches, videoLiked, videosFromYourSearches, lastViewedVideos]);

  useEffect(function onLastValidSearch() {
    if ((videoSearch && search !== '') && lastSearch) {
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
    history.push('/home');
  }, [videoSearch]);

  useEffect(function onSearchesListChanges() {
    setVideosFromYourSearches(makeListFromYourSearches());
  }, [searches]);

  useEffect(function onVideoSelected(){
    history.push('/video');
  }, [videoSelected]);

  /**** HANDLES ****/
  
  // on like or unlike a video...
  const handleVideoLiked = (video, like) => {
    if (like) setVideoLiked(prev => [...prev, video]);
    else setVideoLiked(prev => prev.filter(v => v.id !== video.id));
  };

  // on make a search...
  const handleSubmit = search => {
    setSearch(search);
    if (search !== '') setLastSearch(search);
  };

  // on select a video to view...
  const handleVideoSelect = video => { 
    setVideoSelected(video);
    setLastViewedVideos(prev => {
      if (!lastViewedVideos) return [{viewedAt: new Date(), video: video}];
      else return [{viewedAt: new Date(), video: video}, ...prev];
    });
  };

  // on delete a saved search list...
  const handleDelSearch = (idx) => {
    setSearches(prevSearches => {
      const newSearches = prevSearches.filter((el, pos) => idx !== pos);
      if (newSearches === []) return null;
      else return newSearches;
    });
  };

  // on click repeat search on saved searches section on Home screen...
  const handleRepeatSearch = (idx) => {
    handleSubmit(searches[idx].search);
  };

  // on click load a saved search list on saved searches section on Home screen...
  const handleLoadSearch = (idx) => {
    setFromSavedSearch(searches[idx].search);
    setVideoList(searches[idx].videos);
  };

  // on exits from saved search list on Home screen...
  const handleExitFromSavedList = () => {
    setFromSavedSearch(null);
    setSearch('');
    setVideoList(recommendedVideos);
  };

  // on reset last viewed videos on History screen...
  const handleResetViewed = () => {
    setLastViewedVideos(null);
  };

  // on click random new list from saved searches on History screen...
  const handleRandomListFromYourSearches = () => {
    setVideosFromYourSearches(makeListFromYourSearches());
  };

  /**** UTILITIES ****/

  const saveDataOnLocalStorage = () => {
    localStorage.setItem('reactube-data', JSON.stringify({
      searches: searches,
      videoLiked: videoLiked,
      videosFromYourSearches: videosFromYourSearches,
      lastViewedVideos: lastViewedVideos,
    }));
  };

  // returns random lists from videos on searches
  const makeListFromYourSearches = () => {
    const videosFromSearch = (search, howMany) => { 
      let videosToExtractFrom = [...search.videos];
      let randomVideos = [];

      if (howMany === 2 && search.videos.length === 1) howMany = 1;

      (() => {
        randomVideos = [...randomVideos, { search: search.search, video: {...videosToExtractFrom.splice(utils.randomIdx(videosToExtractFrom.length), 1).shift()}}];
      }).times(howMany);
      
      return randomVideos;
    };

    if (searches) {
      let searchesToExtractFrom = [...searches];
      let randomSearches = [];
      let _searches = [];

      if (searches.length < 10) _searches = [...searches];
      else {
        (() => {
          randomSearches = [...randomSearches, ...searchesToExtractFrom.splice(utils.randomIdx(searchesToExtractFrom.length), 1)];
        }).times(10);
        _searches = [...randomSearches];
      }

      return _searches.map(search => {
        return videosFromSearch(search, _searches.length > 5 ? 1 : 2);
      }).flat().shuffle();
    } else return null;
  };

  /**** THE RETURN ****/
  return (
    <Main fluid>
      <Menu />
      <SearchBar 
        search={search}
        handleSubmit={handleSubmit}
        handleExitFromSavedList={handleExitFromSavedList}
      />
      <Screen>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          {!videoList && <Redirect to="/home" />} {/* needed onClick exit saved search list */}
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
              />
            }
          </Route>
          <Route path="/video">
            <Video 
              selected={videoSelected}
              handleVideoSelect={handleVideoSelect}
              videoLiked={videoLiked}
              handleVideoLiked={handleVideoLiked}
            />
          </Route>
          <Route path="/history">
            <History 
              list={lastViewedVideos}
              handleResetViewed={handleResetViewed}
              handleVideoSelect={handleVideoSelect}
              videoLiked={videoLiked}
              handleVideoLiked={handleVideoLiked}
              videosFromYourSearches={videosFromYourSearches}
              handleRandomListFromYourSearches={handleRandomListFromYourSearches}
            />
          </Route>
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