export const filteredItems = search => {
    return searchRes.items.filter(item => new RegExp(search, "gi").test(item.snippet.title));
};

// ... para tener algun dato con el que poder "trabajar" por problemas con la cuota en la API de youtube ...
export const searchRes = {
    "kind": "youtube#searchListResponse",
    "etag": "bOCxDOn1vBofoR4IfAieAKGCoWA",
    "nextPageToken": "CAUQAA",
    "regionCode": "ES",
    "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 5
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "gCZiSUafJP7diGWEEY4mMQL605Y",
        "id": {
          "kind": "youtube#video",
          "videoId": "lWQ69WX7-hA"
        },
        "snippet": {
          "publishedAt": "2019-06-10T23:00:02Z",
          "channelId": "UCP15FVAA2UL-QOcGhy7-ezA",
          "title": "¿Qué es React.js y cómo funciona?",
          "description": "React.js es una librería para crear interfaces web, con ella están construidas las dos redes sociales más grandes: Facebook e Instagram. En este video ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/lWQ69WX7-hA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/lWQ69WX7-hA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/lWQ69WX7-hA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "EDteam",
          "liveBroadcastContent": "none",
          "publishTime": "2019-06-10T23:00:02Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "72Egx6_MhEzU2I_ViHiQxPajSw8",
        "id": {
          "kind": "youtube#video",
          "videoId": "w7ejDZ8SWv8"
        },
        "snippet": {
          "publishedAt": "2021-01-18T19:01:11Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "React JS Crash Course 2021",
          "description": "Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, working with an API and more.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/w7ejDZ8SWv8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/w7ejDZ8SWv8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2021-01-18T19:01:11Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "SO0r2REV_EUK9BA4qj9P5S7UlCg",
        "id": {
          "kind": "youtube#video",
          "videoId": "EMk6nom1aS4"
        },
        "snippet": {
          "publishedAt": "2021-04-23T16:45:14Z",
          "channelId": "UCJgGc8pQO1lv04VXrBxA_Hg",
          "title": "APRENDE REACT BÁSICO en 30 MINUTOS ⏰  - Tutorial de React.js Desde Cero",
          "description": "Aprende React.js en poco tiempo con una introducción a los fundamentos de la librería para empezar a trabajar con ella. Veremos como iniciar una app React ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/EMk6nom1aS4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/EMk6nom1aS4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/EMk6nom1aS4/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Carlos Azaustre - Aprende JavaScript",
          "liveBroadcastContent": "none",
          "publishTime": "2021-04-23T16:45:14Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "qxuqnU_wLha2IUTzcJhurvG8SCo",
        "id": {
          "kind": "youtube#video",
          "videoId": "zIY87vU33aA"
        },
        "snippet": {
          "publishedAt": "2019-06-24T21:48:56Z",
          "channelId": "UCX9NJ471o7Wie1DQe94RVIg",
          "title": "Reactjs, Curso Práctico para Principiantes (React 16)",
          "description": "EXPO, SDK De React para desarrollo de Apps Link ➞ https://bit.ly/3jdjnST Aprende a crear aplicaciones web Frontend usando una de las bibliotecas de ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/zIY87vU33aA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/zIY87vU33aA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/zIY87vU33aA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Fazt",
          "liveBroadcastContent": "none",
          "publishTime": "2019-06-24T21:48:56Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "EpA0mebPmZ6GqJfjDXvkw6z3JxM",
        "id": {
          "kind": "youtube#video",
          "videoId": "T_j60n1zgu0"
        },
        "snippet": {
          "publishedAt": "2020-04-11T08:16:31Z",
          "channelId": "UC8LeXCWOalN8SxlrPcG-PaQ",
          "title": "Curso REACT JS ⚛️ - Aprende desde CERO 📈 Componentes, State, JSX (Tutorial Desde Cero en Español)",
          "description": "Te enseño React desde cero. \u200d   ¿Qué es React? ¿Por qué deberías aprenderlo? ¿Por qué lo necesitamos? ¿Qué es JSX ? Props y State. Eventos.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/T_j60n1zgu0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/T_j60n1zgu0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/T_j60n1zgu0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "midudev",
          "liveBroadcastContent": "none",
          "publishTime": "2020-04-11T08:16:31Z"
        }
      }
    ]
  };

export const relatedRes = {
    "kind": "youtube#searchListResponse",
    "etag": "khisJ8kH9LSutVeeWsIwxr995l0",
    "nextPageToken": "CAUQAA",
    "regionCode": "ES",
    "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 5
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "t883YFhK9gzXCSJC443jnS1HE8k",
            "id": {
                "kind": "youtube#video",
                "videoId": "qZXt1Aom3Cs"
            },
            "snippet": {
                "publishedAt": "2021-02-24T16:36:53Z",
                "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
                "title": "Vue JS Crash Course 2021",
                "description": "Learn the fundamentals of Vue JS (v3) in this project-based crash course Task Tracker: https://github.com/bradtraversy/vue-crash-2021 Random User Generator: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/qZXt1Aom3Cs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/qZXt1Aom3Cs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/qZXt1Aom3Cs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Traversy Media",
                "liveBroadcastContent": "none",
                "publishTime": "2021-02-24T16:36:53Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "eDpatJud6y6gfHf2vtbVGzwoNro",
            "id": {
                "kind": "youtube#video",
                "videoId": "5oPyQ8HRjVU"
            },
            "snippet": {
                "publishedAt": "2021-08-16T12:01:05Z",
                "channelId": "UCqt99sKYNTxqlHtzV9weUYA",
                "title": "VU du 16/08/21 : &quot;That&#39;s All Right&quot;",
                "description": "Un regard impertinent et libre, orchestré par Patrick Menais et son équipe, sur le monde de l'image. En avant-première du lundi au samedi à 17h00 sur ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/5oPyQ8HRjVU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/5oPyQ8HRjVU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/5oPyQ8HRjVU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "VU FranceTV",
                "liveBroadcastContent": "none",
                "publishTime": "2021-08-16T12:01:05Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "6sgMUGWioMgzvUaIRmF66Zo68LA",
            "id": {
                "kind": "youtube#video",
                "videoId": "AqesL138vMA"
            },
            "snippet": {
                "publishedAt": "2020-04-23T00:29:35Z",
                "channelId": "UCP15FVAA2UL-QOcGhy7-ezA",
                "title": "¿Qué es Vue.js y por qué es tan especial?",
                "description": "Vue.js es un framework progresivo de JavaScript que te da la flexibilidad necesaria para trabajar con todo tipo de proyectos (grandes o pequeños), además se ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/AqesL138vMA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/AqesL138vMA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/AqesL138vMA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "EDteam",
                "liveBroadcastContent": "none",
                "publishTime": "2020-04-23T00:29:35Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "OkvNLkQ62xNuD0YOSnIQjLGiles",
            "id": {
                "kind": "youtube#playlist",
                "playlistId": "PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT"
            },
            "snippet": {
                "publishedAt": "2018-11-07T23:19:00Z",
                "channelId": "UCH7IANkyEcsVW_y1IlpkamQ",
                "title": "Curso de Vue JS - Tutorial en Español 😍 [Desde Cero]",
                "description": "Curso de Vue JS desde cero para principiantes , Aprende a trabajar con este hermoso framework de Javascript que es realmente poderoso. Si no conoces ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/GAQB7Y4X5fM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/GAQB7Y4X5fM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/GAQB7Y4X5fM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bluuweb !",
                "liveBroadcastContent": "none",
                "publishTime": "2018-11-07T23:19:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "SI-VGW34PpLOwbkKXM1nBwkXFMM",
            "id": {
                "kind": "youtube#video",
                "videoId": "iiV_9EU2vcA"
            },
            "snippet": {
                "publishedAt": "2019-12-10T16:00:13Z",
                "channelId": "UCv85NiROLKddHa0fBATwTzw",
                "title": "Curso Vue.js en Español 📗 Tutorial de Vue 2 desde cero ✅ Instalación, Componentes y más 🔥",
                "description": "Aprende VueJS desde cero hasta profesional aquí https://victorroblesweb.es/master-frameworks-js Suscríbete: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/iiV_9EU2vcA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/iiV_9EU2vcA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/iiV_9EU2vcA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Victor Robles WEB",
                "liveBroadcastContent": "none",
                "publishTime": "2019-12-10T16:00:13Z"
            }
        }
    ]
};

/* RELACIONADOS: (https://developers.google.com/youtube/v3/guides/implementation/videos)
    const res = await youtube.get('/search/', {
        params: {
          type: "video",
          relatedToVideoId: "(idvideo)"
        }
    });
*/

/* POPULARES: (https://developers.google.com/youtube/v3/guides/implementation/videos)
    const res = await youtube.get('/search/', {
        params: {
          chart: "mostPopular",
          (regionCode: ["es"]),
          (videoCategory: [27])
        }
    });
*/

/* VIDEO CATEGORIES: (https://gist.github.com/dgp/1b24bf2961521bd75d6c)
2 - Autos & Vehicles
1 -  Film & Animation
10 - Music
15 - Pets & Animals
17 - Sports
18 - Short Movies
19 - Travel & Events
20 - Gaming
21 - Videoblogging
22 - People & Blogs
23 - Comedy
24 - Entertainment
25 - News & Politics
26 - Howto & Style
27 - Education
28 - Science & Technology
29 - Nonprofits & Activism
30 - Movies
31 - Anime/Animation
32 - Action/Adventure
33 - Classics
34 - Comedy
35 - Documentary
36 - Drama
37 - Family
38 - Foreign
39 - Horror
40 - Sci-Fi/Fantasy
41 - Thriller
42 - Shorts
43 - Shows
44 - Trailers 
*/

/* const responseSecondPage = {
    "kind": "youtube#searchListResponse",
    "etag": "9USePcA-f7pzXFiI2NaCoMdjEd8",
    "nextPageToken": "CAoQAA",
    "prevPageToken": "CAUQAQ",
    "regionCode": "ES",
    "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 5
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "EpA0mebPmZ6GqJfjDXvkw6z3JxM",
        "id": {
          "kind": "youtube#video",
          "videoId": "T_j60n1zgu0"
        },
        "snippet": {
          "publishedAt": "2020-04-11T08:16:31Z",
          "channelId": "UC8LeXCWOalN8SxlrPcG-PaQ",
          "title": "Curso REACT JS ⚛️ - Aprende desde CERO 📈 Componentes, State, JSX (Tutorial Desde Cero en Español)",
          "description": "Te enseño React desde cero. \u200d   ¿Qué es React? ¿Por qué deberías aprenderlo? ¿Por qué lo necesitamos? ¿Qué es JSX ? Props y State. Eventos.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/T_j60n1zgu0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/T_j60n1zgu0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/T_j60n1zgu0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "midudev",
          "liveBroadcastContent": "none",
          "publishTime": "2020-04-11T08:16:31Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "N34k_YkT7BZf5rZR7IzRu2QR1XQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "Ke90Tje7VS0"
        },
        "snippet": {
          "publishedAt": "2018-07-16T16:51:44Z",
          "channelId": "UCWv7vMbMWH4-V0ZXdmDpPBA",
          "title": "React JS - React Tutorial for Beginners",
          "description": "React JS Tutorial - Get up & running with React JS: the most popular JavaScript library in the world! Want to master React? Get my React mastery course: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Ke90Tje7VS0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Ke90Tje7VS0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Programming with Mosh",
          "liveBroadcastContent": "none",
          "publishTime": "2018-07-16T16:51:44Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "LO1W27UtxyVi-qJI5n5j2UBaty0",
        "id": {
          "kind": "youtube#video",
          "videoId": "b-wQJarohBI"
        },
        "snippet": {
          "publishedAt": "2019-07-22T21:00:03Z",
          "channelId": "UC0v-tlzsn0QZwJnkiaUSJVQ",
          "title": "Teens React To Try To Keep Eating While Watching Challenge",
          "description": "Try To Keep Eating While Watching Challenge Reacted to by Teens. Original links below. Join the SuperFam and support FBE: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/b-wQJarohBI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/b-wQJarohBI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/b-wQJarohBI/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "REACT",
          "liveBroadcastContent": "none",
          "publishTime": "2019-07-22T21:00:03Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "zhSyI72Xz6_DHaYNHO1x57RPOL8",
        "id": {
          "kind": "youtube#video",
          "videoId": "1-2eyS0k-IA"
        },
        "snippet": {
          "publishedAt": "2018-02-20T04:15:30Z",
          "channelId": "UC-foHKza2KlpQuo2wi6UCAg",
          "title": "¿Qué es React JS? Breve explicación animada",
          "description": "React (también llamada React.js o ReactJS) es una librería Javascript de código abierto para crear interfaces de usuario con el objetivo de animar al desarrollo ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/1-2eyS0k-IA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/1-2eyS0k-IA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/1-2eyS0k-IA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Bitech Studio",
          "liveBroadcastContent": "none",
          "publishTime": "2018-02-20T04:15:30Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Ja9d-lT9A0Dc0jd5AMyctn2tKqo",
        "id": {
          "kind": "youtube#video",
          "videoId": "IfP7fUqUZy0"
        },
        "snippet": {
          "publishedAt": "2021-08-15T13:35:24Z",
          "channelId": "UCfRNJiafEm1LBBGFTTq4cXw",
          "title": "*TERHARU* BER-11 REACT THIS IS INDONESIA",
          "description": "Get Halilintar The Father Book: https://linktr.ee/genhalilintarmarket Ziggy Zagga Gen Halilintar RBT: https://i.quizy.id/zigzag ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/IfP7fUqUZy0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/IfP7fUqUZy0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/IfP7fUqUZy0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "GEN HALILINTAR",
          "liveBroadcastContent": "none",
          "publishTime": "2021-08-15T13:35:24Z"
        }
      }
    ]
  };  */

/* referencia Youtube API search snippet response 
{
    "kind": "youtube#searchResult",
    "etag": etag,
    "nextPageToken": string,
    ("prevPageToken": string,)
    "regionCode": string,
    "pageInfo": {
      "totalResults": number,
      "resultsPerPage": number
    },
    "id": {
      "kind": string,
      "videoId": string,
      "channelId": string,
      "playlistId": string
    },
    "snippet": {
      "publishedAt": datetime,
      "channelId": string,
      "title": string,
      "description": string,
      "thumbnails": {
        (key): {
          "url": string,
          "width": unsigned integer,
          "height": unsigned integer
        }
      },
      "channelTitle": string
    }
}; */