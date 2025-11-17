import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Curriculum from "./sections/Curriculum";
import Contact from "./sections/Contact";

type TabKey = "about" | "resume" | "portfolio" | "curriculum" | "contact" ;

interface NavItemProps {
    eventKey: TabKey;
    children: React.ReactNode;
}

const MainContent: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabKey>("about");

    return (
        <div
        className="card text-white border-0 rounded-4 shadow-lg"
        style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(235, 235, 235, 0.15)",
        }}
        >
        <div className="card-header bg-transparent border-0 pb-0">
            <Nav
            variant="pills"
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k as TabKey)}
            className="justify-content-center flex-wrap"
            >
            <NavItem eventKey="about">Sobre Mí</NavItem>
            <NavItem eventKey="resume">Resumen</NavItem>
            <NavItem eventKey="portfolio">Portafolio</NavItem>
            <NavItem eventKey="curriculum">Currículum</NavItem>
            <NavItem eventKey="contact">Contacto</NavItem>
            </Nav>
        </div>

        <div className="card-body p-4 p-lg-5">
            <TabContent>
                <TabPane eventKey="about" active={activeTab === "about"}>
                    <About />
                </TabPane>
                <TabPane eventKey="resume" active={activeTab === "resume"}>
                    <Experience />
                </TabPane>
                <TabPane eventKey="portfolio" active={activeTab === "portfolio"}>
                    <Projects />
                </TabPane>
                <TabPane eventKey="curriculum" active={activeTab === "curriculum"}>
                    <Curriculum />
                </TabPane>
                <TabPane eventKey="contact" active={activeTab === "contact"}>
                    <Contact />
                </TabPane>
            </TabContent>
        </div>
        </div>
    );
};


const NavItem: React.FC<NavItemProps> = ({ eventKey, children }) => (
    <Nav.Item>
        <Nav.Link
        eventKey={eventKey}
        className="mx-2 fw-semibold text-uppercase"
        style={{
            color: "#00FFC6",
            borderRadius: "20px",
            transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.background = "#00FFC6";
            e.currentTarget.style.color = "#0F2027";
            e.currentTarget.style.boxShadow = "0 0 10px #00FFC6";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#00FFC6";
            e.currentTarget.style.boxShadow = "none";
        }}
        >
        {children}
        </Nav.Link>
    </Nav.Item>
);

export default MainContent;
