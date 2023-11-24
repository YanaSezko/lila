import React from 'react';
import './Player.css';

function Player(props) {

    function deactivateElems() {
        let activeElem = document.querySelector('.active');
        if (activeElem) {
            activeElem.classList.remove('active')
        }
    }
    window.addEventListener('click', function (e) {
        let player = document.querySelectorAll('.player');
        for (let i = 0; i < player.length; i++) {
            player[i].addEventListener('click', function (event) {
                deactivateElems()
                this.classList.add('active')
                event.stopPropagation()
            })
            if (player[i].classList.contains('active')) {
                player[i].style.left = e.clientX - player[i].clientWidth / 2 + 'px'; //c учетом границ вычитаем - elem.offsettWidth/elem.offsettHeight
                player[i].style.top = e.clientY - player[i].clientHeight / 2 + 'px'
                player[i].classList.remove('active')
            }
        }
    })
   
    return (
        <div className='player'>{props.id}</div>
    );
}

export default Player;
