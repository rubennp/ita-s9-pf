
// ... para tener algun dato con el que poder "trabajar" por problemas con la cuota en la API de youtube ...
export const response = {
    count: 10,
    items: 
    [
        { snippet: { title: "My React video" } },
        { snippet: { title: "My Javascript video" } },
        { snippet: { title: "My JS video video" } },
        { snippet: { title: "My ReactJS video" } },
        { snippet: { title: "My ES6 video funny title" } },
        { snippet: { title: "My Vue.js video" } },
        { snippet: { title: "My new video" } },
        { snippet: { title: "My last videocast" } },
        { snippet: { title: "My best video" } },
        { snippet: { title: "My new video about JS" } }, 
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