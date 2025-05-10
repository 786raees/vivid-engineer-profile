import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const screenshots = [
  "/lovable-uploads/projects/server_automation/server_list_2.jpg",
  "/lovable-uploads/projects/server_automation/server_list.jpg",
];

const techColors: Record<string, string> = {
  Python: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Django: "bg-green-100 text-green-800 border-green-200",
  "Django REST Framework": "bg-blue-100 text-blue-800 border-blue-200",
  MySQL: "bg-orange-100 text-orange-800 border-orange-200",
  SQLite: "bg-gray-100 text-gray-800 border-gray-200",
  Docker: "bg-blue-200 text-blue-900 border-blue-300",
  "Docker Compose": "bg-blue-50 text-blue-700 border-blue-100",
  Jenkins: "bg-purple-100 text-purple-800 border-purple-200",
  Gunicorn: "bg-green-50 text-green-700 border-green-100",
  Whitenoise: "bg-gray-50 text-gray-700 border-gray-100",
  Decouple: "bg-pink-100 text-pink-800 border-pink-200",
  API: "bg-indigo-100 text-indigo-800 border-indigo-200"
};

const ProjectServerAutomationWebDetail: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-background text-foreground py-12 px-4 md:px-0 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <Button variant="outline" className="mb-8 flex items-center gap-2" onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back
        </Button>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <img src={screenshots[0]} alt="Server Automation Web Thumbnail" className="w-full md:w-1/2 rounded-xl shadow-lg border border-border animate-slide-up" />
          <div className="flex-1 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Server Automation Web: <span className="text-primary">Infrastructure Management & Automation</span></h1>
            <p className="text-lg text-muted-foreground mb-4">A robust Django-based web application to streamline and automate server infrastructure management. Schedule, monitor, and control server tasks with a user-friendly web interface, modern DevOps, and full containerization.</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {["Python", "Django", "Django REST Framework", "MySQL", "SQLite", "Docker", "Docker Compose", "Jenkins", "Gunicorn", "Whitenoise", "Decouple", "API"].map((tech) => (
                <span key={tech} className={`text-xs px-3 py-1 rounded-full font-semibold border ${techColors[tech] || "bg-secondary text-muted-foreground border-secondary"}`}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Screenshot Gallery */}
        <div className="mb-10 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {screenshots.map((src, i) => (
              <div key={i} className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md border border-border bg-background flex items-center justify-center">
                <img
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={e => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Details Sections */}
        <div className="grid gap-8">
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li><b>User Authentication & Access Control:</b> Secure login, role-based access for managing server tasks.</li>
                <li><b>Dashboard:</b> Centralized real-time monitoring of server statuses, task progress, and notifications.</li>
                <li><b>Task Scheduling & Management:</b> Schedule builds, restarts, updates, and more with fine-grained control.</li>
                <li><b>Real-Time Status Updates:</b> Live feedback on server health, task execution, and errors.</li>
                <li><b>Logging & Error Handling:</b> Comprehensive logs, error reporting, and recovery options.</li>
                <li><b>Interactive Task Creation:</b> Intuitive forms and wizards for automation tasks.</li>
                <li><b>API-Driven:</b> RESTful endpoints for integration and automation.</li>
                <li><b>Admin Interface Customization:</b> Enhanced Django admin with custom actions and visual indicators.</li>
                <li><b>CI/CD Integration:</b> Jenkins and Docker-based workflows for automated testing, building, and deployment.</li>
                <li><b>Containerized Deployment:</b> Docker and Compose for scalable, reproducible environments.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Architecture & Implementation</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li><b>Data Modeling:</b> Server & category models, status management, Django signals for automation.</li>
                <li><b>API & Views:</b> DRF endpoints, Swagger/Redoc docs, custom actions for heartbeat and tasks.</li>
                <li><b>Admin Customization:</b> Bulk actions, visual feedback, threaded operations for long tasks.</li>
                <li><b>DevOps & Automation:</b> Multi-stage Dockerfile, Compose orchestration, Jenkins-in-Docker, .env management.</li>
                <li><b>Security & Best Practices:</b> Token/session auth, role-based permissions, static file handling.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Obstacles & Solutions</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li><b>Real-Time Server Status Tracking:</b> Heartbeat API, Django signals, admin customizations for live status.</li>
                <li><b>Safe & Scalable Task Execution:</b> Python threading for background tasks, idempotent API design.</li>
                <li><b>Secure Credential Management:</b> Environment variables and Decouple for secret management.</li>
                <li><b>CI/CD in Containers:</b> Jenkins-in-Docker with host Docker access, best practices for Docker-in-Docker.</li>
                <li><b>Database Portability:</b> Env-based DB config for seamless MySQL/SQLite switching.</li>
                <li><b>User Experience in Admin:</b> Custom buttons, visual indicators, grouped actions for workflows.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">What I Learned & Added Value</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li><b>Full DevOps Lifecycle:</b> Hands-on with Docker, Compose, Jenkins for automation.</li>
                <li><b>API-First Design:</b> Built robust, well-documented APIs for future extension.</li>
                <li><b>Security Best Practices:</b> Secure coding, secret management, role-based access.</li>
                <li><b>Scalable Architecture:</b> Easily extensible for new server types, tasks, or integrations.</li>
                <li><b>Team Collaboration:</b> Clear docs, best practices for easy contribution.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectServerAutomationWebDetail; 