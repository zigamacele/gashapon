import {
  BarChart3,
  Combine,
  LineChart,
  PieChart,
  Pin,
  PinOff,
} from 'lucide-react'

import { Button } from '@/lib/shadcn/ui/button'
import { cn } from '@/lib/shadcn/utils'

import useMonthlyTableControls from '@/stores/monthly-table-controls'

import { SlideDirection } from '@/utils/enums'

import Toggle from '../MonthlyRevenue/Toggle'
import Tooltip from '../Tooltip'

interface ChartControlsProps {
  selectedChart: string
  setSelectedChart: (value: string) => void
}

const ChartControls: React.FC<ChartControlsProps> = ({
  selectedChart,
  setSelectedChart,
}) => {
  const { toggle, showCombinedRevenue, showPinned, pinned } =
    useMonthlyTableControls()

  return (
    <div className='flex w-full items-center justify-between px-2 sm:w-full'>
      <div className='flex gap-2'>
        <Tooltip text='Pie Chart'>
          <Button
            onClick={() => setSelectedChart('pie')}
            className={cn(
              'text-opacity-40 hover:text-opacity-80',
              selectedChart === 'pie' &&
                'border-neutral-400 bg-neutral-800 text-opacity-100',
            )}
          >
            <PieChart width={20} />
          </Button>
        </Tooltip>
        <Tooltip text='Bar Chart'>
          <Button
            onClick={() => setSelectedChart('bar')}
            className={cn(
              'text-opacity-40 hover:text-opacity-80',
              selectedChart === 'bar' &&
                'border-neutral-400 bg-neutral-800 text-opacity-100',
            )}
          >
            <BarChart3 width={20} />
          </Button>
        </Tooltip>
        <Tooltip text='Line Chart'>
          <Button
            onClick={() => setSelectedChart('line')}
            className={cn(
              'text-opacity-40 hover:text-opacity-80',
              selectedChart === 'line' &&
                'border-neutral-400 bg-neutral-800 text-opacity-100',
            )}
          >
            <LineChart width={20} />
          </Button>
        </Tooltip>
      </div>
      <div className='flex gap-2'>
        <Tooltip text={!showPinned ? 'Show Pinned' : 'Hide Pinned'}>
          <Toggle
            onClick={() => toggle('showPinned')}
            disabled={!pinned.length && !showPinned}
            pressed={showPinned}
          >
            {showPinned ? <Pin size={18} /> : <PinOff size={18} />}
          </Toggle>
        </Tooltip>

        {selectedChart === 'pie' && (
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
              slideFrom={SlideDirection.LEFT}
            >
              <Combine size={18} />
            </Toggle>
          </Tooltip>
        )}
      </div>
    </div>
  )
}

export default ChartControls
