import MotionInView from '@/lib/framer-motion/MotionInView.tsx'

import useGraveyardStore from '@/stores/graveyard-store.ts'
import useSupabaseStore from '@/stores/supabase-store.ts'

import GameBanner from '@/layouts/GameBanner.tsx'
import { findInStorage } from '@/utils/overview.ts'
import { getRegion } from '@/utils/region.ts'

const Maintenance: React.FC = () => {
  const { maintenance } = useGraveyardStore()
  const { storage } = useSupabaseStore()
  return (
    <>
      {maintenance.length > 0 && (
        <MotionInView styles='w-[95vw] rounded-lg border border-neutral-700 bg-neutral-900 px-2 py-2 sm:w-[70vw]'>
          {maintenance.map(({ id, games }) => (
            <GameBanner
              key={id}
              game={findInStorage(storage, id)}
              y={0}
              glowingText='MAINTENANCE'
              glowingStyle={getRegion(games.region).textColor}
            />
          ))}
        </MotionInView>
      )}
    </>
  )
}

export default Maintenance
