import React from 'react';
import ContentArea from '../Components/ContentArea';
import bulb from '../assets/background/bulb.jpg';
import { Lightbulb, Globe, Cog, LandPlot } from 'lucide-react';

const Skills = () => {

  const skills = [
    {
      id: 1,
      title: 'API Design',
      description: 'Designing efficient and Easy to use APIs while adhering to OpenAPI standards.',
      competency: '90',
      icon: <Lightbulb />
    },
     {
      id: 2,
      title: 'Web and Mobile Development',
      description: 'Creating beautiful web and mobile apps by translating wireframes into code and writing clean efficient code that are up to scratch with industry standards',
      competency: '80',
      icon: <Globe />
    },
     {
      id: 3,
      title: 'SEO',
      description: 'Optimizing your website metadata to improve visibility thereby giving your web apps an edge on the internet',
      competency: '90',
      icon: <LandPlot />
    },
    {
      id: 4,
      title: 'Automation',
      description: 'Automating processes and streamlining workflows to maximize time efficiency',
      competency: '100',
      icon: <Cog />
    },
  ];

  return (
    <div>
      <div className="absolute inset-0 opacity-10"></div>
      <ContentArea>
        <div className="flex h-screen flex-row">

          <div className="w-1/2 flex bg-transparent">
            <img src={bulb} alt="Tokyo backstreet requires skill to navigate" className="w-full h-auto object-cover"/>
          </div>

          <div className="w-1/2 bg-gray-900 flex flex-col items-center justify-center gap-5">
          {skills.map(skill => (
              <div key={skill.id} className="max-w-4xl w-30 mx-11 text-center text-white outline outline-slate-600 rounded-md hover:bg-blue-600 hover:text-white">
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
                    <div className={`bg-blue-300 h-3 rounded-full relative w-[${skill.competency}%]`}>
                      <span className="absolute right-2 top-0 text-xs font-semibold text-white leading-3">{skill.competency}%</span>
                    </div>
                  </div>
                </div>
              </div>
          ))}
          </div>

        </div>

      </ContentArea>
    </div>
  )
}

export default Skills