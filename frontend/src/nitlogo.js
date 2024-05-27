import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {ParallaxBarrierEffect} from 'three/addons/effects/ParallaxBarrierEffect.js';
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(30,(window.innerWidth/window.innerHeight),0.1,1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(dwidth,dheight);
// console.log(dwidth,dheight);
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.render(scene,camera)
camera.position.set( 0, 20, 100 );
camera.focus = 0.1
//////////////////////Load Model///////////////////////////////////////
const loader = new GLTFLoader();
let logo=0;
// Load a glTF resource
loader.load(
    './src/assets/nitlogo.gltf',
    function (glb) {
        const model = glb.scene;
        model.position.set(0,20,90)
        model.rotation.set(1.6,0,0)
        scene.add(model);
        logo = model;
        logo.children[0].material.roughness = 0.4;
        console.log(logo.children[0].material.wireframe);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.log('An error happened');
    }
);
///////////////////////////////////////////////////////////////
// const controls = new OrbitControls( camera, renderer.domElement );
const l1 = new THREE.SpotLight(0xffffff,90)
l1.castShadow = true
scene.add(l1)
l1.position.set(0,20,100)

const l2 = new THREE.AmbientLight(0xffffff,1)
scene.add(l2)

const l3 = new THREE.SpotLight(0xffffff,5000)
scene.add(l3)
l3.position.set(0,10,80)
// const l3h = new THREE.SpotLightHelper(l3,1,0xffff00);
// scene.add(l3h)

// const l1h = new THREE.SpotLightHelper(l1,0xff0000)
// scene.add(l1h)

scene.background = new THREE.Color( 0xe8fcff );
document.addEventListener('mousemove', onDocumentMouseMove, false);
function onDocumentMouseMove(event) {
    if (true) {
        startOrbitControl();
    }
}
function startOrbitControl() {
    document.addEventListener('mousemove', onMouseMove, false);
}


function onMouseMove(event) {
    logo.rotation.x = event.clientY/300;
    logo.rotation.y = event.clientX/500;
    logo.rotation.z = event.clientY/30000 + event.clientX/30000;
    renderer.render(scene, camera);
}

window.addEventListener( 'resize', onWindowResize);
function onWindowResize() {
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
}



let spheres = [];
let  geometry = new THREE.SphereGeometry(0.2)
let material = new THREE.MeshPhysicalMaterial( {color: 0x00ffff, metalness: 0.5, roughness: 0.7, clearcoat: 0.5, clearcoatRoughness: 0.3} );
function createballs(){
    for ( let i = 0; i < 70; i ++ ) {
        const mesh = new THREE.Mesh( geometry, material );
        mesh.position.x = Math.random() * -100;
        mesh.position.y = Math.random() * 50;
        mesh.position.z = Math.random() * 50;
        mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;
        scene.add( mesh );
        spheres.push( mesh );
}}

function balltransform(){
    for(let i=0;i<70;i++){
        // spheres[i].position.z +=0.05
        spheres[i].position.x +=0.05
    }
}
function clearspheres(){
    for(let i=0;i<70;i++){
        scene.remove(spheres[i])
    }
    spheres = []
}

createballs();
setInterval(clearspheres, 40000);
setInterval(createballs, 40000);

function logorotate(){
    try{
        logo.rotation.x += 0.001
    }catch(e){}
    
    try{
        logo.rotation.y -= 0.001
    }catch(e){}
    
    try{
        logo.rotation.z += 0.00025
    }catch(e){}
}

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    logorotate()
    balltransform()
    // controls.update()
}
animate()