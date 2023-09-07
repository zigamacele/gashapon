import {
  ArrowDown10,
  ArrowUp10,
  ClipboardEdit,
  Combine,
  Pin,
  PinOff,
} from 'lucide-react'

import useMonthlyTableControls from '@/stores/monthly-table-controls'

import MonthSwitcher from '@/layouts/MonthSwitcher'

import Toggle from './Toggle'
import Tooltip from '../Tooltip'

const MonthlyRevenueControls: React.FC = () => {
  const {
    sortAscending,
    showPinned,
    toggle,
    pinned,
    showCombinedRevenue,
    showEditSection,
  } = useMonthlyTableControls()

  return (
    <section className='mx-2 mt-2 flex justify-between'>
      <div className='flex items-center gap-2'>
        <Tooltip text={!showEditSection ? 'Edit Chart' : 'Close Editor'}>
          <Toggle
            onClick={() => toggle('showEditSection')}
            pressed={showEditSection}
          >
            <ClipboardEdit size={20} />
          </Toggle>
        </Tooltip>
        <MonthSwitcher />
      </div>
      <div className='flex justify-end gap-2'>
        <Tooltip text={!showPinned ? 'Show Pinned' : 'Hide Pinned'}>
          <Toggle
            onClick={() => toggle('showPinned')}
            disabled={!pinned.length && !showPinned}
            pressed={showPinned}
          >
            {showPinned ? <PinOff size={18} /> : <Pin size={18} />}
          </Toggle>
        </Tooltip>
        <Tooltip
          text={
            !showCombinedRevenue
              ? 'Combine Region Revenue'
              : 'Separate Region Revenue'
          }
        >
          <Toggle
            onClick={() => toggle('showCombinedRevenue')}
            pressed={showCombinedRevenue}
          >
            <Combine size={18} />
          </Toggle>
        </Tooltip>
        <Tooltip text={!sortAscending ? 'Sort Ascending' : 'Sort Descending'}>
          <Toggle
            onClick={() => toggle('sortAscending')}
            pressed={sortAscending}
          >
            {sortAscending ? (
              <ArrowUp10 size={22} />
            ) : (
              <ArrowDown10 size={22} />
            )}
          </Toggle>
        </Tooltip>
      </div>
    </section>
  )
}

export default MonthlyRevenueControls
