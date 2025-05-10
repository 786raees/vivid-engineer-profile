import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const screenshots = [
  "/lovable-uploads/projects/google_profile/dashboard.png",
  "/lovable-uploads/projects/google_profile/file_list.png",
  "/lovable-uploads/projects/google_profile/file_details.png",
];

const techColors: Record<string, string> = {
  Python: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Flask: "bg-red-100 text-red-800 border-red-200",
  "Gmail API": "bg-blue-100 text-blue-800 border-blue-200",
  "OAuth 2.0": "bg-green-100 text-green-800 border-green-200",
  Pandas: "bg-yellow-50 text-yellow-700 border-yellow-100",
  Cryptography: "bg-purple-100 text-purple-800 border-purple-200",
  Docker: "bg-gray-100 text-gray-800 border-gray-200",
};

const ProjectGmailContactExtractorDetail: React.FC = () => {
  const navigate = useNavigate();
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  return (
    <section className="min-h-screen bg-background text-foreground py-12 px-4 md:px-0 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <Button variant="outline" className="mb-8 flex items-center gap-2" onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back
        </Button>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <img src="/lovable-uploads/projects/google_profile/dashboard.png" alt="Gmail Contact Extractor Dashboard" className="w-full md:w-1/2 rounded-xl shadow-lg border border-border animate-slide-up" />
          <div className="flex-1 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Gmail Contact Extractor & <span className="text-primary">Dashboard</span></h1>
            <p className="text-lg text-muted-foreground mb-4">A Python-based app that extracts contacts from Gmail using the Gmail API, with a secure Flask dashboard for visualization, management, and AES-256 encrypted exports.</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {["Python", "Flask", "Gmail API", "OAuth 2.0", "Pandas", "Cryptography", "Docker"].map((tech) => (
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
                <li><b>Automated Contact Extraction:</b> Scans Gmail messages to extract names, emails, companies, phone numbers, and job titles using regex.</li>
                <li><b>Secure Authentication & Data Handling:</b> Uses OAuth 2.0 for Gmail access and encrypts exported CSVs with AES-256 (Fernet).</li>
                <li><b>Flask Web Dashboard:</b> Lets users authenticate, extract, view stats, preview/download/delete exports (with on-the-fly decryption).</li>
                <li><b>Data Processing:</b> Uses pandas for deduplication, domain exclusion, and (optionally) Clearbit enrichment.</li>
                <li><b>Config & Deployment:</b> .env for secrets, Dockerfile for containerization, logging for process/error tracking.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3 mb-2">
                {["Python", "Flask", "Gmail API", "OAuth 2.0", "Pandas", "Cryptography", "Docker"].map((tech) => (
                  <span key={tech} className={`text-xs px-3 py-1 rounded-full font-semibold border ${techColors[tech] || "bg-secondary text-muted-foreground border-secondary"}`}>{tech}</span>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="animate-slide-up">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Functionality Highlights</h2>
              <ul className="list-disc pl-6 space-y-2 mb-0">
                <li><b>Authentication Flow:</b> Google OAuth 2.0 consent, token-based access.</li>
                <li><b>Extraction Process:</b> Fetches, parses, and processes emails to extract and compile contacts.</li>
                <li><b>Data Storage & Security:</b> Deduplicates, filters, and saves contacts as AES-256 encrypted CSVs.</li>
                <li><b>Dashboard Interaction:</b> Stats, file management (preview, download, delete), and new extractions with on-the-fly decryption.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectGmailContactExtractorDetail; 