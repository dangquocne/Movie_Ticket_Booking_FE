<template>
  <div class="tour">
        <div class="container">
            <div class="tour__head">
                <h2>3D TOUR</h2>
            </div>
            <div class="image-container" ref="panoContainer"></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'

const panoContainer = ref(null)

onMounted(() => {
  const threeScript = document.createElement('script')
  threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/105/three.min.js' // ✅ chính xác r105
  threeScript.onload = () => {
    const panoScript = document.createElement('script')
    panoScript.src = '/js/panolens.min.js'
    panoScript.onload = () => initPanorama()
    document.body.appendChild(panoScript)
  }
  document.body.appendChild(threeScript)
})


function initPanorama() {
    console.log('Init pano...')
  console.log('Container:', panoContainer.value)
  console.log('THREE:', window.THREE)
  console.log('PANOLENS:', window.PANOLENS)
  const panorama = new PANOLENS.ImagePanorama('/images/cinema_hall.jpg')

  const viewer = new PANOLENS.Viewer({
    container: panoContainer.value,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true
  })

  viewer.add(panorama)

  // --- Thêm video ---
  const video = document.createElement('video')
  video.src = '/videos/muado.mp4'
  video.loop = true
  video.muted = true
  video.autoplay = true
  video.playsInline = true
  video.crossOrigin = 'anonymous'
  video.addEventListener('canplay', () => video.play())

  const texture = new THREE.VideoTexture(video)
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.format = THREE.RGBFormat

  const geometry = new THREE.PlaneGeometry(2400, 1000)
  const material = new THREE.MeshBasicMaterial({ map: texture })
  const screen = new THREE.Mesh(geometry, material)

  screen.position.set(150, 200, -2400)
  panorama.add(screen)
}
</script>

<style scoped>
body{
    margin: 0;
    overflow: hidden;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
.tour{
    background: #074357;
    height: 100vh;
    margin: 0;
}

h2{
    margin: 0;
    color: white;
}
.tour__head{
    padding-top: 10vh;
    text-align: center;
    margin-bottom: 50px;
}

.image-container{
    height: 26.190rem;

    position: relative;
    width: 78%;
    display: block;
    margin: 0 auto;
    margin-left: 12%;
    overflow: hidden;
    
  border: 2px solid #ebb47a;
  border-radius: 10px;
}

canvas{
    width: 100%;
}
</style>
