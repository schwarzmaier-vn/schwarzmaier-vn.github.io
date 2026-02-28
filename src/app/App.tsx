import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Facebook,
  Linkedin,
  Briefcase,
  GraduationCap,
  Award,
  Target,
  Users,
  Heart,
  Book,
  Music,
  Plane,
  TrendingUp,
  Building2,
  CheckCircle2,
  Star,
} from "lucide-react";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { motion, useReducedMotion } from "framer-motion";

// Animated skill bar component
const SkillBar = ({ name, level, percentage, delay }: { name: string; level: string; percentage: number; delay: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: shouldReduceMotion ? 0.2 : 0.5, delay: shouldReduceMotion ? 0 : delay }}
    >
      <div className="flex justify-between text-xs mb-1">
        <span>{name}</span>
        <span className="text-slate-500">{level}</span>
      </div>
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
          initial={{ width: 0 }}
          whileInView={{ width: isVisible ? `${percentage}%` : 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 1, delay: shouldReduceMotion ? 0 : delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default function App() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-5xl mx-auto p-6 md:p-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="mb-6 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <motion.div
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 h-32"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            />
            <div className="px-6 pb-6">
              <div className="flex flex-col md:flex-row gap-6 -mt-16 relative">
                <motion.div
                  className="flex-shrink-0"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2,
                  }}
                >
                  <motion.img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>
                <div className="flex-1 mt-16 md:mt-20">
                  <motion.h1
                    className="text-3xl mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Sarah Johnson
                  </motion.h1>
                  <motion.p
                    className="text-lg text-slate-600 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Senior Real Estate Development Manager
                  </motion.p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    {[
                      { icon: Calendar, text: "March 15, 1990" },
                      { icon: Phone, text: "+1 (555) 123-4567" },
                      { icon: Mail, text: "sarah.johnson@email.com" },
                      { icon: MapPin, text: "New York, NY 10001" },
                      { icon: Facebook, text: "facebook.com/sarahjohnson" },
                      { icon: Linkedin, text: "linkedin.com/in/sarahjohnson" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2 text-slate-600 group cursor-pointer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <item.icon className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
                        </motion.div>
                        <span className="group-hover:text-blue-600 transition-colors">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Hobbies */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h2 className="text-xl mb-4 flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-5 h-5 text-blue-600" />
                  </motion.div>
                  Hobbies
                </h2>
                <div className="space-y-2">
                  {[
                    { icon: Book, text: "Real Estate Market Analysis" },
                    { icon: Music, text: "Classical Music" },
                    { icon: Plane, text: "International Travel" },
                    { icon: TrendingUp, text: "Investment Research" },
                  ].map((hobby, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 text-sm p-2 rounded-lg hover:bg-blue-50 cursor-pointer"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <hobby.icon className="w-4 h-4 text-slate-500" />
                      <span>{hobby.text}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Personality */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h2 className="text-xl mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Personality
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Detail-Oriented",
                    "Strategic Thinker",
                    "Team Player",
                    "Results-Driven",
                    "Innovative",
                    "Analytical",
                  ].map((trait, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 2 }}
                    >
                      <Badge
                        variant="secondary"
                        className="cursor-pointer hover:bg-blue-600 hover:text-white transition-all"
                      >
                        {trait}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h2 className="text-xl mb-4 flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Star className="w-5 h-5 text-blue-600" />
                  </motion.div>
                  Skills
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm mb-2">Advanced Skills</h3>
                    <div className="space-y-2">
                      <SkillBar name="Property Valuation" level="Expert" percentage={95} delay={0} />
                      <SkillBar name="Market Analysis" level="Advanced" percentage={90} delay={0.1} />
                      <SkillBar name="Financial Modeling" level="Advanced" percentage={85} delay={0.2} />
                      <SkillBar name="Contract Negotiation" level="Expert" percentage={92} delay={0.3} />
                      <SkillBar name="Due Diligence" level="Advanced" percentage={88} delay={0.4} />
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-sm mb-2">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Leadership",
                        "Communication",
                        "Negotiation",
                        "Client Relations",
                        "Problem Solving",
                        "Time Management",
                        "Critical Thinking",
                        "Adaptability",
                      ].map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge className="cursor-pointer hover:bg-blue-700 transition-colors">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Objectives */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h2 className="text-xl mb-4 flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Target className="w-5 h-5 text-blue-600" />
                  </motion.div>
                  Career Objectives
                </h2>
                <motion.p
                  className="text-slate-700 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Seeking a senior leadership position in commercial real estate development where I can
                  leverage my 8+ years of experience in property acquisition, portfolio management, and
                   strategic planning to drive sustainable growth and maximize ROI. Committed to identifying
                   emerging market opportunities and leading high-performing teams to deliver exceptional
                   value to stakeholders.
                </motion.p>
              </Card>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h2 className="text-xl mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  Education
                </h2>
                <div className="space-y-4">
                  <motion.div
                    className="border-l-2 border-blue-600 pl-4 hover:border-blue-800 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg">Master of Science in Real Estate Development</h3>
                        <p className="text-slate-600">Columbia University, New York</p>
                      </div>
                      <span className="text-sm text-slate-500">2012 - 2014</span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p>
                        <span className="text-slate-600">GPA:</span> 3.9/4.0 - Summa Cum Laude
                      </p>
                      <p className="text-slate-600">
                        Specialization: Commercial Property Development & Urban Planning
                      </p>
                      <p className="text-slate-600">
                        Thesis: "Sustainable Mixed-Use Developments in Metropolitan Areas"
                      </p>
                    </div>
                  </motion.div>

                  <Separator />

                  <motion.div
                    className="border-l-2 border-slate-300 pl-4 hover:border-blue-600 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg">Bachelor of Business Administration</h3>
                        <p className="text-slate-600">New York University - Stern School of Business</p>
                      </div>
                      <span className="text-sm text-slate-500">2008 - 2012</span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p>
                        <span className="text-slate-600">GPA:</span> 3.7/4.0 - Magna Cum Laude
                      </p>
                      <p className="text-slate-600">Major: Finance & Real Estate</p>
                      <p className="text-slate-600">Minor: Economics</p>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>

            {/* Work History */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h2 className="text-xl mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  Work Experience
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Senior Development Manager",
                      company: "Brookfield Properties",
                      period: "2020 - Present",
                      location: "New York, NY",
                      borderColor: "border-blue-600",
                      achievements: [
                        "Led development of $450M mixed-use commercial project including 300,000 sq ft of office space and retail",
                        "Managed portfolio of 12 commercial properties valued at $2.1B, achieving 15% increase in NOI",
                        "Negotiated and closed acquisitions totaling $380M with average 22% ROI within first 3 years",
                        "Built and mentored team of 8 analysts and associates, improving department efficiency by 35%",
                      ],
                    },
                    {
                      title: "Development Associate",
                      company: "Tishman Speyer",
                      period: "2016 - 2020",
                      location: "New York, NY",
                      borderColor: "border-slate-300",
                      achievements: [
                        "Conducted feasibility studies and financial analysis for $600M+ in potential acquisitions",
                        "Coordinated due diligence processes for 15+ property transactions, ensuring timely closings",
                        "Developed comprehensive market research reports identifying high-growth submarkets",
                      ],
                    },
                    {
                      title: "Junior Analyst",
                      company: "CBRE Group",
                      period: "2014 - 2016",
                      location: "New York, NY",
                      borderColor: "border-slate-300",
                      achievements: [
                        "Created detailed financial models for investment analysis and property valuations",
                        "Supported senior team in underwriting $200M+ in commercial real estate transactions",
                      ],
                    },
                  ].map((job, jobIndex) => (
                    <div key={jobIndex}>
                      <motion.div
                        className={`border-l-2 ${job.borderColor} pl-4 hover:border-blue-600 transition-colors cursor-pointer`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: jobIndex * 0.15 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg">{job.title}</h3>
                            <p className="text-slate-600">{job.company}</p>
                          </div>
                          <span className="text-sm text-slate-500">{job.period}</span>
                        </div>
                        <p className="text-sm text-slate-600 mb-3">{job.location}</p>
                        <ul className="space-y-2 text-sm text-slate-700">
                          {job.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex gap-2 hover:text-blue-700 transition-colors"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: jobIndex * 0.15 + achIndex * 0.05 }}
                              whileHover={{ x: 3 }}
                            >
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                      {jobIndex < 2 && <Separator className="my-6" />}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h2 className="text-xl mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  Key Projects
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Hudson Yards Mixed-Use Development",
                      status: "Completed",
                      statusVariant: "default" as const,
                      details: "$450M | 2021 - 2023",
                      description:
                        "Spearheaded development of 42-story mixed-use tower featuring Class A office space, luxury retail, and public amenities. Achieved 95% pre-leasing before completion and received LEED Platinum certification.",
                    },
                    {
                      title: "Brooklyn Waterfront Office Campus",
                      status: "In Progress",
                      statusVariant: "secondary" as const,
                      details: "$280M | 2023 - Present",
                      description:
                        "Leading development of 450,000 sq ft Class A office campus with ground-floor retail and waterfront park. Currently 60% complete with 70% of space committed to anchor tenants.",
                    },
                    {
                      title: "Manhattan Retail Portfolio Repositioning",
                      status: "Completed",
                      statusVariant: "default" as const,
                      details: "$120M | 2019 - 2020",
                      description:
                        "Repositioned 8 underperforming retail properties across Manhattan, implementing tenant mix optimization and property improvements. Increased portfolio NOI by 28% within 18 months.",
                    },
                  ].map((project, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-4 cursor-pointer hover:shadow-md transition-all"
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.4 }}
                      whileHover={{ scale: 1.02, y: -3 }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg">{project.title}</h3>
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Badge variant={project.statusVariant}>{project.status}</Badge>
                        </motion.div>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">{project.details}</p>
                      <p className="text-sm text-slate-700">{project.description}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Certifications & Activities */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h2 className="text-xl mb-4 flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Award className="w-5 h-5 text-blue-600" />
                  </motion.div>
                  Certifications & Activities
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm mb-3">Professional Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { name: "CCIM - Certified Commercial Investment Member", org: "CCIM Institute, 2018" },
                        { name: "CRE - Counselor of Real Estate", org: "The Counselors of Real Estate, 2020" },
                        { name: "LEED AP BD+C", org: "USGBC, 2017" },
                        { name: "PMP - Project Management Professional", org: "PMI, 2019" },
                      ].map((cert, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 cursor-pointer"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.03, x: 3 }}
                        >
                          <Award className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm">{cert.name}</p>
                            <p className="text-xs text-slate-500">{cert.org}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-sm mb-3">Professional Activities</h3>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Board Member, Urban Land Institute (ULI) New York Chapter (2021-Present)",
                        "Guest Lecturer, Columbia University Real Estate Development Program (2022-Present)",
                        "Member, Commercial Real Estate Women (CREW) Network (2015-Present)",
                        "Mentor, Real Estate Executive Council Mentorship Program (2020-Present)",
                        'Speaker, ICSC New York Conference 2023 - "Future of Mixed-Use Developments"',
                      ].map((activity, index) => (
                        <motion.li
                          key={index}
                          className="flex gap-2 hover:text-blue-700 transition-colors cursor-pointer"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{activity}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-8 text-center text-sm text-slate-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>References available upon request</p>
        </motion.div>
      </div>
    </div>
  );
}
