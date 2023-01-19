import nodemailer from 'nodemailer'

export default async (req, res) => {
  require('dotenv').config()

  const transporter = nodemailer.createTransport({
    service: "Yandex",
    port: 465,
    secure: true,
    host: "smtp.yandex.ru",
    auth: {
      user: 'mirDetsva.contact@yandex.ru',
      pass: 'utwuxzzcxbkeihar',
    },
  })

  const {
    name = '',
    phone = '',
    adult = '',
    children = '',
    comment = ''
  } = req.body

  await transporter.sendMail({
    from: 'mirDetsva.contact@yandex.ru',
    to: 'mirdetstva.tver@yandex.ru',
    subject: `${name} оставил новую заявка`,
    html: `<div>
      Пользователь ${name} оставил заявку, его номер телефона ${phone}<br/>
      Количество взрослых: ${adult}<br/>
      Количество детей: ${children}<br/>
      ${comment ? `Так же пользователь оставил комментарий: ${comment}` : ''}
    </div>`
  })
  res.status(200).end()
}