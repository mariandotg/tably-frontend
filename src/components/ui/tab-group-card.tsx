import { TabGroup } from '@/models/tab-group'

function TabGroupCard({ tabGroup }: { tabGroup: TabGroup }) {
  return (
    <div className="flex flex-col gap-4 p-4 border-slate-400 border-1 rounded-sm">
      <span>{tabGroup.name}</span>
      <div>
        {tabGroup.pages.map((page) => (
          <a href={page.url} key={page.id}>
            {page.url}
          </a>
        ))}
      </div>
    </div>
  )
}

export { TabGroupCard }
