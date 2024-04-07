import * as Dialog from '@radix-ui/react-dialog'
import { SquareX } from 'lucide-react'

export function Modal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-zinc-950/90" />
      <Dialog.Content className="fixed left-2/4 top-2/4 flex max-w-2xl -translate-x-2/4 -translate-y-2/4 flex-col space-y-4 rounded-sm bg-violet-500 p-10 shadow-sm">
        <Dialog.Title className="text-2xl font-bold">
          Termos de uso
        </Dialog.Title>
        <Dialog.Description className="text-base ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eaque
          tempore delectus dolor ex, eius omnis asperiores pariatur eos officiis
          iure libero aperiam voluptate natus consectetur obcaecati voluptatum!
          Quia, atque.
        </Dialog.Description>
        <Dialog.Close className="absolute right-4 top-0 ">
          <SquareX />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
