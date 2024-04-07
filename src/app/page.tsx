import Image from 'next/image'
import type { Metadata } from 'next'

import LogoBlog from '@/assets/logo.svg'
import LogoGit from '@/assets/LogoGit.svg'

export const metadata: Metadata = {
  title: 'Desenvolvendo uma web acessível ',
}

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen  max-w-screen-max flex-col px-9 pb-4 pt-9">
      <header className="flex items-center justify-between">
        <Image src={LogoBlog} alt="Rocket Blog" className="w-36" />

        <nav>
          <ul>
            <li>
              <a href="https://github.com/okayosilva" title="Github-link">
                <Image src={LogoGit} alt="Github" />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto mt-12 flex max-w-3xl flex-1 flex-col space-y-10">
        <header className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-zinc-200">
            Desenvolvendo uma web acessível
          </h1>
          <p className="text-zinc-400">
            Protocolos e diretrizes orientam o desenvolvimento de tecnologias
            acessíveis, mas é preciso olhar para além de tudo isso
          </p>
        </header>

        <article className="flex flex-col gap-4 text-lg text-zinc-200">
          <p className="">
            Acessibilidade se tornou uma tendência no ecossistema tecnológico
            mundial, diversas empresas passaram a adotar critérios de
            desenvolvimento acessível em seus projetos — por uma questão prática
            ou por exigências legais —, no entanto, ainda faltam recursos e
            consciência do que de fato é inclusivo na internet para pessoas com
            deficiências.
          </p>
          <p>
            Para abordar este tema, é preciso ter uma perspectiva cultural sobre
            o assunto, não encará-lo apenas na ótica técnica ou prática.
            Acessibilidade passou a ser vista como um desafio (ou tendência)
            para o ecossistema tech e não como filosofia natural daquilo que
            condiz com os princípios básicos da web: acessível para humanos. Tal
            afirmação está na W3C.
          </p>

          <h3 className="mt-4 text-4xl font-bold">
            O que é acessibilidade, afinal?
          </h3>
          <div className="mt-4 flex justify-end">
            <a
              target="_blank"
              className="w-fit rounded-sm bg-violet-500 px-4 py-2 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-violet-800"
              href="https://blog.rocketseat.com.br/desenvolvendo-uma-web-acessivel/"
            >
              <span>Saiba Mais</span>
            </a>
          </div>
        </article>
      </main>

      <footer className="mt-8 flex items-center justify-between">
        <Image src={LogoBlog} alt="Rocket Blog" className="w-16" />
        <a
          href="/"
          className="text-violet-500 transition-colors hover:text-violet-700"
        >
          Termos de uso
        </a>
      </footer>
    </div>
  )
}
