'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  const router = useRouter();

  const handleProjectClick = (id: number) => {
    router.push(`/projects/${id}`);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Our Projects</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 text-center">
          Discover the innovative projects our members are working on.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 text-white rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}