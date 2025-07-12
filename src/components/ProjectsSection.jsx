import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Streamify",
    description: "Real-time video streaming platform with user authentication and live chat.",
    image: "/projects/project1.png",
    tags: ["Mern stack", "TailwindCSS", "getStream.io","Rest API"],
    demoUrl: "https://streamify-video-call-chat-app.onrender.com",
    githubUrl: "https://github.com/Nareshkashigaon/streamify-video-call-chat-app",
  },
  {
    id: 2,
    title: "Iot based alerting surveillance system for smart cities",
    description:
      "An IoT-based alerting surveillance system designed to enhance security in smart cities by real-time data visualization and monitoring.",
    image: "/projects/project2.png",
    tags: ["Mern stack", "Embedded C", "Arduino", "TailwindCSS","Rest API"],
    demoUrl: "https://drive.google.com/file/d/1TeovoHOgvu3CjaHDJKby2bi2kzjmx1F2/view",
    githubUrl: "https://github.com/Nareshkashigaon/Iot-based-alterting-system-for-smart-cities",
  },
  {
    id: 3,
    title: "Todo List App",
    description:
      "A simple and intuitive To-Do List Web App that helps users manage their daily tasks efficiently. Users can add, edit, delete, and mark tasks as complete",
    image: "/projects/project3.png",
    tags: ["React"],
    demoUrl: "https://todonaresh.netlify.app/",
    githubUrl: "https://github.com/Nareshkashigaon/todo_app?tab=readme-ov-file",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag,index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 absolute left-5 bottom-5">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"

                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Nareshkashigaon"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
