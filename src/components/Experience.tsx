
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Experience: React.FC = () => {
  const experiences = [
    {
      period: "2020 - Present",
      title: "Senior Full Stack Engineer",
      company: "Tech Innovators Inc",
      description:
        "Lead development of cloud-based enterprise solutions, managing a team of 5 developers and implementing CI/CD pipelines that reduced deployment time by 40%.",
    },
    {
      period: "2017 - 2020",
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      description:
        "Built and maintained multiple client web applications using React, Node.js and MongoDB. Improved application performance by 60% through code optimization and refactoring.",
    },
    {
      period: "2015 - 2017",
      title: "Frontend Developer",
      company: "Creative Web Agency",
      description:
        "Developed responsive websites for various clients using HTML, CSS, and JavaScript. Collaborated with designers to implement pixel-perfect UIs.",
    },
  ];

  const education = [
    {
      period: "2012 - 2015",
      title: "M.S. in Computer Science",
      institution: "University of Technology",
      description:
        "Specialized in Software Engineering with a focus on web technologies and distributed systems.",
    },
    {
      period: "2008 - 2012",
      title: "B.S. in Computer Science",
      institution: "State University",
      description:
        "Graduated with honors, focusing on foundational programming concepts and data structures.",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container-section">
        <h2 className="section-heading">Experience & Education</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-secondary"></div>

              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="card-gradient border-none ml-10 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-14 top-6 w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                  </div>
                  {/* Timeline date  */}
                  <div className="absolute -left-44 top-6 w-28 text-right">
                    <span className="text-primary font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <p className="text-primary mb-3">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-secondary"></div>

              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="card-gradient border-none ml-10 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-14 top-6 w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                  </div>
                  {/* Timeline date */}
                  <div className="absolute -left-44 top-6 w-28 text-right">
                    <span className="text-primary font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold">{edu.title}</h4>
                    <p className="text-primary mb-3">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
