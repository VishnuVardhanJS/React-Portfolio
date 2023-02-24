import "../index.css"
import React, { useMemo, useRef, useContext, useState, useEffect } from 'react'
import * as THREE from "three"
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import circle from "../assets/star.png"
import { OrbitControls, useCursor } from "@react-three/drei"
import { BufferAttribute, Clock } from "three"
import { isMobile } from 'react-device-detect';
import Cards from "./Cards"
import {
    Animator, ScrollContainer, ScrollPage, Move, Sticky, FadeIn, batch, Fade
} from "react-scroll-motion";

let mousex = 0
let mousey = 0
document.addEventListener("mousemove", (event) => {
    mousex = event.clientX / 3000; // Gets Mouse X
    mousey = event.clientY / 3000; // Gets Mouse Y
    // console.log("top" + [mousex/3000, mousey/3000]); // Prints data
});



function BufferPoints({ count = 4000 }) {

    const texImg = useLoader(THREE.TextureLoader, circle)
    const points = useMemo(() => {
        const points = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 15);
        return new BufferAttribute(new Float32Array(points), 3);
    }, [count]);


    const ref = useRef()
    useFrame((state) => {
        const { camera } = state
        if (!isMobile) {
            if (state.mouse.x !== 0) {
                camera.position.x = -(state.mouse.x * 0.7)
                camera.position.y = -(state.mouse.y * 0.7)

                // console.log([state.mouse.x, state.mouse.y])
            }
        }

    })

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    ref={ref}
                    attach={"attributes-position"}
                    {...points}
                />
            </bufferGeometry>
            <pointsMaterial
                ref={ref}
                size={0.03}
                map={texImg}
                color={0xaaaaaa}
                transparent={true}
            />
        </points>
    );
}

const StarsBg = () => {
    const cursor = useCursor()
    return (
                <div className="Particles">
                    <Canvas>
                        <BufferPoints />
                        <OrbitControls
                            enableZoom={false}
                            autoRotate={true}
                            autoRotateSpeed={0.7}
                            enablePan={false}
                        />
                    </Canvas>
                </div>
    );
};


export default StarsBg;