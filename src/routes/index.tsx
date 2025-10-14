import { createFileRoute } from '@tanstack/react-router'
import ReactPlayer from 'react-player'
import { useState, useRef } from 'react'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { Avatar, AvatarImage } from '../components/ui/avatar'
import { Separator } from '../components/ui/separator'
import { LucideGithub, LucideMail, LucidePhone, LucideMapPin, LucideYoutube, PlayCircle, Menu, X } from 'lucide-react'
import { Dialog, DialogTrigger, DialogContent } from '../components/ui/dialog'
import Calculators from '../components/calculators/Calculators'

// alias to avoid strict react-player prop typings in this project
const AnyReactPlayer: any = ReactPlayer

function MobileMenu({ onNavigate }: { onNavigate: (section: 'services' | 'team' | 'contact' | 'calculators') => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        className="p-2 rounded-md bg-white/80 dark:bg-transparent"
        onClick={() => setOpen((s) => !s)}
        aria-label="Toggle menu"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg p-3">
          <button
            className="block text-sm w-full text-left py-1 hover:underline"
            onClick={() => {
              setOpen(false)
              onNavigate('services')
            }}
          >
            Services
          </button>
          <button
            className="block text-sm w-full text-left py-1 hover:underline"
            onClick={() => {
              setOpen(false)
              onNavigate('calculators')
            }}
          >
            Calculators
          </button>
          <button
            className="block text-sm w-full text-left py-1 hover:underline"
            onClick={() => {
              setOpen(false)
              onNavigate('team')
            }}
          >
            Our Team
          </button>
          <button
            className="block text-sm w-full text-left py-1 hover:underline"
            onClick={() => {
              setOpen(false)
              onNavigate('contact')
            }}
          >
            Contact
          </button>
        </div>
      )}
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

const siteData = {
  title: 'FARMHOUSE HP',
  heroTagline: 'Sustainable Agriculture Solutions',
  heroSub: 'Innovative farming techniques for a greener tomorrow',
  founded: 'JULY 2025',
  aboutImage: '/agri.svg',
  pillars: ['Organic', 'Sustainable', 'Community'],
  copyright: `© ${new Date().getFullYear()} Farmhouse HP. All rights reserved.`,
}

const services = [
  {
    title: 'Crop Production',
    desc: 'We grow a variety of organic crops using sustainable farming practices that protect the environment while maximizing yield.',
    icon: 'package',
  },
  {
    title: 'Livestock Management',
    desc: 'Humane and ethical treatment of animals with focus on animal welfare and high-quality meat and dairy production.',
    icon: 'git-merge',
  },
  {
    title: 'Agricultural Training',
    desc: 'Workshops and training programs for local farmers to improve their skills and adopt sustainable farming techniques.',
    icon: 'book-open',
  },
]

const contact = {
  address: '123 Farm Road, Agricultural District, Country',
  phone: '+27 68 071 3029',
  email: 'info@farmhousehp.com',
  qr: 'https://farmhousehp.com/contact',
}

// media section removed; hero buttons open modal videos

const teamJSON = {
  team_name: 'FARMHOUSE HP Team',
  members: [
    { name: 'Mahlalela Q. T.', role: 'Group Leader', image_url: 'https://huggingface.co/spaces/1jerieko/undefined/resolve/main/images/IMG-20250921-WA0004[1].jpg' },
    { name: 'Masombuka T. J', role: 'Crop Specialist & Horticulturist', image_url: 'https://huggingface.co/spaces/1jerieko/undefined/resolve/main/images/IMG-20250921-WA0011[1].jpg' },
    { name: 'Nkogatse K', role: 'Livestock Manager', image_url: 'https://huggingface.co/spaces/1jerieko/undefined/resolve/main/images/IMG-20250811-WA0007_resized[1].jpg' },
    { name: 'Baloyi K.K', role: 'Irrigation Specialist', image_url: 'https://huggingface.co/spaces/1jerieko/undefined/resolve/main/images/IMG-20250921-WA0005[1].jpg' },
    { name: 'Moyo B', role: 'Soil Scientist', image_url: 'https://huggingface.co/spaces/1jerieko/undefined/resolve/main/images/IMG-20250921-WA0007[1].jpg' },
    { name: 'Blose A', role: 'Farm Technician', image_url: 'https://huggingface.co/spaces/1jerieko/undefined/resolve/main/images/IMG-20250920-WA0007[1].jpg' },
    { name: 'Kharivhe M', role: 'Marketing Director', image_url: 'https://huggingface.co/spaces/1jerieko/undefined/resolve/main/images/IMG-20250921-WA0008[1].jpg' },
    { name: 'Mungani M', role: 'Logistics', image_url: 'https://huggingface.co/spaces/1jerieko/undefined/resolve/main/images/IMG-20250920-WA0005[1].jpg' },
    { name: 'Shokani P', role: 'Training Coordinator', image_url: 'https://huggingface.co/spaces/1jerieko/undefined/resolve/main/images/IMG-20250921-WA0006[1].jpg' },
    { name: 'Shai M.B', role: 'Research Specialist', image_url: 'https://huggingface.co/spaces/1jerieko/undefined/resolve/main/images/IMG-20250921-WA0010[1].jpg' },
  ],
}

export default function RouteComponent() {
  const servicesRef = useRef<HTMLElement | null>(null)
  const teamRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)
  const calculatorsRef = useRef<HTMLElement | null>(null)

  const smoothScroll = (el: HTMLElement | null) => {
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50 text-slate-900 inter-light">
      <header className="relative container mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="text-2xl font-extrabold">{siteData.title}</div>
          <div className="text-sm text-slate-600">Founded {siteData.founded}</div>
        </div>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <button className="text-sm hover:underline" onClick={() => smoothScroll(servicesRef.current)}>Services</button>
          <button className="text-sm hover:underline" onClick={() => smoothScroll(calculatorsRef.current)}>Calculators</button>
          <button className="text-sm hover:underline" onClick={() => smoothScroll(teamRef.current)}>Our Team</button>
          <button className="text-sm hover:underline" onClick={() => smoothScroll(contactRef.current)}>Contact</button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <MobileMenu onNavigate={(s) => {
            if (s === 'services') smoothScroll(servicesRef.current)
            if (s === 'calculators') smoothScroll(calculatorsRef.current)
            if (s === 'team') smoothScroll(teamRef.current)
            if (s === 'contact') smoothScroll(contactRef.current)
          }} />
        </div>
      </header>

  <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-last md:order-first text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{siteData.heroTagline}</h1>
          <p className="mt-4 text-lg text-slate-700">{siteData.heroSub}</p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <PlayCircle className="w-4 h-4" />
                  Learn About Agriculture Pros & Cons
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0">
                <div className="w-full h-[65vh] md:h-[75vh] bg-black">
                  <AnyReactPlayer src="https://www.youtube.com/watch?v=zRB1IQ9mv78" width="100%" height="100%" controls />
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <PlayCircle className="w-4 h-4" />
                  Sustainable Farming Practices
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0">
                <div className="w-full h-[65vh] md:h-[75vh] bg-black">
                  <AnyReactPlayer src="https://www.youtube.com/watch?v=hyrJlE015dA" width="100%" height="100%" controls />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600">
            {siteData.pillars.map((p) => (
              <div key={p} className="bg-white/60 p-3 rounded shadow-sm">{p}</div>
            ))}
          </div>
        </div>

        <div className="flex justify-center order-first md:order-last">
          <div className="rounded-full p-4 md:p-6 bg-gradient-to-tr from-emerald-50 via-white to-amber-50 shadow-xl">
            <div className="rounded-full w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 flex items-center justify-center overflow-hidden bg-white/0">
              <img src={siteData.aboutImage} alt="about" className="w-11/12 h-11/12 object-contain" />
            </div>
          </div>
        </div>
      </section>

  <Separator />

  <section ref={servicesRef} id="services" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <p className="text-slate-600 mt-2">We offer a range of services to support sustainable agriculture.</p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-emerald-100 p-3">
                  <LucideGithub className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

    <Separator />

    <section ref={calculatorsRef} id="calculators" className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">Calculators</h2>
      <p className="text-slate-600 mt-2">Small tools to help with planning and estimates.</p>
      <div className="mt-6">
        <Calculators />
      </div>
    </section>

  <Separator />

  <section ref={teamRef} id="team" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">{teamJSON.team_name}</h2>
        <p className="text-slate-600 mt-2">Meet the people behind our mission.</p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {teamJSON.members.map((m) => (
            <Card key={m.name} className="p-4 text-center">
              <div className="flex flex-col items-center">
                <Avatar className="w-20 h-20 sm:w-24 sm:h-24">
                  <AvatarImage src={m.image_url} alt={m.name} className="object-cover" />
                </Avatar>
                <div className="mt-3">
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-xs text-slate-500">{m.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

  <Separator />

  <section ref={contactRef} id="contact" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Contact</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <LucideMapPin className="w-5 h-5 text-emerald-700 mt-1" />
              <div>
                <div className="font-semibold">Address</div>
                <div className="text-sm text-slate-600">{contact.address}</div>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <LucidePhone className="w-4 h-4 text-emerald-700" />
                <a className="text-sm text-slate-700" href={`tel:${contact.phone}`}>{contact.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <LucideMail className="w-4 h-4 text-emerald-700" />
                <a className="text-sm text-slate-700" href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>
          </Card>

          <Card className="p-6 flex items-center justify-center">
            <div className="text-center">
              <div className="font-semibold">QR / Contact page</div>
              <a className="mt-2 inline-flex items-center gap-2 text-sm text-emerald-700" href={contact.qr}>
                <LucideYoutube className="w-4 h-4" /> Visit contact page
              </a>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t bg-white/60 mt-12">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-sm text-slate-600">{siteData.copyright}</div>
          <div className="flex items-center gap-4 text-slate-600">
            <LucideGithub className="w-5 h-5" />
            <LucideMail className="w-5 h-5" />
            <LucidePhone className="w-5 h-5" />
          </div>
        </div>
      </footer>
    </main>
  )
}
