'use client'

import { AddTabGroup } from '@/components/ui/add-tab-group'
import { Button } from '@/components/ui/button'
import { TabGroupCard } from '@/components/ui/tab-group-card'
import { useAuth } from '@/contexts/AuthContext'
import { TablyAPI } from '@/lib/api/tably-api'
import { TabGroup } from '@/models/tab-group'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const { loading, token } = useAuth()
  const [tabGroups, setTabGroups] = useState<TabGroup[]>([])
  const [isAddingGroup, setIsAddingGroup] = useState<boolean>(false)

  useEffect(() => {
    if (!token) return

    const fetchData = async () => {
      const res = await TablyAPI.getTabGroups(token)

      if (res.status === 200) {
        const result = await res.data
        setTabGroups(result)
      }
    }

    fetchData()
  }, [token])

  const handleAddGroup = (name: string) => {
    const newGroup: TabGroup = {
      id: Date.now(),
      name,
      pages: [],
    }
    setTabGroups((prevTabGroups) => [...prevTabGroups, newGroup])
    setIsAddingGroup(false)
  }

  if (loading)
    return (
      <p className="flex min-h-screen items-center justify-center">
        Loading...
      </p>
    )

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <h1 className="text-4xl font-bold">Tably Dashboard</h1>
      <Button onClick={() => setIsAddingGroup(!isAddingGroup)}>
        New Tab Group
      </Button>
      {isAddingGroup && (
        <AddTabGroup
          onAdd={handleAddGroup}
          onCancel={() => setIsAddingGroup(false)}
          token={token}
        />
      )}
      {tabGroups.length > 0 ? (
        tabGroups.map((tabGroup) => (
          <TabGroupCard key={tabGroup.id} tabGroup={tabGroup} />
        ))
      ) : (
        <p>No tab groups yet. Create your first one!</p>
      )}
    </main>
  )
}
