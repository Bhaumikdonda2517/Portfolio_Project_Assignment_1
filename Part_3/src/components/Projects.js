import React from "react";

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-grid">
                <div className="project-card project-1">
                    <h3>Portfolio Website</h3>
                    <p>
                        This portfolio website showcases a clean and professional design
                        using HTML, CSS, Flexbox, and Grid. It features an About section,
                        Projects display, and a Contact form with smooth hover effects and
                        a zoom-in image effect. The site uses a consistent color scheme,
                        responsive layout, and user-friendly navigation, making it an
                        excellent platform to highlight skills, projects, and achievements.
                    </p>
                </div>
                <div className="project-card project-2">
                    <h3>E-Commerce Store</h3>
                    <p>
                        This E-Commerce Store highlights a modern, responsive design built
                        with HTML, CSS, and JavaScript. Featuring a product grid layout,
                        intuitive navigation, and interactive elements, it ensures a
                        seamless shopping experience. The store includes hover effects,
                        dynamic filtering, and a user-friendly interface. It’s an ideal
                        platform to showcase products, enhance user engagement, and drive
                        online sales effectively.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
