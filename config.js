import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Thangajeyapradeep M",
    },
    social: {
        github: "TjAthena",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "SnapZnack Pvt Ltd – Company Website",
            description: "SnapZnack is a private limited food manufacturing company based in Tamil Nadu, India. I designed and developed a professional company website to establish a strong and credible digital presence.\n\nThe website clearly presents the company profile, product offerings, and brand identity in a clean, structured, and responsive layout, making it easy for customers and partners to understand the business.\n\nI am currently working with the client to convert the website into a full-scale e-commerce platform to support online sales and future business growth.",
            image: "/projects/project-1.png",
            technologies: ["React", "Graphic designing", "Domain", "Deployment"],
            github: "#",
            demo: "https://snapznack.com"
        },
        {
            id: 2,
            title: "Confidence Financial Services – Business Website & Employee Management Portal",
            description: "Confidence Financial Services is a Chennai-based financial solutions firm serving clients across Tamil Nadu, specializing in insurance marketing, mutual fund distribution, and banking products.\n\nI designed and developed a 10-page professional business website that is fully responsive across devices and screen sizes, optimized for fast loading, smooth performance, and clear navigation.\n\nIn addition to the public-facing website, I built a secure Employee Management Portal using Django and REST APIs with a MySQL database. The system supports role-based access, employee records management, and internal operational workflows.\n\nCustom graphic illustrations were created to support branding and visual clarity, ensuring a clean, trustworthy, and stress-free digital presence for both customers and internal teams.",
            image: "/projects/project-2.png",
            technologies: ["TypeScript", "react", "Django", "REEST API", "MySQL"],
            github: "#",
            demo: "https://confidencefoundation.in/"
        },
        {
            id: 3,
            title: "Real-Time Music Streaming Analytics Pipeline",
            description: "Designed a real-time data pipeline simulating events from a music streaming platform (similar to Spotify), capturing user interactions such as song plays, navigation events, and authentication activities.\n\nThe system processes streaming data in real time and stores it in a data lake at regular intervals (every two minutes). An hourly batch job consumes this data, applies transformations, and generates analytics-ready tables.\n\nThe pipeline supports dashboard analytics for metrics such as popular songs, active users, user behavior patterns, and demographic insights.",
            image: "/projects/project-3.jpg",
            technologies: ["Python", "Apache Airflow", "Apache Spark", "SQL", "Data Lake"],
            github: "https://github.com/TjAthena/End-to-End-Data-Pipeline-Kafka-Spark-Airflow-Batch-Streaming-with-Docker-Setup",
            demo: "https://github.com/TjAthena/End-to-End-Data-Pipeline-Kafka-Spark-Airflow-Batch-Streaming-with-Docker-Setup"
        },
        {
            id: 4,
            title: "SQL-Focused Data Engineering with Medallion Architecture",
            description: "A compact, hands-on data engineering project designed for SQL practitioners and aspiring data engineers to work with realistic, large-scale datasets.\n\nThe project focuses on building ETL workflows using CSV data (~1.55M rows), applying data cleaning, schema design, and transformations across the Bronze, Silver, and Gold layers following the Medallion Architecture.\n\nEmphasis was placed on SQL performance optimization, including efficient joins, aggregations, indexing strategies, and understanding execution plans, while keeping the toolchain minimal to strengthen core SQL fundamentals.",
            image: "/projects/project-4.png",
            technologies: ["SQL","Data Warehousing","Medallion Architecture","CSV Data Processing","Query Optimization","Schema Design"],
            github: "https://github.com/TjAthena/SQL-Focused-Data-Engineering-with-Medallion-Architecture",
            demo: "https://github.com/TjAthena/SQL-Focused-Data-Engineering-with-Medallion-Architecture"
        },
        {
            id: 5,
            title: "Shatapathram – Exporter Website & Digital Assets",
            description: "Shatapathram is a global peanut exporter with over 4.5 years of industry experience, handling more than 1,500 tons annually across farming, processing, and value-added operations.\n\nI designed and developed an industrial-grade exporter website using HTML and CSS, consisting of 60+ pages across six languages to support international buyers and partners.\n\nIn addition to web development, I handled domain management, professional email setup, Google indexing, and supporting digital assets, ensuring strong online visibility, fast performance, and exporter-level business credibility.",
            image: "/projects/project-5.png",
            technologies: ["HTML", "CSS", "6 Multilingual Website", "SEO", "Domain Management"],
            github: "https://shatapathram.com/",
            demo: "https://shatapathram.com/"
        }
 
    ],
    skills: [
        {
            title: "Frontend",
            icon: <HiCode />,
            description: "Industry-oriented web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "React", level: "Advanced", hot: true },
                { name: "Vue.js", level: "Advanced" },
                { name: "TailwindCSS", level: "Expert" },
            ]
        },
        {
            title: "Backend & APIs",
            icon: <HiDatabase />,
            description: "Scalable backend systems & AI integrations",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Python", level: "Advanced", hot: true },
                { name: "Django", level: "Advanced", hot: true },
                { name: "REST API", level: "Intermediate", hot: true }
            ]
        },
        {
            title: "Data Engineering & Analytics",
            icon: <HiCube />,
            description: "ETL, data pipelines & analytics-ready data",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "SQL", level: "Advanced", hot: true },
                { name: "Apache Airflow", level: "Intermediate", hot: true },
                { name: "Apache Spark", level: "Intermediate" },
                { name: "AWS RDS", level: "Intermediate" },
                { name: "AWS Lambda", level: "Intermediate" },
                { name: "Data Warehousing", level: "Intermediate" },
                { name: "Data Engineering Concepts", level: "Intermediate" }
            ]
        }
    ],
    experiences: [
        {
            position: "AI-Powered Full-Stack Web Developer",
            company: "Freelance",
            period: "Sep 2024 - Present",
            location: "Remote",
            description: "Designing, developing, and deploying production-ready Web sites and full-stack web applications with integrated automation and data-driven features. Focused on building scalable systems that solve real business problems.",
            responsibilities: [
                "Designed and implemented frontend UI/UX systems tailored to different industries, ensuring layouts, navigation, and interaction flows match real-world usage patterns",
                "uilt and deployed 5+ full-stack web applications including Employee Management Systems, Order Management Platforms, and AI-assisted Content Tools using Python, Django, and REST APIs",
                "Deployed, hosted, and maintained applications on Render, Vercel, and Hostinger, ensuring scalability, uptime, and smooth performance",
                "Provided post-deployment support including UI refinements, performance tuning, SEO Optimization and iterative improvements based on real user feedback"
            ],
            technologies: ["Python django", "Vue.js", "REST API", "JavaScript", "AI", "Domain-Specific Solutions"]
        },
        {
            position: "Data Integration & Analytics Engineer",
            company: "Freelancing and Incubation center Projects",
            period: "Sep 2024 - Present",
            location: "Remote",
            description: "Worked on end-to-end data integration and analytics solutions for startups, incubation centres, and enterprise clients across logistics and legacy system environments. Focused on transforming fragmented data into clean, structured, analytics-ready datasets to support business reporting and AI/ML initiatives.",
            responsibilities: [
                "Designed and executed end-to-end ETL pipelines using Python, SQL, AWS Glue, Lambda, Apache Spark, and Apache Airflow, ingesting data from CSV, XML, and REST API (JSON) sources",
                "Built analytics-ready data warehouses following Medallion Architecture (Bronze, Silver, Gold), applying data mapping, profiling, and business transformation logic to deliver clean, business-value datasets",
                "Modernized and structured legacy enterprise and logistics data, enabling reliable business analytics and AI/ML model training aligned with client requirements",
                "Authored 10–13 comprehensive documents (ETL flows, data models, source-to-target mappings, and data catalogs) and collaborated with analysts and data engineers to support KPI-driven dashboards"
            ],
            technologies: ["Python", "SQL", "Apache Airflow", "ETL/ELT", "Cloud & AWS Services", "Documentation"]
        }
    ],
    contactInfo: [
     
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@TjAthena",
            link: `https://github.com/TjAthena`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "tjpradeep2000@gmail.com",
            link: "mailto:tjpradeep2000@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "India",
            link: null
        }
    ]
}