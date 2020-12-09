import React from 'react'
import '../App.css';
import Stone1 from '../football-stones/dufc5.jpg'
import Stone2 from '../football-stones/dundee3.jpg'
import Stone3 from '../football-stones/rangers.jpg'
import Stone4 from '../football-stones/montrose.jpg'
import Stone5 from '../football-stones/celtic4.jpg'
import Stone6 from '../football-stones/leeds.jpg'
import Stone7 from '../football-stones/manutd2.jpg'
import Stone8 from '../football-stones/aberdeen.jpg'
import Stone9 from '../football-stones/dufc4.jpg'
import Stone10 from '../football-stones/rangersgerrard.jpg'
import Stone11 from '../football-stones/bet365.jpg'
import Stone12 from '../football-stones/celtic2.jpg'
import Stone13 from '../football-stones/arbroath2.jpg'
import Stone14 from '../football-stones/thearabs.jpg'
import Stone15 from '../football-stones/forest.jpg'
import Stone16 from '../football-stones/arsenal.jpg'
import Stone17 from '../football-stones/celtic3.jpg'
import Stone18 from '../football-stones/dufcdde.jpg'
import Stone19 from '../football-stones/theshed.jpg'
import Stone20 from '../football-stones/manutdceltic.jpg'
import Stone21 from '../football-stones/tonydufc.jpg'
import ScrollToTop from '../ScrollToTop';
import ModalImage from "react-modal-image";


const FootballStones = () => {

    return (
        <>
        <ScrollToTop/>
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

export default FootballStones
