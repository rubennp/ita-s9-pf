export const filteredItems = search => {
    return searchRes.items.filter(item => new RegExp(search, "gi").test(item.snippet.title)).map(item => { 
      return ({id: item.id.videoId, snippet: {...item.snippet}, nextPage: search.nextPageToken, prevPage: search.prevPageTogen});
    });
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

export const recommendedRes = {
  "kind": "youtube#videoListResponse",
  "etag": "Ma8WRwN-aHVE3bwYRZ8GqMnLgds",
  "items": [
    {
      "kind": "youtube#video",
      "etag": "xvo17yo0xWdIeJeIy5AR7RUl1KA",
      "id": "l_WsiBy6ioE",
      "snippet": {
        "publishedAt": "2021-08-16T09:55:08Z",
        "channelId": "UCT4Jg8h03dD0iN3Pb5L0PMA",
        "title": "Miles esperan en el aeropuerto de Kabul para ser evacuados de Afganistán",
        "description": "Aunque los vuelos comerciales han sido cancelados, miles de afganos han huido hacia el aeropuerto buscando una salida de Afganistán a la desesperada. Para los afganos que quedaron atrapados, se acabó la política. Ya ha empezado una nueva era bajo los talibanes. Los insurgentes aseguran que quieren un traspaso de poder pacífico.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/l_WsiBy6ioE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/l_WsiBy6ioE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/l_WsiBy6ioE/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/l_WsiBy6ioE/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/l_WsiBy6ioE/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "DW Español",
        "tags": [
          "afganistan",
          "kabul",
          "taliban",
          "talibanes",
          "insurgentes",
          "evacuados",
          "aeropuerto kabul"
        ],
        "categoryId": "25",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Miles esperan en el aeropuerto de Kabul para ser evacuados de Afganistán",
          "description": "Aunque los vuelos comerciales han sido cancelados, miles de afganos han huido hacia el aeropuerto buscando una salida de Afganistán a la desesperada. Para los afganos que quedaron atrapados, se acabó la política. Ya ha empezado una nueva era bajo los talibanes. Los insurgentes aseguran que quieren un traspaso de poder pacífico."
        }
      }
    },
    {
      "kind": "youtube#video",
      "etag": "Jg2n46iOxfAECn3_fCSBVngUUSA",
      "id": "Q6j8f-__JKc",
      "snippet": {
        "publishedAt": "2021-08-15T19:43:35Z",
        "channelId": "UC7QZIf0dta-XPXsp9Hv4dTw",
        "title": "AFGANISTÁN: Los talibanes ENTRAN en KABUL y anuncian la formación de un NUEVO GOBIERNO I RTVE",
        "description": "Los talibanes han entrado este domingo en Kabul y se preparan para formar un nuevo gobierno en Afganistán, culminando el rápido avance que en algo más de una semana les ha permitido controlar la mayor parte del país., después de que las tropas de EE.UU. y la OTAN iniciaran en mayo la fase final de su retirada tras 20 años.\n\nAunque los insurgentes, que llegaron este domingo a las puertas de la capital afgana, aseguraron inicialmente que no entrarían en la ciudad, finalmente lo han hecho \"para evitar actos de saqueo en Kabul y que los oportunistas no hagan daño a la gente\", han señalado en un comunicado.\n\n\"No le está permitido a ningún combatiente entrar en casa alguna o torturar o molestar a nadie\", han añadido.\n\nLíderes insurgentes han asegurado a Reuters que combatientes talibanes han entrado en el palacio presidencial y han tomado el control, aunque el gobierno afgano no ha confirmado este extremo.\n\nSegún medios afganos, se han producido varias explosiones en la ciudad.\nEl avance insurgente se ha visto favorecido por la salida del país del presidente afgano, Ashraf Ghani, quien se ha marchado después de pedir a las fuerzas de seguridad que garanticen la \"seguridad de todos los ciudadanos\" en un vídeo remitido a la prensa.\n\nEn un mensaje posterior en Facebook, Ghani ha asegurado que con su marcha ha intentado evitar \"un baño de sangre\", aunque no ofreció detalles sobre su ubiación. Algunas fuentes le sitúan en el vecino Tayikistán.\n\n\n\n\n#Afganistan #Kabul #Talibanes #AshrafGhani #coronavirus #covid19 #news #LiveNews #StreamingNews #españa #noticiasenespañol\n\n👉👉 Más noticias: https://www.rtve.es/noticias\n\n➤SUSCRÍBETE a RTVE Noticias en YouTube: https://bit.ly/2WtyvUx\n✔️Síguenos en Instagram: https://www.instagram.com/rtvenoticias/ \n✔️Síguenos en Twitter: https://twitter.com/rtvenoticias\n✔️Síguenos en Facebook: https://www.facebook.com/RTVENoticias/",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Q6j8f-__JKc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Q6j8f-__JKc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Q6j8f-__JKc/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Q6j8f-__JKc/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Q6j8f-__JKc/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "RTVE Noticias",
        "tags": [
          "rtve",
          "tve",
          "la 1",
          "canal",
          "24 horas",
          "24h",
          "noticias",
          "ultima hora",
          "informacion",
          "noticias de última hora",
          "directo",
          "coronavirus",
          "covid-19",
          "telediario",
          "estado de alarma",
          "rtve estrenos",
          "rueda de prensa",
          "informativo",
          "coronavirus hoy",
          "televisión española",
          "caida de Kabul",
          "Kabul tomada por los talibanes",
          "huida del presidente de Afganistan",
          "Afganistán",
          "Kabul"
        ],
        "categoryId": "25",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "AFGANISTÁN: Los talibanes ENTRAN en KABUL y anuncian la formación de un NUEVO GOBIERNO I RTVE",
          "description": "Los talibanes han entrado este domingo en Kabul y se preparan para formar un nuevo gobierno en Afganistán, culminando el rápido avance que en algo más de una semana les ha permitido controlar la mayor parte del país., después de que las tropas de EE.UU. y la OTAN iniciaran en mayo la fase final de su retirada tras 20 años.\n\nAunque los insurgentes, que llegaron este domingo a las puertas de la capital afgana, aseguraron inicialmente que no entrarían en la ciudad, finalmente lo han hecho \"para evitar actos de saqueo en Kabul y que los oportunistas no hagan daño a la gente\", han señalado en un comunicado.\n\n\"No le está permitido a ningún combatiente entrar en casa alguna o torturar o molestar a nadie\", han añadido.\n\nLíderes insurgentes han asegurado a Reuters que combatientes talibanes han entrado en el palacio presidencial y han tomado el control, aunque el gobierno afgano no ha confirmado este extremo.\n\nSegún medios afganos, se han producido varias explosiones en la ciudad.\nEl avance insurgente se ha visto favorecido por la salida del país del presidente afgano, Ashraf Ghani, quien se ha marchado después de pedir a las fuerzas de seguridad que garanticen la \"seguridad de todos los ciudadanos\" en un vídeo remitido a la prensa.\n\nEn un mensaje posterior en Facebook, Ghani ha asegurado que con su marcha ha intentado evitar \"un baño de sangre\", aunque no ofreció detalles sobre su ubiación. Algunas fuentes le sitúan en el vecino Tayikistán.\n\n\n\n\n#Afganistan #Kabul #Talibanes #AshrafGhani #coronavirus #covid19 #news #LiveNews #StreamingNews #españa #noticiasenespañol\n\n👉👉 Más noticias: https://www.rtve.es/noticias\n\n➤SUSCRÍBETE a RTVE Noticias en YouTube: https://bit.ly/2WtyvUx\n✔️Síguenos en Instagram: https://www.instagram.com/rtvenoticias/ \n✔️Síguenos en Twitter: https://twitter.com/rtvenoticias\n✔️Síguenos en Facebook: https://www.facebook.com/RTVENoticias/"
        },
        "defaultAudioLanguage": "es"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "3BboDgeQ929rIKzfdW9X7dhQUrc",
      "id": "GHN2O-ryNY4",
      "snippet": {
        "publishedAt": "2021-08-18T14:07:15Z",
        "channelId": "UCUBIrDsIVzRpKsClMlSlTpQ",
        "title": "La llamada de un portavoz talibán a la BBC después de la toma de Kabul: “No habrá venganza”",
        "description": "El 15 de agosto, cuando los talibanes tomaron control de Kabul en Afganistán, Suhail Sheheem, un portavoz talibán, llamó en directo a la presentadora de la BBC Yalda Hakim y le dijo que \"no habrá venganza\" contra nadie.\n\"Le aseguramos al pueblo de Afganistán, especialmente en la ciudad de Kabul, que sus propiedades y sus vidas estarán a salvo; no habrá venganza contra nadie\", dijo Shaheem.\n \"Somos servidores del pueblo de este país\", agregó.\nMuchos afganos temen el regreso de los talibanes al poder después de casi 20 años de ocupación estadounidense. \nEl régimen talibán, implementado por primera vez en la década de 1990, estuvo marcado por su interpretación extrema de la sharía o ley islámica, que incluía ejecuciones públicas, lapidaciones y la prohibición del acceso a la educación y al trabajo para las mujeres.\n\nSuscríbete al canal aquí 👉 https://bbc.in/2UHHVsu\n\n-----------------------------------\n\nEste es el canal oficial de la BBC en español. Si te interesa la actualidad internacional y buscas una cobertura imparcial estás en el mejor lugar. \n\nAquí encontrarás videos sobre noticias y temas de actualidad en distintos formatos, desde videos explicativos y documentales hasta entrevistas. \n\nGracias por visitarnos. ¡Nos vemos!\n\n👉 Facebook https://bbc.in/2BxEUCt\n👉 Instagram https://bbc.in/2N3p7AF \n👉 Twitter https://bbc.in/32F72iZ\n\n#Afganistán #Talibán #BBCMundo",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/GHN2O-ryNY4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/GHN2O-ryNY4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/GHN2O-ryNY4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/GHN2O-ryNY4/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/GHN2O-ryNY4/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "BBC News Mundo",
        "tags": [
          "Afganistán",
          "Talibán",
          "Estados Unidos",
          "Kabul",
          "BBC",
          "Yalda Hakim",
          "televisión",
          "caída de Kabul",
          "derechos de las mujeres",
          "sharía",
          "educación de las niñas",
          "régimen talibán",
          "retirada de Estados Unidos de Afganistán",
          "bbc mundo",
          "bbc en español"
        ],
        "categoryId": "25",
        "liveBroadcastContent": "none",
        "defaultLanguage": "es",
        "localized": {
          "title": "La llamada de un portavoz talibán a la BBC después de la toma de Kabul: “No habrá venganza”",
          "description": "El 15 de agosto, cuando los talibanes tomaron control de Kabul en Afganistán, Suhail Sheheem, un portavoz talibán, llamó en directo a la presentadora de la BBC Yalda Hakim y le dijo que \"no habrá venganza\" contra nadie.\n\"Le aseguramos al pueblo de Afganistán, especialmente en la ciudad de Kabul, que sus propiedades y sus vidas estarán a salvo; no habrá venganza contra nadie\", dijo Shaheem.\n \"Somos servidores del pueblo de este país\", agregó.\nMuchos afganos temen el regreso de los talibanes al poder después de casi 20 años de ocupación estadounidense. \nEl régimen talibán, implementado por primera vez en la década de 1990, estuvo marcado por su interpretación extrema de la sharía o ley islámica, que incluía ejecuciones públicas, lapidaciones y la prohibición del acceso a la educación y al trabajo para las mujeres.\n\nSuscríbete al canal aquí 👉 https://bbc.in/2UHHVsu\n\n-----------------------------------\n\nEste es el canal oficial de la BBC en español. Si te interesa la actualidad internacional y buscas una cobertura imparcial estás en el mejor lugar. \n\nAquí encontrarás videos sobre noticias y temas de actualidad en distintos formatos, desde videos explicativos y documentales hasta entrevistas. \n\nGracias por visitarnos. ¡Nos vemos!\n\n👉 Facebook https://bbc.in/2BxEUCt\n👉 Instagram https://bbc.in/2N3p7AF \n👉 Twitter https://bbc.in/32F72iZ\n\n#Afganistán #Talibán #BBCMundo"
        },
        "defaultAudioLanguage": "es-419"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "eoFFBK2FsyW5W_XWQkqUJDw8yVI",
      "id": "HVRcqQapT2A",
      "snippet": {
        "publishedAt": "2021-08-16T12:53:54Z",
        "channelId": "UC2mtXUpAYLYJIZ2deSPhlqw",
        "title": "La retirada de EE.UU. de Afganistán y la toma del país por parte de los Talibanes",
        "description": "La llegada de los talibanes a la capital de Afganistán ha empujado a muchas personas a abandonar precipitadamente el país, lo que ha generado atascos en las carreteras y estampidas en el aeropuerto.\n\nSuscríbete a nuestro canal de eventos en vivo:\nhttps://www.youtube.com/rtenvivo\n\nRT en Twitter: https://twitter.com/ActualidadRT\nRT en Facebook: https://www.facebook.com/ActualidadRT\nRT en Telegram: https://t.me/rtnoticias\n\nVea nuestra señal en vivo: http://actualidad.rt.com/en_vivo\n\nRT EN ESPAÑOL: DESDE RUSIA CON INFORMACIÓN\n\n#RTenEspañol #Afganistán #Kabul #Talibanes",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/HVRcqQapT2A/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/HVRcqQapT2A/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/HVRcqQapT2A/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/HVRcqQapT2A/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/HVRcqQapT2A/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "RT en Español",
        "tags": [
          "rt",
          "rt español",
          "noticias",
          "rt en español",
          "rtenespañol",
          "#rtenespañol",
          "rusia",
          "rt noticias",
          "rt en vivo",
          "noticias en vivo"
        ],
        "categoryId": "25",
        "liveBroadcastContent": "none",
        "defaultLanguage": "es",
        "localized": {
          "title": "La retirada de EE.UU. de Afganistán y la toma del país por parte de los Talibanes",
          "description": "La llegada de los talibanes a la capital de Afganistán ha empujado a muchas personas a abandonar precipitadamente el país, lo que ha generado atascos en las carreteras y estampidas en el aeropuerto.\n\nSuscríbete a nuestro canal de eventos en vivo:\nhttps://www.youtube.com/rtenvivo\n\nRT en Twitter: https://twitter.com/ActualidadRT\nRT en Facebook: https://www.facebook.com/ActualidadRT\nRT en Telegram: https://t.me/rtnoticias\n\nVea nuestra señal en vivo: http://actualidad.rt.com/en_vivo\n\nRT EN ESPAÑOL: DESDE RUSIA CON INFORMACIÓN\n\n#RTenEspañol #Afganistán #Kabul #Talibanes"
        },
        "defaultAudioLanguage": "es"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "pAhAFX74xTdF2P8fVFtWfdYdFEE",
      "id": "hUMS-wvJjbM",
      "snippet": {
        "publishedAt": "2021-08-12T16:00:36Z",
        "channelId": "UCelk6aHijZq-GJBBB9YpReA",
        "title": "صدمة في الجزائر بعد قتل وحرق شاب زعم قاتلوه أن له صلة بحرائق الغابات",
        "description": "صدمة في الجزائر بعد قتل وحرق شاب\nاستياء كبير في الجزائر بعد حادثة قتل الشاب جمال بن اسماعيل ومن ثم حرق جثته في منطقة الأربعاء ناث إيراثن في تيزي وزو بمنطقة القبائل بعد اشتباه البعض بضلوعه في حرائق الغابات.\n#بي_بي_سي_ترندينغ\nللمزيد من الفيديوهات زوروا صفحتنا: https://www.bbc.com/arabic/media/video\nاشترك في بي بي سي :http://bit.ly/BBCNewsArabic",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/hUMS-wvJjbM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/hUMS-wvJjbM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/hUMS-wvJjbM/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/hUMS-wvJjbM/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/hUMS-wvJjbM/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "BBC News عربي",
        "tags": [
          "بي بي سي",
          "بي بي سي عربي",
          "الجزائر",
          "حراق غابات",
          "تيزي وزو",
          "جمال بن اسماعيل",
          "الأربعاء ناث إيراثن",
          "منطقة القبائل",
          "بجاية",
          "الشارع الجزائري",
          "غضب",
          "استياء",
          "جريمة",
          "جريمة قتل",
          "الشرطة",
          "خميس مليانة",
          "الأمازيغية",
          "متطوع",
          "فنان",
          "رسام",
          "موسيقى",
          "المازوت",
          "الديزل",
          "وقود",
          "المديرية العامة للأمن الوطني"
        ],
        "categoryId": "25",
        "liveBroadcastContent": "none",
        "defaultLanguage": "ar",
        "localized": {
          "title": "صدمة في الجزائر بعد قتل وحرق شاب زعم قاتلوه أن له صلة بحرائق الغابات",
          "description": "صدمة في الجزائر بعد قتل وحرق شاب\nاستياء كبير في الجزائر بعد حادثة قتل الشاب جمال بن اسماعيل ومن ثم حرق جثته في منطقة الأربعاء ناث إيراثن في تيزي وزو بمنطقة القبائل بعد اشتباه البعض بضلوعه في حرائق الغابات.\n#بي_بي_سي_ترندينغ\nللمزيد من الفيديوهات زوروا صفحتنا: https://www.bbc.com/arabic/media/video\nاشترك في بي بي سي :http://bit.ly/BBCNewsArabic"
        },
        "defaultAudioLanguage": "ar"
      }
    }
  ],
  "nextPageToken": "CAUQAA",
  "pageInfo": {
    "totalResults": 178,
    "resultsPerPage": 5
  }
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
export const res = [
{
  pageToken: '',
  result: {
    "kind": "youtube#searchListResponse",
    "etag": "omw1-7CjQz9rXw3yHSIUVBxWgik",
    "nextPageToken": "CAoQAA",
    "regionCode": "ES",
    "pageInfo": {
      "totalResults": 54659,
      "resultsPerPage": 10
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "xCFvcFXA66EwFcNkibsiQxiOEO0",
        "id": {
          "kind": "youtube#video",
          "videoId": "gWugI-AxFxI"
        },
        "snippet": {
          "publishedAt": "2019-07-01T00:37:54Z",
          "channelId": "UCtoo4_P6ilCj7jwa4FmA5lQ",
          "title": "¿QUE SE PUEDE HACER CON REACT? - ANALIZANDO REACT JS",
          "description": "Te gustaría aprender React JS? En este video vamos a hablar acerca de esta magnífica librería de javascript. ***** CANAL DE EMPRENDIMIENTOS ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/gWugI-AxFxI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/gWugI-AxFxI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/gWugI-AxFxI/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Soy Dalto",
          "liveBroadcastContent": "none",
          "publishTime": "2019-07-01T00:37:54Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "M70aLNUr0JVvb1c8ljlOHyjUL1Y",
        "id": {
          "kind": "youtube#video",
          "videoId": "I2UBjN5ER4s"
        },
        "snippet": {
          "publishedAt": "2020-08-11T17:00:02Z",
          "channelId": "UCsKsymTY_4BYR-wytLjex7A",
          "title": "React Website Tutorial - Beginner React JS Project Fully Responsive",
          "description": "Learn how to build a React website from scratch in this tutorial. We will use React Hooks and React Router for this beginner React JS Project. The website is fully ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/I2UBjN5ER4s/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/I2UBjN5ER4s/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/I2UBjN5ER4s/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Brian Design",
          "liveBroadcastContent": "none",
          "publishTime": "2020-08-11T17:00:02Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "kiIweQercK4if_idO2mXnL-AYxU",
        "id": {
          "kind": "youtube#video",
          "videoId": "hQAHSlTtcmY"
        },
        "snippet": {
          "publishedAt": "2019-10-22T16:00:07Z",
          "channelId": "UCFbNIlppjAuEX4znoulh0Cw",
          "title": "Learn React In 30 Minutes",
          "description": "IMPORTANT: Full React Course: https://courses.webdevsimplified.com/learn-react-today In this video I will be covering all of the basics of React in only 30 ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/hQAHSlTtcmY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/hQAHSlTtcmY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/hQAHSlTtcmY/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Web Dev Simplified",
          "liveBroadcastContent": "none",
          "publishTime": "2019-10-22T16:00:07Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Ay6pqzmu-4LkOGIhAGsBDKLdmZs",
        "id": {
          "kind": "youtube#video",
          "videoId": "xFS66f7V0-0"
        },
        "snippet": {
          "publishedAt": "2020-07-09T04:24:43Z",
          "channelId": "UCw05fUBPwmpu-ehXFMqfdMw",
          "title": "Hablemos de React.JS con Miguel Ángel Duran @midudev",
          "description": "En entrevista con expertos, he tenido la oportunidad de entrevistar a Miguel Ángel Duran @midudev quien cuenta con cursos y contenido en español sobre ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/xFS66f7V0-0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/xFS66f7V0-0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/xFS66f7V0-0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Oscar Barajas",
          "liveBroadcastContent": "none",
          "publishTime": "2020-07-09T04:24:43Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "VdHpOrfqu_KpgQnkpaECVhooN0U",
        "id": {
          "kind": "youtube#video",
          "videoId": "XxVg_s8xAms"
        },
        "snippet": {
          "publishedAt": "2013-07-08T22:43:07Z",
          "channelId": "UCP_lo1MFyx5IXDeD9s_6nUw",
          "title": "Introduction to React.js",
          "description": "Tom Occhino and Jordan Walke spoke about React.js at Facebook Seattle.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/XxVg_s8xAms/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/XxVg_s8xAms/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/XxVg_s8xAms/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Facebook Developers",
          "liveBroadcastContent": "none",
          "publishTime": "2013-07-08T22:43:07Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "gs_U1f0WfFRpQ9NxinqdqAL5120",
        "id": {
          "kind": "youtube#video",
          "videoId": "TG2wb19qO5M"
        },
        "snippet": {
          "publishedAt": "2021-02-03T22:54:12Z",
          "channelId": "UClmcDeaz6DrSJ85-E3fY3Pg",
          "title": "💗 Programa un eCommerce Full Responsive con React⚛️ 🔥🔥[Aprender a programar con  REACTJS]",
          "description": "Programamos un eCommerce full responsive con React en directo . ¿Qué vas a aprender en este directo? Construir una Tienda online con react Hacer que ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/TG2wb19qO5M/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/TG2wb19qO5M/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/TG2wb19qO5M/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "JavaScript DeNoobAPro",
          "liveBroadcastContent": "none",
          "publishTime": "2021-02-03T22:54:12Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "AH9zbT5mo218g7n1veYDz2jw5gA",
        "id": {
          "kind": "youtube#video",
          "videoId": "3nLTB_E6XAM"
        },
        "snippet": {
          "publishedAt": "2020-08-15T17:00:00Z",
          "channelId": "UCsKsymTY_4BYR-wytLjex7A",
          "title": "React Website Responsive Tutorial - Beginner React JS Project Using Hooks and Router",
          "description": "Learn how to build a responsive React website using React Hooks and React Router in this beginner tutorial. We are going to build the front end UI using React ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3nLTB_E6XAM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3nLTB_E6XAM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3nLTB_E6XAM/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Brian Design",
          "liveBroadcastContent": "none",
          "publishTime": "2020-08-15T17:00:00Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Y7IXczklcAYzJdy9ZOyqr-qk1r8",
        "id": {
          "kind": "youtube#video",
          "videoId": "NTDJ-NQ32_E"
        },
        "snippet": {
          "publishedAt": "2019-11-22T21:43:35Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "React Suspense Introduction (Data Fetching)",
          "description": "In this video we're just going to experiment with React Suspense data fetching. Suspense is still an EXPERIMENTAL FEATURE at this time. Sponsor: Freelancer ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/NTDJ-NQ32_E/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/NTDJ-NQ32_E/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/NTDJ-NQ32_E/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-11-22T21:43:35Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "dIpcxB8WWUNQZJBj0wThMelCx_c",
        "id": {
          "kind": "youtube#video",
          "videoId": "BkX4niTo9Ow"
        },
        "snippet": {
          "publishedAt": "2020-09-09T02:36:58Z",
          "channelId": "UCw9mYSlqKRXI6l4vH-tAYpQ",
          "title": "🔥 Clone do Whatsapp + Firebase em ReactJS para iniciantes",
          "description": "Acesse agora: https://b7web.com.br/fullstack.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/BkX4niTo9Ow/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/BkX4niTo9Ow/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/BkX4niTo9Ow/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Bonieky Lacerda",
          "liveBroadcastContent": "none",
          "publishTime": "2020-09-09T02:36:58Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "ivrFTZRtYiFy-SIkEhLCyl9E7Gw",
        "id": {
          "kind": "youtube#video",
          "videoId": "0UNNThVWXr0"
        },
        "snippet": {
          "publishedAt": "2020-12-20T19:59:39Z",
          "channelId": "UCoHodUr9NAaifHqJRgMwY4g",
          "title": "Make a Product Inventory List using REACTJS and Bootstrap",
          "description": "We discussed here about: Add product name, price, quantity in inventory data by solving below features: - How to use Form element in Reactjs - How to track ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/0UNNThVWXr0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/0UNNThVWXr0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/0UNNThVWXr0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "mailab",
          "liveBroadcastContent": "none",
          "publishTime": "2020-12-20T19:59:39Z"
        }
      }
    ]
  },
},
{ 
  pageToken: 'CAoQAA',
  result:
  {
    "kind": "youtube#searchListResponse",
    "etag": "HQ-i6aG2HqOV79DalL3T7NEjewE",
    "nextPageToken": "CBQQAA",
    "prevPageToken": "CAoQAQ",
    "regionCode": "ES",
    "pageInfo": {
      "totalResults": 54651,
      "resultsPerPage": 10
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "wI4CRKPNJvNr8EaIrqWNUMHOnqE",
        "id": {
          "kind": "youtube#video",
          "videoId": "TRCDsB9i3bI"
        },
        "snippet": {
          "publishedAt": "2020-10-26T15:00:11Z",
          "channelId": "UC2xRE4hUCQ3xO3ymEtMh1Hw",
          "title": "React &amp; Node Tutorial - Full ECommerce in 9 Hours [2021]",
          "description": "Build ECommerce Website Like Amazon For All Levels Developers Website Demo : https://react-amazona.herokuapp.com Website Demo Copy: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/TRCDsB9i3bI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/TRCDsB9i3bI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/TRCDsB9i3bI/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Coding with Basir",
          "liveBroadcastContent": "none",
          "publishTime": "2020-10-26T15:00:11Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "_vzsjJYSZ2LSvR1wmqhrS46hsUo",
        "id": {
          "kind": "youtube#video",
          "videoId": "x_EEwGe-a9o"
        },
        "snippet": {
          "publishedAt": "2020-09-15T10:00:13Z",
          "channelId": "UC1DUQiZduv_yNZy0O7n_iHA",
          "title": "Netflix Clone - React Tutorial - Styled Components - Firebase (Firestore &amp; Auth)",
          "description": "Subscribe: https://bit.ly/CognitiveSurge Support the channel by becoming a member: https://www.youtube.com/c/CognitiveSurge/join Follow me on Twitter: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/x_EEwGe-a9o/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/x_EEwGe-a9o/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/x_EEwGe-a9o/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Karl Hadwen",
          "liveBroadcastContent": "none",
          "publishTime": "2020-09-15T10:00:13Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "9LZ8gB5NTNl8hwFxCeB9FzN6wHM",
        "id": {
          "kind": "youtube#video",
          "videoId": "LZ0OsaFVmDw"
        },
        "snippet": {
          "publishedAt": "2021-04-08T22:31:56Z",
          "channelId": "UCe8QnuYNBRcx6BATtL_Dvog",
          "title": "Home - Twitter Clone usando ReactJS | Parte 2",
          "description": "Twitter Clone usando ReactJS | Parte 2 - Home Meu curso de Desenvolvimento Web e Mobile Fullstack Completo: https://sun.eduzz.com/785969 Codigo do ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LZ0OsaFVmDw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LZ0OsaFVmDw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LZ0OsaFVmDw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Gustavo Noronha",
          "liveBroadcastContent": "none",
          "publishTime": "2021-04-08T22:31:56Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "nwxw1_PTUrcEXfzLKm8KZDo95mg",
        "id": {
          "kind": "youtube#video",
          "videoId": "pUxrDcITyjg"
        },
        "snippet": {
          "publishedAt": "2020-08-18T22:08:03Z",
          "channelId": "UCqrILQNl5Ed9Dz6CGMyvMTQ",
          "title": "🔴 Let&#39;s Build a WhatsApp Clone with REACT JS for Beginners!",
          "description": "FREE JavaScript Training ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/pUxrDcITyjg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/pUxrDcITyjg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/pUxrDcITyjg/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Clever Programmer",
          "liveBroadcastContent": "none",
          "publishTime": "2020-08-18T22:08:03Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "coQ1QJ1rDdyMkmEnBCgBI5r_lBU",
        "id": {
          "kind": "youtube#video",
          "videoId": "3ylL1QgspEM"
        },
        "snippet": {
          "publishedAt": "2020-07-05T03:18:40Z",
          "channelId": "UCLsSfk2x6p3XvlknDi39zCQ",
          "title": "Curso de React.JS usando el API de Rick and Morty",
          "description": "Suscríbete. Lleva tu carrera al siguiente nivel con mis planes de mentoría https://www.patreon.com/LeonidasEsteban Sígueme para ver el detrás de cámara ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3ylL1QgspEM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3ylL1QgspEM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3ylL1QgspEM/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Leonidas Esteban",
          "liveBroadcastContent": "none",
          "publishTime": "2020-07-05T03:18:40Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "oTUt_q8EaEAf-SleM3GnJJoXg8c",
        "id": {
          "kind": "youtube#video",
          "videoId": "j6btXrTzz3U"
        },
        "snippet": {
          "publishedAt": "2021-04-20T09:54:33Z",
          "channelId": "UClmcDeaz6DrSJ85-E3fY3Pg",
          "title": "[DEMO] Tabla Dinámica con REACTJS  ⚛️ [cotización criptomonedas]",
          "description": "Ver el proyecto completo: https://youtu.be/Lvzr2aTThxI En este vídeo mostramos el resultado final del proyecto \"Tabla dinámica de cotización de criptomonedas\" ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/j6btXrTzz3U/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/j6btXrTzz3U/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/j6btXrTzz3U/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "JavaScript DeNoobAPro",
          "liveBroadcastContent": "none",
          "publishTime": "2021-04-20T09:54:33Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "YF_u_GQ7mIxfGA7Bl5WRhTS0a-Y",
        "id": {
          "kind": "youtube#video",
          "videoId": "Fy9SdZLBTOo"
        },
        "snippet": {
          "publishedAt": "2020-05-06T15:30:14Z",
          "channelId": "UC2xRE4hUCQ3xO3ymEtMh1Hw",
          "title": "React &amp; Node Tutorial - Full ECommerce in 5 Hours [2020]",
          "description": "Watch New Version Of This Course: https://youtu.be/TRCDsB9i3bI Build ECommerce Website Like Amazon For All Levels Developers Demo ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Fy9SdZLBTOo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Fy9SdZLBTOo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Fy9SdZLBTOo/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Coding with Basir",
          "liveBroadcastContent": "none",
          "publishTime": "2020-05-06T15:30:14Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "pF5zS-qqawy9Bftcf61UDKY7MyQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "AUmpOVXFmOw"
        },
        "snippet": {
          "publishedAt": "2021-08-26T16:44:35Z",
          "channelId": "UCMVky0AEACLisBqM6mXxCng",
          "title": "💛  Integrando Stripe con Symfony y React #symfony #reactjs",
          "description": "Nuevo directo para terminar el mes! El próximo lunes estaré con todos vosotros con una demostración en vivo de cómo integrar pagos con Stripe. El objetivo de ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/AUmpOVXFmOw/default_live.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/AUmpOVXFmOw/mqdefault_live.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/AUmpOVXFmOw/hqdefault_live.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Latte And Code",
          "liveBroadcastContent": "upcoming",
          "publishTime": "2021-08-26T16:44:35Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "bsjfIZ9PN9_77zOEP9kWuPSYOEM",
        "id": {
          "kind": "youtube#video",
          "videoId": "JCRKR7vbS8I"
        },
        "snippet": {
          "publishedAt": "2020-09-18T15:10:12Z",
          "channelId": "UCLzu8B0y7Tml4UDHKTLLVgw",
          "title": "Facebook Clone  Using ReactJs For Beginners|ReactJs Facebook Project| Facebook clone react by Johnny",
          "description": "FREE JavaScript Training https://www.youtube.com/watch?v=LkfUNNTsZSY&list=PL98MbIu3NiM0vvjIX-f8_TeS7bz6VOEdF Do you want to master React JS ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/JCRKR7vbS8I/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/JCRKR7vbS8I/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/JCRKR7vbS8I/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Johnny",
          "liveBroadcastContent": "none",
          "publishTime": "2020-09-18T15:10:12Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "L1lcM6j5z_qK1v3SXBh9yXEFPtY",
        "id": {
          "kind": "youtube#video",
          "videoId": "9zcMnJI3B7M"
        },
        "snippet": {
          "publishedAt": "2020-09-13T10:34:48Z",
          "channelId": "UCeYt6blRBKuNrEg_-282fSA",
          "title": "Build a Todo App with React Js | Using React Hooks",
          "description": "Hey People, Let's create Todo App in React JS. we're going to use React Hooks to build our App. You can add this small project in your portfolio. Like, Sub   ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/9zcMnJI3B7M/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/9zcMnJI3B7M/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/9zcMnJI3B7M/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "CodeBucks",
          "liveBroadcastContent": "none",
          "publishTime": "2020-09-13T10:34:48Z"
        }
      }
    ]
  },
},
{
  pageToken: 'CBQQAA',
  result:
  {
    "kind": "youtube#searchListResponse",
    "etag": "PADS1172bsDvc5dKKm3DZDS4ddg",
    "nextPageToken": "CB4QAA",
    "prevPageToken": "CBQQAQ",
    "regionCode": "ES",
    "pageInfo": {
      "totalResults": 54651,
      "resultsPerPage": 10
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "yN-Vf1SQa0iwMDLbySkbPq17iBQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "sFPuRv1ZL6o"
        },
        "snippet": {
          "publishedAt": "2020-05-05T18:35:16Z",
          "channelId": "UC0w7UkPMjt-xuehOhBFJ-iQ",
          "title": "7. Mi primera página web con React JS",
          "description": "EnVivo Webinar Mi primera página web con React.js. \u200d Expositor: Percy Tuncar, desarrollador Front End, leader Google Developer Group students.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/sFPuRv1ZL6o/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/sFPuRv1ZL6o/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/sFPuRv1ZL6o/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Centro de Innovación de Miraflores",
          "liveBroadcastContent": "none",
          "publishTime": "2020-05-05T18:35:16Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "t-E8SAVMtVZPxeCOy80UB1T0GDs",
        "id": {
          "kind": "youtube#video",
          "videoId": "gmparjlRJnY"
        },
        "snippet": {
          "publishedAt": "2020-09-28T17:16:49Z",
          "channelId": "UC21-E77E8H0wd2Mpg3cFLuA",
          "title": "React JS Full Course in Tamil | React JS Tutorial for Beginners in Tamil | VJ TECHNO WIZARD",
          "description": "VJTECHNOWIZARD #reactjstutorialforbeginnersintamil #reactjsfullcourseintamil #learnreactjs In this video you will learn about all the react js concepts in tamil .",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/gmparjlRJnY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/gmparjlRJnY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/gmparjlRJnY/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "VJ TECHNO WIZARD",
          "liveBroadcastContent": "none",
          "publishTime": "2020-09-28T17:16:49Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "ffwXmyM0L3bw3xkR1p9aS2lyEcg",
        "id": {
          "kind": "youtube#video",
          "videoId": "PKwu15ldZ7k"
        },
        "snippet": {
          "publishedAt": "2020-10-10T16:00:09Z",
          "channelId": "UCFbNIlppjAuEX4znoulh0Cw",
          "title": "React Authentication Crash Course With Firebase And Routing",
          "description": "IMPORTANT: Learn React Today Course: https://courses.webdevsimplified.com/learn-react-today Authentication is crucial for nearly every application.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/PKwu15ldZ7k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/PKwu15ldZ7k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/PKwu15ldZ7k/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Web Dev Simplified",
          "liveBroadcastContent": "none",
          "publishTime": "2020-10-10T16:00:09Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "NVcnnu-Z996anqF2WRXW4Rzsj1E",
        "id": {
          "kind": "youtube#video",
          "videoId": "4PJkRNNHb3w"
        },
        "snippet": {
          "publishedAt": "2020-09-22T18:58:10Z",
          "channelId": "UCOnf1Tgb2pYm9LtnfN4j0Yw",
          "title": "Google Tag Manager y medición de eventos en React.js",
          "description": "Introducción a la medición de eventos para plataformas de analítica y publicidad web mediante Google Tag Manager y el dataLayer en sitios web hechos en ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/4PJkRNNHb3w/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/4PJkRNNHb3w/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/4PJkRNNHb3w/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "LazioB",
          "liveBroadcastContent": "none",
          "publishTime": "2020-09-22T18:58:10Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "GAB8tP47TV1p6DAwwLLGQCAK5PA",
        "id": {
          "kind": "youtube#video",
          "videoId": "47q_yLxsfOU"
        },
        "snippet": {
          "publishedAt": "2020-12-09T16:00:11Z",
          "channelId": "UC3NDbeN0Jq_InNAhiJtvHcQ",
          "title": "Выкидываем ReactJS [ru] / Александр Соловьев",
          "description": "Видео с онлайн-конференции JavaScript fwdays'20 autumn, которая прошла 26 сентября 2020 года. Описание доклада: Все знают, что много ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/47q_yLxsfOU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/47q_yLxsfOU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/47q_yLxsfOU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "fwdays",
          "liveBroadcastContent": "none",
          "publishTime": "2020-12-09T16:00:11Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Hd7n9mxCc0JKMYwi2Xo7MqmyklM",
        "id": {
          "kind": "youtube#video",
          "videoId": "1iAqFwTv4Ms"
        },
        "snippet": {
          "publishedAt": "2017-04-23T01:10:17Z",
          "channelId": "UCX9NJ471o7Wie1DQe94RVIg",
          "title": "React.js | ConfiguraTu Proyecto con React.js, Webpack, Node.js, y Express",
          "description": "Gracias a Kite por patrocinar esta sección del vídeo! Kite es un asistente de autocompletado gratuito con tecnología de IA que te ayudará a codificar de forma ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/1iAqFwTv4Ms/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/1iAqFwTv4Ms/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/1iAqFwTv4Ms/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Fazt",
          "liveBroadcastContent": "none",
          "publishTime": "2017-04-23T01:10:17Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "CGohTBlw3rtUYkGbEqiFIZSd2hE",
        "id": {
          "kind": "youtube#video",
          "videoId": "IR7zviWARSE"
        },
        "snippet": {
          "publishedAt": "2019-07-01T03:55:56Z",
          "channelId": "UCdldbhAwO16vjnDwACTs5gQ",
          "title": "Разработка чата на ReactJS + NodeJS: Начинаем разрабатывать серверную часть (TS, Express, Mongoose)",
          "description": "О чём данный курс? Как разработать свой чат на ReactJS, Redux + NodeJS, Socket.IO, MongoDB. Сделаем полноценный чат с возможностью загрузки ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/IR7zviWARSE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/IR7zviWARSE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/IR7zviWARSE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Archakov Blog",
          "liveBroadcastContent": "none",
          "publishTime": "2019-07-01T03:55:56Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "nQJjiwtSuPkPcpWAARbDWlffvSM",
        "id": {
          "kind": "youtube#video",
          "videoId": "27f3B1qndW8"
        },
        "snippet": {
          "publishedAt": "2020-12-02T11:19:44Z",
          "channelId": "UCeYt6blRBKuNrEg_-282fSA",
          "title": "Fetch data using Fetch API in React JS | Part-1 | React Basics",
          "description": "In this video, We're going to learn how to use Fetch API in React JS. The fetch() API is an inbuilt JavaScript method for getting resources from a server or an API ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/27f3B1qndW8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/27f3B1qndW8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/27f3B1qndW8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "CodeBucks",
          "liveBroadcastContent": "none",
          "publishTime": "2020-12-02T11:19:44Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "ruIeQ-kH_3aUljNWASBjm4F03jA",
        "id": {
          "kind": "youtube#video",
          "videoId": "LfA2XDmgVbo"
        },
        "snippet": {
          "publishedAt": "2018-08-20T22:00:05Z",
          "channelId": "UC7Rux8g2yrvMoOsEvFm_OGA",
          "title": "React JS Crash Course – Server-Side Rendering with React and React Router v4",
          "description": "https://github.com/simpletut - Learn how to build Universal React Applications. Official website: https://simpletut.com Like us on Facebook ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LfA2XDmgVbo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LfA2XDmgVbo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LfA2XDmgVbo/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "SimpleTut",
          "liveBroadcastContent": "none",
          "publishTime": "2018-08-20T22:00:05Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "BUAjskfAD1oKB6TtU5iG45iKjvw",
        "id": {
          "kind": "youtube#video",
          "videoId": "t2ypzz6gJm0"
        },
        "snippet": {
          "publishedAt": "2020-06-09T16:00:32Z",
          "channelId": "UCFbNIlppjAuEX4znoulh0Cw",
          "title": "Learn useRef in 11 Minutes",
          "description": "IMPORTANT: Full React Course: https://courses.webdevsimplified.com/learn-react-today In this video I cover everything you need to know about the useRef ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/t2ypzz6gJm0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/t2ypzz6gJm0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/t2ypzz6gJm0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Web Dev Simplified",
          "liveBroadcastContent": "none",
          "publishTime": "2020-06-09T16:00:32Z"
        }
      }
    ]
  },
}
];
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
  
/* const responseThirdPage = 
  {
    "kind": "youtube#searchListResponse",
    "etag": "H3-cJGy-dyTzf0sVlIv-Klu7wHI",
    "nextPageToken": "CAUQAA",
    "regionCode": "ES",
    "pageInfo": {
      "totalResults": 128,
      "resultsPerPage": 5
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "J217Hhw_qXUsgKJ12FYUaZz-O_g",
        "id": {
          "kind": "youtube#video",
          "videoId": "M3DO5Zfk4NI"
        },
        "snippet": {
          "publishedAt": "2021-06-23T23:00:13Z",
          "channelId": "UCP15FVAA2UL-QOcGhy7-ezA",
          "title": "La ruta para ser desarrollador web profesional en 2021 🤩",
          "description": "La web es una de las áreas de la tecnología con mayor mercado laboral porque no está ligada a ningún sistema operativo, dispositivo o empresa, sino que es abierta y universal. Sin embargo, esta ventaja es compleja ya que existen muchos caminos posibles para ser un desarrollador web profesional. Incluso dentro del mismo rol (como backend y frontend por ejemplo) existen muchas tecnologías que puedes escoger. Esto hace que cualquier persona que empiece en el mundo de la web quede muy confundida sin saber qué camino tomar.\nÁlvaro Felipe te explica cual es el mejor camino para entrar a este mundo y te dejará completamente listo para iniciar tu carrera como desarrollador web profesional.\n¡No te lo pierdas! 😉\n\nMira el curso que llegó esta semana a EDteam: 👇🎉\n👨\u200d💻 Curso: Auditoría en seguridad para aplicaciones Android https://ed.team/cursos/auditoria-android\n\n🏆 Te damos el poder para alcanzar tus sueños a través de la educación.\n🌎 100% de raza latina | 100% Remotos (5 años)\n💪 #NoTeDetengas 🦄 #EDteamFunciona\n\nWeb y comunidad EDteam 💻 https://ed.team/comunidad\nSé un estudiante premium en EDteam⭐ https://ed.team/premium\n\n🔰 LinkedIn: https://ed.team/linkedin\n🔰 Instagram: https://ed.team/instagram\n🔰 TikTok: https://www.tiktok.com/@edteam",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/M3DO5Zfk4NI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/M3DO5Zfk4NI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/M3DO5Zfk4NI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/M3DO5Zfk4NI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/M3DO5Zfk4NI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "EDteam",
          "liveBroadcastContent": "none",
          "publishTime": "2021-06-23T23:00:13Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "FZOUl7XYhbZFm5zn4c9mGjFG2bQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "zIY87vU33aA"
        },
        "snippet": {
          "publishedAt": "2019-06-24T20:22:19Z",
          "channelId": "UCX9NJ471o7Wie1DQe94RVIg",
          "title": "Reactjs, Curso Práctico para Principiantes (React 16)",
          "description": "EXPO, SDK De React para desarrollo de Apps\nLink ➞ https://bit.ly/3jdjnST\n\nAprende a crear aplicaciones web Frontend usando una de las bibliotecas de Javascript más populares para la creación de Interfaces: Reactjs. En este curso de React 16, estaremos aprendiendo lo siguiente:\n\n🛍 Descuentos:\nNordVPN ➞ 68% de descuento en plan de 2 años  ➞ Código: fazt\nHostinger ➞ 7% de descuento en cualquier compra ➞Código: FAZT\nDigital Ocean ➞ Obtén 100$ gratis ➞ https://m.do.co/c/8ef261d77de5\n\n👨\u200d💻 ¿Qué servicios utilizo? \nKite ➞ https://bit.ly/3dPzXHe\nNordVPN ➞ https://bit.ly/2Te7p0J\nHostinger ➞ https://www.hostg.xyz/SH4YB\nCloudinary ➞ https://bit.ly/3ohNlJ7\nSiteGround ➞ https://bit.ly/31u9ZEk\nNamecheap ➞ https://bit.ly/3kne9W8\n\n🖥️ Cursos:\nCurso de Python Para Principiantes ➞ https://youtu.be/chPhlsHoEPo\nCurso de Raspberry PI ➞ https://youtu.be/ra6kNSIB1uA\nSetup Visual Studio Code ➞ https://youtu.be/zbycB-Yetb0\nCurso del Stack MERN ➞ https://youtu.be/_RZ-T6TxP7w\nCurso de Typescript ➞ https://youtu.be/Xxqh0RoWxNc\n\n🌐 Redes:\nFazt Web ➞ https://www.faztweb.com/\nFacebook ➞ https://facebook.com/fazttech\nInstagram ➞ https://www.instagram.com/fazttech\nTwitter ➞ https://twitter.com/fazttech\nTelegram ➞ https://t.me/fazttech\nTwitch ➞ https://www.twitch.tv/fazttech\nSlack ➞ https://bit.ly/3dPqCPT\nDiscord ➞ https://discord.gg/mFUY4sT\nBlog ➞  http://blog.faztweb.com\n\n📩 Contacto:\n➞ fazt@faztweb.com\n\n#react #reactjs #javascript",
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
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/zIY87vU33aA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/zIY87vU33aA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Fazt",
          "liveBroadcastContent": "none",
          "publishTime": "2019-06-24T20:22:19Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "blW3VFs2cnnPTwg-O59Sh0g04pE",
        "id": {
          "kind": "youtube#video",
          "videoId": "A-iKX8Shge4"
        },
        "snippet": {
          "publishedAt": "2020-03-10T01:39:12Z",
          "channelId": "UCP15FVAA2UL-QOcGhy7-ezA",
          "title": "Framework vs Librería",
          "description": "Cuando nos adentramos más en el mundo del desarrollo de software queremos construir aplicaciones mucho más rápido y las librerías y frameworks nos ayudan, pero ¿cuando deberías usar una librería y cuando un framework? En este video te enseñamos para que sirven, cuales son sus ventajas y en que casos debes usarlos.\n\nHemos preparado un artículo con el resumen del video, léelo aquí 📑 https://ed.team/blog/framework-vs-libreria\n\n🚀 Ayudamos a las personas a desarrollarse y alcanzar sus sueños con cursos de programación, diseño y emprendimiento online y en español.\n#NuncaTeDetengas\n\n¡🎁 Ahora puedes ser Premium gratis!\nDescubre como aquí 👉 https://ed.team/blog/tambien-soy-edteam\n\nWeb y comunidad EDteam\n💻 https://ed.team\n\nSé un estudiante premium en EDteam\n⭐ https://ed.team/premium\n\n💼 LinkedIn: https://ed.team/linkedin\n📷 Instagram: https://ed.team/instagram\n🕊 Twitter: https://ed.team/twitter\n🦄 Facebook:https://ed.team/facebook",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/A-iKX8Shge4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/A-iKX8Shge4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/A-iKX8Shge4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/A-iKX8Shge4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/A-iKX8Shge4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "EDteam",
          "liveBroadcastContent": "none",
          "publishTime": "2020-03-10T01:39:12Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "JMT8HjDfU79RFWZK0W3N9017c-A",
        "id": {
          "kind": "youtube#video",
          "videoId": "jGehuhFhtnE"
        },
        "snippet": {
          "publishedAt": "2019-08-25T20:47:54Z",
          "channelId": "UCP15FVAA2UL-QOcGhy7-ezA",
          "title": "¿Qué es Git y cómo funciona?",
          "description": "¿Te han dicho que si no sabes Git no podrás encontrar trabajo aunque ya sepas programar? ¡Es verdad! Git es un sistema de control de versiones de software que permite trabajar en equipo llevando un historial de todos los cambios en el proyecto.\n\nAprende Git en nuestro curso https://ed.team/cursos/git\n\nEn este video aprenderás:\n✅ ¿Qué es un Sistema de Control de Versiones (VCS)?\n✅ ¿Qué es Git y cuales son sus características?\n✅ ¿Que significan los términos repositorio, commit, clon, fork o ramas?\n✅ ¿Cuál es el flujo de trabajo para usar Git en un proyecto?\n✅ Herramientas gráficas para usar Git\n✅ ¿Qué son Github, Bitbucket y Gitlab?\n✅ ¿Qué editores e IDEs integran Git?\n\n🔥 Aprende programación, diseño y emprendimiento con la mejor metodología en español. Un futuro de oportunidades laborales y de emprendimiento te está esperando.\n\nWeb y comunidad EDteam\n✅ https://ed.team\n\nSé un estudiante premium en EDteam\n✅ https://ed.team/premium\n\nInstagram:\n✅ https://ed.team/instagram\n\nTwitter\n✅ https://ed.team/twitter",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/jGehuhFhtnE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/jGehuhFhtnE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/jGehuhFhtnE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/jGehuhFhtnE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/jGehuhFhtnE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "EDteam",
          "liveBroadcastContent": "none",
          "publishTime": "2019-08-25T20:47:54Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "fCxmXsLssqE77oD5-rcJFARIaFs",
        "id": {
          "kind": "youtube#video",
          "videoId": "bvxm389cYVI"
        },
        "snippet": {
          "publishedAt": "2020-03-07T13:48:02Z",
          "channelId": "UCe9_3wN0e_b0jRETgpdgq2A",
          "title": "¿Qué es ReactJS? ⚛️ ¿Cómo funciona? Explicación animada",
          "description": "Nuestra querida LauriMedusa te va a explicar que es React.\nPor medio de unas pequeñas animaciones, te explicará que es el DOM, los componentes, los props o propiedades, JSX e hidratación.\n\n\nSiguenos en redes sociales:\nFacebook: https://www.facebook.com/debakatas\nInstagram: instagram.com/bakatascom/\n\nEn la web:\ndebakatas.com\nhey@debakatas.com\n\n\n\n\n\n\n\n\n\n\nAnimacion realizada por: Laurita Cubillos Rico https://www.youtube.com/channel/UC6QLFu57RGOWHQ7A5y8PCMw",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/bvxm389cYVI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/bvxm389cYVI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/bvxm389cYVI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/bvxm389cYVI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/bvxm389cYVI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "DeBakatas",
          "liveBroadcastContent": "none",
          "publishTime": "2020-03-07T13:48:02Z"
        }
      }
    ]
  }; */

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

