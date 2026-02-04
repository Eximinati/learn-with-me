import Link from "next/link";
import { features, workflow, resources } from "../lib/content";

export default function HomePage() {
  return (
    <main className="content">
      <section className="section">
        <h2>Core focus areas</h2>
        <div className="grid">
          {features.map((feature) => (
            <article className="card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul>
                {feature.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split">
          <div>
            <h2>Plan workflow</h2>
            <ol className="steps">
              {workflow.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <span>{step.description}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="panel">
            <h3>Upload resources quickly</h3>
            <p>
              Link each book or lecture to a step so learners always know what to
              read next.
            </p>
            <div className="upload-box">
              <div>
                <p className="label">Resource</p>
                <p className="value">Upload PDF / EPUB / Audio</p>
              </div>
              <button className="primary">Connect storage</button>
            </div>
            <p className="helper">
              Powered by Supabase Storage and row-level security.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Example resource library</h2>
        <div className="table">
          <div className="table-head">
            <span>Title</span>
            <span>Type</span>
            <span>Linked Step</span>
          </div>
          {resources.map((resource) => (
            <div className="table-row" key={resource.title}>
              <span>{resource.title}</span>
              <span>{resource.type}</span>
              <span>{resource.step}</span>
            </div>
          ))}
        </div>
        <p className="callout">
          Explore the full roadmap in the <Link href="/docs">documentation</Link>
          .
        </p>
      </section>
    </main>
  );
}
