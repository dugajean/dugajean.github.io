import { AtSymbolIcon, MapPinIcon } from "@heroicons/react/24/outline";

export const Sidebar = () => {
  return (
    <section className="bg-indigo-800 bg-opacity-70 w-full md:w-1/4 px-12 py-12 md:py-24 md:rounded-tl-lg md:rounded-bl-lg">
      <div className="flex flex-row-reverse md:flex-col md:sticky md:top-12 md:items-center text-white gap-4">
        <img
          src="/self.jpg"
          alt="Dugi portrait"
          className="block w-40 md:w-24 lg:w-32 h-40 md:h-24 lg:h-32 rounded-full"
        />
        <div className="flex flex-col gap-8">
          <section>
            <h1 className="text-2xl font-bold">Dugi Surdulli</h1>
            <p className="uppercase text-xs font-light">Senior Software Engineer</p>
          </section>
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5" />
              <p className="text-sm">Calgary, Canada</p>
            </div>
            <div className="flex items-center gap-2">
              <AtSymbolIcon className="w-5 h-5" />
              <p className="text-sm">
                <a href="mailto:hello@dugi.dev" className="hover:underline">
                  hello@dugi.dev
                </a>
              </p>
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Skills</h2>
            <ul className="flex gap-2 flex-wrap skills-list font-extralight">
              <li>React</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Go</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>Jotai</li>
              <li>Tailwind</li>
              <li>Git</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};
