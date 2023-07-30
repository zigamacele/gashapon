import supabase from '@/config/supabase'
import { FeedbackOutput } from '@/types/supabase'
import { useEffect, useState } from 'react'

const useFeedbackChanges = () => {
  const [output, setOutput] = useState<FeedbackOutput[]>([])
  const [loading, setLoading] = useState(false)

  const getOutput = async () => {
    setLoading(true)

    const { data, error } = await supabase
      .from('feedback')
      .select('*')
      .order('created_at', { ascending: false })

    if (data) {
      setOutput(data as unknown as FeedbackOutput[])
      setLoading(false)
    }

    if (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    supabase
      .channel('feedback')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
        },
        () => {
          void getOutput()
        },
      )
      .subscribe()

    void getOutput()
  }, [])

  return { data: output, loading }
}

export default useFeedbackChanges
