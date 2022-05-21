import React from 'react'
import './style.scss';

const themes = [
    {
        theme: "LGBTQ+ Safety",
        description: [
            "LGBTQ+ are discriminated against in all areas of public and private life individuals face a disproportionate amount of discrimination and challenges in all areas of public and private life. These organizations work to support more inclusive spaces and practices for the community.",
            "How might we increase engagement for nonprofits/institutions that advocate for the welfare of LGBTQ+ people in order to create a more compassionate environment?"
        ]
    },
    {
        theme: "Empowerment of Women",
        description: [
            "Women-led organizations uplift women by providing essential items (e.g., gently used clothing, bedding, toiletries) and resources such as support-groups, trauma-based therapy, and more. These organizations are made by women, for women, and work to address discrimination and bias produced by patriarchal societal norms.",
            "How might we elevate support for women's organizations in order to promote resources for women through a design-lens?"
        ]
    },
    {
        theme: "Refugee & Immigrant Relief",
        description: [
            "Refugees and immigrants confront substantial instances of prejudice and cultural barriers daily. These organizations strive to restore justice and equity, working to cultivate a safe, educated, and resourceful community for those struggling with displacement.",
            "How might we refine and expand their resources in order to help provide refugees and immigrants with a reliable support system?"
        ]
    }
]

const Themes = () => {
  return (
    <section className="themes">
        <h2>Central Themes</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id laoreet faucibus placerat volutpat aliquam. Orci ut ultricies ac mi. Est, amet, viverra interdum eu mattis lobortis felis.</p>
        <div className="themes__wrapper">
        {
            themes.map((obj, idx) => (
                <div className="themes__section">
                    <div className="themes__section__header">
                        <div className="themes__section__header__title">
                            <span>{`{${obj.theme}}`}</span>
                        </div>
                        <div className="themes__section__header__detail">
                            <div>
                                <div></div>
                            </div>
                            <div>
                                <span>Website</span>
                            </div>
                        </div>
                    </div>
                    <div className="themes__section__description">
                        <ul>
                            {
                                obj.description.map((bullet) => (
                                    <li>{bullet}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={`themes__section__spacer${idx % 2 === 0 ? "-hidden" : ""}`}></div>
                    <div className={`shapes ${idx % 2 !== 0 ? "right" : ""}`}>
                        <div className="oval" id="oval1"></div>
                        <div className="square" id="square2"></div>
                        <div className="square"></div>
                        <div className="circle" id="circle2"></div>
                        <div className="square"></div>
                    </div>
                </div>
            ))
        }
        </div>
    </section>
  )
}

export default Themes