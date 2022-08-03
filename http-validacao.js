async function checaStatus(arrayURLs){
    // promises async await
    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
        const res = await fetch(url);
        return res.status();
    }));
    return arrayStatus;
}

function geraArrayDeURL(arrayLinks){
    Object.values(arrayLinks);

    return arrayLinks.map(objectLinks => Object.values(objectLinks).join())
}

async function validaURL(arrayLinks){
    const links = geraArrayDeURL(arrayLinks);
    const statusLinks = await checaStatus(links);
    return statusLinks;
}
module.exports = validaURL;