import { useState, useEffect } from 'react';
import styles from './formCallback.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Image, Spinner } from '@components';
import {  useFormik } from 'formik';

export const FormCallback: React.FC = () => {

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

    if (!values.adult) {
      // @ts-ignore
      errors.adult = 'Пожалуйста, введите количество взрослых'
    } else if (!/^([0-9]{1,2})?$/i.test(values.adult) || values.adult >= 11) {
      // @ts-ignore
      errors.adult = 'Введены некорректные данные'
    }

    if (!values.children) {
      // @ts-ignore
      errors.children = 'Пожалуйста, введите количество детей'
    } else if (!/^([0-9]{1,2})?$/i.test(values.children)) {
      // @ts-ignore
      errors.children = 'Введены некорректные данные'
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      adult: '',
      children: '',
      comment: '',
    },
    validate,
    onSubmit: (values, {resetForm}) => {
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
            adult: '',
            children: '',
            comment: '',
          }})
          setIsLoading(false)
        }
      }).catch(error => {
        console.log(error)
      })
    },
  })

  useEffect(() => {
		modal ? ((document.body.style.overflow = 'hidden'))
			: ((document.body.style.overflow = ''));
  })

	return (
		<section className={cx('container')}>
      <h2 className={cx('title')}>Оставьте контактные данные для связи</h2>
      <div className={cx('wrap')}>
        <form className={cx('from')} onSubmit={formik.handleSubmit}>
          <div className={cx('input_group')}>
            <label className={cx('input_title')} htmlFor='name'>Ваше Имя <span className={cx('input_title-necessarily')}>*</span></label>
            <input
              id="name"
              name='name'
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={cx('input_field', `${formik.touched.name && formik.errors.name ? 'error' : null}`)}
            /> 
            {formik.touched.name && formik.errors.name ? (
              <div className={cx('input_error')}>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className={cx('input_group')} >
            <label className={cx('input_title')} htmlFor='phone'>Телефон <span className={cx('input_title-necessarily')}>*</span></label>
            <div className={cx('phone-wrap')}>
              {/* <span className={cx('input_field-phone')}>+7</span> */}
              <input
                id="phone"
                name='phone'
                type='tel'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className={cx('input_field', 'input-phone', `${formik.touched.phone && formik.errors.phone ? 'error' : null}`)}
              />
            </div>
            {formik.touched.phone && formik.errors.phone ? (
              <div className={cx('input_error')}>{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className={cx('input_group')} >
            <label className={cx('input_title')} htmlFor='adult'>Количество взрослых <span className={cx('input_title-necessarily')}>*</span></label>
            <input
              id="adult"
              type='number'
              name='adult'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.adult}
              className={cx('input_field', `${formik.touched.adult && formik.errors.adult ? 'error' : null}`)}
            />
            {formik.touched.adult && formik.errors.adult ? (
              <div className={cx('input_error')}>{formik.errors.adult}</div>
            ) : null}
          </div>
          <div className={cx('input_group')} >
            <label className={cx('input_title')} htmlFor='children'>Количество детей <span className={cx('input_title-necessarily')}>*</span></label>
            <input
              id="children"
              type='number'
              name='children'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.children}
              className={cx('input_field', `${formik.touched.children && formik.errors.children ? 'error' : null}`)}
            />
            {formik.touched.children && formik.errors.children ? (
              <div className={cx('input_error')}>{formik.errors.children}</div>
            ) : null}
          </div>
          <div className={cx('input_group')} >
            <label className={cx('input_title')} htmlFor='comment'>Есть еще пожелания? Оставьте коментарий ниже</label>
            <textarea
              id="comment"
              className={cx('comment')}
              name="comment"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.comment}
            ></textarea>
          </div>
          <button type="submit" className={cx('button')}>Отправить</button>
        </form >
        <div className={cx('image-wrap')}>
          <Image
            wrapperClassName={cx('image')}
            src="./assets/form/img.png"
            width="500"
            height="450"
            alt="print"
          />
        </div>
        
      </div>
      <div className={cx('modal', `${modal ? 'modal-active': null}`)}>
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
    </section>
	)
}
