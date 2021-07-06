import { WebGLRenderer } from './three.js'

let renderer = new WebGLRenderer({ antialias: true });// 
renderer.setSize(window.innerWidth, window.innerHeight);//absolute value

document.body.appendChild(renderer.domElement);
export default renderer