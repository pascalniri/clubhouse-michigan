import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Briefcase, MapPin, Clock, ArrowUpRight, Search, Filter, Users } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Program Coordinator",
    location: "Lansing, MI",
    type: "Full-time",
    salary: "$55k - $70k",
    posted: "2 days ago",
    category: "Management",
    description: "Lead daily clubhouse activities and mentor members in their recovery journey through the work-ordered day."
  },
  {
    id: 2,
    title: "Employment Specialist",
    location: "Detroit, MI",
    type: "Full-time",
    salary: "$48k - $60k",
    posted: "1 week ago",
    category: "Member Support",
    description: "Support members in securing and maintaining transitional, supported, and independent employment."
  },
  {
    id: 3,
    title: "Clubhouse Director",
    location: "Grand Rapids, MI",
    type: "Full-time",
    salary: "$80k - $100k",
    posted: "3 days ago",
    category: "Executive",
    description: "Oversee operations, strategic planning, and community relations for a thriving Clubhouse community."
  },
  {
    id: 4,
    title: "Social Media & Media Lead",
    location: "Remote / Lansing",
    type: "Part-time",
    salary: "$25/hour",
    posted: "5 days ago",
    category: "Marketing",
    description: "Tell the story of our members and impact through digital platforms and traditional media outlets."
  },
  {
    id: 5,
    title: "Mental Health Advocate",
    location: "Ann Arbor, MI",
    type: "Contract",
    salary: "Competitive",
    posted: "1 day ago",
    category: "Advocacy",
    description: "Represent Clubhouse Michigan in policy discussions and community outreach programs."
  }
];

export default function JobsPage() {
  return (
    <main className="bg-white dark:bg-gray-950 min-h-screen font-sans">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-brand-blue text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Help Us <span className="font-script text-5xl md:text-7xl text-white font-normal">Transform</span> Lives
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Join a community of dedicated professionals committed to empowering individuals 
            living with mental illness through recovery-centered support.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="text-gray-400 group-focus-within:text-brand-blue transition-colors" size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search by job title or location..."
              className="w-full pl-16 pr-32 py-4 bg-white rounded-none text-gray-900 shadow-2xl focus:ring-4 focus:ring-white/20 outline-none transition-all text-lg font-medium"
            />
            <button className="absolute right-2 top-2 bottom-2 px-6 bg-brand-burgundy text-white text-xs font-bold uppercase tracking-widest hover:bg-[#7a2b3a] transition-all flex items-center gap-2">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Jobs List Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Available Positions</h2>
              <p className="text-gray-500">Discover your next meaningful career move</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 hover:bg-gray-200 transition-colors">
                <Filter size={14} />
                Filters
              </button>
              <p className="text-sm font-medium text-gray-400 ml-2">{jobs.length} jobs found</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job) => (
              <div 
                key={job.id}
                className="group relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 hover:shadow-2xl transition-all duration-500 hover:border-brand-blue/20"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="space-y-4 max-w-2xl">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-brand-blue/5 text-brand-blue text-[10px] font-bold uppercase tracking-widest">
                        {job.category}
                      </span>
                      <span className="px-3 py-1 bg-brand-burgundy/5 text-brand-burgundy text-[10px] font-bold uppercase tracking-widest">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-brand-blue transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-brand-blue" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-brand-blue" />
                        {job.posted}
                      </div>
                      <div className="text-brand-blue">
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <button className="flex-1 lg:flex-none px-6 py-3 bg-brand-blue text-white text-xs font-bold uppercase tracking-widest hover:bg-[#1E3C5D] transition-all shadow-lg shadow-brand-blue/10">
                      Apply Now
                    </button>
                    <button className="p-3 bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 hover:text-brand-blue hover:bg-brand-blue/5 transition-all">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-1 bg-gray-100 dark:bg-gray-800 rounded-none mb-8">
              <div className="flex items-center gap-2 px-6 py-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-bold text-gray-600 dark:text-gray-300">More roles coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Why Work <span className="font-script text-brand-burgundy">With Us</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We provide a supportive, inclusive, and mission-driven environment where your work directly impacts lives.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Meaningful Impact", 
                desc: "Directly support individuals on their journey to mental health recovery and social inclusion.",
                icon: <Briefcase className="text-brand-blue" size={32} />
              },
              { 
                title: "Professional Growth", 
                desc: "Ongoing training and development opportunities within the global Clubhouse International network.",
                icon: <Users className="text-brand-blue" size={32} />
              },
              { 
                title: "Inclusive Culture", 
                desc: "A community-based workplace that values lived experience and diverse perspectives.",
                icon: <Search className="text-brand-blue" size={32} />
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-10 shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">Our Hiring <span className="font-script text-brand-blue">Process</span></h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                We believe in finding the right cultural fit for our community. Our process is transparent 
                and designed to help you understand our mission as much as we understand your skills.
              </p>
              <div className="space-y-6">
                {[
                  "Submit application & resume online",
                  "Initial screening interview with HR",
                  "On-site visit to a local Clubhouse",
                  "Final interview with Director & Board"
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <span className="w-10 h-10 shrink-0 bg-brand-burgundy/10 text-brand-burgundy flex items-center justify-center font-bold text-lg">{i + 1}</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 bg-brand-blue p-12 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-32 -mt-32 rounded-full" />
               <h3 className="text-2xl font-bold mb-6">Ready to make a difference?</h3>
               <p className="text-blue-100 mb-8 leading-relaxed">
                 Even if you don't see a perfect match today, we're always looking for passionate 
                 individuals to join our talent pool.
               </p>
               <button className="px-6 py-3 bg-white text-brand-blue text-xs font-bold uppercase tracking-widest hover:bg-blue-50 transition-all">
                  Submit Interest
               </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
