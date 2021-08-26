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
import useGetVideoList from '../../Hooks';

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
  const [lastViewedVideos, setLastViewedVideos] = useState(null);
  const [videosFromYourSearches, setVideosFromYourSearches] = useState(null);

  // Fetches
  const videoSearch = useGetVideoList({action: 'SEARCH', search: search, lastSearch: lastSearch}, [search]);
  const recommendedVideos = useGetVideoList({action: 'RECOMMENDED'});

  /*
   * Handles
   */

  // when you like or unlike a video...
  const handleVideoLiked = (video, like) => {
    if (like) setVideoLiked(prev => [...prev, video]);
    else setVideoLiked(prev => prev.filter(v => v.id !== video.id));
  };

  // when you make a search...
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

  // when you delete a saved search list...
  const handleDelSearch = (idx) => {
    setSearches(prevSearches => {
      const newSearches = prevSearches.filter((el, pos) => idx !== pos);
      if (newSearches === []) return null;
      else return newSearches;
    });
  };

  // when you click repeat search on saved searches section on Home screen...
  const handleRepeatSearch = (idx) => {
    handleSubmit(searches[idx].search);
  };

  // when you click load a saved search list on saved searches section on Home screen...
  const handleLoadSearch = (idx) => {
    setFromSavedSearch(searches[idx].search);
    setVideoList(searches[idx].videos);
  };

  // when you exits from saved search list on Home screen...
  const handleExitFromSavedList = () => {
    setFromSavedSearch(null);
    setSearch('');
    setVideoList(recommendedVideos);
  };

  // when you reset last viewed videos on History screen
  const handleResetViewed = () => {
    setLastViewedVideos(null);
  };

  // when you click random new list from saved searches on History screen
  const handleRandomListFromYourSearches = () => {
    setVideosFromYourSearches(makeListFromYourSearches());
  };

  // returns random lists from videos on searches
  const makeListFromYourSearches = () => {
    const randomIdx = max => Math.floor(Math.random() * max);
    const repeat = (func, times) => {
      func();
      times && --times && repeat(func, times);
    };

    const videosFromSearch = (search, howMany) => {
      const randomIdx = max => Math.floor(Math.random() * max);
      const repeat = (func, times) => {
        func();
        times && --times && repeat(func, times);
      };

      if (search.videos.length > 2 || (search.videos.length === 2 && howMany === 1)) {
        let videosToExtractFrom = [...search.videos];
        let randomVideos = [];

        repeat(() => {
          randomVideos = [...randomVideos, ...videosToExtractFrom.splice(randomIdx(videosToExtractFrom.length), 1)];
        }, howMany);
        
        return randomVideos;
      } else {
        return search.videos;
      }
    };

    if (searches) {
      let searchesToExtractFrom = [...searches];
      let randomSearches = [];
      let _searches = [];

      if (searches.length < 10) _searches = [...searches];
      else {
        repeat(() => {
          randomSearches = [...randomSearches, ...searchesToExtractFrom.splice(randomIdx(searchesToExtractFrom.length), 1)];
        }, 10);
        _searches = [...randomSearches];
      }

      return _searches.map(search => {
        return videosFromSearch(search, _searches.length > 5 ? 1 : 2);
      }).flat();
    } else return null;
  };

  // Effects
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
  }, [videoSearch]);

  useEffect(function onSearchesListChanges() {
    setVideosFromYourSearches(makeListFromYourSearches());
  }, [searches]);

  /*
   * REDIRECTS on ACTION
   */
  useEffect(function onVideoSelected(){
    history.push('/video');
  }, [videoSelected]);

  useEffect(function onSearch() {
    history.push('/home');
  }, [videoSearch]); 

  if (videosFromYourSearches) 
    console.log(videosFromYourSearches);

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
          {!videoList && <Redirect to="/home" />} {/*needed onClick exit saved search list*/}
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