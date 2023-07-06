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
    name= '',
    phone= '',
    ageNamesake= '',
    genderNamesake= '',
    adult= '',
    children= '',
    packege= '',
    date= '',
    time= '',
    dopServices= [],
  } = req.body;

  await transporter.sendMail({
    from: 'mirDetsva.contact@yandex.ru',
    to: 'mirdetstva.tver@yandex.ru',
    subject: `${name} оставил новую заявка`,
    html: `<div>
      Клиент ${name} оставил заявку, его номер телефона ${phone}<br/>
      ${ageNamesake && `Возраст именниника: ${ageNamesake}, пол: ${genderNamesake}`}
      Количество взрослых: ${adult}<br/>
      Количество детей: ${children}<br/>
      ${packege && `Пакет: ${packege}<br/>`}
      Дата: ${date}<br/>
      Время: ${time}<br/>
      ${dopServices && `Так же клиент выбрал доп сервисы: ${dopServices}`}
    </div>`
  })
  res.status(200).end()
}