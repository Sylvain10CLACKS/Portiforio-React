import { Code, Cpu, Palette, Terminal, Feather, Database } from "lucide-react";

const Skills = () => {
    const skills = [
        { name: "HTML", level: "Expert", icon: <Code className="w-10 h-10 text-green-500" /> },
        { name: "CSS", level: "Expert", icon: <Palette className="w-10 h-10 text-blue-500" /> },
        { name: "JavaScript", level: "Advanced", icon: <Terminal className="w-10 h-10 text-yellow-500" /> },
        { name: "React", level: "Advanced", icon: <Cpu className="w-10 h-10 text-cyan-500" /> },
        { name: "Tailwind CSS", level: "Advanced", icon: <Feather className="w-10 h-10 text-teal-500" /> },
        { name: "Python", level: "Intermediate", icon: <Database className="w-10 h-10 text-purple-500" /> },
    ];

    return (
        <div className="bg-gray-50 py-16 px-6" id="skills">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">My Skills</h2>
                <p className="text-lg text-gray-600 text-center mb-12">
                    These are the technical tools and technologies I use to build impactful projects.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="mb-4">{skill.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
                            <p className="text-sm text-gray-600">{skill.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
