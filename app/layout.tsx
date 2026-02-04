import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn With Me",
  description: "Organize study plans and resources with clarity."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <header className="site-header">
            <div>
              <p className="eyebrow">Learn With Me</p>
              <h1>Structured study plans for clear learning paths</h1>
              <p className="lead">
                Upload resources, break complex plans into steps, and follow a
                guided journey with Supabase + Next.js.
              </p>
            </div>
            <div className="header-actions">
              <button className="primary">Start a plan</button>
              <button className="ghost">View sample</button>
            </div>
          </header>
          {children}
          <footer className="site-footer">
            <p>Built for clarity, reflection, and steady progress.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
