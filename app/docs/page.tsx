import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="content">
      <section className="section">
        <h2>Documentation</h2>
        <p>
          The product specification lives in <code>docs/product-spec.md</code>.
          Use it as the blueprint for building your Supabase schema and Next.js
          features.
        </p>
        <div className="panel">
          <h3>Next steps</h3>
          <ul>
            <li>Review the MVP checklist and prioritize the first release.</li>
            <li>Set up Supabase auth and storage buckets.</li>
            <li>Build the plan builder and resource library UI.</li>
          </ul>
        </div>
        <Link className="ghost-link" href="/">
          Back to home
        </Link>
      </section>
    </main>
  );
}
