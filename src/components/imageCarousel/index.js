import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { ShowcaseTeams } from "../../ShowcaseTeams";

import './styles.scss';

function ImageCarousel(props) {
    const idx = props.index;
    const current_team = ShowcaseTeams[idx];
    
    const [num, setNum] = useState(0);

    const next = (key) => {
        if (key === 0) {
            setNum(1);
        } else {
            setNum(0);
        }
    };

    return(
        <div>
            <Carousel 
                showThumbs={false} 
                showArrows={false}
                showStatus={false}
                selectedItem={num}
                className="team-carousel"
            >
                <div key={0}>
                    <img 
                        src={current_team.image2.default}
                        className="team-img"
                        onClick={() => next(0)}
                    />
                </div>
                <div key={1}>
                    <img 
                        src={current_team.image.default}
                        className="team-img"
                        onClick={() => next(1)}
                    />
                </div>
            </Carousel>
        </div>
    );
}

export default ImageCarousel;