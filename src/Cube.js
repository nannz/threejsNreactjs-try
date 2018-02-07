/**
 * Created by zhaonan on 2018/2/6.
 */
import React, { Component } from 'react';
import * as three from 'three'; //what does that mean//use three js as es6 import?
import './Cube.css'

class Cube extends Component {
    componentDidMount(){
        const {width, height} = this.props;

        const scene = new three.Scene();
        const camera = new three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        const renderer = new three.WebGLRenderer();

        renderer.setSize(width, height);
        this.refs.anchor.appendChild(renderer.domElement);

        const geometry = new three.BoxGeometry(1,1,1),
            material = new three.MeshBasicMaterial({color: 0x00ff00}),
            cube = new three.Mesh(geometry,material);
        scene.add(cube);

        camera.position.z = 5;

        function animationUpdate(){
            requestAnimationFrame(animationUpdate); //call itself
            cube.rotation.x += 0.1;
            cube.rotation.y += 0.1;

            renderer.render(scene, camera);
        }

        animationUpdate();
    }
    render() {
        const{width, height} = this.props;
        return  <div ref="anchor" style={{width, height, margin:'0 auto'}} />
    }
}

export default Cube;
