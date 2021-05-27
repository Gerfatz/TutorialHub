export default function getBaseUrl(){
    if (location.hostname === "localhost"){
        return 'http://' + location.host
    }
    else{
        return "https://m152.gibz-informatik.ch/sj_20_21/infa3a_04/"
    }
}