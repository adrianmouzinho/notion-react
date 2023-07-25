import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import { lowlight } from 'lowlight'
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
  RxUnderline,
} from 'react-icons/rx'

import 'highlight.js/styles/tokyo-night-dark.css'
import { initialContent } from '../utils/initialContent'
import { BubbleButton } from './BubbleButton'

lowlight.registerLanguage('js', js)

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none',
      },
    },
  })

  if (!editor) {
    return null
  }

  return (
    <>
      <EditorContent
        className="prose prose-violet mx-auto max-w-[700px] py-16 selection:bg-pink-200 prose-p:prose-li:prose-ol:my-0 prose-p:prose-li:prose-ul:my-0"
        editor={editor}
      />

      <FloatingMenu
        className="flex h-[240px] min-w-[320px] flex-col overflow-hidden overflow-y-scroll rounded-md border border-zinc-200 bg-white px-1 py-2 shadow-xl shadow-black/20"
        editor={editor}
        shouldShow={({ state }) => {
          const { $from } = state.selection

          const currentLineText = $from.nodeBefore?.textContent

          return currentLineText === '/'
        }}
      >
        <span className="mb-2 ml-2 mt-1 text-xs font-medium text-zinc-500">
          Basic blocks
        </span>

        <button
          className="flex items-center gap-2 rounded px-2 py-1 hover:bg-zinc-100"
          onClick={() => {
            editor.commands.undo()
            editor.chain().focus().setParagraph().run()
          }}
        >
          <img
            src="https://www.notion.so/images/blocks/text/en-US.png"
            alt="Heading"
            className="w-12 rounded border border-zinc-300"
          />
          <div className="flex flex-col text-left">
            <span className="text-sm">Text</span>
            <span className="text-xs text-zinc-500">
              Just start writting with plain text.
            </span>
          </div>
        </button>

        <button
          className="flex items-center gap-2 rounded px-2 py-1 hover:bg-zinc-100"
          onClick={() => {
            editor.commands.undo()
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }}
        >
          <img
            src="https://www.notion.so/images/blocks/header.57a7576a.png"
            alt="Heading 1"
            className="w-12 rounded border border-zinc-300"
          />
          <div className="flex flex-col text-left">
            <span className="text-sm">Heading 1</span>
            <span className="text-xs text-zinc-500">Big section heading.</span>
          </div>
        </button>

        <button
          className="flex items-center gap-2 rounded px-2 py-1 hover:bg-zinc-100"
          onClick={() => {
            editor.commands.undo()
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }}
        >
          <img
            src="https://www.notion.so/images/blocks/subheader.9aab4769.png"
            alt="Heading 2"
            className="w-12 rounded border border-zinc-300"
          />
          <div className="flex flex-col text-left">
            <span className="text-sm">Heading 2</span>
            <span className="text-xs text-zinc-500">
              Medium section heading.
            </span>
          </div>
        </button>

        <button
          className="flex items-center gap-2 rounded px-2 py-1 hover:bg-zinc-100"
          onClick={() => {
            editor.commands.undo()
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }}
        >
          <img
            src="https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png"
            alt="Heading 3"
            className="w-12 rounded border border-zinc-300"
          />
          <div className="flex flex-col text-left">
            <span className="text-sm">Heading 3</span>
            <span className="text-xs text-zinc-500">
              Small section heading.
            </span>
          </div>
        </button>

        <button
          className="flex items-center gap-2 rounded px-2 py-1 hover:bg-zinc-100"
          onClick={() => {
            editor.commands.undo()
            editor.chain().focus().toggleOrderedList().run()
          }}
        >
          <img
            src="https://www.notion.so/images/blocks/numbered-list.0406affe.png"
            alt="Numbered list"
            className="w-12 rounded border border-zinc-300"
          />
          <div className="flex flex-col text-left">
            <span className="text-sm">Numbered list</span>
            <span className="text-xs text-zinc-500">
              Create a list with numbering.
            </span>
          </div>
        </button>

        <button
          className="flex items-center gap-2 rounded px-2 py-1 hover:bg-zinc-100"
          onClick={() => {
            editor.commands.undo()
            editor.chain().focus().toggleBulletList().run()
          }}
        >
          <img
            src="https://www.notion.so/images/blocks/bulleted-list.0e87e917.png"
            alt="Bulleted list"
            className="w-12 rounded border border-zinc-300"
          />
          <div className="flex flex-col text-left">
            <span className="text-sm">Bulleted list</span>
            <span className="text-xs text-zinc-500">
              Create a simple bulleted list.
            </span>
          </div>
        </button>
      </FloatingMenu>

      <BubbleMenu
        className="divide-x-zinc mb-2 flex divide-x overflow-hidden rounded-md border border-zinc-200 bg-white shadow-xl shadow-black/20"
        editor={editor}
      >
        <BubbleButton
          onClick={() => editor.chain().focus().deleteSelection().run()}
        >
          Text
          <RxChevronDown className="h-4 w-4" />
        </BubbleButton>
        <BubbleButton>
          <RxChatBubble className="h-4 w-4" />
          Comment
        </BubbleButton>
        <div className="flex items-center">
          <BubbleButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            data-active={editor.isActive('bold')}
          >
            <RxFontBold className="h-4 w-4" />
          </BubbleButton>
          <BubbleButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            data-active={editor.isActive('italic')}
          >
            <RxFontItalic className="h-4 w-4" />
          </BubbleButton>
          <BubbleButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            data-active={editor.isActive('underline')}
          >
            <RxUnderline className="h-4 w-4" />
          </BubbleButton>
          <BubbleButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            data-active={editor.isActive('strike')}
          >
            <RxStrikethrough className="h-4 w-4" />
          </BubbleButton>
          <BubbleButton
            onClick={() => editor.chain().focus().toggleCode().run()}
            data-active={editor.isActive('code')}
          >
            <RxCode className="h-4 w-4" />
          </BubbleButton>
        </div>
      </BubbleMenu>
    </>
  )
}
