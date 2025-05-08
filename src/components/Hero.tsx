
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const roles = ["Full Stack Engineer", "Problem Solver", "Tech Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (charIndex < roles[roleIndex].length) {
          setTypedText(roles[roleIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          setTypingSpeed(150);
        } else {
          // Done typing current word, pause before deleting
          setIsDeleting(true);
          setTypingSpeed(1500);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setTypedText(roles[roleIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          setTypingSpeed(75);
        } else {
          // Done deleting, move to next word
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(interval);
  }, [charIndex, isDeleting, roleIndex, roles, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent z-0"></div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container-section relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-primary font-medium mb-4 animate-fade-in">
          👋 Hello, I'm a
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          Senior <span className="gradient-text">Software Engineer</span>
        </h1>

        <div className="h-12 mb-8 flex items-center">
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
          <Button size="lg" className="rounded-full">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="rounded-full">
            Contact Me
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-muted-foreground hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
