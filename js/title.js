var deviceAgent = navigator.userAgent.toLowerCase();

var isTouchDevice = Modernizr.touch || 
(deviceAgent.match(/(iphone|ipod|ipad)/) ||
deviceAgent.match(/(android)/)  || 
deviceAgent.match(/(iemobile)/) || 
deviceAgent.match(/iphone/i) || 
deviceAgent.match(/ipad/i) || 
deviceAgent.match(/ipod/i) || 
deviceAgent.match(/blackberry/i) || 
deviceAgent.match(/bada/i));

if (isTouchDevice) {
    console.debug("Mobile")
} else {
    console.debug("Desktop")
    if (document['addEventListener']) {
        document['addEventListener']('DOMContentLoaded', function() {
            loaded()
        })
    } else {
        if (document['attachEvent']) {
            document['attachEvent']('onreadystatechange', function() {
                loaded()
            })
        }
    };

    function loaded() {
        setInterval(loop, 800)
    }
    var x = 0;
    var titleText = [
        'welcome >:D',
        'o',
        'o_',
        'o_O',
        'g',
        'ga',
        'gam',
        'gami',
        'gamin',
        'gaming',
        '</>',
        'gaming',
        '</>',
        'gaming',
        'gamin',
        'gami',
        'gam',
        'ga',
        'g'
    ];

    function loop() {
        document['getElementsByTagName']('title')[0]['innerHTML'] = titleText[x++ % titleText['length']]
    }
}