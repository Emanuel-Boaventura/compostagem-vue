<script>
export default {
  setup() {
    const links = [
      { href: 'https://www.linkedin.com/in/emanuelboaventura/', label: 'LinkedIn' },
      { href: 'https://boaventura.vercel.app/', label: 'Portfólio' },
      { href: 'https://github.com/Emanuel-Boaventura', label: 'Github' },
    ]
    return { links }
  },
}
</script>

<template>
  <main class="container">
    <h1>QUEM SOU?</h1>

    <p>Olá, meu nome é Emanuel Boaventura, sou o desenvolvedor do site "COMPOSTAGEM".</p>

    <p>
      Essa pagina foi criada para a atividade extensionista do semestre vigente da faculdade
      Cruzeiro do Sul Virtual. Ele tem como objetivo ensinar a comunidade local e todos a que aqui
      acessam como descartar corretamente resíduos orgânicos e como fazer uma composteira caseira
      para isso.
    </p>
    <p>
      O site foi criado utilizando
      <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js 3</a> e
      hospedado na
      <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a> para o
      acesso publico. O repositório do projeto pode ser acessado
      <a
        href="https://github.com/Emanuel-Boaventura/compostagem-vue"
        target="_blank"
        rel="noopener noreferrer"
        >clicando aqui.</a
      >
    </p>

    <p>Convido a acessar também o meu LinkedIn e portfolio:</p>

    <ul v-for="link in links" :key="link">
      <li>
        <a :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
      </li>
    </ul>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

ul {
  list-style-position: inside;
}

li a,
a {
  color: #006400;
  font-weight: 700;
}

li:hover,
a:hover {
  text-decoration: underline;
  text-decoration-color: #006400;
}
</style>
