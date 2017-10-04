/*=============== Model =============*/
var model = {
    currentCat: null,
    cats: [
        {
            clickCount: 0,
            name: 'Tabby',
            imgSrc: 'img/434164568_fea0ad4013_z.jpg',
            imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568'
        },
        {
            clickCount: 0,
            name: 'Tiger',
            imgSrc: 'img/4154543904_6e2428c421_z.jpg',
            imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904'
        },
        {
            clickCount: 0,
            name: 'Scaredy',
            imgSrc: 'img/22252709_010df3379e_z.jpg',
            imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709'
        },
        {
            clickCount: 0,
            name: 'Shadow',
            imgSrc: 'img/1413379559_412a540d29_z.jpg',
            imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559'
        },
        {
            clickCount: 0,
            name: 'Sleepy',
            imgSrc: 'img/9648464288_2516b35537_z.jpg',
            imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288'
        }
    ]
    
};

/*========= Octopus ==========*/
var octopus = {
    init: function () {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
        

    },

    getCurrentCat: function () {
        return model.currentCat;
    },

    getCats: function () {
        return model.cats;
    },

    setCurrentCat: function (cat) {
        model.currentCat = cat;
    },

    incrementCounter: function () {
        model.currentCat.clickCount++;
        catView.render();
    }
};

/*======== View ==============*/
var catView = {
    init: function () {
        // store pointers to our DOM elements for easy access later
        this.catEle = document.getElementById("cat");
        this.catNameEle = document.getElementById("catName");
        this.catImageEle = document.getElementById("catImg");
        this.catCountEle = document.getElementById("catCount");

        // on click, increment the current cat's counter
        this.catImageEle.addEventListener('click', function () {
            octopus.incrementCounter();
        });

        this.render();
    },

    render: function () {
        var currentCat = octopus.getCurrentCat();
        this.catCountEle.textContent = currentCat.clickCount;
        this.catImageEle.src = currentCat.imgSrc;
        this.catNameEle = currentCat.name;
    }
};

var catListView = {
    init: function () {
        this.catListEle = document.getElementById('catList');
        this.render();
    },

    render: function () {
        var cat, ele, i;

        var cats = octopus.getCats();
        this.catListEle.innerHTML = '';
        

        for (i = 0; i < cats.length; i++) {
            cat = cats[i];
            ele = document.createElement("li");
            ele.textContent = cat.name;

            ele.addEventListener('click', (function (catCopy) {
                return function () {
                    octopus.setCurrentCat(catCopy);
                    catView.render();

                };
            })(cat));
            this.catListEle.appendChild(ele);
        }
    }
};

octopus.init();