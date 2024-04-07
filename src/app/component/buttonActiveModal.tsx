import * as Dialog from '@radix-ui/react-dialog'

export function ButtonActiveModal() {
  return (
    <Dialog.Trigger asChild>
      <button
        type="button"
        className="text-violet-500 transition-colors hover:text-violet-700"
      >
        Termos de uso
      </button>
    </Dialog.Trigger>
  )
}
