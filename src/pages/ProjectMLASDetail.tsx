import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const screenshots = [
  "/lovable-uploads/projects/mlas/unsplash-main.jpg"
];

const techColors: Record<string, string> = {
  Python: "bg-yellow-100 text-yellow-800 border-yellow-200",
  FastAPI: "bg-blue-100 text-blue-800 border-blue-200",
  Pydantic: "bg-green-100 text-green-800 border-green-200",
  Boto3: "bg-purple-100 text-purple-800 border-purple-200",
  Kafka: "bg-gray-100 text-gray-800 border-gray-200",
  AWS: "bg-orange-100 text-orange-800 border-orange-200",
  Lambda: "bg-green-50 text-green-700 border-green-100",
  SES: "bg-pink-100 text-pink-800 border-pink-200",
  S3: "bg-indigo-100 text-indigo-800 border-indigo-200",
  EventBridge: "bg-red-100 text-red-800 border-red-200",
  DynamoDB: "bg-blue-50 text-blue-700 border-blue-100",
  MongoDB: "bg-green-100 text-green-800 border-green-200",
  Playwright: "bg-gray-200 text-gray-900 border-gray-300",
  Selenium: "bg-gray-300 text-gray-900 border-gray-400",
  GitHub: "bg-black text-white border-gray-700",
  Docker: "bg-blue-200 text-blue-900 border-blue-300"
};

const ProjectMLASDetail: React.FC = () => {
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
          <img src={screenshots[0]} alt="MLAS Thumbnail" className="w-full md:w-1/2 rounded-xl shadow-lg border border-border animate-slide-up" />
          <div className="flex-1 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Multilogin Automation Service <span className="text-primary">(MLAS)</span></h1>
            <p className="text-lg text-muted-foreground mb-4">A distributed, microservices-based platform automating the complex process of data erasure requests across online services and data brokers, ensuring compliance with privacy regulations like GDPR and CCPA.</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {["Python", "FastAPI", "Pydantic", "Boto3", "Kafka", "AWS", "Lambda", "SES", "S3", "EventBridge", "DynamoDB", "MongoDB", "Playwright", "Selenium", "GitHub", "Docker"].map((tech) => (
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
              <h2 className="text-2xl font-semibold mb-4">Core Objective</h2>
              <p className="mb-0">To streamline and automate the entire lifecycle of data opt-out requests, from initial submission and email confirmation handling to interacting with diverse third-party interfaces and tracking the successful completion of each erasure.</p>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Key Features & Technologies</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li><b>Microservice Architecture:</b> Independently deployable services for email processing, erasure initialization, verification, and agent workflows.</li>
                <li><b>Asynchronous Processing with Apache Kafka:</b> Central message bus for resilient, decoupled communication and high throughput.</li>
                <li><b>AWS Ecosystem:</b> SES & Lambda for email ingestion, S3 for storage, EventBridge for notifications, DynamoDB & MongoDB for persistent storage, MSK for Kafka clusters.</li>
                <li><b>Automated Email Interaction:</b> Parses confirmation emails, uses Playwright/Selenium for programmatic verification, manages broker-specific logic.</li>
                <li><b>Intelligent Erasure Initialization:</b> Handles setup and dispatching of erasure tasks, including authenticated sessions via Multilogin.</li>
                <li><b>Authorized Agent Workflow:</b> Orchestrates erasure requests by third-party agents.</li>
                <li><b>Centralized Utilities:</b> Shared library for Kafka, databases, and common functions.</li>
                <li><b>Python Ecosystem:</b> FastAPI, Pydantic, Boto3, and modern Python practices.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">My Role & Contributions</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li>Developed the <b>email_verifier</b> service, including dynamic broker configuration and Playwright-based automation for handling verification links from over X data brokers.</li>
                <li>Built Kafka consumer/producer logic in <b>email_receipt_lambda</b> for reliable message passing.</li>
                <li>Designed the <b>BrokerStatusModel</b> in MongoDB and implemented the data access layer in <b>meprism_utilities</b>.</li>
                <li>Optimized <b>erasure_default_initializer</b> with batch processing of erasure requests.</li>
                <li>Set up CI/CD pipeline using GitHub Actions for automated testing and deployment.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Impact & Challenges</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li>Significantly reduces manual effort and time for data erasure requests, enabling efficient compliance with privacy regulations.</li>
                <li>Overcame challenges with diverse opt-out mechanisms, ensuring idempotency in distributed workflows, and robust error handling and retry logic.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectMLASDetail; 