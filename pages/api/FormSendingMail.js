import nodemailer from 'nodemailer'

export default async (req, res) => {
  require('dotenv').config()

  const transporter = nodemailer.createTransport({
    service: "Yandex",
    port: 465,
    secure: true,
    host: "smtp.yandex.ru",
    auth: {
      user: process.env.LOG,
      pass: process.env.PASSWORD,
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
    from: process.env.LOG,
    to: process.env.MAILTO,
    subject: `${name} оставил новую заявка`,
    html: `<div>
      Пользователь ${name} оставил заявку, его номер телефона +7${phone}<br/>
      Количество взрослых: ${adult}<br/>
      Количество детей: ${children}<br/>
      ${comment ? `Так же пользователь оставил комментарий: ${comment}` : ''}
    </div>`
  })
  res.status(200).end()
}