import styles from './inputField.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

interface IInputField {
	formik: any;
  type?: string;
  label: string;
  requare?: boolean;
  name: string;
  touched?: any;
  errors?: any;
}

export const InputField: React.FC<IInputField> = (
  { formik,
    type,
    label,
    requare,
    name,
    touched,
    errors
  }) => {

	return (
    <div className={cx('input_group')}>
      <label className={cx('input_title')} htmlFor={name}>{label} 
        {requare ? (
          <span className={cx('input_title-necessarily')}>*</span>
        ) : null}
      </label>
      {type ? 
        (
          <>
            <input
              id={name}
              type={type}
              {...formik.getFieldProps({name})}
              className={cx('input_field', `${touched && errors ? 'error' : null}`)}
              placeholder={name === "age" ? "Например '5-6'" : (null)}
            /> 
            {touched && errors ? (
              <div className={cx('input_error')}>{errors}</div>
            ) : null}
          </>
        ) : (
          <textarea
            id={name}
            className={cx('comment')}
            {...formik.getFieldProps({name})}
          ></textarea>
        )  
      }
      
    </div>
	)
}
