'use client'

import type React from 'react'

import { useState } from 'react'
import { Check, FolderPlus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { TablyAPI } from '@/lib/api/tably-api'

interface AddTabGroupProps {
  onAdd: (name: string) => void
  onCancel: () => void
  token: string | null
}

export function AddTabGroup({ onAdd, onCancel, token }: AddTabGroupProps) {
  const [name, setName] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!token) return

    if (name.trim()) {
      onAdd(name.trim())
      setName('')
    }

    const res = await TablyAPI.createTabGroup(name, token)
    if (res.status === 200) {
      const result = await res.data
      console.log(result)
    }
  }

  return (
    <Card className="border-dashed animate-in fade-in-0 zoom-in-95 duration-200">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center">
              <FolderPlus className="mr-2 h-5 w-5 text-primary" />
              <h3 className="text-lg font-medium">New Tab Group</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Enter a name for your new tab group
            </p>
          </div>
          <Input
            placeholder="Tab Group Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
            autoFocus
          />
          <div className="flex items-center justify-end gap-2">
            <Button type="button" variant="ghost" size="sm" onClick={onCancel}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button type="submit" size="sm" disabled={!name.trim()}>
              <Check className="mr-2 h-4 w-4" />
              Create Group
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
