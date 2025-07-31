import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Contact } from '@/components/Contact'
import { DoctorProfile } from '@/components/DoctorProfile'
import { Video } from '@/components/Video'
import { AboutDoctor } from '@/components/AboutDoctor'
import { Services&Conditions } from '@/components/Services&Conditions'
import { TestimonialCarousel } from '@/components/TestimonialCarousel'
import { Prices&Packages } from '@/components/Prices&Packages'
import { BookConsultation } from '@/components/BookConsultation'
import { Insurances } from '@/components/Insurances'
import { MessageDoctor } from '@/components/MessageDoctor'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Contact />
      <DoctorProfile />
      <Video />
      <AboutDoctor />
      <Services&Conditions />
      <TestimonialCarousel />
      <Prices&Packages />
      <BookConsultation />
      <Insurances />
      <MessageDoctor />
    </main>
  )
}