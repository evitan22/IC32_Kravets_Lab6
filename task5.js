const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tagsValue = tweets.map(item => item.tags);
const values = [];
const result = {};
tagsValue.forEach(elem => values.push(...elem));
values.forEach(elem => {
    if(!result[elem]) {
        result[elem] = 1;
    }
    else {
        result[elem]++;
    }
})
console.log(result);