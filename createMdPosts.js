var fs = require('fs');
var dateFormat = require('dateformat');

fs.readFile('./posts/articleIndex.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    

    try {
        const articles = JSON.parse(jsonString)

        articles.forEach((item) => {
            console.log(item.name)

            const date = new Date(item.date)
            const fileName = dateFormat(date,"yyyy-mm-dd-")+ item.name +".md"
            var text = `
---
layout:       post
title:        ${item.title}
url:          "/posts/${item.name}.html"
canonical_url: "/posts/${item.name}.html"
redirect_to: /posts/${item.name}.html
---`
            fs.writeFile("./_posts/" + fileName, text.trim(), function(err) {
                if (err) {
                    console.log(err);
                }})

        })
    } catch(err) {
        console.log('Error parsing JSON string:', err)
    }

})

/* fs.writeFile("test.txt", jsonData, function(err) {
    if (err) {
        console.log(err);
    }
}); */