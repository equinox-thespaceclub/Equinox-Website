export interface TeamMember {
  name: string;
  role: string;
  image: string;
  domain: string;
  description?: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const teamData: { [key: string]: TeamMember[] } = {
  "Tech Leadership": [
    {
      name: "John Doe",
      role: "Tech Head",
      image: "https://urbeuniversity.edu/post_assets/Le9zsr8bQmv7gmZW40UXiVaPsGcpVwaY65mw28tU.webp",
      domain: "Tech Leadership",
      description: "Passionate about building innovative solutions and leading tech initiatives. Experienced in full-stack development and cloud architecture.",
      socials: {
        instagram: "https://instagram.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    },
    {
      name: "Jane Smith",
      role: "Tech Core",
      image: "https://urbeuniversity.edu/post_assets/Le9zsr8bQmv7gmZW40UXiVaPsGcpVwaY65mw28tU.webp",
      description: "Passionate about building innovative solutions and leading tech initiatives. Experienced in full-stack development and cloud architecture.",
      domain: "Tech Leadership",
      socials: {
        instagram: "https://instagram.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    },
    {
        name: "Jane Smith",
        role: "Tech Core",
        image: "https://urbeuniversity.edu/post_assets/Le9zsr8bQmv7gmZW40UXiVaPsGcpVwaY65mw28tU.webp",
        description: "Passionate about building innovative solutions and leading tech initiatives. Experienced in full-stack development and cloud architecture.",
        domain: "Tech Leadership",
        socials: {
            instagram: "https://instagram.com/johndoe",
            linkedin: "https://linkedin.com/in/johndoe",
            github: "https://github.com/johndoe",
            twitter: "https://twitter.com/johndoe"
          }
      }
  ],
  "Technical Team": [
    {
      name: "Mike Johnson",
      role: "Techie",
      image: "https://urbeuniversity.edu/post_assets/Le9zsr8bQmv7gmZW40UXiVaPsGcpVwaY65mw28tU.webp",
      description: "Passionate about building innovative solutions and leading tech initiatives. Experienced in full-stack development and cloud architecture.",
      domain: "Technical Team",
      socials: {
        instagram: "https://instagram.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    },
    {
      name: "Sarah Wilson",
      role: "Techie",
      image: "https://urbeuniversity.edu/post_assets/Le9zsr8bQmv7gmZW40UXiVaPsGcpVwaY65mw28tU.webp",
      description: "Passionate about building innovative solutions and leading tech initiatives. Experienced in full-stack development and cloud architecture.",
      domain: "Technical Team",
      socials: {
        instagram: "https://instagram.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    },
    {
        name: "Sarah Wilson",
        role: "Techie",
        image: "https://urbeuniversity.edu/post_assets/Le9zsr8bQmv7gmZW40UXiVaPsGcpVwaY65mw28tU.webp",
        description: "Passionate about building innovative solutions and leading tech initiatives. Experienced in full-stack development and cloud architecture.",
        domain: "Technical Team",
        socials: {
            instagram: "https://instagram.com/johndoe",
            linkedin: "https://linkedin.com/in/johndoe",
            github: "https://github.com/johndoe",
            twitter: "https://twitter.com/johndoe"
          }
      }
  ],
  "Management": [
    {
      name: "David Brown",
      role: "EVM Head",
      image: "https://urbeuniversity.edu/post_assets/Le9zsr8bQmv7gmZW40UXiVaPsGcpVwaY65mw28tU.webp",
      description: "Passionate about building innovative solutions and leading tech initiatives. Experienced in full-stack development and cloud architecture.",
      domain: "Management",
      socials: {
        instagram: "https://instagram.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    },
    {
      name: "Emily Davis",
      role: "Campaigning Head",
      image: "https://urbeuniversity.edu/post_assets/Le9zsr8bQmv7gmZW40UXiVaPsGcpVwaY65mw28tU.webp",
      description: "Passionate about building innovative solutions and leading tech initiatives. Experienced in full-stack development and cloud architecture.",
      domain: "Management",
      socials: {
        instagram: "https://instagram.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    }
    ,
    {
        name: "Emily Davis",
        role: "Campaigning Head",
        image: "https://urbeuniversity.edu/post_assets/Le9zsr8bQmv7gmZW40UXiVaPsGcpVwaY65mw28tU.webp",
        description: "Passionate about building innovative solutions and leading tech initiatives. Experienced in full-stack development and cloud architecture.",
        domain: "Management",
        socials: {
            instagram: "https://instagram.com/johndoe",
            linkedin: "https://linkedin.com/in/johndoe",
            github: "https://github.com/johndoe",
            twitter: "https://twitter.com/johndoe"
          }
      }
  ]
};
