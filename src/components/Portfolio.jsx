import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Portfolio = ({ projects }) => {
   function renderProjects(projects) {
      return projects.map((project, i) => (
         <CSSTransition
            key={`project-${project.category}-${i}`}
            timeout={{ enter: 500, exit: 300 }}
            classNames='portfolio'
         >
            <div className='project'>
               <img src={project.img} alt={`project-${project.category}-${i}`} />
            </div>
         </CSSTransition>
      ));
   }

   return (
      <div className='portfolio'>
         <TransitionGroup>{renderProjects(projects)}</TransitionGroup>
      </div>
   );
};

export default Portfolio;
