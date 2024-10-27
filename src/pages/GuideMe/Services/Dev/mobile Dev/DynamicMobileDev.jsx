import { MdDisplaySettings } from "react-icons/md";
import { FaCode, FaMobileAlt, FaDatabase, FaPaintBrush, FaBuilding , FaRocket, FaNetworkWired, FaTools } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import ConnectedNavar from "../../../../../components/comman/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

export default function DynamicMobileDev(){
    const androidDevelopment = [
        {
            title: "Development Environment",
            content: ["Install Android Studio", "Set up Java Development Kit (JDK)", "Android SDK and Emulator Setup"],
            icon: <MdDisplaySettings />,
        },
        {
            title: "Programming Languages",
            content: {
                "Java (Optional)": ["Variables and Data Types", "Control Flow", "OOP Concepts"],
                "Kotlin (Preferred)": ["Basic Syntax", "Functions and Lambdas", "Object-Oriented Programming", "Null Safety"],
            },
            icon: <FaCode />,
        },
        {
            title: "Android Components",
            content: ["Activity Lifecycle", "XML Layouts", "Views and Widgets (TextView, Button, ImageView)", "Intents and Intent Filters"],
            icon: <FaMobileAlt />,
        },
        {
            title: "Data Management",
            content: {
                "Local Storage": ["Shared Preferences", "SQLite", "Room Persistence Library"],
                "Networking": ["Retrofit", "Volley", "Parsing JSON"],
            },
            icon: <FaDatabase />,
        },
        {
            title: "UI and UX",
            content: ["RecyclerView and Adapters", "Fragments", "Material Design", "Constraint Layout"],
            icon: <FaPaintBrush />,
        },
        {
            title: "Architecture Patterns",
            content: ["MVC", "MVVM", "ViewModel", "LiveData"],
            icon: <FaBuilding />,
        },
        {
            title: "Advanced Topics",
            content: {
                "Background Tasks": ["Threads", "Coroutines", "WorkManager"],
                "Dependency Injection": ["Dagger", "Hilt"],
            },
            icon: <FaRocket />,
        },
        {
            title: "App Deployment",
            content: {
                "Testing": ["Unit Tests", "UI Tests (Espresso)", "Debugging with Logcat"],
                "Publishing": ["Generate APKs", "Google Play Store"],
            },
            icon: <IoRocketOutline />,
        },
    ];
    const iosDevelopment = [
        {
            title: "Development Environment",
            content: ["Install Xcode", "Set up Xcode Command Line Tools", "iOS Simulator Setup"],
            icon: <MdDisplaySettings />,
        },
        {
            title: "Programming Languages",
            content: {
                "Swift (Preferred)": ["Basic Syntax", "Functions and Closures", "Optionals and Error Handling", "Protocols and Delegates"],
                "Objective-C (Optional)": ["Basic Syntax", "Memory Management", "Working with APIs"],
            },
            icon: <FaCode />,
        },
        {
            title: "iOS Components",
            content: ["UIViewController Lifecycle", "Storyboards and XIBs", "Auto Layout and Constraints", "Working with UIKit (Labels, Buttons, Images)"],
            icon: <FaMobileAlt />,
        },
        {
            title: "Data Management",
            content: {
                "Local Storage": ["UserDefaults", "Core Data", "Keychain"],
                "Networking": ["URLSession", "Alamofire", "Parsing JSON"],
            },
            icon: <FaDatabase />,
        },
        {
            title: "UI and UX",
            content: ["TableViews and CollectionViews", "Custom Views", "Animations", "SwiftUI (Optional)"],
            icon: <FaPaintBrush />,
        },
        {
            title: "Architecture Patterns",
            content: ["MVC", "MVVM", "Combine Framework", "Delegation Pattern"],
            icon: <FaBuilding />,
        },
        {
            title: "Advanced Topics",
            content: {
                "Background Tasks": ["Grand Central Dispatch (GCD)", "Operation Queues"],
                "Dependency Injection": ["Swinject"],
            },
            icon: <FaRocket />,
        },
        {
            title: "App Deployment",
            content: {
                "Testing": ["Unit Tests", "UI Tests (XCTest)", "Debugging with Instruments"],
                "Publishing": ["App Store Connect", "App Store Guidelines", "Ad Hoc Distribution"],
            },
            icon: <IoRocketOutline />,
        },
    ];    
    const crossPlatformDevelopment = [
        {
            title: "Development Frameworks",
            content: ["Flutter", "React Native", "Xamarin", "Ionic"],
            icon: <MdDisplaySettings />,
        },
        {
            title: "Programming Languages",
            content: {
                "Dart (for Flutter)": ["Basic Syntax", "Functions and Asynchronous Programming", "Object-Oriented Programming"],
                "JavaScript (for React Native)": ["ES6 Syntax", "Promises and Async/Await", "Modules and Components"],
                "C# (for Xamarin)": ["Basic Syntax", "OOP Concepts", "XAML for UI"],
            },
            icon: <FaCode />,
        },
        {
            title: "UI Components",
            content: {
                "Flutter": ["Widgets", "Layouts", "Stateful and Stateless Widgets", "Material Design and Cupertino"],
                "React Native": ["Components", "Flexbox Layout", "Styling with CSS", "React Hooks"],
                "Xamarin": ["XAML Layouts", "Controls", "Navigation"],
            },
            icon: <FaMobileAlt />,
        },
        {
            title: "State Management",
            content: {
                "Flutter": ["Provider", "Riverpod", "GetX", "Bloc"],
                "React Native": ["Context API", "Redux", "MobX"],
            },
            icon: <FaDatabase />,
        },
        {
            title: "APIs and Networking",
            content: {
                "Flutter": ["HTTP package", "Dio", "GraphQL"],
                "React Native": ["Fetch API", "Axios", "GraphQL"],
                "Xamarin": ["HttpClient", "RestSharp", "Json.NET"],
            },
            icon: <FaNetworkWired />,
        },
        {
            title: "Device Integration",
            content: {
                "Flutter": ["Plugins for Camera, GPS, Sensors"],
                "React Native": ["Native Modules (Camera, GPS)", "Third-party Libraries"],
                "Xamarin": ["Native API Access", "Plugins for Camera, GPS"],
            },
            icon: <FaTools />,
        },
        {
            title: "Architecture Patterns",
            content: {
                "Flutter": ["MVC", "MVVM", "Bloc Pattern"],
                "React Native": ["Component-Based Architecture", "Flux", "Redux"],
                "Xamarin": ["MVVM", "Dependency Injection"],
            },
            icon: <FaBuilding />,
        },
        {
            title: "App Deployment",
            content: {
                "Flutter": ["iOS and Android Deployment", "App Store and Google Play Setup"],
                "React Native": ["App Store and Google Play Setup", "Expo and Bare Workflow"],
                "Xamarin": ["App Store and Google Play Setup", "App Center"],
            },
            icon: <IoRocketOutline />,
        },
    ];    
    const { skill } = useParams();
    var timelineData;
    if(skill == "android development"){
        timelineData = androidDevelopment;
    }
    else if(skill == "ios development"){
        timelineData = iosDevelopment;
    }
    else if(skill == "cross-platform development"){
        timelineData = crossPlatformDevelopment;
    }
    return(
        <div className="container">
            <ConnectedNavar/>
            <Container style={{ marginTop: 100 }}>
                <VerticalTimeline lineColor="#37C6F4">
                    {timelineData.map((item, index) => (
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