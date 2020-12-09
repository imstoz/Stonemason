import React from 'react'
import '../App.css';
import Stone1 from '../text-stones/dadsgarden.jpg'
import Stone2 from '../text-stones/angiesbar.jpg'
import Stone3 from '../text-stones/welcome-dog.jpg'
import Stone4 from '../text-stones/knotinn.jpg'
import Stone5 from '../text-stones/cooshed.jpg'
import Stone6 from '../text-stones/roadtrip.jpg'
import Stone7 from '../text-stones/coronacorner.jpg'
import Stone8 from '../text-stones/angusantiques.jpg'
import Stone9 from '../text-stones/geordiespond.jpg'
import Stone10 from '../text-stones/pdcars.jpg'
import Stone11 from '../text-stones/wilma.jpg'
import Stone12 from '../text-stones/piccadilly.jpg'
import Stone13 from '../text-stones/locknroll.jpg'
import Stone14 from '../text-stones/friockrocks.jpg'
import Stone15 from '../text-stones/cairnbiew.jpg'
import Stone16 from '../text-stones/2-thistle.jpg'
import Stone17 from '../text-stones/bothan.jpg'
import Stone18 from '../text-stones/lyndhurst.jpg'
import Stone19 from '../text-stones/kirktonhouse2.jpg'
import Stone20 from '../text-stones/dunn.jpg'
import Stone21 from '../text-stones/drumachlie.jpg'
import ScrollToTop from '../ScrollToTop';
import ModalImage from "react-modal-image";


const TextStones = () => {
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

                <ModalImage
                small={Stone21}
                large={Stone21}
                hideDownload={true}
                hideZoom={true}/>
                </div>
                <div className="column">
                                
                <ModalImage
                small={Stone14}
                large={Stone14}
                hideDownload={true}
                hideZoom={true}/>
             
                <ModalImage
                small={Stone15}
                large={Stone15}
                hideDownload={true}
                hideZoom={true}/>

                    
                <ModalImage
                small={Stone16}
                large={Stone16}
                hideDownload={true}
                hideZoom={true}/>

                <ModalImage
                small={Stone17}
                large={Stone17}
                hideDownload={true}
                hideZoom={true}/>

                <ModalImage
                small={Stone18}
                large={Stone18}
                hideDownload={true}
                hideZoom={true}/>

                <ModalImage
                small={Stone19}
                large={Stone19}
                hideDownload={true}
                hideZoom={true}/>

                <ModalImage
                small={Stone20}
                large={Stone20}
                hideDownload={true}
                hideZoom={true}/>
                </div>
                {/* <div className="column">
                <img src={Stone1}/>
                <img src={Stone1}/>
                <img src={Stone1}/>
                <img src={Stone1}/>
                <img src={Stone1}/>
                <img src={Stone1}/>
                </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TextStones
