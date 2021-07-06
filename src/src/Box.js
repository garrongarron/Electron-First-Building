import {BoxGeometry, MeshPhongMaterial, Mesh, DoubleSide} from './three.js'

const geometry = new BoxGeometry( 1, 1, 1 );
const material = new MeshPhongMaterial( {color: 0x00ff00, side: DoubleSide} );
const box= new Mesh( geometry, material );

export default box