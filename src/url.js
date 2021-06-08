function getBaseUrl(){
    if (location.hostname === "localhost"){
        return 'http://' + location.host
    }
    else{
        return "https://m152.gibz-informatik.ch/sj_20_21/infa3a_04/"
    }
}

function getSrcSetPart(tutorial, size){
    return getImageUrl(tutorial, size) + ' ' + size + 'w'
}

function getImageUrl(tutorial, size){
    let imageNameParts = tutorial.thumbnail.split('.')
    return `/images/${imageNameParts[0]}-${size}.${imageNameParts[1]}`
}

export {
    getBaseUrl,
    getSrcSetPart,
    getImageUrl
}