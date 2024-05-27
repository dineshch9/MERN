import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/Addons.js';
import * as dat from 'dat.gui';
import Stats from 'three/addons/libs/stats.module.js';
import axios from 'axios';

const scene = new THREE.Scene()
scene.translateY(-7)
scene.translateX(0.5)
const camera = new THREE.PerspectiveCamera(30,window.innerWidth/window.innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
document.body.appendChild( renderer.domElement );

function adjustStyle(width) {
    if(width < 980){
        camera.position.set(2,20,70)}
    else{
        camera.position.set(2,20,30)}
}

window.onload = function () {
    adjustStyle(window.innerWidth);
}

window.onresize = function () {
    adjustStyle(window.innerWidth);
}

//////////////////////Load Model///////////////////////////////////////
const loader = new GLTFLoader();
var logo=0;

// Load a glTF resource
loader.load(
    './model/NITAP4.gltf',
    function (glb) {
        const model = glb.scene;
        scene.add(model);
        logo = model.getObjectByName('nitap_logo')
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.log('An error happened');
    }
);


////////////////////Download Percentage////////////////////
const options = {
    responseType:'blob',
    onDownloadProgress:function(progressEvent){
        // console.log(progressEvent.progress); 
        document.getElementById('progress-data').style.width = `${(progressEvent.progress * 100)}%`
        if(progressEvent.progress==1){
           document.getElementById('loading_page').style.zIndex=-10;} 
        }
    
}

axios.get('http://localhost:5173/model/NITAP4.bin',options)
.then(res => console.log(res))
.catch(err => console.log(err))


//////////////////////////////////////////////////////////

const rgbeLoader = new RGBELoader();
const envMap = await rgbeLoader.loadAsync( 'model/satara_night_4k.hdr' );
envMap.mapping = THREE.EquirectangularReflectionMapping;
scene.background = envMap;
scene.environment = envMap;
///////////////////////////////////////////////////////////////

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,innerHeight);



////////////////////Lights//////////////////

const ambientlight = new THREE.HemisphereLight(0x001111,null,0.5)
ambientlight.position.set(0,-2.5,0)
scene.add(ambientlight)

////////spotlight 1///////////
const slight = new THREE.SpotLight(0xfff000,1500);
slight.penumbra = 0.5;
slight.position.set(2,7,-1)
slight.target.position.set(70,55,3);
scene.add(slight)
scene.add(slight.target)

////////spotlight 2///////////
const slight2 = new THREE.SpotLight(0xfff000,1500);
slight2.castShadow = true;
slight2.penumbra = 0.5;
slight2.position.set(-2,5,-1)
slight2.target.position.set(5,90,-60);
scene.add(slight2)
scene.add(slight2.target)

////////spotlight 3///////////
const slight3 = new THREE.SpotLight(0xfff000,1500);
slight3.castShadow = true;
slight3.penumbra = 0.5;
slight3.position.set(-2,5,-1)
slight3.target.position.set(-165,190,-60);
scene.add(slight3)
scene.add(slight3.target);

////////spotlight 4///////////
const slight4 = new THREE.SpotLight(0x00ffff,2500);
slight4.angle = Math.PI/2.5
slight4.castShadow = true;
slight4.penumbra = 1;
slight4.position.set(-1,5,3.7)
slight4.target.position.set(0,90,0);
scene.add(slight4)
scene.add(slight4.target);

//////////////////////////////////////////////////




//////////////Controls////////////////
const controls = new OrbitControls(camera,renderer.domElement);
renderer.render(scene,camera);
controls.enablePan = false; 
controls.enableZoom = false; 
controls.minPolarAngle = Math.PI / 2; 
controls.maxPolarAngle = Math.PI / 2; 


  
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove( event ) {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    render()
}
function render() {
	raycaster.setFromCamera( mouse, camera );
	const intersects = raycaster.intersectObjects( scene.children );
    try {
        if(intersects[0].object.userData.name=='nitap_logo'){
            // do whatever you want mainly redirection
            console.log("hello");
            window.location.href = "./index2.html"
        }
    } catch (error) {
        
    }
	// renderer.render( scene, camera );
}
window.addEventListener( 'click', onMouseMove);
// window.requestAnimationFrame(render); 

window.addEventListener( 'resize', onWindowResize);
function onWindowResize() {
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    render();
}

function animate(){
    controls.update()
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    try{logo.rotation.y += Math.PI/100;}catch(error){}
}
animate()