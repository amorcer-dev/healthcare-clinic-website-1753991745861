import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Contact } from '@/components/Contact'
import { WidgetProfile } from '@/components/WidgetProfile'
import { WidgetVideo } from '@/components/WidgetVideo'
import { WidgetAboutDoctor } from '@/components/WidgetAboutDoctor'
import { WidgetServicesAndConditions } from '@/components/WidgetServicesAndConditions'
import { WidgetTestimonialCarousel } from '@/components/WidgetTestimonialCarousel'
import { WidgetPricesAndPackages } from '@/components/WidgetPricesAndPackages'
import { WidgetBookConsultation } from '@/components/WidgetBookConsultation'
import { WidgetInsurances } from '@/components/WidgetInsurances'
import { WidgetMessageDoctor } from '@/components/WidgetMessageDoctor'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Contact />
      <WidgetProfile />
      <WidgetVideo />
      <WidgetAboutDoctor />
      <WidgetServicesAndConditions />
      <WidgetTestimonialCarousel />
      <WidgetPricesAndPackages />
      <WidgetBookConsultation />
      <WidgetInsurances />
      <WidgetMessageDoctor />
    </main>
  )
}