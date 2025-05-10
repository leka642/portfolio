import uniqid from 'uniqid';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => (
  <div className='project'>
    {project.image && (
      <div className="project-container__image-wrapper">
        <img
          src={project.image}
          alt={project.name}
          className="project-container__image"
        />
      </div>
    )}

    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

  
  </div>
);

export default ProjectContainer;