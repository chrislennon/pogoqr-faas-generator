// handler.js

'use strict';

const QArt = require('qartjs');


/* <meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@nytimes">
<meta name="twitter:creator" content="@SarahMaslinNir">
<meta name="twitter:title" content="Parade of Fans for Houston’s Funeral">
<meta name="twitter:description" content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here.">
<meta name="twitter:image" content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg"> */



module.exports.generate = function (context, req) {

    var friendcode = context.bindingData.friendcode;
    var qartDiv = docuement.createElement('div');
    qartDiv.id = 'qart';

    const qart = new QArt({
        value: friendcode,
        imagePath: './pogo-sqr.png',
        filter: 'color',
        size: 400
    });

    document.getElementById('qart').appendChild(qart.make());

    var tCard = docuement.createElement('meta').setAttribute('name', 'twitter:card').setAttribute('content', 'summary_large_image');
    var tSite = docuement.createElement('meta').setAttribute('name', 'twitter:site').setAttribute('content', '@cdlennon');
    var tCreator = docuement.createElement('meta').setAttribute('name', 'twitter:creator').setAttribute('content', '@cdlennon');
    var tTitle = docuement.createElement('meta').setAttribute('name', 'twitter:title').setAttribute('content', 'Pokémon Go Friend Code');
    var tDescription = docuement.createElement('meta').setAttribute('name', 'twitter:description').setAttribute('content', 'A Generated Friend Code Image');
    var tImage = docuement.createElement('meta').setAttribute('name', 'twitter:image').setAttribute('content', './pogo-sqr.png');

    var renderedBody = docuement.createElement('body').appendChild(tCard).appendChild(tSite).appendChild(tCreator).appendChild(tTitle).appendChild(tDescription).appendChild(tImage)

    if (!friendcode) {
        context.res = {
            headers: {
                'Content-Type': 'text/html; charset=utf-8'
            },
            body: "No friend code detected."
        };
    }
    else {
        context.res = {
            headers: {
                'Content-Type': 'text/html; charset=utf-8'
            },
            body: renderedBody
        };
    }
    context.done();
} 