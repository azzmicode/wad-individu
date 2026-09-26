import React from 'react';
import {useState} from 'react';

function Hero() {
    const [angka, setAngka] = React.useState(0);
    return (
        <section className="bg-slate-50 py-20 px-8 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Solusi Terbaik untuk Bisnismu</h1>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Platform all in one untuk mengelola bisnis Anda dengan mudah dan efisien. Tingkatkan produktivitas dan raih kesuksesan bersama kami.
        </p>
        <button 
        onClick={() => setAngka(angka + 1)}
        className="mt-4 bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-900 transition duration-300">
            Click button ini : {angka}
        </button>   
        </section>
    );
}

export default Hero;