import { Experience } from "../components/Experience";

export const Main = () => {
  return (
    <main className="flex flex-col gap-8 w-full md:w-3/4 pb-12 md:py-24 px-12 md:pr-16">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Introduction</h2>
        <p>
          I'm an experienced Senior Software Engineer with{" "}
          <span className="font-semibold">10 years</span> of experience in delivering products that
          serve millions of users. Specializing in frontend architecture and engineering leadership,
          with a strong focus on reducing technical debt, improving collaboration, and enhancing
          system scalability.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Professional History</h2>
        <Experience>
          <Experience.Title>Independent Contractor (Remote)</Experience.Title>
          <Experience.Duration>Jan 2018 - Present</Experience.Duration>
          <Experience.Description>
            As an Independent Contractor, I have provided guidance, leadership, and direct code
            contributions to various organizations, from SaaS startups, to web agencies.
          </Experience.Description>
          <Experience.Bullet>
            Coordinated the engineering discovery phase of Are Media in behalf of XWP.co. This
            effort earned the company <span className="font-semibold">$1 million+</span> of revenue
            and a long term partnership with Are Media.
          </Experience.Bullet>
          <Experience.Bullet>
            Took initiative in building a frontend starter kit at XWP.co, which was adopted
            company-wide, speeding up delivery time for frontend work by{" "}
            <span className="font-semibold">40%</span>.
          </Experience.Bullet>
          <Experience.Bullet>
            At a legal-tech startup, Proof Technologies, I led the effort of transforming the React
            web app into a monorepo style architecture, converting the code base to TypeScript,
            introducing a design system and rethinking the API client infrastructure. This achieved
            tangible results by improving developer experience, greatly integrating the design team
            into the product workflow, and speeding up new feature development by{" "}
            <span className="font-semibold">50%</span>.
          </Experience.Bullet>
        </Experience>
        <Experience>
          <Experience.Title>
            Senior Frontend Engineer, San Francisco, Tally (Remote)
          </Experience.Title>
          <Experience.Duration>Jul 2023 - Apr 2024</Experience.Duration>
          <Experience.Description>
            As a Senior Frontend Engineer at Tally, I led the development of various projects within
            the Web SDK as part of the Web team.
          </Experience.Description>
          <Experience.Bullet>
            Identified need for scaling our system such that multiple entry points to the SDK can be
            offered to our users.
          </Experience.Bullet>
          <Experience.Bullet>
            Took initiative in creating technical specification documents for multiple approaches to
            tackle this situation.
          </Experience.Bullet>
          <Experience.Bullet>
            After thorough discussions with the product and engineering team, an approach was agreed
            upon and I delivered this large scale refactor.
          </Experience.Bullet>
          <Experience.Bullet>
            This resulted in greatly increased developer experience, developing new SDK entry points
            became <span className="font-semibold">90%</span> faster, and meeting key delivery goals
            with our partner.
          </Experience.Bullet>
        </Experience>
        <Experience>
          <Experience.Title>Senior Frontend Engineer, Symend, Calgary (Remote)</Experience.Title>
          <Experience.Duration>Aug 2022 - Mar 2023</Experience.Duration>
          <Experience.Description>
            As a Senior Frontend Engineer at Symend, I led the development of multiple frontend
            "domains", which was the concept of large scale features within the web application.
            This meant facilitating feature development with many different stakeholders to ensure
            smooth delivery for a major migration of our customers.
          </Experience.Description>
          <Experience.Bullet>
            Noticed a gap in collaboration between frontend team and backend teams, which caused
            delays in delivery of features.
          </Experience.Bullet>
          <Experience.Bullet>
            Discussed this with my team lead, who encouraged me to pursue this further and develop a
            plan to tackle this problem.
          </Experience.Bullet>
          <Experience.Bullet>
            Wrote documentation on a short term and long term plan to increase collaboration between
            the teams. Short term plan was to have API design meetings, such that both teams are
            aligned in what an endpoint should look like and return; Long term plan was to introduce
            OpenAPI documentation and standardize common query parameters.
          </Experience.Bullet>
          <Experience.Bullet>
            This reduced the friction of feature development on both the frontend and backend, which
            increased productivity and sped up the development of features.
          </Experience.Bullet>
        </Experience>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Education</h2>
        <Experience>
          <Experience.Title>BSc. Computer Science, University of London</Experience.Title>
          <Experience.Duration>Sept 2021 - Present</Experience.Duration>
        </Experience>
      </div>
    </main>
  );
};
