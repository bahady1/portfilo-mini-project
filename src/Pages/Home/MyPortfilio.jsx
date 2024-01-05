import data from "../../data/index.json"

export default function MyPortfilio() {
    return(
        <section className="portfolio--section" id="MyPortfilio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="sub--title">Recent projects</p>
                    <h2 className="section--heading">My Protfolio</h2>
                </div>
                <div>
                <a href="https://github.com/bahady1" className="link--github"
                target="_blank"
                rel="noreferrer">
                    <button className="btn btn-github">Visit My Github </button></a>
                </div>
            </div>
            <div className="protfolio--section--container">
                {data?.portfilio?.map((item,index) => (
                    <div key={index} className="portfolio--section--card">
                        <div className="portfolio--section-img">
                            <img src={item.src} alt="Placeholder" />
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">{item.title}</h3>
                                <p className="text-md">{item.description}</p>
                                <br />
                                <h4 className="skills--section--description">Technologies Used</h4>
                                <p className="text-lg">{item.technologies_used}</p>
                            </div>
                            <a 
                            href={item.link}
                            className="navbar--content link--github"
                            target="_blank"
                            rel="noreferrer">
                            <p className="text-sm portfolio--link">
                                View The Project
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 20 19"
                                fill="none">
                                <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </p>
                </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}