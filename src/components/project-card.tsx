type Props = {
  project: Record<string, any>,
};

const ProjectCard = ({ project }: Props) => {
  return (
    <article className="flex max-w-xl flex-col items-start">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={project.datetime} className="text-gray-500">
          {project.date}
        </time>
        <a
          href={project.category.href}
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {project.category.title}
        </a>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href={project.href}>
            <span className="absolute inset-0" />
            {project.title}
          </a>
        </h3>
        <p className="mt-5 text-sm leading-6 text-gray-600">{project.description}</p>
      </div>
    </article>
  );
};

export { ProjectCard };
