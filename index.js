// search suggestion function 
let SearchSug = () => {
    const searchInput = document.querySelector('#searchInput').value;

    let key = "AIzaSyD3VaUU63wASH1YmJJw0IORvHDmsOTTSxA"

    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchInput}&key=${key}`
    if (searchInput != "") {
        fetch(url).then(function (res) {
            return res.json()
        }).then(function (res) {
            // console.log(res)
            displayForSuggestion(res.items)
        }).catch(function (err) {
            console.log(err)
        })
    } else {
        var suggestion = document.getElementById('suggestion');
        suggestion.style.display = 'none';
    }
}

// added debauncing with delay of 0.5s
let id;
let debauncing = (func, delay) => {
    if (id) {
        clearTimeout(id)
    }
    id = setTimeout(function () {
        func()
    }, delay)
}

// appending data in search suggestion div
let displayForSuggestion = (data) => {
    const appendSuggestion = document.querySelector('#appendSuggestion');
    appendSuggestion.innerHTML = null
    let suggestion = document.createElement("div")
    suggestion.setAttribute("id", "suggestion")
    suggestion.innerHTML = null
    data.forEach(function (elem) {

        const sugg = document.createElement('div');
        sugg.setAttribute("class", "sugg")

        sugg.addEventListener("click", function () {
            searchData(data)
        })

        const sugTitle = document.createElement('p');
        sugTitle.setAttribute("id", "sugTitle")
        sugTitle.innerText = elem.snippet.title

        sugg.append(sugTitle)
        suggestion.append(sugg)

        appendSuggestion.append(suggestion)
    })
}

// function for getting data by clicking on search suggestion
let searchData = (data) => {
    const preview = document.querySelector('#preview');
    preview.innerHTML = null

    display(data)
    var suggestion = document.getElementById('suggestion');
    suggestion.style.display = 'none';
}


// function for unhide suggestion list after clicking outside
document.addEventListener('mouseup', function (e) {
    var suggestion = document.getElementById('suggestion');
    if (!suggestion.contains(e.target)) {
        suggestion.style.display = 'none';
    }
});


// search function
let getData = () => {
    const searchInput = document.querySelector('#searchInput').value;

    let key = "AIzaSyD3VaUU63wASH1YmJJw0IORvHDmsOTTSxA"

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

// apending data in container
let display = (data) => {
    // data.forEach(function ({ id: { videoId }, snippet: { title, description } }) {
    const preview = document.querySelector('#preview');
    preview.innerHTML = ""
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
        preview.append(movieBox)

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

// save data in local Storage
let playVideo = (video) => {
    localStorage.setItem("video", JSON.stringify(video))
    window.location.href = "./viewvideo.html"
}

// function for vertical navbar START

let ytIcon = () =>{
    window.location.href = "./index.html"
}

let homeDiv = () => {
    window.location.href = "./index.html"
}

let exploreDiv = () => {
    window.location.href = "./dummy.html"
}

let shortsDiv = () => {
    window.location.href = "./dummy.html"
}

let subscriptionDiv = () => {
    window.location.href = "./dummy.html"
}

let library = () => {
    window.location.href = "./dummy.html"
}

let signin = () => {
    window.location.href = "./dummy.html"
}

// function for vertical navbar END


// functions of Search by given buttons
let all = () =>{
    window.location.href = "./index.html"
}

// for music
let music = () => {
    let key = "AIzaSyD3VaUU63wASH1YmJJw0IORvHDmsOTTSxA"
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=music&key=${key}`
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
        display(res.items)
    }).catch(function (err) {
        console.log(err)
    })
}

// for tamilCinema
let tamilCinema = () => {
    let key = "AIzaSyD3VaUU63wASH1YmJJw0IORvHDmsOTTSxA"
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=tamilCinema&key=${key}`
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
        display(res.items)
    }).catch(function (err) {
        console.log(err)
    })
}

// for live
let live = () => {
    let key = "AIzaSyD3VaUU63wASH1YmJJw0IORvHDmsOTTSxA"
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=live&key=${key}`
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
        display(res.items)
    }).catch(function (err) {
        console.log(err)
    })
}

// for playlists
let playlists = () => {
    let key = "AIzaSyD3VaUU63wASH1YmJJw0IORvHDmsOTTSxA"
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=playlists&key=${key}`
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
        display(res.items)
    }).catch(function (err) {
        console.log(err)
    })
}

// for bollywoodMusic
let bollywoodMusic = () => {
    let key = "AIzaSyD3VaUU63wASH1YmJJw0IORvHDmsOTTSxA"
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=bollywoodMusic&key=${key}`
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
        display(res.items)
    }).catch(function (err) {
        console.log(err)
    })
}

// for comedies
let comedies = () => {
    let key = "AIzaSyD3VaUU63wASH1YmJJw0IORvHDmsOTTSxA"
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=comedies&key=${key}`
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
        display(res.items)
    }).catch(function (err) {
        console.log(err)
    })
}

// for t_sereis
let t_sereis = () => {
    let key = "AIzaSyD3VaUU63wASH1YmJJw0IORvHDmsOTTSxA"
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=t_sereis&key=${key}`
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
        display(res.items)
    }).catch(function (err) {
        console.log(err)
    })
}

// for gaming
let gaming = () => {
    let key = "AIzaSyD3VaUU63wASH1YmJJw0IORvHDmsOTTSxA"
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=gaming&key=${key}`
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
        display(res.items)
    }).catch(function (err) {
        console.log(err)
    })
}

// for javaScript
let javaScript = () => {
    let key = "AIzaSyD3VaUU63wASH1YmJJw0IORvHDmsOTTSxA"
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=javaScript&key=${key}`
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
        display(res.items)
    }).catch(function (err) {
        console.log(err)
    })
}

// for trailers
let trailers = () => {
    let key = "AIzaSyD3VaUU63wASH1YmJJw0IORvHDmsOTTSxA"
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=trailers&key=${key}`
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
        display(res.items)
    }).catch(function (err) {
        console.log(err)
    })
}

