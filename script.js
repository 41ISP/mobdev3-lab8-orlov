
const trackList = document.querySelector(".tracks-list")

async function fetchData() {
    const data = await fetch('https://kitek.ktkv.dev/songs.json')
    const json = await data.json()
    for (let i = 0; i< json.length; i++ ) {
        const trackLi = document.createElement("li")
        trackLi.classList.add("track-item")

        const trackNumber = document.createElement("div")
        trackNumber.classList.add("track-number")
        trackNumber.textContent = i + 1
        trackLi.appendChild(trackNumber)

        const trackMain = document.createElement("div")
        trackMain.classList.add("track-main")
        trackLi.appendChild(trackMain)

        const trackImg = document.createElement("img")
        trackImg.classList.add("album-art")
        trackMain.appendChild(trackImg)
        trackImg.src = json[i].track.album.images[0].url
        trackImg.alt = json[i].track.album.images[0].url

        const trackInfo = document.createElement("div")
        trackInfo.classList.add("track-info")
        trackMain.appendChild(trackInfo)

        const trackName = document.createElement("div")
        trackName.classList.add("track-name")
        trackInfo.appendChild(trackName)
        trackName.textContent =json[i].track.name

            const trackArtists = document.createElement("div")
            trackArtists.classList.add("track-artists")
            trackInfo.appendChild(trackArtists)
            trackArtists.textContent = json[i].track.album.artists.map((art) => art.name).join(", ")


            const trackAlbum = document.createElement("div")
            trackAlbum.classList.add("track-album")
            trackInfo.appendChild(trackAlbum)
            trackAlbum.textContent = json[i].track.album.name




        const trackMeta = document.createElement("div")
        trackMeta.classList.add("track-meta")
        trackLi.appendChild(trackMeta)

        const duration = document.createElement("div")
        duration.classList.add("duration")
        trackMeta.appendChild(duration)
        duration.textContent = json[i]


        const popularity = document.createElement("div")
        popularity.classList.add("popularity")
        trackMeta.appendChild(popularity)
        popularity.textContent = json[i]


      


       
       
        trackList.appendChild(trackLi)

     
        
    }
  

}

fetchData()