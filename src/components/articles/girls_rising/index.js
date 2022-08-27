import "./style.scss";
import "../../../styles/base.scss";
import Grid from '@mui/material/Grid';

//Headshots - Builders
import wanting from '../../../assets/images/Showcase/Girls Rising/Builders/wanting_ash_zhou.png';
import don from '../../../assets/images/Showcase/Girls Rising/Builders/don_le.png';
import esther from '../../../assets/images/Showcase/Girls Rising/Builders/esther_liu.png';
import hanyi from '../../../assets/images/Showcase/Girls Rising/Builders/hanyi_wang.png';
import jessica from '../../../assets/images/Showcase/Girls Rising/Builders/jessica_liu.png';
import karen from '../../../assets/images/Showcase/Girls Rising/Builders/karen_nieto.png';

//Headshots - Mentors
import shaira from '../../../assets/images/Showcase/Girls Rising/Mentors/shaira_tuazon.png';
import heidi from '../../../assets/images/Showcase/Girls Rising/Mentors/heidi_hernandez.png';
import bart from '../../../assets/images/Showcase/Girls Rising/Mentors/bart_van_de_vel.png';
 
//Group Photos
import group_duo from '../../../assets/images/Showcase/Girls Rising/group_duo.png';
import group_original from '../../../assets/images/Showcase/Girls Rising/group_original.png';


//Assets
import mobile_divider from '../../../assets/images/Showcase/assets/Mobile/women_divider_mobile.png';
import web_divider from '../../../assets/images/Showcase/assets/Web/women_divider_web.png';
import mobile_shapes from '../../../assets/images/Showcase/assets/Mobile/women_shape_mobile.png';
import web_shapes from '../../../assets/images/Showcase/assets/Web/women_shape_web.png';


import React from "react";

const GirlsRising = () => {
  return (
    <div className="page">
      <div className="page1">
        <div className="left">
          <h1 className="title"> GIRLS RISING</h1>
          <p>Girls Rising is a nonprofit providing mentorship to at-risk girls in San Diego between the ages of 8-17. The team created a website redesign, marketing plan, and rebrand to increase nonprofit awareness in San Diego and help young girls from undeserved communities forge relationships with an inclusive network of female mentors.</p>
          <div className="button-cont">
            <button className="button">VIEW CASE STUDY</button>
          </div>
        </div>
        <div className="group">
          <img src={group_duo} className="groupduo"></img>
        </div>
      </div>
      <div className="page2">
        {/*<img src={mobile_divider} className="divider"> </img>*/}
        <h3 className="team-title">THE TEAM</h3>
        <div className="builders-div">
          <Grid container spacing={6} className="builders-grid">
            <Grid item className="grid-item" xs={6} md={4}>
              <div className="builder-img">
                <img src={karen}></img>
              </div>
              <div className="tags">
               <p>{"KAREN NIETO"}</p>
               <p>UX Researcher</p>
              </div>
            </Grid>
            <Grid item className="grid-item" xs={6} md={4}>
              <div className="builder-img">
                <img src={esther}></img>
              </div>
              <div className="tags">
                <p>{"ESTHER LIU"}</p>
                <p>UX Designer</p>
              </div>
            </Grid>
            <Grid item className="grid-item" xs={6} md={4}>
              <div className="builder-img">
                <img src={hanyi}></img>
              </div>
              <div className="tags">
                <p>{'HANYI WANG'}</p>
                <p>Visual Designer</p>
              </div>
            </Grid>
            <Grid item className="grid-item" xs={6} md={4}>
              <div className="builder-img">
                <img src={wanting}></img>
              </div>
              <div className="tags">
                <p>{"WANTING (ASH) ZHOU"}</p>
                <p className="text">Visual Designer+ Marketing Stratgeist</p>
              </div>
            </Grid>
            <Grid item className="grid-item" xs={6} md={4}>
              <div className="builder-img">
                <img src={don}></img>
              </div>
                <div className="tags">
                  <p>{"DON LE"}</p>
                  <p>Web Builder</p>
                </div>
            </Grid>
            <Grid item className="grid-item" xs={6} md={4}>
              <div className="builder-img">
                <img src={jessica}></img>
              </div>
                <div className="tags">
                  <p>{"JESSICA LIU"}</p>
                  <p>Web Builder</p>
                </div>
            </Grid>
          </Grid>
        </div>
        <div className="shapes">
          <img src={mobile_shapes} className="shape"></img>
        </div>
        <div className="page3">
          <p className="mentors-header">THE MENTORS</p>
          <div className="mentors-div">
            <Grid container-spacing={6} direction="row" className="mentors-grid">
              <Grid item className="grid-item" xs={6} md={4}>
                <div className="mentor-img">
                  <img src={shaira}></img>
                </div>
                <div className="tags">
                  <p>{"SHAIRA TUAZON"}</p>
                  <p>Product Designer, Meta</p>
                </div>
              </Grid>
              <Grid item className="grid-item" xs={6} md={4}>
                <div className="mentor-img">
                  <img src={heidi}></img>
                </div>
                <p>{"HEIDI HERNANDEZ"}</p>
                <p>UX Designer, Google</p>
              </Grid>
              <Grid item className="grid-item" xs={6} md={4}>
                <div className="mentor-img">
                  <img src={bart}></img>
                </div>
                <p>{"BART VAN DE VEL"}</p>
                <p>Global Program Manager, Meta</p>
              </Grid>
            </Grid>
          </div>
        </div>
      </div> 
    </div>
  
  );
};

export default GirlsRising;