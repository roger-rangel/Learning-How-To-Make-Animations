import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", function() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

var verticesOfCube = [
    -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
];
var indicesOfFaces = [
    2,1,0,    0,3,2,
    0,4,7,    7,3,0,
    0,1,5,    5,4,0,
    1,2,6,    6,5,1,
    2,3,7,    7,6,2,
    4,5,6,    6,7,4
];

// create the shape
var geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 2 );

// create a material, color or image texture
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  wireframe: true,
});
const polyhedron = new THREE.Mesh(geometry, material);

scene.add(polyhedron);
camera.position.z = 12;

// Light
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20, 20, 20)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight);

//OrbitControls
const controls = new OrbitControls(camera, renderer.domElement)

// game logic
const update = function() {
  polyhedron.rotation.x += 0.01;
  polyhedron.rotation.y += 0.005;
  controls.update();
};

// draw scene
const render = function() {
  renderer.render(scene, camera);
};

// run game loop (update, render, repeat)
const GameLoop = function() {
  requestAnimationFrame(GameLoop);
  controls.update();
  update();
  render();
};

GameLoop();
