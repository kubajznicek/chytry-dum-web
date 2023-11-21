"use client"
import React, { useState } from 'react';
import Image from 'next/image';


export default function LightButton({ room, id }) {
    const [isLightOn, setLightOn] = useState(false);

    const toggleLight = async () => {
        
        try {
            await fetch('http://localhost:1880/' + room + "/" + id, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ light: !isLightOn })
            });
            setLightOn(!isLightOn);
        } catch (error) {
            console.error('Failed to toggle light:', error);
        }
    };

    return (
        <button onClick={toggleLight}>
            <Image src={isLightOn ? '/lightbulb_on.svg' : '/lightbulb_off.svg'} alt="light" width={150} height={150}/>
            <p>{isLightOn ? "zapnuto" : "vypnuto"}</p>
        </button>
    );
}