import uniqid from 'uniqid';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      name: 'Project 1',
      image: `${process.env.PUBLIC_URL}/images/hotel.png`,
      description:
      "A fully responsive hotel website designed to provide a seamless user experience across all devices. This project focuses on showcasing the hotel's offerings, amenities, and facilitating easy booking for potential guests.",
      stack: ['HTML', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',

    },
    {
      name: 'Project 2',
     image: `${process.env.PUBLIC_URL}/images/portfolio.png`,
      description:
        "This website serves as my digital resume and creative space. Here, you can discover my background, the skills I possess, and the projects I've brought to life. It's a window into my journey and capabilities",
      stack: ['HTML', 'CSS', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    
  ];

  if (!projectsData.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        {projectsData.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;