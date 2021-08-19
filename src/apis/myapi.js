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