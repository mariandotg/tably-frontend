export type Page = {
  id: number
  url: string
}

export type TabGroup = {
  id: number
  name: string
  pages: Page[]
}
