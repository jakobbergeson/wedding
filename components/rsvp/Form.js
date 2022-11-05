import { useForm } from 'react-hook-form';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styles from '../../styles/Form.module.css';

export default function Form() {

  const [attending, setAttending] = useState(false);

  const [guests, setGuests] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const success = () => toast.success('RSVP Sent!');

  const fail = () => toast.error('An error occured!');

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      attendance: '',
      guests: '',
      firstNamePlusOne: '',
      lastNamePlusOne: '',
      song: '',
    }
  });

  const onSubmit = data =>
    fetch('/api/Form', {
      method: 'post',
      body: JSON.stringify(data),
    })
      .then(res => {
        if (res.status === 200) {
          setSubmitted(true);
          success();
        } else {
          console.log(res.status);
          fail();
        }
      });

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            iconTheme: {
              primary: 'var(--primary)',
              secondary: 'var(--accent)',
            },
            style: {
              color: 'var(--primary)',
              background: 'var(--link)',
            },
          },
          error: {
            iconTheme: {
              primary: 'var(--primary)',
              secondary: 'rgb(235, 159, 159)',
            },
            style: {
              color: 'white',
              background: 'rgb(235, 159, 159)',
            },
          },
        }}
      />
      {
        !submitted ?
          <form
            className={styles.container}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div
              className={styles.nameBox}
            >
              <div
                className={styles.inputBox}
              >
                <p>
                  <strong>*</strong>
                  First Name
                </p>
                {errors.firstName && <p className={`${styles.errorMes} ${styles.dropShow}`}>⚠ This field is required</p>}
                <input
                  type="text"
                  placeholder="First name"
                  {...register("firstName", { required: true, maxLength: 80 })}
                  className={errors.firstName && `${styles.error}`}
                />
              </div>
              <div
                className={styles.inputBox}
              >
                <p>
                  <strong>*</strong>
                  Last Name
                </p>
                {errors.lastName && <p className={`${styles.errorMes} ${styles.dropShow}`}>⚠ This field is required</p>}
                <input
                  type="text"
                  placeholder="Last name"
                  {...register("lastName", { required: true, maxLength: 100 })}
                  className={errors.lastName && `${styles.error}`}
                />
              </div>
            </div>
            <div
              className={styles.inputBox}
            >

              <p>
                <strong>*</strong>
                Email Adress
              </p>
              {errors.email?.type === 'pattern' && <p className={`${styles.errorMes} ${styles.dropShow}`}>⚠ A valid email address is required</p>}
              {errors.email?.type === 'required' && <p className={`${styles.errorMes} ${styles.dropShow}`}>⚠ This field is required</p>}
              <input
                type="text"
                placeholder="Email"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                className={errors.email && `${styles.error}`}
              />
            </div>


            <p>
              <strong>*</strong>
              Attendance
            </p>
            {errors.attendance && <p className={`${styles.errorMes} ${styles.dropShow}`}>⚠ This field is required</p>}
            <div
              className={styles.nameBox}
            >
              <div
                className={errors.attendance ? `${styles.radioWrapper} ${styles.error}` : `${styles.radioWrapper}`}
              >
                <input
                  {...register("attendance", { required: true })}
                  type="radio"
                  value="Accept with pleasure"
                  onClick={() => { setAttending(true); }}
                />
                Accept with pleasure
              </div>
              <div
                className={errors.attendance ? `${styles.radioWrapper} ${styles.error}` : `${styles.radioWrapper}`}
              >
                <input
                  {...register("attendance", { required: true })}
                  type="radio"
                  value="Regretfully decline"
                  onClick={() => { setAttending(false); }}
                />
                Regretfully Decline
              </div>
            </div>
            {
              attending &&
              <>
                <p
                  className={styles.fade}
                >
                  <strong>*</strong>
                  Number of Guests
                </p>
                {errors.guests && <p className={`${styles.errorMes} ${styles.dropShow}`}>⚠ This field is required</p>}
                <div
                  className={`${styles.nameBox} ${styles.dropShow}`}
                >
                  <div
                    className={errors.guests ? `${styles.radioWrapper} ${styles.error}` : `${styles.radioWrapper}`}

                  >
                    <input
                      {...register("guests", { required: true })}
                      type="radio"
                      value="One"
                      onClick={() => { setGuests(1); }}
                    />
                    One
                  </div>
                  <div
                    className={errors.guests ? `${styles.radioWrapper} ${styles.error}` : `${styles.radioWrapper}`}
                  >
                    <input
                      {...register("guests", { required: true })}
                      type="radio"
                      value="Two"
                      onClick={() => { setGuests(2); }}
                    />
                    Two
                  </div>
                </div>
              </>
            }
            {
              attending && guests === 2 &&
              <div
                className={`${styles.nameBox} ${styles.dropShow}`}
              >
                <div
                  className={styles.inputBox}
                >
                  <p
                    className={styles.fade}
                  >
                    <strong>*</strong>
                    `Plus One's First Name`
                  </p>
                  {errors.firstNamePlusOne && <p className={`${styles.errorMes} ${styles.dropShow}`}>⚠ This field is required</p>}
                  <input
                    type="text"
                    placeholder="First name"
                    {...register("firstNamePlusOne", { required: true, maxLength: 80 })}
                    className={errors.firstNamePlusOne && `${styles.error}`}
                  />
                </div>
                <div
                  className={styles.inputBox}
                >
                  <p
                    className={styles.fade}
                  >
                    <strong>*</strong>
                    `Plus One's Last Name`
                  </p>
                  {errors.lastNamePlusOne && <p className={`${styles.errorMes} ${styles.dropShow}`}>⚠ This field is required</p>}
                  <input
                    type="text"
                    placeholder="Last name"
                    {...register("lastNamePlusOne", { required: true, maxLength: 100 })}
                    className={errors.lastNamePlusOne && `${styles.error}`}
                  />
                </div>
              </div>
            }
            {
              attending && guests &&
              < div
                className={`${styles.inputBox} ${styles.dropShow}`}
              >

                <p>Requested Song</p>
                <input type="text" placeholder="Song" {...register("song", { required: false, maxLength: 80 })} />
              </div>
            }
            <input
              type="submit"
            />
          </form >
          :
          <p
            className={`${styles.thankYou} ${styles.dropShow}`}
          >
            Thank you!
          </p>
      }
    </>
  );
}
