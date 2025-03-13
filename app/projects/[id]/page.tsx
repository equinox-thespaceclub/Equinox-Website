'use client';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { projects } from '../../data/projects';

const ProjectDetailPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  
  // Get the ID from the pathname
  const id = pathname?.split('/').pop();
  const currentId = id ? parseInt(id) : null;
  const project = projects.find((p) => p.id === currentId);

  if (!project) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="p-8 rounded-lg shadow-xl text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-300 mb-6">The project you are looking for does not exist.</p>
          <button
            onClick={() => router.back()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 z-10 relative">
      <div className="max-w-5xl mx-auto">
        {/* Project Header */}
        <div className="rounded-xl overflow-hidden shadow-2xl mb-8 bg-black/20 backdrop-blur-sm border border-white/10">
          <div className="relative h-[400px]">
            <Image
              src={project.image}
              alt={project.name}
              fill
              style={{ objectFit: 'cover' }}
              className="w-full opacity-90"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
              <h1 className="text-4xl font-bold text-white mb-2">{project.name}</h1>
              <p className="text-gray-200 text-xl">{project.description}</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Description */}
            <div className="rounded-xl p-6 shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </div>
            </div>

            {/* Technical Details */}
            <div className="rounded-xl p-6 shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 text-white rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Project Info & Contributors */}
          <div className="space-y-8">
            {/* Project Quick Info */}
            <div className="rounded-xl p-6 shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">Project Details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">Timeline</p>
                  <p className="text-white">{project.timeline}</p>
                </div>
                <div>
                  <p className="text-gray-400">Status</p>
                  <p className="text-white">{project.status}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <a href={project.demoLink} target="_blank" className="bg-blue-500/20 border border-blue-500/50 hover:bg-blue-500/30 text-white py-2 px-4 rounded-lg text-center transition">
                    View Demo
                  </a>
                  <a href={project.githubLink} target="_blank" className="bg-white/5 hover:bg-white/10 text-white py-2 px-4 rounded-lg text-center transition border border-white/20">
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>

            {/* Contributors */}
            <div className="rounded-xl p-6 shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">Contributors</h2>
              <div className="space-y-4">
                {project.contributors?.map((contributor, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition">
                    <Image
                      src={contributor.image}
                      alt={contributor.name}
                      width={50}
                      height={50}
                      className="rounded-full ring-2 ring-white/20"
                    />
                    <div>
                      <h3 className="text-white font-medium">{contributor.name}</h3>
                      <p className="text-gray-400 text-sm">{contributor.role}</p>
                      <a href={`https://github.com/${contributor.github}`} target="_blank" className="text-blue-400 text-sm hover:text-blue-300">
                        @{contributor.github}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <button
            onClick={() => router.back()}
            className="bg-white/5 hover:bg-white/10 text-white font-medium py-2 px-6 rounded-lg transition border border-white/20"
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;