import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Rocket, Zap } from "lucide-react"

const skills = [
  // TODO: Replace with actual skills
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
  { category: "Soft Skills", items: ["Leadership", "Communication", "Problem Solving", "Creativity"] }
]

const experiences = [
  // TODO: Replace with actual experience
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description: "Led development of enterprise applications serving 10k+ users"
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    period: "2020 - 2022", 
    description: "Built responsive web applications with modern frameworks"
  },
  {
    title: "UI/UX Designer",
    company: "Design Studio",
    period: "2019 - 2020",
    description: "Created user-centered designs for mobile and web applications"
  }
]

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
            A passionate developer who loves turning complex problems into simple, beautiful solutions.
            I believe in the power of technology to transform ideas into reality.
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
                  My journey into technology started with curiosity and evolved into passion. 
                  I love creating digital experiences that not only look great but also solve real problems.
                </p>
                <p className="text-muted-foreground mb-4">
                  With over 5 years of experience, I've worked on everything from small startups 
                  to enterprise applications, always focusing on clean code and user experience.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open source projects, or stargazing and dreaming about the future of space exploration.
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
                    <h4 className="font-medium">Clean Code</h4>
                    <p className="text-sm text-muted-foreground">
                      Writing maintainable, scalable code that stands the test of time
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Palette className="w-5 h-5 text-chart-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">User Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      Creating intuitive interfaces that delight and empower users
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Rocket className="w-5 h-5 text-chart-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Innovation</h4>
                    <p className="text-sm text-muted-foreground">
                      Pushing boundaries and exploring new technologies and approaches
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 text-primary">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="text-xs"
                        data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
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

        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <Badge variant="outline" className="self-start md:self-center mt-1 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}