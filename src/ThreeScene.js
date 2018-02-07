/**
 * Created by zhaonan on 2018/2/7.
 */
import React, {Component} from 'react';
import * as THREE from 'three';

class ThreeScene extends Component {
    componentDidMount(){
        const {width, height} = this.props;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(width, height);
        this.refs.anchor.appendChild(renderer.domElement);

        camera.position.z = 5;

        renderer.render(scene, camera);
    }
    render() {
        const {width, height, style} = this.props;

        return (
        <div ref="anchor" style = {[{width, height}, style]}>This line is for WebGL Scene<br/></div>
            // <div className="ThreeScene">
            // </div>
        );
    }
}

export default ThreeScene;
