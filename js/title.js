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
        'HouseTargaryen ϟϟ',
        'H',
        'Ho',
        'Hou',
        'Hous',
        'House',
        'House T',
        'House Ta',
        'House Tar',
        'House Targ',
        'House Targa',
        'House Targar',
        'House Targary',
        'House Targarye',
        'House Targaryen',
		'House Targarye',
        'House Targary',	
        'House Targar',
        'House Targa',
        'House Targ',
        'House Tar',
        'House Ta',
        'House T',
        'House',
        'Hous',
        'Hou',
        'Ho',
        'H',
        
    ];

    function loop() {
        document['getElementsByTagName']('title')[0]['innerHTML'] = titleText[x++ % titleText['length']]
    }
}
