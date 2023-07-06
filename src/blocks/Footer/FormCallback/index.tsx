import { useState } from 'react';
import styles from './formCallback.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Image, Spinner } from '@components';
import { useFormik } from 'formik';
import { CalendarComponent } from './CalendarComponent';
import { InputField } from './InputField';
import { PackegeList } from './PackegeList';
import { TimeComponent } from './TimeComponent';
import { DopService } from './DopService';

interface IFormCallback {
	showForm: boolean;
  setShowForm: any;
}

export const FormCallback: React.FC<IFormCallback> = ({ showForm, setShowForm }) => {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validate = (values: any) => {
    const errors = {};
    if (!values.name) {
      // @ts-ignore
      errors.name = 'Пожалуйста, введите Ваше имя';
    } else if (!/[а-яё]/i.test(values.name)) {
      // @ts-ignore
      errors.name = 'Некорректное имя'
    }

    if (!values.phone) {
      // @ts-ignore
      errors.phone = 'Пожалуйста, введите номер телефона'
    } else if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i.test(values.phone)) {
      // @ts-ignore
      errors.phone = 'Некорректный номер телефона'
    }

    // if (!values.adult) {
    //   // @ts-ignore
    //   errors.adult = 'Пожалуйста, введите количество взрослых'
    // } else if (!/^([0-9]{1,2})?$/i.test(values.adult) || values.adult >= 11) {
    //   // @ts-ignore
    //   errors.adult = 'Введены некорректные данные'
    // }

    if (!values.children) {
      // @ts-ignore
      errors.children = 'Пожалуйста, введите количество детей'
    } else if (!/^([0-9]{1,2})?$/i.test(values.children)) {
      // @ts-ignore
      errors.children = 'Введены некорректные данные'
    }

    // if (!values.age) {
    //   // @ts-ignore
    //   errors.age = 'Пожалуйста, введите возраст детей'
    // }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      ageNamesake: '',
      genderNamesake: '',
      adult: '',
      children: '',
      packege: '',
			date: '',
      time: '',
      dopServices: [],
    },
    validate,
    onSubmit: (values, {resetForm}) => {
      console.log(values)
      setModal(true)
      setIsLoading(true)
      fetch(`api/FormSendingMail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then((res) => {
        if (res.status === 200) {
          resetForm({ values: {
            name: '',
            phone: '',
            ageNamesake: '',
            genderNamesake: '',
            adult: '',
            children: '',
            packege: '',
            date: '',
            time: '',
            dopServices: [],
          }})
          setIsLoading(false)
        }
      }).catch(error => {
        console.log(error)
        alert("попробуйте позже")
        setIsLoading(false)
      })
    },
  })

	return (
		<section className={cx('wrapper', { ['active']: showForm })}>
      <div className={cx('main-block')}>
        <div className={cx('close')} onClick={() => setShowForm(false)}>
          <Image
            wrapperClassName={cx('img')}
            src="/assets/close.png"
            width="40"
            height="40"
            alt="close"
          />
        </div>
        <div className={cx('container')}>
          <h2 className={cx('title')}>Оставьте контактные данные для&nbsp;связи</h2>
          <div className={cx('wrap')}>
            <form className={cx('form')} onSubmit={formik.handleSubmit}>
              <InputField
                formik={formik}
                type={'text'}
                label={"Ваше Имя"}
                requare
                name={"name"}
                touched={formik.touched.name}
                errors={formik.errors.name}
              />
              <InputField
                formik={formik}
                type={'tel'}
                label={"Телефон"}
                requare
                name={"phone"}
                touched={formik.touched.phone}
                errors={formik.errors.phone}
              />
              <InputField
                formik={formik}
                type={'number'}
                label={"Возраст именниника"}
                name={"ageNamesake"}
              />
              <InputField
                formik={formik}
                type={'text'}
                label={"Пол именниника"}
                name={"genderNamesake"}
              />
              <InputField
                formik={formik}
                type={'number'}
                label={"Количество взрослых"}
                name={"adult"}  
              />
              <InputField
                formik={formik}
                type={'number'}
                label={"Количество детей"}
                requare
                name={"children"}
                touched={formik.touched.children}
                errors={formik.errors.children}
              />
              {/* <InputField
                formik={formik}
                type={'text'}
                label={"Возраст детей"}
                requare
                name={"age"}
                touched={formik.touched.age}
                errors={formik.errors.age}
              /> */}
              <PackegeList formik={formik} />
              <div className={cx('line')}></div>
              <div className={cx('dataTime')}>
                <CalendarComponent formik={formik}/>
                <div className={cx('line')}></div>
                <TimeComponent formik={formik}/>  
              </div>
              <div className={cx('line')}></div>
              <DopService formik={formik} />
              <div className={cx('line')}></div>
              <button type="submit" className={cx('button')}>Отправить</button>
            </form >
            {/* <div className={cx('image-wrap')}>
              <Image
                wrapperClassName={cx('image')}
                src="/assets/form/img.png"
                width="500"
                height="450"
                alt="print"
              />
            </div> */}
          </div>
          <div className={cx('modal', `${modal ? 'modal-active' : null}`)}>
            <div className={cx('modal-wrap')}>
              {
                isLoading ? (
                  <Spinner />
                ) : (
                  <>
                    <h2 className={cx('modal__title')}>Данные успешно отправлены</h2>
                    <button className={cx('modal__btn')} onClick={() => setModal(false)}>ок</button>
                  </>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
	)
}
