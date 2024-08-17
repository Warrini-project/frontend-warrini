import "./webDev.css"
import Navar from "../../../../components/comman/Navbar/Navbar"

export default function WebDev(){
    return(
        <div className="container">
            <Navar/>
            <div className="row" style={{ marginTop: 100 }}>

                <div className="col">
                <div className="main-timeline">
                    <div className="timeline">
                    <a href="#" className="timeline-content">
                        <span className="timeline-year">1</span>
                        <div className="timeline-icon">
                        <i className="fa fa-rocket" aria-hidden="true"></i>
                        </div>
                        <div className="content">
                        <h3 className="title">HTML and CSS Fundamentals</h3>
                        <p className="description">
                        Begin your web development journey by understanding the core concepts of HTML and CSS. HTML (HyperText Markup Language) serves as the structure of web pages, defining elements and their relationships. CSS (Cascading Style Sheets) is used for styling.</p>
                        </div>
                    </a>
                    </div>
                    <div className="timeline">
                    <a href="#" className="timeline-content">
                        <span className="timeline-year">2</span>
                        <div className="timeline-icon">
                        <i className="fa fa-users" aria-hidden="true"></i>
                        </div>
                        <div className="content">
                        <h3 className="title">JavaScript Essentials</h3>
                        <p className="description">
                        Delve into the world of JavaScript, the programming language that adds interactivity and dynamic features to web pages. Learn the fundamentals, including variables, data types, and control structures. Master DOM manipulation to dynamically update HTML and CSS, responding to user interactions.</p>
                        </div>
                    </a>
                    </div>
                    <div className="timeline">
                    <a href="#" className="timeline-content">
                        <span className="timeline-year">3</span>
                        <div className="timeline-icon">
                        <i className="fa fa-cog" aria-hidden="true"></i>
                        </div>
                        <div className="content">
                        <h3 className="title">Responsive Web Design</h3>
                        <p className="description">
                        Ensure your websites are accessible and visually appealing across various devices with responsive web design techniques. Implement media queries to apply different styles based on screen sizes, creating a seamless experience for users on desktops, tablets, and mobile devices. </p>
                        </div>
                    </a>
                    </div>
                    <div className="timeline">
                    <a href="#" className="timeline-content">
                        <span className="timeline-year">4</span>
                        <div className="timeline-icon">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        </div>
                        <div className="content">
                        <h3 className="title">Front-End Frameworks</h3>
                        <p className="description">
                        Elevate your front-end skills by mastering popular frameworks like React.js (or alternatives like Angular or Vue.js). These frameworks provide efficient ways to build dynamic user interfaces, introducing concepts such as components, state, and props.</p>
                        </div>
                    </a>
                    </div>
                    <div className="timeline">
                    <a href="#" className="timeline-content">
                        <span className="timeline-year">5</span>
                        <div className="timeline-icon">
                        <i className="fa fa-globe" aria-hidden="true"></i>
                        </div>
                        <div className="content">
                        <h3 className="title">Back-End Frameworks</h3>
                        <p className="description">
                        Transition to the server-side and build robust back-end systems using frameworks like Node.js (or alternatives like Django, Flask, Ruby on Rails, or Java/Spring). Learn to implement server-side logic, handle routing, and interact with databases to create dynamic and data-driven web applications. </p>
                        </div>
                    </a>
                    </div>
                    <div className="timeline">
                    <a href="#" className="timeline-content">
                        <span className="timeline-year">6</span>
                        <div className="timeline-icon">
                        <i className="fa fa-apple" aria-hidden="true"></i>
                        </div>
                        <div className="content">
                        <h3 className="title">Databases and SQL</h3>
                        <p className="description">
                        Explore the world of databases and SQL to effectively store and retrieve data. Understand database basics, including relational databases (e.g., MySQL, PostgreSQL) and NoSQL databases (e.g., MongoDB). 
                        </p>
                        </div>
                    </a>
                    </div>
                    <div className="timeline">
                    <a href="#" className="timeline-content">
                        <span className="timeline-year">7</span>
                        <div className="timeline-icon">
                        <i className="fa fa-edit" aria-hidden="true"></i>
                        </div>
                        <div className="content">
                        <h3 className="title">Version Control and Collaboration</h3>
                        <p className="description">
                        Master version control systems, starting with the fundamentals of Git. Learn how to use Git commands for versioning, such as commit, push, pull, and merge. Utilize platforms like GitHub, GitLab, or Bitbucket to collaborate with other developers, contribute to open-source projects, and manage code repositories.
                        </p>
                        </div>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </div>    
    );
}