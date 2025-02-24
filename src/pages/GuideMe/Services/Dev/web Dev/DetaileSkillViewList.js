const skillsDetails = [
    {
        name: "HTTP",
        overview: "HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.",
        articles: [
            { title: "What is HTTP", url: "https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/" },
            { title: "Everything you need to know about HTTP", url: "https://cs.fyi/guide/http-in-depth" },
            { title: "How HTTP works?", url: "https://howhttps.works/" },
        ],
        videos: [
            { title: "What is HTTP and Why Web Is Built On It?", url: "https://www.youtube.com/watch?v=4_-KdOLZWLs&pp=ygUMV2hhdCBpcyBodHRw" },
        ],
        certificates: [
            { title: "HTTP Protocols", url: "https://www.edx.org/learn/http-protocols" }
        ]
    },
    {
        name: "DNS",
        overview: "DNS allows users to connect to websites using domain names instead of IP addresses. Learn how DNS works.",
        articles: [
            { title: "What is DNS?", url: "https://www.cloudflare.com/fr-fr/learning/dns/what-is-dns/" },
            { title: "DNS Records Explained", url: "https://gcore.com/learning/dns-records-explained/" }
        ],
        videos: [
            { title: "DNS Explained in 100 Seconds", url: "https://www.youtube.com/watch?v=UVR9lhUGAyU&pp=ygUSZG9tYWluIG5hbWUgc3lzdGVt" },
        ],
        certificates: [
            { title: "DNS Essentials", provider: "Example Academy", url: "https://example.com/dns-cert" }
        ]
    },
    {
        name: "Hosting",
        overview: "Web Hosting is like renting space on the Internet or the web browser, its equivalent to allocating server space on the World Wide Web.",
        articles: [
            { title: "What is web hosting ?", url: "https://www.hostinger.com/tutorials/what-is-web-hosting/" },
            //{ title: "DNS Records Explained", url: "https://gcore.com/learning/dns-records-explained/" }
        ],
        videos: [
            { title: "What is Web Hosting and How Does It Work? (For Complete Beginners)", url: "https://www.youtube.com/watch?v=H8oAvyqQwew" },
        ],
        certificates: [
            //{ title: "DNS Essentials", provider: "Example Academy", url: "https://example.com/dns-cert" }
        ]
    },
    {
        name: "Browsers",
        overview: "The web browser is an application software to explore www (World Wide Web). It provides an interface between the server and the client and it requests to the server for web documents and services. It works as a compiler to render HTML which is used to design a webpage.",
        articles: [
            { title: "What is web browser ?", url: "https://www.techtarget.com/whatis/definition/browser" },
            //{ title: "DNS Records Explained", url: "https://gcore.com/learning/dns-records-explained/" }
        ],
        videos: [
            { title: "What is a Web Browser?", url: "https://www.youtube.com/watch?v=fyOSkkQK14w" },
        ],
        certificates: [
            //{ title: "DNS Essentials", provider: "Example Academy", url: "https://example.com/dns-cert" }
        ]
    },
    {
        name: "Basics of HTML",
        overview: "Introduction to HTML tags, structure, and document setup.",
        articles: [
            { title: "Getting Started with HTML", url: "https://example.com/html-basics" },
            { title: "HTML Elements and Tags", url: "https://example.com/html-elements" }
        ],
        videos: [
            { title: "HTML Basics for Beginners", url: "https://youtube.com/html-basics" }
        ],
        certificates: [
            { title: "HTML Fundamentals", provider: "Example Academy", url: "https://example.com/html-cert" }
        ]
    },
    {
        name: "Learn Basics",
        overview: "Introduction to CSS, selectors, properties, and styling fundamentals.",
        articles: [
            { title: "CSS Basics", url: "https://example.com/css-basics" }
        ],
        videos: [
            { title: "CSS Basics for Beginners", url: "https://youtube.com/css-basics" }
        ],
        certificates: [
            { title: "CSS Basics Certificate", provider: "Example Academy", url: "https://example.com/css-cert" }
        ]
    },
    {
        name: "Basics",
        overview: "Introduction to JavaScript syntax, variables, and control structures.",
        articles: [
            { title: "JavaScript Basics", url: "https://example.com/js-basics" }
        ],
        videos: [
            { title: "JavaScript for Beginners", url: "https://youtube.com/js-basics" }
        ],
        certificates: [
            { title: "JavaScript Essentials", provider: "Example Academy", url: "https://example.com/js-cert" }
        ]
    },
    {
        name: "Components",
        overview: "Understanding React components, JSX syntax, and rendering logic.",
        articles: [
            { title: "React Components Guide", url: "https://example.com/react-components" }
        ],
        videos: [
            { title: "React Components Explained", url: "https://youtube.com/react-components" }
        ],
        certificates: [
            { title: "React Basics Certificate", provider: "Example Academy", url: "https://example.com/react-cert" }
        ]
    },
    // Additional skill
    {
        name: "Git",
        overview: "Version control with Git, including basic commands and workflows.",
        articles: [
            { title: "Git Basics", url: "https://example.com/git-basics" },
            { title: "Version Control with Git", url: "https://example.com/version-control" }
        ],
        videos: [
            { title: "Git for Beginners", url: "https://youtube.com/git-beginners" }
        ],
        certificates: [
            { title: "Git Fundamentals", provider: "Example Academy", url: "https://example.com/git-cert" }
        ]
    },
    {
        name: "Structuring Your Webpages with HTML",
        overview: "Using HTML to structure web pages with semantic tags and layouts.",
        articles: [
            { title: "HTML Page Structure", url: "https://example.com/html-structure" }
        ],
        videos: [
            { title: "HTML Layouts and Structure", url: "https://youtube.com/html-layouts" }
        ],
        certificates: []
    },
];

export default skillsDetails;