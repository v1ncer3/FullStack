<script lang="ts">
import type { ImgHTMLAttributes } from 'vue'


export default{
    data(){
        return{
            images: ["banner.jpg", "bar.jpg", "bolananza_logo.jpg"],
            indexImage: 0,
            pathImage: "../../assets/"
        }
    },
    methods:{
        nextImage(){
            let img = document.getElementById("imageToShow") as HTMLImageElement
            if(img){
                let lastImg = this.indexImage
                let nextImg = this.indexImage+1
                let existsNextImg = this.willNextImage(nextImg)
                if(existsNextImg){
                    img.src = img.src.replace(this.images[lastImg], this.images[nextImg])
                    this.indexImage++
                }else{
                    this.indexImage = 0
                    lastImg = this.images.length-1
                    nextImg = 0
                    img.src = img.src.replace(this.images[lastImg], this.images[nextImg])
                }   
            }
        },
        willNextImage(nextImg: number){
            return this.images.length == nextImg ? false : true
        }
    }
}
</script>


<template>
    <button v-on:click="nextImage()"> <img id="imageToShow"  src= "../../assets/banner.jpg" width="480px" height="360px"> </button>
</template>

<style>

</style>