import {PerspectiveCamera} from './three.js'

const camera = new PerspectiveCamera( 45,window.innerWidth / window.innerHeight, 0.1, 1000 );

export default camera