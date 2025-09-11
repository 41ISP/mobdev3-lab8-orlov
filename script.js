
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
        trackImg.classList.add("track-img")
        trackMain.appendChild(trackImg)

        const trackInfo = document.createElement("div")
        trackInfo.classList.add("track-info")
        trackMain.appendChild(trackInfo)

        const trackMeta = document.createElement("div")
        trackMeta.classList.add("track-meta")
        trackLi.appendChild(trackMeta)



      


       
       
        trackList.appendChild(trackLi)

     
        
    }
  

}

fetchData()