import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/card";
import { ProjectCard } from '../components/project-card';
import { PROJECTS } from '../constants';

function Projects() {
  return (
    <Card className='my-6' id='projects'>
      <CardHeader>
        <a
          href={`#/projects`}
        >
          <CardTitle>
            Projects
          </CardTitle>
        </a>
        <CardDescription>
          Here my projects
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project}/>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Projects;
