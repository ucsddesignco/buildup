import React, { useState, useEffect } from "react";
import Exit from "../../assets/images/modal-exit.svg";
import { Container, Row, Col } from "react-grid-system";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageCarousel from '../imageCarousel';
import { ShowcaseTeams } from '../../ShowcaseTeams'

import './styles.scss';

function Modal(props) {
    const idx = props.index;
    const current_team = ShowcaseTeams[idx];

    return (
        <div>
            {props.show && (
                <div className="modal">
                    <div className="top-container">
                        <div className="middle-section">
                            <div className="text-section">
                                <h3>GIRLS</h3>
                                <h3>RISING</h3>
                                <p>
                                    Girls Rising is a nonprofit providing mentorship to at-risk girls in San Diego between the ages of 8-17. The team created a website redesign, marketing plan, and rebrand to increase nonprofit awareness in San Diego and help young girls from undeserved communities forge relationships with an inclusive network of female mentors.
                                </p>
                                <div className="button">
                                    VIEW CASE STUDY
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            )}
        </div>
    );
}

export default Modal;