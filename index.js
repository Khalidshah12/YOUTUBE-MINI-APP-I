let SearchSug = () => {
    const searchInput = document.querySelector('#searchInput').value;

    let key = "AIzaSyA1T0Febk63wR1woeiXCEtdQc2tsQSqI2I"

    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchInput}&key=${key}`

    fetch(url).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
        displayForSuggestion(res.items)
    }).catch(function (err) {
        console.log(err)
    })
}


let displayForSuggestion = (data) => {
    let suggestion = document.querySelector("#suggestion")
    suggestion.innerHTML = null
    data.forEach(function({snippet: { title} }){

        const sugg = document.createElement('div');
        sugg.setAttribute("class","sugg")

        const sugTitle = document.createElement('p');
        sugTitle.setAttribute("id","sugTitle")
        sugTitle.innerText = title

        sugg.append(sugTitle)
        suggestion.append(sugg)
    })
}





let getData = () => {
    const searchInput = document.querySelector('#searchInput').value;

    let key = "AIzaSyA1T0Febk63wR1woeiXCEtdQc2tsQSqI2I"

    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchInput}&key=${key}`

    fetch(url).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
        display(res.items)
    }).catch(function (err) {
        console.log(err)
    })
}

let display = (data) => {
    // data.forEach(function ({ id: { videoId }, snippet: { title, description } }) {
    const movielist = document.querySelector('#preview');
    movielist.innerHTML = ""
    data.forEach(function (elem) {

        const movieBox = document.createElement('div');
        movieBox.setAttribute("id", "movieBox")

        // const iframe = document.createElement('iframe');
        // iframe.allow = "fullscreen"
        // iframe.src = `https://www.youtube.com/embed/${elem.id.videoId}`

        const title = document.createElement('h4');
        title.innerText = elem.snippet.title

        const image = document.createElement('img');
        image.src = elem.snippet.thumbnails.medium.url

        movieBox.append(image, title)
        movielist.append(movieBox)

        let t = elem.snippet.title
        let i = elem.id.videoId
        let video = {
            t,
            i,
        }

        movieBox.onclick = () => {
            playVideo(video)
        }

    })
}


let playVideo = (video) => {
    localStorage.setItem("video", JSON.stringify(video))
}



// // snippet:
// // channelId: "UCah9jr4Ehlrt4Wv-q-CgJkg"
// // channelTitle: "IndiaMarvel"
// // description: "मैं सुनाता हूं कहानी एक स्पेस सिपाही की, थॉर ओडिनसन... देखिए मार्वल ..."
// // liveBroadcastContent: "none"
// // publishTime: "2022-05-24T03:16:09Z"
// // publishedAt: "2022-05-24T03:16:09Z"
// // thumbnails: {default: {…}, medium: {…}, high: {…}}
// // title: "Marvel Studios&#39; Thor: Love and Thunder | Official Hindi Trailer | In Cinemas 8 July 2022"