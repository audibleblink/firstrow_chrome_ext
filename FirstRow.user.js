// ==UserScript==
// @name       FirstRow
// @namespace  http://alexflor.es/
// @version    0.3
// @description  Minor Cleanup and ad removal. Note: firstrow uses a shitton of nested iframes, making simple scripts impossible. You'll still have to manually close overlays on the video at site launch. Most of the future ones might be disabled. Having a good hosts file helps too. I got a good ad free firstrow with this script and this terminal command (macosx) curl -s http://winhelp2002.mvps.org/hosts.txt >> /etc/hosts
// @match      http://ifirstrowus.eu/watch/*
// @copyright  2012+, You
// ==/UserScript==

var CleanUp = {
    init: function(){
        this.stopTimers();
        this.clearSpace();
        this.clearAds();
    },


    stopTimers: function() {
        for (var i = 1; i < 99999; i++) { window.clearInterval(i);}
    },


    // Only clears player ad divs created by firstrow, not ones placed in iframes
    clearAds: function() {
        var el = [ "ad_footer_content", "ad_footer", "ad_overlay_content", "ad_overlay", "banner_container" ];

        for (var i = 0; i < el.length; i++) {
            try {
                document.getElementById(el[i]).remove();
            }
            catch(e) {
                console.log( el[i] + " => This element does not currently exist" );
            }
        }
    },


    // Removes side bar and banners
    clearSpace: function() {
        var allTableData = document.getElementsByTagName('td');
        for (var i = 0; i < allTableData.length; i++) {
            allTableData[i].getAttribute('width') === "350" ? allTableData[i].remove() : false
        }
        document.getElementsByTagName('tr')[3].remove();
        document.getElementsByTagName('tr')[1].remove();
    }
};

CleanUp.init();
