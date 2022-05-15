import React from 'react'
import './style.scss';

const nonprofits = [
    {
        name: "Non-Profit"
    },
    {
        name: "Non-Profit"
    },
    {
        name: "Non-Profit"
    },
    {
        name: "Non-Profit"
    },
    {
        name: "Non-Profit"
    },
    {
        name: "Non-Profit"
    },
]

const Overview = () => {
  return (
    <section className="overview">
        <div className="overview__hero">
            <h2>Over<br/>view</h2>
            <div className="overview__hero__list">
                <ul>
                    <li>June 28 - September 3, 2021</li>
                    <li>12-15 hr commitment per week</li>
                    <li>Network with industry professionals</li>
                    <li>Help small businesses</li>
                </ul>
            </div>
        </div>
        {
            nonprofits.map((obj) => (
                <div className="overview__nonprofit">
                    <div className="overview__nonprofit__header">
                        <div className="overview__nonprofit__header__title">
                            <span>{`{${obj.name}}`}</span>
                        </div>
                        <div className="overview__nonprofit__header__detail">
                            <div>
                                <span>Website</span>
                            </div>
                            <div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="overview__nonprofit__description">
                        <ul>
                            <li>Description</li>
                        </ul>
                    </div>
                </div>
            ))
        }

    </section>
  )
}

export default Overview