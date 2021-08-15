
// ... para tener algun dato con el que poder "trabajar" por problemas con la cuota en la API de youtube ...
export const response = {
    count: 5,
    items: 
    [
        { 
            id: { 
                videoId: "Dorf8i6lCuk" 
            }, 
            snippet: { 
                title: "React Full Project", 
                description: 
                `Free tutorial 2021! Inmensae subtilitatis, obscuris et malesuada fames. 
                Contra legem facit qui id facit quod lex prohibet.`
            },
        },
        { 
            id: { 
                videoId: "NCwa_xi0Uuc" 
            }, 
            snippet: { 
                title: "ES6 in 1 hour",
                description: 
                `ES6 Tutorial: Learn Modern JavaScript in 1 Hour.
                Ullamco laboris nisi ut aliquid ex ea commodi consequat. Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae. 
                Inmensae subtilitatis, obscuris et malesuada fames.` 
            } 
        },
        { 
            id: { 
                videoId: "a00NRSFgHsY" 
            }, 
            snippet: { 
                title: "Learn this, please!",
                description: 
                `5 JavaScript Concepts you HAVE TO KNOW.
                Quis aute iure reprehenderit in voluptate velit esse. Curabitur est gravida et libero vitae dictum. A communi observantia non est recedendum. Integer legentibus erat a ante historiarum dapibus. Ambitioni dedisse scripsisse iudicaretur.
                Ut enim ad minim veniam, quis nostrud exercitation. Quisque placerat facilisis egestas cillum dolore. Cras mattis iudicium purus sit amet fermentum. Sed haec quis possit intrepidus aestimare tellus. Mercedem aut nummos unde unde extricat, amaras.`
            } 
        },
        { 
            id: { 
                videoId: "EMk6nom1aS4" 
            }, 
            snippet: { 
                title: "APRENDE REACT BÁSICO en 30 MINUTOS",
                description: 
                `Tutorial de React.js Desde 0.
                Pellentesque habitant morbi tristique senectus et netus.
                Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.` 
            } 
        },
        { 
            id: { 
                videoId: "f-E1zyTfA3Q" 
            }, 
            snippet: { 
                title: "React Styled Components",
                description: 
                `Quam diu etiam furor iste tuus nos eludet? Pellentesque habitant morbi tristique senectus et netus. Fictum, deserunt mollit anim laborum astutumque! Petierunt uti sibi concilium totius Galliae in diem certam indicere. Integer legentibus erat a ante historiarum dapibus. Quid securi etiam tamquam eu fugiat nulla pariatur.`  
            } 
        },
    ]
};

export const filteredItems = search => {
    return response.items.filter(item => new RegExp(search, "gi").test(item.snippet.title));
};

/* 
 * referencia Youtub API search snippet response 
 */

// {
//     "kind": "youtube#searchResult",
//     "etag": etag,
//     "id": {
//       "kind": string,
//       "videoId": string,
//       "channelId": string,
//       "playlistId": string
//     },
//     "snippet": {
//       "publishedAt": datetime,
//       "channelId": string,
//       "title": string,
//       "description": string,
//       "thumbnails": {
//         (key): {
//           "url": string,
//           "width": unsigned integer,
//           "height": unsigned integer
//         }
//       },
//       "channelTitle": string
//     }
// }