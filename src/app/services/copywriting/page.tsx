import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import StickyCTA from "@/components/StickyCTA";
import CTA from "@/components/sections/CTA";
import Link from "next/link";

const scripts = [
  {
    title: "Concept 5: Kook Stores",
    content: `Hook: (Both founders in frame, walking or sitting casually)
“We’ve always been very different with what we wore.”

(Founder 1 in a stylish outfit, Founder 2 in relaxed and basic outfit)
“One of us cared more about how it looked…”
“And the other just wanted to feel comfortable.”

(Subtle sleeve/collar adjustment, Mirror glance, slight pause)
“But either way… something was always off and not satisfied.”

(Both sitting side by side, discussing the idea)
“Until we thought… Why are we settling for this?”

(Cinematic shots of fabric selection, catalog flip, discussing ideas, checking material)
“So we changed it and made something that feels both comfy and stylish at the same time.”
“This is why we started.”

”Kook Stores”
CTA: “Where you don’t have to choose.”`
  },
  {
    title: "Product Reel: Jitesh Fabrics",
    content: `Before the product reaches your retail shop
a lot happens behind it

At Jitesh Fabrics
every product goes through a complete process before dispatch

From fabric selection
to stitching
to fitting
to finishing
to final quality checking
every stage is handled carefully

From styles to sizes and even customization
everything is prepared according to your requirements

We focus on better fabric quality
clean finishing
proper fitting
flexible bulk ordering
and timely dispatch

So if you’re looking for a reliable sportswear manufacturing partner
connect with Jitesh Fabrics`
  },
  {
    title: "Cargo Half Pants Reel: Jitesh Fabrics",
    content: `In summers, are you looking for something comfortable yet stylish?

Then meet our newly launched Cargo Half Pants

With a lightweight feel
easy all-day comfort
utility pockets that actually work
and a fit that feels just right

Whether it’s for sports
daily activities
or all-day wear
It stays comfortable throughout

The relaxed fit keeps everything easy and breathable
while the cargo detailing adds a sharper sporty look

Made for people who like comfort
without compromising on style

And if you’re a retailer or sportswear brand looking for products like this
connect with Jitesh Fabrics for your bulk requirements`
  },
  {
    title: "Fabric Test Reel: Jitesh Fabrics",
    content: `Hey, do you know why good sportswear feels different while playing?

Because it’s not just about the look
it’s about the fabric behind it

A good sportswear fabric should feel lightweight
move easily with you
dry sweat faster
and stay comfortable throughout

That’s why we focus on fabrics that are built for movement and performance

From stretch to sweat movement to comfort
every detail matters

Because good sportswear should perform as good as it looks

And if you’re a retailer or a sportswear brand looking for products like this
connect with Jitesh Fabrics for your bulk requirements

Jitesh Fabrics
Built for everyday comfort`
  },
  {
    title: "Storytelling: Real Estate Deal",
    content: `HOOK: "So here’s a story about the deal I almost lost... and what it taught me that I now tell every single client."

A few years ago, I was working with a buyer and together we found their dream home.
The offer was ready, paperwork was done and everything was set.

But then things started to change.
The buyer began second-guessing the decision.
Because there were too many opinions coming from friends, family and outsiders.
And before we knew it, we were close to losing the deal.

That's when I learned something important.

The first step is to understand your goals, budget and your lifestyle.

Because when you know exactly what you're looking for, outside opinions become less important
And that's a lesson I've carried into every deal.

So if you're planning to buy a home DM "HOME" and let's understand your needs."`
  },
  {
    title: "Storytelling: Closing Night",
    content: `HOOK: "A client called me in tears the night before closing. And here's what happened."

"Months earlier, we had sat together, discussed his budget, shortlisted the right communities, gone through multiple showings and spent weeks finding the right home.
Eventually, we found the one, we completed the paperwork and the closing date was also set.

Until I got a call late that night.

And honestly, he was panicking.

Actually a paperwork issue had come up, and he thought the entire deal was about to fall apart.
And everything we had done, now all in vain.
So that night, we worked through the issue, stayed in touch with everyone involved and made sure nothing was left unanswered.

The next day, he got the keys.
And today, he's living in that same home with his family happily and never faced any issue related to it.

That's what Beyond Bricks is about.
We don’t just give options of houses instead we are always there by your side.
So if you're planning to buy a home this year, DM us 'HOME' and let's have a conversation."`
  },
  {
    title: "Father’s Day: Real Estate",
    content: `HOOK: "People often ask me why I got into real estate.
I never really give the complete answer but today is the day I want to."

"I grew up watching my father doin the same business.
And what I remember most isn't the houses he sold.
It's the people he helped.

I watched him taking calls late at night, sitting with families who were nervous, helping them to find their dream home and how much trust people placed in him.

That's where I learned something that still stays with me today.

Real estate isn't about homes.
It's about people and what matters even more is helping someone find a place where they'll build memories, raise a family, and create a life of their own in a small house.

So this Father's Day, I'm grateful to him.
Not just for everything he taught me about real estate.
But for everything he taught me about people.

Happy Father's Day to all the dads who continue to be an inspiration for their children."`
  }
];
export default function CopywritingService() {
  return (
    <main className="min-h-screen bg-atalix-bg-primary overflow-hidden flex flex-col">
      <Navbar />
      
      <section className="relative pt-48 pb-32 w-full flex-grow flex items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-atalix-accent opacity-[0.03] rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container px-6 md:px-12 mx-auto relative z-10 flex flex-col items-center text-center">
          <Link href="/#services" className="mb-12 inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest text-white/50 uppercase hover:text-white transition-colors border border-white/10 px-6 py-2 rounded-full bg-white/[0.02] backdrop-blur-md">
            <span>&larr;</span> Back to Services
          </Link>
          
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] font-heading font-black tracking-tighter text-white mb-8">
            COPYWRITING &<br />CONTENT
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed mb-16">
            Words can build trust, spark curiosity and drive action, all in a matter of seconds. That&apos;s why our approach to copywriting and content planning goes beyond filling space with captions and scripts, telling a story, supporting business goals and creating momentum for the brand.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
            {['Brand Voice', 'Ad Copy', 'Video Scripts', 'Content Calendars'].map((item, i) => (
              <div key={i} className="p-8 rounded-[24px] bg-white/[0.02] border border-white/5 backdrop-blur-md shadow-2xl flex items-center justify-center min-h-[160px]">
                <h3 className="text-lg font-heading font-bold uppercase tracking-wide text-white/90">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview & Approach */}
      <section className="py-24 relative z-10">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-atalix-accent text-[11px] font-bold tracking-widest uppercase mb-4 block">01 / The Approach</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 uppercase leading-tight">
                Words that<br/>convert.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                [Placeholder for detailed approach text. Explain how copywriting isn&apos;t just writing, but understanding the psychology of the audience, the tone of the brand, and the goal of the piece of content.]
              </p>
              <ul className="space-y-4">
                {['Audience Psychology', 'SEO-Optimized Storytelling', 'Action-Oriented Messaging'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-atalix-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Image Placeholder */}
            <div className="aspect-square md:aspect-[4/3] bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden flex items-center justify-center relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-atalix-accent/10 to-transparent" />
               <span className="text-white/20 font-heading font-bold uppercase tracking-widest">[Typography / Document Mockup]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Grid */}
      <section className="py-24 relative z-10 bg-white/[0.01] border-y border-white/5">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-atalix-accent text-[11px] font-bold tracking-widest uppercase mb-4 block">02 / Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">Featured Copy</h2>
            </div>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {scripts.map((script, idx) => (
              <div 
                key={idx} 
                className="break-inside-avoid relative rounded-[24px] overflow-hidden bg-[#1a1a1a]/40 border border-white/5 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="p-8 md:p-10">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-6 uppercase tracking-wide">
                    {script.title}
                  </h3>
                  <div className="text-white/60 text-sm md:text-base leading-relaxed whitespace-pre-wrap font-light group-hover:text-white/80 transition-colors">
                    {script.content}
                  </div>
                </div>
                {/* Decorative gradient effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-atalix-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-32 relative z-10">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="text-center mb-20">
            <span className="text-atalix-accent text-[11px] font-bold tracking-widest uppercase mb-4 block">03 / Process</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">How we work</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Research & Strategy', desc: '[Explain understanding the brand voice, target audience, and content goals.]' },
              { title: 'Drafting & Ideation', desc: '[Explain the writing process, testing headlines, and crafting the narrative.]' },
              { title: 'Refinement & Delivery', desc: '[Explain the editing process, SEO optimization, and final handoff.]' }
            ].map((step, i) => (
              <div key={i} className="p-10 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-sm relative overflow-hidden">
                <div className="text-6xl font-heading font-black text-white/5 absolute -top-4 -right-4">0{i+1}</div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase mt-8">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
