import React from 'react'
import '../App.css';
import Stone1 from '../music-stones/TheBeatlesRollingStones.jpg'
import Stone2 from '../music-stones/TheJamNew.jpg'
import Stone3 from '../music-stones/AllModCons.jpg'
import Stone4 from '../music-stones/Madness.jpg'
import Stone5 from '../music-stones/Collage3.jpg'
import Stone6 from '../music-stones/Collage4.jpg'
import Stone7 from '../music-stones/TheJamPlain.jpg'
import Stone8 from '../music-stones/BrokenStones.jpg'
import Stone9 from '../music-stones/AllModConsNew.jpg'
import Stone10 from '../music-stones/Collage1.jpg'
import Stone11 from '../music-stones/Collage2.jpg'
import Stone12 from '../music-stones/TheJamOld.jpg'
import Stone13 from '../music-stones/TheJamArrow.jpg'
import ModalImage from "react-modal-image";
import ScrollToTop from '../ScrollToTop';
import { IoIosArrowUp } from 'react-icons/io'

const MusicStones = () => {
    return (
        <>
        <ScrollToTop />
        <div className="stones-container">
        <div className="stones-content">
            <div className="row">
                <div className="column">
                
                <ModalImage
                small={Stone1}
                large={Stone1}
                hideDownload={true}
                hideZoom={true}/>
             
                <ModalImage
                small={Stone2}
                large={Stone2}
                hideDownload={true}
                hideZoom={true}/>

                    
                <ModalImage
                small={Stone3}
                large={Stone3}
                hideDownload={true}
                hideZoom={true}/>

                <ModalImage
                small={Stone4}
                large={Stone4}
                hideDownload={true}
                hideZoom={true}/>

                <ModalImage
                small={Stone5}
                large={Stone5}
                hideDownload={true}
                hideZoom={true}/>

                <ModalImage
                small={Stone6}
                large={Stone6}
                hideDownload={true}
                hideZoom={true}/>

                <ModalImage
                small={Stone7}
                large={Stone7}
                hideDownload={true}
                hideZoom={true}/>
                </div>
                <div className="column">
                
                <ModalImage
                small={Stone8}
                large={Stone8}
                hideDownload={true}
                hideZoom={true}/>
             
                <ModalImage
                small={Stone9}
                large={Stone9}
                hideDownload={true}
                hideZoom={true}/>

                    
                <ModalImage
                small={Stone10}
                large={Stone10}
                hideDownload={true}
                hideZoom={true}/>

                <ModalImage
                small={Stone11}
                large={Stone11}
                hideDownload={true}
                hideZoom={true}/>

                <ModalImage
                small={Stone12}
                large={Stone12}
                hideDownload={true}
                hideZoom={true}/>

                <ModalImage
                small={Stone13}
                large={Stone13}
                hideDownload={true}
                hideZoom={true}/>
                </div>

                    </div>
                    <div className="arrow">
    <IoIosArrowUp size="65px" className="arrow-up" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Scroll To Top</IoIosArrowUp>
    </div>
                </div>
            </div>
        </>
        );
    }
        

export default MusicStones
