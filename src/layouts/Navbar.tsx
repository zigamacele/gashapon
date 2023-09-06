import { Link } from 'react-router-dom'

import MotionInView from '@/lib/framer-motion/MotionInView'
import { Separator } from '@/lib/shadcn/ui/separator'

import MobileDropdown from '@/components/Navbar/MobileDropdown'
import Navigation from '@/components/Navbar/Navigation'
import SocialLinks from '@/components/Navbar/SocialLinks'

import Logo from './Logo'

const Navbar: React.FC = () => {
  return (
    <MotionInView
      y={-50}
      duration={0.6}
      styles='fixed z-50 flex h-14 w-full items-center justify-between border-b border-neutral-700 bg-neutral-900 px-4 text-sm sm:px-16'
    >
      <Link
        to='/'
        className='flex cursor-pointer items-center gap-2 hover:opacity-60'
      >
        <Logo logoProps='mt-1' />
      </Link>
      <div className='flex items-center gap-3 sm:gap-5'>
        <Navigation />
        <MobileDropdown />
        <Separator orientation='vertical' className='h-4' />
        <SocialLinks />
      </div>
    </MotionInView>
  )
}

export default Navbar
