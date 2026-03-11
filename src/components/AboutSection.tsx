import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Rocket, Zap } from "lucide-react";

const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "C++", "C#", "C"],
  },
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "HTML5", "CSS3", "Next.js"],
  },
  {
    category: "Development",
    items: ["Git", "VS Code", "Blender", "Node.js", "Vite"],
  },
  {
    category: "Focus Areas",
    items: [
      "App Development",
      "Scripting",
      "Automation",
      "Simulations",
      "Problem Solving",
    ],
  },
];

const projects = [
  {
    title: "Evo",
    description:
      "An advanced neural network-based evolutionary sandbox where AI agents evolve through natural selection",
    link: "https://github.com/CodeByBryant/Evo/",
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-background" data-testid="about-section">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer who loves turning complex problems into
            simple, beautiful solutions. I believe in the power of technology to
            transform ideas into reality.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <Card className="hover-elevate">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Rocket className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">My Journey</h3>
              </div>
              <div className="prose prose-invert">
                <p className="text-muted-foreground mb-4">
                  As a high school student passionate about technology, I've
                  immersed myself in the world of coding and software
                  development. My journey began with a simple curiosity about
                  how things work, which quickly evolved into a deep passion for
                  creating and innovating through code.
                </p>
                <p className="text-muted-foreground mb-4">
                  I specialize in developing applications, crafting detailed
                  simulations, and creating automation solutions. What excites
                  me most is the ability to turn complex ideas into tangible,
                  working software that can make a real difference.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, I'm exploring new technologies, working
                  on personal projects like Evo and Sovereign, or improving my 3D
                  modeling skills in Blender. I believe in continuous learning
                  and am always eager to take on new challenges that push my
                  boundaries.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Values & Approach */}
          <Card className="hover-elevate">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Zap className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">What Drives Me</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Code className="w-5 h-5 text-chart-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Creative Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Building unique applications and simulations that push
                      boundaries
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Palette className="w-5 h-5 text-chart-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Problem Solving</h4>
                    <p className="text-sm text-muted-foreground">
                      Finding innovative solutions to complex challenges through
                      code
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Rocket className="w-5 h-5 text-chart-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Continuous Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Always exploring new technologies and expanding my skill
                      set
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 text-primary">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs"
                        data-testid={`skill-${skill
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
