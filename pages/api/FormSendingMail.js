export default (req, res) => {
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    service: "Yandex",
    port: 465,
    host: "smtp.yandex.ru",
    auth: {
      user: 'mirDetsva.contact@yandex.ru',
      pass: 'utwuxzzcxbkeihar',
    },
    secure: true,
  })
  const mailData = {
    from: 'mirDetsva.contact@yandex.ru',
    to: 'mirdetstva.tver@yandex.ru',
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
    else {
      res.status(200).end()
      console.log(info)
    }
  })
  
}