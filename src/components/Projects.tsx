
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      title: "3D Data Visualization",
      category: "3d",
      description: "Interactive 3D visualization tool for complex datasets.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Three.js", "React", "D3.js"],
      link: "#",
    },
    {
      title: "Enterprise Dashboard",
      category: "web",
      description: "Responsive admin dashboard with real-time analytics.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["React", "Redux", "Node.js"],
      link: "#",
    },
    {
      title: "3D Product Configurator",
      category: "3d",
      description: "Customizable product viewer with 3D models and textures.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["WebGL", "Three.js", "GLSL"],
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      category: "web",
      description: "Full-featured online store with payment processing.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Next.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "3D Architectural Visualization",
      category: "3d",
      description: "Interactive architectural walkthroughs and renderings.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      tags: ["Blender", "Unity", "WebGL"],
      link: "#",
    },
    {
      title: "Mobile Fitness App",
      category: "mobile",
      description: "Cross-platform app for workout tracking and nutrition.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React Native", "Firebase", "Redux"],
      link: "#",
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
          <div className="flex justify-center mb-12">
            <TabsList className="bg-secondary">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="3d">3D</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-lg bg-transparent"
                >
                  <div className="relative">
                    <div className="overflow-hidden h-64">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background/90"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button variant="outline" className="rounded-full">
            View All Projects
          </Button>
        </div>

        {/* 3D Work Placeholder */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8">3D Work Showcase</h3>
          <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-secondary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m-8-4l8 4m8 0l-8 4-8-4"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-medium mb-2">3D Model Showcase</h4>
              <p className="text-muted-foreground mb-6">
                This is where your 3D models and interactive experiences will be
                displayed. You can embed WebGL content, Three.js scenes, or 3D
                model viewers here.
              </p>
              <Button variant="outline" className="rounded-full">
                Launch 3D Viewer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
