# IT Academy
## Sprint 9: ReacTube (Projecte Final)
#### Rubèn Nieto Perarnau
---

## Sobre las ramas:

En Nivel 1 he seguido el esquema de ramas que propone el propio ejercicio:
* `initialCommit`: ejercicio 1
* `appComponent`: ejercicio 2
* `searchBarComponent`: ejercicio 3
* `videoListComponent`: ejercicio 4
* `videoItemComponent`: ejercicio 5
* `n1` <- `videoDetailComponent`: ejercicio 6

En Nivel 2 he creado la gran mayoría de las restantes ramas y funcionalidades de la App:
* `buttonLike`
* `favorites`
* `historyScreen`
* `homeScreen`
* `lastSearches`
* `screenSearches`
* `update-video-lists`
* `videoScreen`
* `youtubeAPI`
* `n2` <- *

Nivel 3: últimas correciones, ajustes en el código y este `README`
* `n3` <- `n2`
* `dev` <- `n3`

Puede seguirse el progreso en respectivos `commits`

---
## Sobre la App
### Siempre visible:
1. Menú lateral de navegación
2. Barra de búsquedas: `enter` realiza búsqueda introducida y `esc` reset barra (desde cualquier pantalla).

### Pantallas:
1. `Home` 

    Al iniciar la App carga una lista de vídeos populares de Youtube que se mostrará siempre que la barra de búsqueda esté vacía o no se haya cargado alguna de las búsquedas guardadas (se guarda al inicio para no hacer petición cada vez a youtube y gastar cuota -ver más adelante _"Sobre las cuotas de YouTube"_-).

    Si hay datos guardados en localStorage (automáticamente se guarda: últimos visualizados, búsquedas, favoritos y lista aleatoria de vídeos de las búsquedas) los carga al iniciar.
    
    Muestra también las últimas busquedas realizadas (con opción de volver a buscar, cargar la guardada o borrar) y lista de vídeos marcados cómo "Me gusta".

    _Sobre las búsquedas guardadas_: se sale de lista guardada realizando una nueva búsqueda o con botón en lado derecho, aunque no es necesario, se puede navegar normalmente por el resto de la app, y al volver a Home, seguirá la lista abierta.
2. `History`
    
    Lista de últimos vídeos visualizados (se puede borrar) y lista _random_ de vídeos de las búsquedas guardadas (se puede volver a generar).
3. `Liked`

    Lista de vídeos marcados cómo "Me gusta" (en todos los vídeos).
4. `Searches`

    Listas de los vídeos de cada una de las búsquedas realizadas.

5. `Video` (no en el menú)

    Cada vez que se selecciona un vídeo para visualizar. Muestra también lista de vídeos relacionados con el que se está visualzando.
---

## Sobre las cuotas de YouTube
Al principio tuve algunos problemas con las cuotas de petición de recursos de la API de YouTube, que solucioné lidiando con la Developers Console de Google y descargándome algunas respuestas para hardcodearlas cómo respuestas reales y poder trabajar en el proyecto sin tener que consultar continuamente la API real y quedarme sin cuota. 

Hasta rama `n2` se puede ver en el código llamadas a `apis/myapi.js` (ahora comentadas) usadas a tal efecto y borradas en rama `n3`.