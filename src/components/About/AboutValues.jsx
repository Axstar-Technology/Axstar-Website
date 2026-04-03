import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Realistic Star Colors (O, B, A, F, G types)
const REAL_STAR_COLORS = [
  new THREE.Color("#9bb0ff"), // Deep Blue
  new THREE.Color("#aabfff"), // Blue White
  new THREE.Color("#cad7ff"), // White
  new THREE.Color("#f8f7ff"), // Soft White
  new THREE.Color("#fff4ea"), // Yellow White
];

const StarClusterCore = () => {
  const clusterRef = useRef();
  
  // Reduced star count for a cleaner, less cluttered look
  const starCount = 2000; 

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(starCount * 3);
    const cols = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount; i++) {
      // --- Uniform Volume Logic ---
      // We use a spherical distribution that avoids clumping at the center
      const radius = 12 * Math.sqrt(Math.random()); 
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      pos.set([x, y, z], i * 3);

      // --- Color Logic ---
      const mixedColor = REAL_STAR_COLORS[Math.floor(Math.random() * REAL_STAR_COLORS.length)];
      cols.set([mixedColor.r, mixedColor.g, mixedColor.b], i * 3);
    }
    return [pos, cols];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Smooth, slow rotation for a "Dark Luxury" feel
    clusterRef.current.rotation.y = t * 0.03;
    clusterRef.current.rotation.x = t * 0.01;
  });

  return (
    <group ref={clusterRef}>
      <Points positions={positions} colors={colors}>
        <PointMaterial
          transparent
          vertexColors
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
        />
      </Points>

      {/* Main Central Star (Nucleus) */}
      <mesh>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial 
          color="#fff5e1" 
          emissive="#ffcc33" 
          emissiveIntensity={8} 
          toneMapped={false} 
        />
      </mesh>

      {/* Subtle background stars to add depth without clutter */}
      <Stars radius={100} depth={50} count={800} factor={4} saturation={0} fade speed={1} />
    </group>
  );
};

const AboutValues = () => {
  const values = [
    { letter: 'A', title: 'Agility', desc: 'We move fast, adapt quickly, and respond to evolving business needs.' },
    { letter: 'X', title: 'eXpertise', desc: 'We combine deep technical skill with strategic insight.' },
    { letter: 'S', title: 'Scalability', desc: 'Our solutions are built to grow with your business.' },
    { letter: 'T', title: 'Technology', desc: 'We leverage cutting-edge technologies to drive innovation.' },
    { letter: 'A', title: 'Ambition', desc: 'We push boundaries to achieve extraordinary outcomes.' },
    { letter: 'R', title: 'Results', desc: 'We deliver measurable impact and long term success.' },
  ];

  return (
    <section className="py-24 px-6 bg-black text-[#e9e7e2] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
        

          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-2 block">
           Values that guide our vision
          </span>
          <h2 className="text-3xl font-light text-center md:text-5xl leading-tight mb-16">
            Axstar Core Values
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="space-y-10"
          >
            {values.map((val, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                className="group flex gap-8 border-b border-white/10 pb-2 last:border-0"
              >
                <span className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#cad7ff] to-[#fff4ea] bg-clip-text text-transparent opacity-10 group-hover:opacity-100 transition-all duration-500">
                  {val.letter}
                </span>
                <div>
                  <h3 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {val.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed max-w-md">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="sticky top-24 hidden lg:block h-[600px] w-full">
            <div className="relative w-full h-full rounded-3xl border border-white/5 bg-[#050505] shadow-2xl overflow-hidden">
              <Canvas camera={{ position: [0, 10, 20], fov: 60 }}>
                <color attach="background" args={['#000000']} />
                <ambientLight intensity={0.2} />
                <pointLight position={[0, 0, 0]} intensity={5} color="#ffcc33" />
                <StarClusterCore />
              </Canvas>
            </div>
            {/* Background Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[#cad7ff]/5 rounded-full blur-[120px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;