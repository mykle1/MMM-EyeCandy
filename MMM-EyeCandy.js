/* Magic Mirror
 * Module: MMM-EyeCandy
 *
 * By Mykle1
 * MIT Licensed.
 */
Module.register("MMM-EyeCandy", {
    // Default module config.
    defaults: {
        style: '1', // Choose image if not slideshow
        maxWidth: "100%", // Adjusts size of images. Retains aspect ratio.
        // Overrides style. Local path or internet URL's. This will be a list of urls that can be set
        //in config.js
        updateInterval: 5 * 60 * 1000, // set in config.js -> 0 means no slideshow!
        animationSpeed: 3000,
    },

    start: function () {
        console.log("Starting MMM-EyeCandy");
        self = this;
        this.url = '';
        this.eyesUrls = {
	    '1': 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnVncDV5NDRrZHdqcTl3YXBseDZwZndyemRycXl2bWg3bmFlZnppdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/U8kWpqYuIwbqnfSauw/giphy.gif',
	    '2': 'http://www.animatedimages.org/data/media/35/animated-eye-image-0006.gif',
	    '3': 'http://www.animatedimages.org/data/media/35/animated-eye-image-0013.gif',
	    '4': 'https://media.giphy.com/media/5uy0lCCBOAwCgbbp4H/giphy.gif',
	    '5': 'https://media.giphy.com/media/B5RquKUWcS3QThcdqY/giphy.gif',
	    '6': 'http://www.animatedimages.org/data/media/35/animated-eye-image-0099.gif',
	    '7': 'https://media.giphy.com/media/GB42MWRfH5Q8L2NISX/giphy.gif',
	    '8': 'https://media.giphy.com/media/cJVLL4c2Cx5FQU89WY/giphy.gif',
	    '9': 'http://www.animatedimages.org/data/media/35/animated-eye-image-0300.gif',
	    '10': 'http://www.animatedimages.org/data/media/35/animated-eye-image-0143.gif',
	    '11': 'https://media.giphy.com/media/9lQuk7hcOclEFWd7oh/giphy.gif',
	    '12': 'https://media.giphy.com/media/PesvQMgubw7yulxXFk/giphy.gif',
	    '13': 'https://media.giphy.com/media/QOPOPpdRPFaLiRR9qS/giphy.gif',
	    '14': 'https://media.giphy.com/media/brYtFMpoFcgW2DBmFG/giphy.gif',
	    '15': 'https://media.giphy.com/media/OZt87SdJzEvVMdnxF0/giphy.gif',
	    '16': 'https://media.giphy.com/media/AAKK8gb2zLyDJjQ7dh/giphy.gif',
	    '17': 'https://media.giphy.com/media/IYoR8sR5nDZ2Wwd6gC/giphy.gif',
	    '18': 'https://media.giphy.com/media/FIM3K12hyrhzfEj5S2/giphy.gif',
	    '19': 'https://media.giphy.com/media/tj9D6lNVjLn5iKjSZW/giphy.gif',
	    '20': 'https://media.giphy.com/media/G2KKNkxYeCOPuuTQlG/giphy.gif',
	    '21': 'https://media.giphy.com/media/BouMx2eLHnLUUfOk3F/giphy.gif',
	    '22': 'https://media.giphy.com/media/D743HDbcT48o37tPVO/giphy.gif',
	    '23': 'https://media.giphy.com/media/fWAuSTRIjTYl3cMpIJ/giphy.gif',
	    '24': 'https://media.giphy.com/media/s8ZWeHL6OpBMcpOTYN/giphy.gif',
	    '25': 'https://media.giphy.com/media/dmHrf8a9AJrWTCGufN/giphy.gif',
	    '26': 'https://media.giphy.com/media/2DUUW6EpbANdCU2uQ1/giphy.gif',
	    '27': 'https://media.giphy.com/media/l3GE3jgGHEw2PwSPSG/giphy.gif',
	    '28': 'https://media.giphy.com/media/FJSDYiq2XBfcKbOgrO/giphy.gif',
	    '29': 'https://media.giphy.com/media/kLdfMvi6dPHx5n17qt/giphy.gif',
	    '30': 'https://media.giphy.com/media/mHMpAIGHqE6whtlBQg/giphy.gif',
	    '31': 'https://media.giphy.com/media/jUmQBOKZhvo2ARo3gT/giphy.gif',
	    '32': 'https://media.giphy.com/media/AINRDCyA3d6qJElplp/giphy.gif',
	    '33': 'https://media.giphy.com/media/7D7XwUCoWkFkC5XYIL/giphy.gif',
	    '34': 'https://media.giphy.com/media/1Rxxb5NrYMqMOUgEgo/giphy.gif',
	    '35': 'https://media.giphy.com/media/vJKOeef18We3oTgll3/giphy.gif',
	    '36': 'https://media.giphy.com/media/8DJ1cSSoCTz7oClBdV/giphy.gif',
	    '37': 'https://media.giphy.com/media/RdKI4LZUI6XNYVpsu9/giphy.gif',
	    '38': 'https://media.giphy.com/media/xOMyerbo1jcRuPaVrF/giphy.gif',
	    '39': 'https://media.giphy.com/media/PWqAwmCsiIpywHgXG0/giphy.gif',
	    '40': 'https://media.giphy.com/media/Z7bHYVFjEcdAmifYgG/giphy.gif',
	    '41': 'https://media.giphy.com/media/90TsoQsSKf3E2I7WCG/giphy.gif',
	    '42': 'https://media.giphy.com/media/bIqXn4GIjdVF0SVw18/giphy.gif',
	    '43': 'https://media.giphy.com/media/8J7T09OHCpdCW0hrGr/giphy.gif',
	    '44': 'https://media.giphy.com/media/uJLAT6C75YiovRTzQh/giphy.gif',
	    '45': 'https://media.giphy.com/media/6WmSCmUsmRkam8UQEi/giphy.gif',
	    '46': 'https://media.giphy.com/media/wTkv0lhvyvkKJvN6OH/giphy.gif',
	    '47': 'https://media.giphy.com/media/1bw4XJAOu9llKJrIuL/giphy.gif',
	    '48': 'https://media.giphy.com/media/dwoLXYxMPiDXO4IPVh/giphy.gif',
	    '49': 'https://media.giphy.com/media/xlXDgg62MtVPg0CrN1/giphy.gif',
	    '50': 'https://media.giphy.com/media/XPzuE0By0BW61fQlbn/giphy.gif',
	    '51': 'https://media.giphy.com/media/6ivBZT7NXhvlg88o1g/giphy.gif',
	    '52': 'https://media.giphy.com/media/G9wWrCE6HwyH3qpHLN/giphy.gif',
	    '53': 'https://media.giphy.com/media/PhTUu0lDYjD9HaUgqb/giphy.gif',
	    '54': 'https://media.giphy.com/media/OqiAZR71oUWMrEuZp1/giphy.gif',
	    '55': 'https://media.giphy.com/media/zNzccqh7nl4LiKHKkN/giphy.gif',
	    '56': 'https://media.giphy.com/media/wV7qQiWpcssEpkXXFY/giphy.gif',
	    '57': 'https://media.giphy.com/media/nExHDNaXCoEXAdatu9/giphy.gif',
	    '58': 'https://media.giphy.com/media/F8x2ljLcbSOnUIe6St/giphy.gif'
            // You can add your own images here!!!
	}

        // Initialize URL with a random image
        if (this.config.style != '' || this.config.updateInterval > 0) {
		this.url = this.eyesUrls[String(Math.floor(Math.random() * Object.keys(this.eyesUrls).length) + 1)];
	}
	else if (this.config.style != '' || this.config.updateInterval == 0) {
            this.url = this.eyesUrls[this.config.style];
	}

        var self = this;

	if (this.config.updateInterval > 0) {

	        const intervalId = setInterval(function () {
			// Select a random image index
			self.config.currentImg = Math.floor(Math.random() * Object.keys(self.eyesUrls).length);
			self.url = self.eyesUrls[String(self.config.currentImg + 1)];
			console.log("NEW IMAGE SELECTED:" + self.url);
			self.updateDom(self.config.animationSpeed || 0); // Use config.animationSpeed or revert to zero @ninjabreadman
        	}, this.config.updateInterval);
	}
    },

    getStyles: function () {
        return ["MMM-EyeCandy.css"]
    },

    // Override dom generator.
    getDom: function () {
        var wrapper = document.createElement("div");
        var image = document.createElement("img");
        var getTimeStamp = new Date();

        if (this.config.style != '') {
            image.classList.add = "photo";
            image.src = this.url + "?seed=" + getTimeStamp;

            image.style.maxWidth = this.config.maxWidth;
        }

        wrapper.appendChild(image);

        return wrapper;
    },


    /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function (notification, payload) {
        if (notification === 'HIDE_EYECANDY') {
            this.hide();
        } else if (notification === 'SHOW_EYECANDY') {
            this.show(1000);
        }

    },

});
