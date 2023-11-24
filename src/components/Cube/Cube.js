import React from 'react';
import './Cube.css'
import img1 from './../../images/cube1.png';
import img2 from './../../images/cube2.png';
import img3 from './../../images/cube3.png';
import img4 from './../../images/cube4.png';
import img5 from './../../images/cube5.png';
import img6 from './../../images/cube6.png';



function Cube() {
    const addRandomNumber = () => {
        function startAnimation() {
            let cube = document.querySelector('.cube_img')
            cube.classList.add('active')
        }
        function  stopAnimation() {
            let cube = document.querySelector('.cube_img')
            cube.classList.remove('active')
        }
        function animationCube() {
                setTimeout(() => {
                startAnimation()
            }, "400");
            stopAnimation()
        }
        const random = Math.floor((Math.random() * 6) + 1);
        let cubeId = document.getElementsByClassName('cube_img')[0]
        switch (random) {
            case 1:
                animationCube()
                cubeId.src = img1;    
                break;
            case 2:
                animationCube()
                cubeId.src = img2;
                break;
            case 3:
                animationCube()
                cubeId.src = img3;
                break;
            case 4:
                animationCube()
                cubeId.src = img4;
                break;
            case 5:
                animationCube()
                cubeId.src = img5;
                break;
            case 6:
                animationCube()
                cubeId.src = img6;
                break;
            default:
                console.log("default");
                break;
        }
    }

    return (
        <div className='cube'>
            <p className='logo'>Lila</p>
            <div >
                <img className={'cube_img'} width={'50px'} alt="" />
            </div>
            <div className="btn-cube">
                <button onClick={() => addRandomNumber()}>жми</button>
            </div>
        </div>
    );
}


export default Cube;
