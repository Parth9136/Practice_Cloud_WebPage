// Basic 3D fruit animation using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

const canvas = document.getElementById("fruit3d");
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
camera.position.z = 3;

// Lighting
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

// Sphere as fruit
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0xffa500 });
const fruit = new THREE.Mesh(geometry, material);
scene.add(fruit);

// Resize responsiveness
window.addEventListener("resize", () => {
  const width = canvas.offsetWidth;
  const height = canvas.offsetHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  fruit.rotation.y += 0.01;
  fruit.rotation.x += 0.003;
  renderer.render(scene, camera);
}
animate();
