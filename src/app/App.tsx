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

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto p-6 md:p-8">
        {/* Header Section */}
        <Card className="mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-32"></div>
          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row gap-6 -mt-16 relative">
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
              <div className="flex-1 mt-16 md:mt-20">
                <h1 className="text-3xl mb-2">Sarah Johnson</h1>
                <p className="text-lg text-slate-600 mb-4">
                  Senior Real Estate Development Manager
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span>March 15, 1990</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Mail className="w-4 h-4" />
                    <span>sarah.johnson@email.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4" />
                    <span>New York, NY 10001</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Facebook className="w-4 h-4" />
                    <span>facebook.com/sarahjohnson</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Linkedin className="w-4 h-4" />
                    <span>linkedin.com/in/sarahjohnson</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Hobbies */}
            <Card className="p-6">
              <h2 className="text-xl mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-blue-600" />
                Hobbies
              </h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Book className="w-4 h-4 text-slate-500" />
                  <span>Real Estate Market Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Music className="w-4 h-4 text-slate-500" />
                  <span>Classical Music</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Plane className="w-4 h-4 text-slate-500" />
                  <span>International Travel</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-slate-500" />
                  <span>Investment Research</span>
                </div>
              </div>
            </Card>

            {/* Personality */}
            <Card className="p-6">
              <h2 className="text-xl mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Personality
              </h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">
                  Detail-Oriented
                </Badge>
                <Badge variant="secondary">
                  Strategic Thinker
                </Badge>
                <Badge variant="secondary">Team Player</Badge>
                <Badge variant="secondary">
                  Results-Driven
                </Badge>
                <Badge variant="secondary">Innovative</Badge>
                <Badge variant="secondary">Analytical</Badge>
              </div>
            </Card>

            {/* Skills */}
            <Card className="p-6">
              <h2 className="text-xl mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-600" />
                Skills
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm mb-2">
                    Advanced Skills
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Property Valuation</span>
                        <span className="text-slate-500">
                          Expert
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 w-[95%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Market Analysis</span>
                        <span className="text-slate-500">
                          Advanced
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 w-[90%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Financial Modeling</span>
                        <span className="text-slate-500">
                          Advanced
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 w-[85%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Contract Negotiation</span>
                        <span className="text-slate-500">
                          Expert
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 w-[92%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Due Diligence</span>
                        <span className="text-slate-500">
                          Advanced
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 w-[88%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm mb-2">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Leadership</Badge>
                    <Badge>Communication</Badge>
                    <Badge>Negotiation</Badge>
                    <Badge>Client Relations</Badge>
                    <Badge>Problem Solving</Badge>
                    <Badge>Time Management</Badge>
                    <Badge>Critical Thinking</Badge>
                    <Badge>Adaptability</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Objectives */}
            <Card className="p-6">
              <h2 className="text-xl mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                Career Objectives
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Seeking a senior leadership position in
                commercial real estate development where I can
                leverage my 8+ years of experience in property
                acquisition, portfolio management, and strategic
                planning to drive sustainable growth and
                maximize ROI. Committed to identifying emerging
                market opportunities and leading high-performing
                teams to deliver exceptional value to
                stakeholders.
              </p>
            </Card>

            {/* Education */}
            <Card className="p-6">
              <h2 className="text-xl mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                Education
              </h2>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-600 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg">
                        Master of Science in Real Estate
                        Development
                      </h3>
                      <p className="text-slate-600">
                        Columbia University, New York
                      </p>
                    </div>
                    <span className="text-sm text-slate-500">
                      2012 - 2014
                    </span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="text-slate-600">
                        GPA:
                      </span>{" "}
                      3.9/4.0 - Summa Cum Laude
                    </p>
                    <p className="text-slate-600">
                      Specialization: Commercial Property
                      Development & Urban Planning
                    </p>
                    <p className="text-slate-600">
                      Thesis: "Sustainable Mixed-Use
                      Developments in Metropolitan Areas"
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="border-l-2 border-slate-300 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg">
                        Bachelor of Business Administration
                      </h3>
                      <p className="text-slate-600">
                        New York University - Stern School of
                        Business
                      </p>
                    </div>
                    <span className="text-sm text-slate-500">
                      2008 - 2012
                    </span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="text-slate-600">
                        GPA:
                      </span>{" "}
                      3.7/4.0 - Magna Cum Laude
                    </p>
                    <p className="text-slate-600">
                      Major: Finance & Real Estate
                    </p>
                    <p className="text-slate-600">
                      Minor: Economics
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Work History */}
            <Card className="p-6">
              <h2 className="text-xl mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600" />
                Work Experience
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-600 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg">
                        Senior Development Manager
                      </h3>
                      <p className="text-slate-600">
                        Brookfield Properties
                      </p>
                    </div>
                    <span className="text-sm text-slate-500">
                      2020 - Present
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    New York, NY
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Led development of $450M mixed-use
                        commercial project including 300,000 sq
                        ft of office space and retail
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Managed portfolio of 12 commercial
                        properties valued at $2.1B, achieving
                        15% increase in NOI
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Negotiated and closed acquisitions
                        totaling $380M with average 22% ROI
                        within first 3 years
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Built and mentored team of 8 analysts
                        and associates, improving department
                        efficiency by 35%
                      </span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div className="border-l-2 border-slate-300 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg">
                        Development Associate
                      </h3>
                      <p className="text-slate-600">
                        Tishman Speyer
                      </p>
                    </div>
                    <span className="text-sm text-slate-500">
                      2016 - 2020
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    New York, NY
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Conducted feasibility studies and
                        financial analysis for $600M+ in
                        potential acquisitions
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Coordinated due diligence processes for
                        15+ property transactions, ensuring
                        timely closings
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Developed comprehensive market research
                        reports identifying high-growth
                        submarkets
                      </span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div className="border-l-2 border-slate-300 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg">
                        Junior Analyst
                      </h3>
                      <p className="text-slate-600">
                        CBRE Group
                      </p>
                    </div>
                    <span className="text-sm text-slate-500">
                      2014 - 2016
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    New York, NY
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Created detailed financial models for
                        investment analysis and property
                        valuations
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Supported senior team in underwriting
                        $200M+ in commercial real estate
                        transactions
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Projects */}
            <Card className="p-6">
              <h2 className="text-xl mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                Key Projects
              </h2>
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg">
                      Hudson Yards Mixed-Use Development
                    </h3>
                    <Badge>Completed</Badge>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    $450M | 2021 - 2023
                  </p>
                  <p className="text-sm text-slate-700">
                    Spearheaded development of 42-story
                    mixed-use tower featuring Class A office
                    space, luxury retail, and public amenities.
                    Achieved 95% pre-leasing before completion
                    and received LEED Platinum certification.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg">
                      Brooklyn Waterfront Office Campus
                    </h3>
                    <Badge variant="secondary">
                      In Progress
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    $280M | 2023 - Present
                  </p>
                  <p className="text-sm text-slate-700">
                    Leading development of 450,000 sq ft Class A
                    office campus with ground-floor retail and
                    waterfront park. Currently 60% complete with
                    70% of space committed to anchor tenants.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg">
                      Manhattan Retail Portfolio Repositioning
                    </h3>
                    <Badge>Completed</Badge>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    $120M | 2019 - 2020
                  </p>
                  <p className="text-sm text-slate-700">
                    Repositioned 8 underperforming retail
                    properties across Manhattan, implementing
                    tenant mix optimization and property
                    improvements. Increased portfolio NOI by 28%
                    within 18 months.
                  </p>
                </div>
              </div>
            </Card>

            {/* Certifications & Activities */}
            <Card className="p-6">
              <h2 className="text-xl mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Certifications & Activities
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm mb-3">
                    Professional Certifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm">
                          CCIM - Certified Commercial Investment
                          Member
                        </p>
                        <p className="text-xs text-slate-500">
                          CCIM Institute, 2018
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm">
                          CRE - Counselor of Real Estate
                        </p>
                        <p className="text-xs text-slate-500">
                          The Counselors of Real Estate, 2020
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm">LEED AP BD+C</p>
                        <p className="text-xs text-slate-500">
                          USGBC, 2017
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm">
                          PMP - Project Management Professional
                        </p>
                        <p className="text-xs text-slate-500">
                          PMI, 2019
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm mb-3">
                    Professional Activities
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Board Member, Urban Land Institute (ULI)
                        New York Chapter (2021-Present)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Guest Lecturer, Columbia University Real
                        Estate Development Program
                        (2022-Present)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Member, Commercial Real Estate Women
                        (CREW) Network (2015-Present)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Mentor, Real Estate Executive Council
                        Mentorship Program (2020-Present)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Speaker, ICSC New York Conference 2023 -
                        "Future of Mixed-Use Developments"
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>References available upon request</p>
        </div>
      </div>
    </div>
  );
}