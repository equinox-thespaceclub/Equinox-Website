import { teamData } from '../data/team';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function TeamPage() {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="text-center text-white mb-16">
        <h1 className="text-4xl font-bold mb-4">Meet the Team</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Get to know the passionate individuals behind Equinox.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {Object.entries(teamData).map(([domain, members]) => (
          <div key={domain} className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-left border-l-4 border-purple-500 pl-4">{domain}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all"
                >
                  <div className="w-48 h-48 mx-auto mb-4 relative">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover rounded-full border-4 border-purple-500"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-purple-300 mb-3">{member.role}</p>
                    
                    {member.description && (
                      <p className="text-gray-300 text-sm mb-4 italic px-4 leading-relaxed">
                        &ldquo;{member.description}&rdquo;
                      </p>
                    )}
                    
                    {member.socials && (
                      <div className="flex justify-center gap-4">
                        {member.socials.instagram && (
                          <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" 
                             className="text-white hover:text-purple-400 transition-colors">
                            <FaInstagram size={20} />
                          </a>
                        )}
                        {member.socials.linkedin && (
                          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"
                             className="text-white hover:text-purple-400 transition-colors">
                            <FaLinkedin size={20} />
                          </a>
                        )}
                        {member.socials.twitter && (
                          <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer"
                             className="text-white hover:text-purple-400 transition-colors">
                            <FaTwitter size={20} />
                          </a>
                        )}
                        {member.socials.github && (
                          <a href={member.socials.github} target="_blank" rel="noopener noreferrer"
                             className="text-white hover:text-purple-400 transition-colors">
                            <FaGithub size={20} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}