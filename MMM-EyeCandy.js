/* Magic Mirror
 * Module: MMM-EyeCandy
 *
 * By Mykle1
 * MIT Licensed.
 */
Module.register("MMM-EyeCandy", {
    // Default module config.
    defaults: {
        style: '1', // 1-52
        maxWidth: "100%", // Adjusts size of images. Retains aspect ratio.
        ownImagePath: '', // Overrides style. Local path or internet URL's.
        updateInterval: 5 * 60 * 1000, // set in config.js
        animationSpeed: 3000,
    },

    start: function() {
        self = this;
        this.url = '';
        this.eyesUrls = {
            '1': 'https://media.giphy.com/media/l9eTgC1GpyEZq/giphy.gif',
            '2': 'https://www.animatedimages.org/data/media/35/animated-eye-image-0006.gif',
            '3': 'https://www.animatedimages.org/data/media/35/animated-eye-image-0013.gif',
            '4': 'https://www.animatedimages.org/data/media/35/animated-eye-image-0004.gif',
            '5': 'https://www.animatedimages.org/data/media/35/animated-eye-image-0093.gif',
            '6': 'https://www.animatedimages.org/data/media/35/animated-eye-image-0099.gif',
            '7': 'https://www.animatedimages.org/data/media/35/animated-eye-image-0162.gif',
            '8': 'https://www.animatedimages.org/data/media/35/animated-eye-image-0314.gif',
            '9': 'https://www.animatedimages.org/data/media/35/animated-eye-image-0300.gif',
            '10': 'https://www.animatedimages.org/data/media/35/animated-eye-image-0143.gif',
            '11': 'https://www.animatedimages.org/data/media/35/animated-eye-image-0321.gif',
            '12': 'https://www.picgifs.com/graphics/e/eyes/graphics-eyes-662258.gif',
            '13': 'https://www.picgifs.com/graphics/e/eyes/graphics-eyes-449207.gif',
            '14': 'https://www.picgifs.com/name-graphics/m/michael/name-graphics-michael-582478.gif',
            '15': 'https://media.giphy.com/media/l2SpYymt1W1pkqb5e/giphy.gif',
            '16': 'https://www.collater.al/wp-content/uploads/2013/11/ma_face_mid.gif',
            '17': 'https://s-media-cache-ak0.pinimg.com/originals/b4/30/e8/b430e8fbe229dd7b3f3e935c3c9ef730.gif',
            '18': 'http://www.thecitrusreport.com/wp-content/uploads/2014/04/paolo-ceric-trippy.gif',
            '19': 'https://s.pikabu.ru/post_img/2013/11/09/11/1384022136_669507211.gif',
            '20': 'https://68.media.tumblr.com/03a435c5e7ba416ef90be272f5170522/tumblr_mu0kp9XwSn1qc0s10o1_500.gif',
            '21': 'https://pic.pimg.tw/darthvader/dfdedcfebc895bc48df4db6d765fe8ec.gif',
            '22': 'https://s-media-cache-ak0.pinimg.com/originals/2b/bd/44/2bbd44dee42db72974d95f86fea8d3ff.gif',
            '23': 'https://s-media-cache-ak0.pinimg.com/originals/d7/e5/06/d7e5061c2e0c73c60bc643e0fddc97ba.gif',
            '24': 'https://s-media-cache-ak0.pinimg.com/originals/ff/61/a7/ff61a7034e2d1a4606910ee88f24afac.gif',
            '25': 'https://68.media.tumblr.com/2b27908fac782ca54cc2b3aff6862423/tumblr_mra3owkIhC1ro855no1_500.gif',
            '26': 'https://www.geekextreme.com/wp-content/uploads/2013/02/fuzzy-gif.gif',
            '27': 'https://orig05.deviantart.net/6984/f/2015/019/4/6/120515_480x800_f__by_victhor-d8en0m2.gif',
            '28': 'https://38.media.tumblr.com/d1665cbde913b2e495ad24c2579df935/tumblr_n5wio1sTz91tummxoo1_250.gif',
            '29': 'https://cdn.shopify.com/s/files/1/0172/2296/products/six_large.gif?v=1403626913',
            '30': 'https://s-media-cache-ak0.pinimg.com/originals/73/b2/c1/73b2c1b5cd54e7bb71e6b94a652cb92c.gif',
            '31': 'https://66.media.tumblr.com/6c0995048767c190b30f6f1509aeb436/tumblr_nruis5lhIn1qzt4vjo1_500.gif',
            '32': 'https://alexandra.ucoz.org/_ph/26/2/114819057.gif',
            '33': 'https://gifimage.net/wp-content/uploads/2017/01/Cool-GIF-Image-for-Whatsapp-and-Facebook-7.gif',
            '34': 'https://img17.dreamies.de/img/120/b/vaoigmruccd.gif',
            '35': 'https://www.ddesignerr.com/wp-content/uploads/2012/05/026.gif',
            '36': 'https://s-media-cache-ak0.pinimg.com/originals/6b/d8/ef/6bd8ef35364c9672c7cbb4687977d3ee.gif',
            '37': 'https://bestanimations.com/Science/Chemistry/electron-singularity-animated-gif.gif',
            '38': 'https://bestanimations.com/Humans/Skulls/skull-animation-gif-3.gif',
            '39': 'http://www.webdesignmash.com/trial/wp-content/uploads/2010/02/davidope8.gif',
            '40': 'https://s-media-cache-ak0.pinimg.com/originals/1b/99/a4/1b99a402c520a20f69bde73be778c098.gif',
            '41': 'https://3.bp.blogspot.com/-gB_29pdcz7g/UXjglip231I/AAAAAAAAD_s/wtojtZXO9AU/s320/pictsel-davidope15.gif',
            '42': 'https://1.bp.blogspot.com/_5oJhQAjCd9k/TOFe3bRcgqI/AAAAAAAAAMM/pxOJ_hm8Mps/s1600/supreme_1.gif',
            '43': 'https://media.giphy.com/media/9JLl87j7cHisE/giphy.gif',
            '44': 'https://68.media.tumblr.com/116333fb96e8686e857b1db8a26fe241/tumblr_myucf1d5VM1spu58bo1_500.gif',
            '45': 'http://www.gifimagesdownload.com/wp-content/uploads/2016/02/cute-cool-gifs-333.gif',
            '46': 'https://bestanimations.com/Humans/Skulls/skull-animation-gif-2.gif',
            '47': 'http://www.gifimagesdownload.com/wp-content/uploads/2016/02/best-cool-gifs-773.gif',
            '48': 'https://static.tumblr.com/fc536f36bf2da8ddb6374ba63a89a479/wslnmk1/EvLo1xgf0/tumblr_static_tumblr_static_filename_640.gif',
            '49': 'http://www.sihirperisi.com/icerik/wall/sihirperisicom-man-face-erkek-yuzu%20(32).jpg',
            '50': 'https://orig02.deviantart.net/f176/f/2008/348/f/7/smiley_face_gif_by_sookie_by_sookiesooker.gif',
            '51': 'https://static.giga.de/wp-content/uploads/2015/05/face-red-loop-15.emoji_-rcm320x0.gif',
            '52': 'https://upload-assets.vice.com/files/2016/12/19/1482167674giphy__3_.gif',
            // Additions on 2/9/2019 - I was bored. :)
            '53': 'https://media.giphy.com/media/FTbD5RqvttJ5e/giphy.gif',
            '54': 'https://media.giphy.com/media/aN9GqoR7OD3nq/giphy.gif',
            '55': 'https://media.giphy.com/media/3e80bmOBgeCZO/giphy.gif',
            '56': 'https://media.giphy.com/media/4NPT1ipEUoiMo/giphy.gif',
            '57': 'https://media.giphy.com/media/WuaGC7DUTeJW0/giphy.gif',
            '58': 'https://media.giphy.com/media/ZSUtKFTbwndYs/giphy.gif',
            // Evidently I'm still bored 2/12/2019
            '59': 'https://media.giphy.com/media/s2uampOAMWksU/giphy.gif',
            '60': 'https://media.giphy.com/media/dbopGHCaI2zsY/giphy.gif',
            '61': 'https://media.giphy.com/media/ql77HNnLAjV4s/giphy.gif',
            '62': 'https://media.giphy.com/media/eAMJgzoGAEwCc/giphy.gif',
            '63': 'https://media.giphy.com/media/vZqiytAaw85Ne/giphy.gif',
            '64': 'https://media.giphy.com/media/PNf2Ke7gn6oDK/giphy.gif',
            // Additions on 11/24/2019
            '65': 'https://www.thisiscolossal.com/wp-content/uploads/2018/04/agif2opt.gif',
            '66': 'https://www.thisiscolossal.com/wp-content/uploads/2018/04/agif5opt.gif',
            '67': 'https://www.thisiscolossal.com/wp-content/uploads/2018/12/agifcolossalsphere2.gif',
            '68': 'https://www.thisiscolossal.com/wp-content/uploads/2018/12/agifcolossalspiral2opt.gif',
            '69': 'https://www.thisiscolossal.com/wp-content/uploads/2018/12/agifcolossaltd2opt.gif',
            '70': 'https://www.thisiscolossal.com/wp-content/uploads/2014/03/120430.gif',
            '71': 'https://www.thisiscolossal.com/wp-content/uploads/2014/03/120515.gif',
            '72': 'https://www.thisiscolossal.com/wp-content/uploads/2014/03/130207.gif',
            '73': 'https://www.thisiscolossal.com/wp-content/uploads/2014/03/130304.gif',
            '74': 'https://www.thisiscolossal.com/wp-content/uploads/2014/03/130309.gif',
            '75': 'https://www.thisiscolossal.com/wp-content/uploads/2014/03/130407.gif',
            '76': 'https://www.thisiscolossal.com/wp-content/uploads/2014/03/140104.gif',
            '77': 'https://www.thisiscolossal.com/wp-content/uploads/2014/06/6.gif',
            '78': 'https://www.thisiscolossal.com/wp-content/uploads/2017/08/Switching_Sides.gif',
            '79': 'https://www.thisiscolossal.com/wp-content/uploads/2017/08/Lava_Burst.gif',
            '80': 'https://www.thisiscolossal.com/wp-content/uploads/2017/08/Cracked_Gem.gif',
            '81': 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_05.gif',
            '82': 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_02.gif',
            '83': 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_03.gif',
            '84': 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_04.gif',
            // Added 5/10/20
            '85': 'https://media.giphy.com/media/VgBk8EZQILIaPIJymY/giphy.gif',

        }

        //	console.log(this.eyesUrls[this.config.style]);
        if (this.config.ownImagePath != '') {
            this.url = this.config.ownImagePath;
        } else {
            if (this.config.style != '') {
                this.url = this.eyesUrls[this.config.style];
            }
        }

        // ADDED: Schedule update timer courtesy of ninjabreadman
        var self = this;
        setInterval(function() {
            self.updateDom(self.config.animationSpeed || 0); // use config.animationSpeed or revert to zero @ninjabreadman
        }, this.config.updateInterval);

    },

    getStyles: function() {
        return ["MMM-EyeCandy.css"]
    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        var image = document.createElement("img");
        var getTimeStamp = new Date();
        if (this.config.ownImagePath != '') {
            image.classList.add = "photo";
            image.src = this.url + "?seed=" + getTimeStamp;

            image.style.maxWidth = this.config.maxWidth;
        } else if (this.config.style != '') {
            image.classList.add = "photo";
            image.src = this.url + "?seed=" + getTimeStamp;

            image.style.maxWidth = this.config.maxWidth;
        }
        wrapper.appendChild(image);

        return wrapper;
    },


    /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_EYECANDY') {
            this.hide();
        } else if (notification === 'SHOW_EYECANDY') {
            this.show(1000);
        }

    },

});
