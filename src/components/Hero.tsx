import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const roles = ["Full Stack Engineer", "Problem Solver", "Tech Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < roles[roleIndex].length) {
          setTypedText(roles[roleIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          setTypingSpeed(150);
        } else {
          setIsDeleting(true);
          setTypingSpeed(1500);
        }
      } else {
        if (charIndex > 0) {
          setTypedText(roles[roleIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          setTypingSpeed(75);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(interval);
  }, [charIndex, isDeleting, roleIndex, roles, typingSpeed]);

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent z-0"></div>
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      <div className="container-section relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Photo Section */}
          <div className="relative w-full max-w-xs md:max-w-sm flex-shrink-0 mb-8 md:mb-0">
            <div className="h-[320px] md:h-[400px] bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl overflow-hidden">
              <img
                src="/lovable-uploads/d740466b-3f50-445d-a484-135876a7b9ef.png"
                alt="Profile"
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-16 w-16 md:h-24 md:w-24 bg-primary rounded-xl"></div>
            <div className="absolute -top-6 -left-6 h-16 w-16 md:h-24 md:w-24 border-2 border-primary rounded-xl"></div>
          </div>
          {/* Text Section */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left animate-fade-in">
            <p className="text-primary font-medium mb-4">👋 Hello, I'm Waqar Khan</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 animate-slide-up">
              Senior <span className="gradient-text">Software Engineer</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Building robust, scalable, and beautiful digital products for the modern world.
            </p>
            <div className="h-12 mb-8 flex items-center justify-center md:justify-start w-full">
              <h2 className="text-xl md:text-3xl font-medium text-muted-foreground">
                I am a{" "}
                <span className="text-foreground inline-block min-w-[16rem] md:min-w-[20rem]">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-xl mb-10 animate-slide-right">
              I build exceptional digital experiences that combine stunning design
              with cutting-edge technology. Let's create something amazing together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg" className="rounded-full" onClick={() => navigate("/projects")}>View My Work</Button>
              <Button variant="outline" size="lg" className="rounded-full" onClick={() => navigate("/contact")}>Contact Me</Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <Button variant="ghost" size="icon" onClick={() => navigate("/about")}
            aria-label="Scroll to About">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;