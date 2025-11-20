// Lightweight Three.js particle / constellation background
// NOTE: keep minimal; for advanced visuals, tune parameters or replace with your own scene
(() => {
  const container = document.getElementById('bg-canvas');
  if (!container || !window.THREE) return;

  let scene, camera, renderer, particles, geometry, material;
  const PARTICLE_COUNT = 120;
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const sizes = new Float32Array(PARTICLE_COUNT);

  function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 200;

    geometry = new THREE.BufferGeometry();
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 800;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
      sizes[i] = 2 + Math.random() * 3;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    material = new THREE.PointsMaterial({ color: 0x78a5ff, size: 2.2, transparent: true, opacity: 0.85 });
    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Lines between close particles
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x4f7cff, transparent: true, opacity: 0.06 });
    const maxDistance = 90;
    const lineGeom = new THREE.BufferGeometry();
    const linePositions = new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 3);
    lineGeom.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeom, lineMaterial);
    scene.add(lines);
    lines.frustumCulled = false;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize);
    animate();
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  let t = 0;
  function animate() {
    t += 0.01;
    const pos = geometry.attributes.position.array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3 + 0] += Math.sin(t + i) * 0.03;
      pos[i * 3 + 1] += Math.cos(t + i * 0.7) * 0.02;
    }
    geometry.attributes.position.needsUpdate = true;

    // update lines
    // naive O(N^2) for small N is ok
    const linePos = scene.children.find(c => c.type === 'LineSegments').geometry.attributes.position.array;
    let idx = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const ix = i * 3; const jx = j * 3;
        const dx = pos[ix] - pos[jx];
        const dy = pos[ix + 1] - pos[jx + 1];
        const dz = pos[ix + 2] - pos[jx + 2];
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < 9000) {
          linePos[idx++] = pos[ix]; linePos[idx++] = pos[ix + 1]; linePos[idx++] = pos[ix + 2];
          linePos[idx++] = pos[jx]; linePos[idx++] = pos[jx + 1]; linePos[idx++] = pos[jx + 2];
        }
      }
    }
    // clear remaining
    for (let k = idx; k < linePos.length; k++) linePos[k] = 0;
    scene.children.find(c => c.type === 'LineSegments').geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  init();
})();