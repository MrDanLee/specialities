const getContent = (specialty, users) => {
  const template =
  `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${specialty}</title>
      </head>
      <body>
        <a href="/">HOME</a>
        <a href="/developers">Developers</a>
        <a href="/ventas">Ventas</a>
        <a href="/qas">QAs</a>
        <a href="/marketing">Marketing</a>
        <h1>${specialty}</h1>
        <p>Número de personas: ${users.length}</p>
        <ul>
          ${users.map(user => `<li><h2>Nombre:${user.name}</h2><p>${user.age}</p></li>`).join("")}
        </ul>
      </body>
    </html>
  `
  return template
}

  module.exports = getContent