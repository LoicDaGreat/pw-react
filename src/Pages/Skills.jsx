import { useState} from 'react';
import ContentArea from '../Components/ContentArea';
import bulb from '../assets/background/bulb.jpg';
import { Lightbulb, Globe, Cog, LandPlot, ChevronDown, ChevronUp } from 'lucide-react';

const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const skills = [
    {
      id: 1,
      title: 'API Design',
      description: 'Designing efficient and Easy to use APIs while adhering to OpenAPI standards.',
      competency: '90',
      icon: <Lightbulb />,
      iconsm: <Lightbulb size={20} />
    },
    {
      id: 2,
      title: 'Web and Mobile Development',
      description: 'Creating beautiful web and mobile apps by translating wireframes into code and writing clean efficient code that are up to scratch with industry standards',
      competency: '80',
      icon: <Globe />,
      iconsm: <Globe size={20} />
    },
    {
      id: 3,
      title: 'SEO',
      description: 'Optimizing your website metadata to improve visibility thereby giving your web apps an edge on the internet',
      competency: '90',
      icon: <LandPlot />,
      iconsm: <LandPlot size={20} />
    },
    {
      id: 4,
      title: 'Automation',
      description: 'Automating processes and streamlining workflows to maximize time efficiency',
      competency: '100',
      icon: <Cog />,
      iconsm: <Cog size={20}/>
    },
  ];

 return (
    <div>
      <div className="absolute inset-0 opacity-10"></div>
      <ContentArea>
        <div className="hidden lg:flex min-h-fit flex-row">
          <div className="w-1/2 flex bg-transparent">
            <img src={bulb} alt="Tokyo backstreet requires skill to navigate" className="w-full h-auto object-cover"/>
          </div>

          <div className="w-1/2 bg-gray-900 flex flex-col items-center justify-center gap-5">
            {skills.map(skill => (
              <div key={skill.id} className="max-w-4xl w-5/6 mx-auto text-center text-white outline outline-slate-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300">
                <div className="rounded-lg p-6 relative overflow-hidden">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {skill.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{skill.title}</h2>
                  <p className="text-gray-400 mb-4">{skill.description}</p>
                  <div className="mb-2">
                    <span className="text-sm text-gray-400">Competency:</span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-blue-300 h-3 rounded-full relative"
                      style={{ width: `${skill.competency}%` }}
                    >
                      <span className="absolute right-2 top-0 text-xs font-semibold text-white leading-3">{skill.competency}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex lg:hidden min-h-screen bg-gray-900">
          <div className="w-full">
            <div className="w-full mb-8">
              <img src={bulb} alt="Tokyo backstreet requires skill to navigate" className="w-full h-60 object-cover"/>
            </div>
            
            <div className="px-4 space-y-4 pb-12">
              {skills.map(skill => (
                <div key={skill.id} className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="w-full p-4 flex items-center justify-between text-left"
                    aria-expanded={expandedSkill === skill.id}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                        {skill.iconsm}
                      </div>
                      <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
                    </div>
                  </div>
                  
                  <div className="overflow-hidden max-h-96">
                    <div className="px-4 pb-4">
                      <p className="text-gray-300 mb-4 text-sm">{skill.description}</p>
                      <div className="mb-2 flex justify-between">
                        <span className="text-sm text-gray-400">Competency:</span>
                        <span className="text-sm font-semibold text-white">{skill.competency}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div 
                          className="bg-blue-300 h-3 rounded-full "
                          style={{ width: `${skill.competency}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentArea>
    </div>
  );
}

export default Skills;