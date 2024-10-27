import { FaBook, FaGamepad, FaRocket, FaPalette, FaMusic, FaWrench, FaNetworkWired, FaShareAlt,  } from "react-icons/fa";
import ConnectedNavar from "../../../../../components/comman/Navbar/Navbar";
import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

export default function GameDev(){
    const gameDevelopmentRoadmap = [
        {
            title: "Foundation Skills",
            content: {
                "Programming": ["Learn C# (for Unity)", "Learn C++ (for Unreal Engine)", "Familiarize with scripting languages (Python, JavaScript)"],
                "Mathematics": ["Basic Algebra", "Geometry (for 2D and 3D)", "Trigonometry (for physics calculations)", "Linear Algebra (vectors and matrices)"],
                "Computer Science Principles": ["Data Structures and Algorithms", "Object-Oriented Programming (OOP)", "Design Patterns"]
            },
            icon: <FaBook />,
        },
        {
            title: "Game Design Principles",
            content: {
                "Game Mechanics": ["Understand how games work, including rules, objectives, and interactions."],
                "Level Design": ["Learn about designing engaging levels and environments."],
                "User Experience (UX) & User Interface (UI) Design": ["Focus on creating intuitive interfaces and user-friendly experiences."],
                "Game Narrative": ["Explore storytelling and narrative techniques in games."]
            },
            icon: <FaGamepad />,
        },
        {
            title: "Game Engines",
            content: {
                "Unity": ["Learn C# scripting in Unity.", "Understand the Unity interface, game object management, and component systems.", "Work with physics, animations, and UI systems."],
                "Unreal Engine": ["Learn Blueprints (visual scripting) and C++ programming.", "Familiarize yourself with Unreal's level design and material systems.", "Explore particle effects and post-processing."]
            },
            icon: <FaRocket />, // Replace with an appropriate icon
        },
        {
            title: "Graphics and Art",
            content: {
                "2D Art": ["Learn pixel art, digital painting, and UI design using tools like Photoshop or GIMP.", "Familiarize yourself with sprite animation techniques."],
                "3D Art": ["Learn 3D modeling using Blender or Maya.", "Understand texturing, rigging, and animation.", "Explore asset creation for Unity or Unreal Engine."],
            },
            icon: <FaPalette />, // Replace with an appropriate icon
        },
        {
            title: "Audio Design",
            content: {
                "Sound Design": ["Learn about sound effects and ambient sounds."],
                "Music Composition": ["Use tools like Audacity or FL Studio for audio editing and production."],
            },
            icon: <FaMusic />, // Replace with an appropriate icon
        },
        {
            title: "Game Development Workflow",
            content: {
                "Version Control": ["Learn Git and GitHub for source control and collaboration."],
                "Agile Methodologies": ["Understand agile principles and how to implement them in game development."],
                "Prototyping and Iteration": ["Create quick prototypes to test gameplay ideas.", "Learn to iterate based on feedback."],
            },
            icon: <FaWrench />, // Replace with an appropriate icon
        },
        {
            title: "Networking and Multiplayer",
            content: {
                "Networking": ["Learn about client-server architecture.", "Understand the basics of multiplayer game development."],
                "Networking Frameworks": ["Familiarize yourself with frameworks like Photon for Unity or Unreals built-in networking capabilities."],
            },
            icon: <FaNetworkWired />, // Replace with an appropriate icon
        },
        {
            title: "Publishing and Marketing",
            content: {
                "Game Publishing": ["Understand the process of publishing games on platforms (Steam, Epic Games Store, etc.).", "Learn about funding options, grants, and crowdfunding."],
                "Marketing Strategies": ["Explore marketing strategies for indie games.", "Learn how to build a community and engage with players on social media."],
            },
            icon: <FaShareAlt />, // Replace with an appropriate icon
        },
    ];
    return(
        <div className="container">
            <ConnectedNavar/>
            <Container style={{ marginTop: 100 }}>
                <VerticalTimeline lineColor="#37C6F4">
                    {gameDevelopmentRoadmap.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#fff', color: '#000', border: "2px solid #37C6F4" }}
                            contentArrowStyle={{ borderRight: '7px solid  #37C6F4' }}
                            iconStyle={{ background: '#37C6F4', color: '#fff' }}
                            icon={item.icon}
                        >
                            <h3 className="vertical-timeline-element-title">{item.title}</h3>
                            {item.subtitle && 
                                <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                            }
                            {item.description && <p>{item.description}</p>}
                            <ul style={{ marginTop: "10px" }}>
                                {Array.isArray(item.content) ? (
                                    item.content.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))
                                ) : (
                                    Object.entries(item.content).map(([section, contentList], idx) => (
                                        <div key={idx}>
                                            <h4>{section}</h4>
                                            <ul>
                                                {contentList.map((contentItem, idx2) => (
                                                    <li key={idx2}>{contentItem}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))
                                )}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </Container>
        </div>
    );
}