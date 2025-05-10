import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const screenshots = [
  "/lovable-uploads/projects/traffic_dashboard/dashbaord.jpg",
  "/lovable-uploads/projects/traffic_dashboard/Projects.jpg",
  "/lovable-uploads/projects/traffic_dashboard/sessions.jpg",
  "/lovable-uploads/projects/traffic_dashboard/campaigns_multi_edit.jpg",
  "/lovable-uploads/projects/traffic_dashboard/errors.jpg"
];

const techColors: Record<string, string> = {
  Python: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Django: "bg-green-100 text-green-800 border-green-200",
  Tailwind: "bg-teal-100 text-teal-800 border-teal-200",
  Docker: "bg-blue-200 text-blue-900 border-blue-300",
  SQLite: "bg-gray-100 text-gray-800 border-gray-200",
  Hatch: "bg-purple-100 text-purple-800 border-purple-200",
  "Pre-commit": "bg-pink-100 text-pink-800 border-pink-200",
  "GitHub Actions": "bg-indigo-100 text-indigo-800 border-indigo-200",
  "REST API": "bg-blue-100 text-blue-800 border-blue-200"
};

const ProjectTrafficDashboardDetail: React.FC = () => {
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
          <img src={screenshots[0]} alt="Traffic Dashboard Thumbnail" className="w-full md:w-1/2 rounded-xl shadow-lg border border-border animate-slide-up" />
          <div className="flex-1 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Traffic Dashboard: <span className="text-primary">Real-Time Analytics & Monitoring</span></h1>
            <p className="text-lg text-muted-foreground mb-4">A sophisticated web-based traffic analytics and monitoring dashboard built with Django and modern web technologies. Advanced data visualization, real-time monitoring, and automated reporting for traffic analysis.</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {["Python", "Django", "Tailwind", "Docker", "SQLite", "Hatch", "Pre-commit", "GitHub Actions", "REST API"].map((tech) => (
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
                <li><b>Real-time Traffic Monitoring:</b> Live data visualization, customizable dashboards, interactive filtering and analysis.</li>
                <li><b>Campaign Management:</b> Campaign tracking, analytics, performance metrics, ROI calculations.</li>
                <li><b>Advanced Reporting System:</b> Automated report generation, custom templates, data export.</li>
                <li><b>User Management:</b> Role-based access, secure authentication, activity tracking.</li>
                <li><b>API Integration:</b> RESTful endpoints, third-party service integration, data sync.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Technical Challenges & Solutions</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li><b>Real-time Data Processing:</b> Efficient algorithms, async processing, optimized queries, caching.</li>
                <li><b>Scalability:</b> Dockerization, microservices, indexing, load balancing.</li>
                <li><b>Data Visualization:</b> Modern charting, custom components, optimized rendering, interactivity.</li>
                <li><b>Security:</b> Robust authentication, RBAC, API security, encryption, audit logging.</li>
                <li><b>Performance Optimization:</b> Caching, query optimization, lazy loading, code splitting.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Development Process</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li><b>Planning & Architecture:</b> Requirements, architecture, stack selection, schema design.</li>
                <li><b>Implementation:</b> Modular dev, code reviews, CI, automated testing.</li>
                <li><b>Quality Assurance:</b> Testing, performance monitoring, security audits, UAT.</li>
                <li><b>Deployment:</b> Containerized, automated pipeline, monitoring, backup/recovery.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Technical Achievements</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li><b>Performance:</b> Sub-second queries, optimized DB, efficient caching.</li>
                <li><b>Scalability:</b> Handled data growth, horizontal scaling, resource optimization.</li>
                <li><b>User Experience:</b> Intuitive UI, responsive, interactive, fast loading.</li>
                <li><b>Code Quality:</b> High coverage, standards, automated tests, reviews.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Future Enhancements</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li>Machine learning, predictive analytics, custom algorithms.</li>
                <li>More integrations, enhanced APIs, extended exports.</li>
                <li>Better mobile UX, more customization, improved accessibility.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Learning Outcomes</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li><b>Technical:</b> Advanced Django, real-time data, architecture, optimization.</li>
                <li><b>Project Management:</b> Agile, collaboration, problem-solving, documentation.</li>
                <li><b>Business Impact:</b> Data-driven decisions, efficiency, resource use, user satisfaction.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
              <p className="mb-0">This project demonstrates my ability to handle complex technical challenges, implement scalable solutions, and deliver a high-quality product that meets business requirements while maintaining code quality and performance standards.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectTrafficDashboardDetail; 