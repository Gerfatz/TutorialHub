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
    return `/content/images/${imageNameParts[0]}-${size}.${imageNameParts[1]}`
}

function getSrcSet(tutorial){
    const sizes = ['250', '400', '650', '800']
    let value = ""

    for(let size of sizes){
        value += getSrcSetPart(tutorial, size) + ','
    }

    return value.substring(0, value.length - 1)
}

function getSrc(tutorial){
    return getImageUrl(tutorial, 800)
}

export {
    getBaseUrl,
    getSrcSetPart,
    getImageUrl
}