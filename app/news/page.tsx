import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Calendar, ArrowRight, ExternalLink, Newspaper, ChevronDown, ChevronRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Michigan State Legislature Increases Clubhouse Funding",
    excerpt: "A historic investment in community-based mental health services will expand Clubhouse accessibility across the state.",
    date: "May 15, 2024",
    category: "Policy",
    image: "/CM+at+Shanty+Creek+Summer+2024.webp"
  },
  {
    id: 2,
    title: "Member Spotlight: John's Journey to Employment",
    excerpt: "How the work-ordered day helped John rediscover his skills and secure a career in graphic design.",
    date: "May 10, 2024",
    category: "Success Stories",
    image: "/member+stories+2.webp"
  },
  {
    id: 3,
    title: "Upcoming Annual Clubhouse Michigan Conference",
    excerpt: "Join us this September in Lansing for a gathering of minds dedicated to mental health advocacy and community building.",
    date: "May 5, 2024",
    category: "Events",
    image: "/charter+house+3.webp"
  },
  {
    id: 4,
    title: "New Digital Literacy Program Launches Across 5 Locations",
    excerpt: "Bridging the digital divide with hands-on training for members to excel in the modern workforce.",
    date: "April 28, 2024",
    category: "Programs",
    image: "/bayside+9.webp"
  },
  {
    id: 5,
    title: "Impact Report: The Economic Value of Clubhouse Communities",
    excerpt: "New data shows significant healthcare savings and improved quality of life for Michigan residents.",
    date: "April 20, 2024",
    category: "Reports",
    image: "/wild+dawgz.webp"
  },
  {
    id: 6,
    title: "Transitional Employment: A Bridge to Financial Independence",
    excerpt: "Exploring the unique partnership between local businesses and Clubhouse members.",
    date: "April 15, 2024",
    category: "Employment",
    image: "/clubhouse_hero_image.webp"
  }
];



export default function NewsPage() {
  return (
    <main className="bg-white dark:bg-gray-950 min-h-screen font-sans">
      <Navigation />

      {/* Cinematic Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-[#1a3a5a] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-burgundy/20 blur-[150px] -mr-96 -mt-96" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/30 blur-[120px] -ml-48 -mb-48" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-300">Clubhouse Blog</p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Featured <span className="font-script text-white/90">Stories</span>
                </h1>
                <p className="text-xl text-blue-100/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  We're always exploring new topics, asking questions, and looking for new ways to learn and share.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-none">
               <div className="relative">
                  <div className="absolute -inset-4 bg-white/5 border border-white/10" />
                  <div className="aspect-[4/5] bg-gray-800 relative overflow-hidden shadow-2xl">
                     <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5a]/60 via-transparent to-transparent z-10" />
                     <div 
                        className="w-full h-full bg-cover bg-center grayscale-[0.2]" 
                        style={{ backgroundImage: "url('/clubhouse_michigan_hero.webp')" }}
                     />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Sort Bar */}
      <section className="py-8 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="relative group w-full md:w-auto">
              <button className="flex items-center gap-4 px-6 py-3 bg-gray-50 dark:bg-gray-900 text-xs font-bold uppercase tracking-widest border border-gray-200 dark:border-gray-700 w-full md:w-auto justify-between">
                Sort By: Newest to Oldest
                <ChevronDown size={14} className="text-brand-blue" />
              </button>
            </div>
            <div className="flex items-center gap-8 overflow-x-auto no-scrollbar w-full md:w-auto">
               {["All Stories", "Member Spotlights", "Policy Updates", "Events"].map((cat, i) => (
                  <button key={i} className={`text-[10px] font-bold uppercase tracking-widest whitespace-nowrap pb-2 border-b-2 transition-all ${i === 0 ? "text-brand-blue border-brand-blue" : "text-gray-400 border-transparent hover:text-gray-600"}`}>
                     {cat}
                  </button>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {articles.map((article) => (
              <article key={article.id} className="group cursor-pointer flex flex-col h-full border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl">
                <div className="aspect-[16/10] bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
                   <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                   <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                      style={{ backgroundImage: `url('${article.image}')` }}
                   />
                </div>
                <div className="p-8 flex flex-col flex-1 bg-white dark:bg-gray-900">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 block">Blog</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-blue transition-colors leading-tight mb-4">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-8">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                       {article.date}
                    </span>
                    <button className="text-brand-blue text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group/btn">
                      Read Article <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-24 flex items-center justify-center gap-4">
            {[1, 2, 3, "...", 32].map((page, i) => (
              <button 
                key={i} 
                className={`w-10 h-10 flex items-center justify-center text-xs font-bold transition-all ${
                  page === 1 ? "bg-brand-blue text-white" : "text-gray-400 hover:text-brand-blue hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:bg-gray-100 transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Global Impact Counter */}
      <section className="py-24 bg-[#1a3a5a] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-300 mb-16">Our Global Impact</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Active Members", value: "2,500+" },
              { label: "Clubhouse Locations", value: "45" },
              { label: "Years of Service", value: "30+" },
              { label: "Success Rate", value: "88%" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2 border-l border-white/10 first:border-0 pl-4 md:pl-0">
                <p className="text-4xl md:text-5xl font-bold tracking-tighter">{stat.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-200 opacity-60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Press Kit Section */}
      <section className="py-24 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Press & <span className="text-brand-burgundy">Media Kit</span></h2>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                   Are you a member of the press? Access our official brand assets, 
                   press releases, and high-resolution imagery for your coverage.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {[
                      "Brand Guidelines (PDF)",
                      "Official Logo Assets",
                      "Impact Reports 2023",
                      "Leadership Bios"
                   ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                         <span className="text-xs font-bold uppercase tracking-widest">{item}</span>
                         <ExternalLink size={14} className="text-brand-blue" />
                      </div>
                   ))}
                </div>
             </div>
             <div className="lg:w-1/2 p-10 bg-gray-50 dark:bg-gray-900 border-l-8 border-brand-blue">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Media Inquiries</h3>
                <p className="text-gray-500 mb-6 text-sm">For interview requests or additional information, please contact our media relations team.</p>
                <div className="space-y-4">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                         <Newspaper size={18} />
                      </div>
                      <div>
                         <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</p>
                         <p className="text-sm font-bold">press@clubhousemichigan.org</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Trevor Project Style */}
      <section className="py-24 bg-[#1a3a5a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="lg:w-1/2 space-y-6">
                 <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-300">Newsletter</p>
                 <h2 className="text-3xl md:text-5xl font-bold text-white">Join Our Community</h2>
                 <p className="text-blue-100 text-lg leading-relaxed">
                    Sign up for our newsletter to get monthly updates on Clubhouse Michigan initiatives, 
                    success stories, and ways you can help.
                 </p>
              </div>
              <div className="lg:w-1/2 w-full">
                 <form className="flex flex-col sm:flex-row gap-4">
                    <input 
                       type="email" 
                       placeholder="Email Address"
                       className="flex-1 px-8 py-4 bg-white text-gray-900 placeholder:text-gray-400 outline-none rounded-none text-sm"
                    />
                    <button className="px-12 py-4 bg-white text-[#1a3a5a] text-xs font-bold uppercase tracking-widest hover:bg-blue-50 transition-all border-none">
                       Subscribe
                    </button>
                 </form>
                 <p className="text-blue-300/60 text-[10px] font-bold uppercase tracking-widest mt-6 leading-loose">
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                 </p>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
