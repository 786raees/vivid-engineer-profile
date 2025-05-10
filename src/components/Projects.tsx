import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const projects = [
    {
      title: "gio365: Real-Time Sports Betting Platform",
      category: "web",
      description:
        "Full-stack Django app for real-time sports betting. Live football data, user management, betting logic, modern frontend, Dockerized, Sentry, and more.",
      image: "/lovable-uploads/projects/gio365/unsplash-main.jpg",
      tags: [
        "Python",
        "Django",
        "HTMX",
        "Tailwind",
        "Docker",
        "Sentry",
        "API-Football",
        "Django Q",
        "Amazon SES",
        "Amazon S3",
        "Environs"
      ],
      link: "/projects/gio365",
    },
    {
      title: "Gmail Contact Extractor & Dashboard",
      category: "web",
      description:
        "Python app that extracts Gmail contacts using the Gmail API, with a secure Flask dashboard for visualization, management, and AES-256 encrypted exports.",
      image: "/lovable-uploads/projects/google_profile/dashboard.png",
      tags: [
        "Python",
        "Flask",
        "Gmail API",
        "OAuth 2.0",
        "Pandas",
        "Cryptography",
        "Docker"
      ],
      link: "/projects/gmail-contact-extractor",
    },
    {
      title: "Automated Betting Management System (Stake.com Bot)",
      category: "web",
      description: "Automates and manages betting on Stake.com with multi-profile, advanced automation, and risk management.",
      image: "/lovable-uploads/projects/stake/dashboard.png",
      tags: ["Python", "Django", "Selenium", "SQLite", "CapMonster"],
      link: "/projects/stake",
    },
    {
      title: "Multilogin Automation Service (MLAS)",
      category: "web",
      description:
        "Distributed microservices platform automating data erasure requests for GDPR/CCPA compliance. Kafka, AWS, browser automation, and more.",
      image: "/lovable-uploads/projects/mlas/unsplash-main.jpg",
      tags: [
        "Python",
        "FastAPI",
        "Kafka",
        "AWS",
        "Lambda",
        "SES",
        "S3",
        "EventBridge",
        "DynamoDB",
        "MongoDB",
        "Playwright",
        "Selenium",
        "Docker"
      ],
      link: "/projects/mlas",
    },
    {
      title: "Traffic Dashboard: Real-Time Analytics & Monitoring",
      category: "web",
      description:
        "Sophisticated Django-based dashboard for real-time traffic analytics, campaign management, advanced reporting, and user management. Features live data, interactive visualizations, automated reports, and robust security.",
      image: "/lovable-uploads/projects/traffic_dashboard/dashbaord.jpg",
      tags: [
        "Python",
        "Django",
        "Tailwind",
        "Docker",
        "SQLite",
        "Hatch",
        "Pre-commit",
        "GitHub Actions",
        "REST API"
      ],
      link: "/projects/traffic-dashboard",
    },
    {
      title: "Server Automation Web: Infrastructure Management & Automation",
      category: "web",
      description:
        "Django-based platform for automating server management: schedule, monitor, and control server tasks with a user-friendly web UI. Features real-time status, task scheduling, CI/CD integration, and robust security.",
      image: "/lovable-uploads/projects/server_automation/server_list_2.jpg",
      tags: [
        "Python",
        "Django",
        "Django REST Framework",
        "MySQL",
        "SQLite",
        "Docker",
        "Docker Compose",
        "Jenkins",
        "Gunicorn",
        "Whitenoise",
        "Decouple",
        "API"
      ],
      link: "/projects/server-automation-web",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="bg-secondary/30 py-20">
      <div className="container-section">
        <h2 className="section-heading">My Projects</h2>

        <Tabs
          defaultValue="all"
          onValueChange={setActiveTab}
          className="w-full"
        >
          {/* <div className="flex justify-center mb-12">
            <TabsList className="bg-secondary">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="3d">3D</TabsTrigger>
            </TabsList>
          </div> */}

          <TabsContent value={activeTab}>
            <div className="space-y-8">
              {filteredProjects.length === 0 && (
                <div className="text-center text-muted-foreground py-12">
                  No projects found for this category.
                </div>
              )}
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  tabIndex={0}
                  aria-label={`View details for ${project.title}`}
                  className="group flex flex-col md:flex-row items-stretch bg-card rounded-lg shadow-lg border border-border overflow-hidden transition-all duration-300 cursor-pointer focus:ring-2 focus:ring-primary outline-none hover:shadow-2xl hover:border-primary"
                  onClick={() => project.link !== "#" && navigate(project.link)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      if (project.link !== "#") navigate(project.link);
                    }
                  }}
                >
                  <div className="relative w-full md:w-64 h-56 md:h-auto flex-shrink-0 bg-secondary/40 flex items-center justify-center">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={e => { e.currentTarget.style.display = 'none'; }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground text-4xl font-bold bg-secondary/60">
                        ?
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-between p-6 bg-black/60 backdrop-blur-sm">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-white drop-shadow-md truncate" title={project.title}>
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-white drop-shadow-sm line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full font-semibold bg-primary/10 text-primary border border-primary/20 shadow-sm truncate max-w-[120px]"
                            title={tag}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full mt-2 group-hover:bg-primary group-hover:text-background transition-colors"
                        tabIndex={-1}
                        onClick={e => {
                          e.stopPropagation();
                          if (project.link !== "#") navigate(project.link);
                        }}
                        aria-label={`View details for ${project.title}`}
                      >
                        View Project →
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* <div className="mt-12 text-center">
          <Button variant="outline" className="rounded-full">
            View All Projects
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
