import { Editor } from './components/Editor'

export function App() {
  return (
    <div className="grid min-h-screen place-content-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-zinc-900">
      <div className="mx-auto grid h-[88vh] w-[1100px] grid-cols-[16rem_1fr] overflow-hidden rounded-xl border border-black/20 bg-white shadow-sm">
        <aside className="border-r border-zinc-100 bg-zinc-50 p-4">
          <div className="group flex w-fit gap-2">
            <button className="h-3 w-3 rounded-full bg-zinc-300 group-hover:bg-red-400" />
            <button className="h-3 w-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
            <button className="h-3 w-3 rounded-full bg-zinc-300 group-hover:bg-green-400" />
          </div>
        </aside>

        <main className="overflow-x-hidden overflow-y-scroll p-4">
          <Editor />
        </main>
      </div>
    </div>
  )
}
