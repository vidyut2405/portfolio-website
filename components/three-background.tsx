"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer, RenderPass, EffectPass, BloomEffect } from "postprocessing";

export default function ThreeBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;

        // Scene setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.02);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({
            powerPreference: "high-performance",
            antialias: false,
            alpha: true,
            stencil: false,
            depth: false
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // Particles (Stars/Dust)
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000; // number of stars
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            // Spread particles in a large volume
            posArray[i] = (Math.random() - 0.5) * 40;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        // Material for the stars
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0xffffff, // White stars
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Subtle Grid or geometric shape to add "tech" feel?
        // Let's add a secondary moving mesh - a wireframe sphere
        const sphereGeo = new THREE.IcosahedronGeometry(1.5, 1);
        const sphereMat = new THREE.MeshBasicMaterial({
            color: 0x4444ff,
            wireframe: true,
            transparent: true,
            opacity: 0.1
        });
        const sphere = new THREE.Mesh(sphereGeo, sphereMat);
        // scene.add(sphere); // Optional, maybe too busy. Let's stick to clean stars.

        // Post-processing
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));

        const bloomEffect = new BloomEffect({
            intensity: 1.5, // Less intense
            luminanceThreshold: 0.1,
            luminanceSmoothing: 0.9,
        });

        const effectPass = new EffectPass(camera, bloomEffect);
        composer.addPass(effectPass);

        // Animation variables
        let time = 0;

        const animate = () => {
            time += 0.001; // Slower time

            // Rotate the star field slowly
            particlesMesh.rotation.y = time * 0.5;
            particlesMesh.rotation.x = time * 0.2;

            // Mouse interaction could be added here

            composer.render();
            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            container.removeChild(renderer.domElement);
            renderer.dispose();
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            composer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed top-0 left-0 w-full h-full -z-10 bg-black"
            style={{ pointerEvents: 'none' }}
        />
    );
}
