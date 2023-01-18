export default (req, res) => {
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    service: "Yandex",
    port: 465,
    host: "smtp.yandex.ru",
    auth: {
      user: process.env.LOG,
      pass: process.env.PASSWORD,
    },
    secure: true,
  })
  const mailData = {
    from: process.env.LOG,
    to: process.env.MAILTO,
    subject: `${req.body.name} Оставил новую заявка`,
    html: `<div>
      Пользователь ${req.body.name} оставил заявку, его номер телефона +7${req.body.phone}<br/>
      Количество взрослых: ${req.body.adult}<br/>
      Количество детей: ${req.body.children}<br/>
      ${req.body.comment ? `Так же пользователь оставил комментарий: ${req.body.comment}` : ''}
    </div>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err) {console.log(err)}
    else {console.log(info)}
  })
  res.status(200).end()
}