
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About: React.FC = () => {
  const skills = [
    { name: "Frontend Development", level: 95 },
    { name: "Backend Development", level: 90 },
    { name: "Database Design", level: 85 },
    { name: "DevOps & Cloud", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "3D Development", level: 85 },
  ];

  return (
    <section id="about" className="bg-secondary/30 py-20">
      <div className="container-section">
        <h2 className="section-heading">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12">
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="relative">
              <div className="aspect-ratio-square h-[400px] bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* This is a placeholder for profile image */}
                  <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-20 w-20 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-primary rounded-xl"></div>
              <div className="absolute -top-6 -left-6 h-24 w-24 border-2 border-primary rounded-xl"></div>
            </div>
          </div>

          <div className="md:col-span-7">
            <h3 className="text-2xl font-bold mb-4">
              I'm a <span className="gradient-text">Full Stack Engineer</span>{" "}
              with over 10 years of experience
            </h3>
            <p className="text-muted-foreground mb-6">
              I specialize in building modern web applications, robust backend
              systems, and interactive 3D experiences. With a passion for clean
              code and innovative solutions, I've helped companies transform
              their digital presence and streamline their operations.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach combines technical expertise with a deep understanding
              of business needs to deliver solutions that not only work
              flawlessly but also drive real value. I'm constantly exploring new
              technologies and methodologies to push the boundaries of what's
              possible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Name:</h4>
                <p className="text-muted-foreground">John Doe</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email:</h4>
                <p className="text-muted-foreground">hello@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Location:</h4>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Available:</h4>
                <p className="text-muted-foreground">For freelance projects</p>
              </div>
            </div>

            <Button className="rounded-full">Download CV</Button>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="card-gradient border-none">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{skill.name}</h4>
                    <span className="text-primary font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
