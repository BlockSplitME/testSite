class Gallery {
    constructor() {
        this.picts = []
        this.galleryNumb = 0;
        this.init()
    }
    init(){
        for(let i = 1; i <= 5; i++) {
            this.picts.push("./source/musicActiv" + i + ".png")
        }
    }
    getPictGallery(direction) {
        if(direction == 1) {
            this.galleryNumb++;
            if(this.galleryNumb > this.picts.length-1) {
                this.galleryNumb = 0;
            } 
        } else if(direction == 0) {
            this.galleryNumb--;
            if(this.galleryNumb < 0) {
                this.galleryNumb = this.picts.length-1;
            } 
        }
        return this.picts[this.galleryNumb];
    }
}

const base = new Gallery();
function setPictGallery(flag, imgSrc) {
    try{
        document.getElementById(imgSrc).src = base.getPictGallery(flag);
    } catch(e) {
        alert(e.name + ": SetPictGallery " + ". " + e.message);
    }
}