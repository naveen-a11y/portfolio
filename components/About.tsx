/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="/your-photo.jpg"
                alt="Profile picture"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate Frontend Developer with a keen eye for creating
              elegant, user-friendly web experiences. With expertise in React,
              Next.js, and modern web technologies, I transform complex problems
              into simple, beautiful solutions. I'm particularly enthusiastic
              about responsive design, web accessibility, and creating
              performant applications that make a real impact.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["React", "Next.js", "TypeScript", "Node.js"].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-100 rounded-lg p-3 text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
