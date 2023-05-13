import Hero from '@/components/Hero'
import How from '@/components/How'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Startup from '@/components/Startup'
import Update from '@/components/Update'

export default function Home() {
  return (
    <div className="main ">
      <Navbar/>
      <Hero/>
      <Services/>
      <Update/>
      <Startup/>
      <How/>
    </div>
  )
}
