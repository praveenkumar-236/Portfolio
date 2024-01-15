import { Button } from "@/components/ui/button";

export const FrontendSkills = [
 
  {
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Material-UI",
    icon:"https://icon.icepanel.io/Technology/svg/Material-UI.svg"
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://icon.icepanel.io/Technology/svg/React-Bootstrap.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  // },
];

export const BackendSkills = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySql",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Apache Kafka",
    icon: "https://icon.icepanel.io/Technology/png-shadow-512/Apache-Kafka.png",
  },
 
];

export const ToolSkills = [
  {
    name: " Eclipse",
    icon: "https://icon.icepanel.io/Technology/png-shadow-512/Eclipse-IDE.png",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Postman",
    icon: "https://icon.icepanel.io/Technology/svg/Postman.svg",
  },
  {
    name:"Insomnia",
    icon:"https://icon.icepanel.io/Technology/svg/Insomnia.svg"
  },
  {
    name: " GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Git Version Control",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  // {
  //   name: "Jenkins",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  // },
  {
    name: "Kibana",
    icon: "https://icon.icepanel.io/Technology/svg/Kibana.svg",
  },
];
export const CloudSkills = [
 
  {
    name:"AWS",
    icon:"https://icon.icepanel.io/Technology/png-shadow-512/AWS.png"
  },
 
  {
    name:"Docker",
    icon:"https://icon.icepanel.io/Technology/svg/Docker.svg"
  },
  {
    name: "Jenkins",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  },
  {
    name:"Elastic Search",
    icon:"https://icon.icepanel.io/Technology/png-shadow-512/Elastic-Search.png"
  },
  
  // {
  //   name:"",
  //   icon:""
  // },
 
 
];


function SkillCategory({ skills }: { skills: any[] }) {
  return (
    <div className="my-5 flex flex-wrap gap-5 md:w-[700px]">
      {skills.map((skill, index) => (
        <div key={index}>
          <Button
            variant="secondary"
            className="p-2 flex justify-center items-center gap-2"
          >
            <img src={skill?.icon} alt={skill?.name} className="w-8" />
            {skill?.name}
          </Button>
        </div>
      ))}
    </div>
  );
}

export function Frontend() {
  return <SkillCategory skills={FrontendSkills} />;
}

export function Backend() {
  return <SkillCategory skills={BackendSkills} />;
}

export function Tools() {
  return <SkillCategory skills={ToolSkills} />;
}


export function Cloud() {
  return <SkillCategory skills={CloudSkills} />;
}
