import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from '../../styles/Form.module.css';

export default function Form() {

  const [attending, setAttending] = useState(false);
  const [twoGuests, setTwoGuests] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      attendance: '',
      guests: '',
      firstNamePlusOne: '',
      lastNamePlusOne: '',
    }
  });

  const onSubmit = data => console.log(data);
  console.log("ERRORS", errors);

  // const onSubmit = data =>
  //   fetch('/api/contact', {
  //     method: 'post',
  //     body: JSON.stringify(data),
  //   })
  //     .then(res => {
  //       if (res.status === 200) {
  //         setSubmitted(true);
  //         success();
  //       } else {
  //         fail();
  //       }
  //     });

  return (
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
          <p>First Name</p>
          <input type="text" placeholder="First name" {...register("firstName", { required: true, maxLength: 80 })} />
        </div>
        <div
          className={styles.inputBox}
        >
          <p>Last Name</p>
          <input type="text" placeholder="Last name" {...register("lastName", { required: true, maxLength: 100 })} />
        </div>
      </div>
      <div
        className={styles.inputBox}
      >

        <p>Email Adress</p>
        <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      </div>


      <p>Attendance</p>
      <div
        className={styles.nameBox}
      >
        <div
          className={styles.radioWrapper}
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
          className={styles.radioWrapper}
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
            Number of Guests
          </p>
          <div
            className={`${styles.nameBox} ${styles.dropShow}`}
          >
            <div
              className={styles.radioWrapper}
            >
              <input
                {...register("guests", { required: true })}
                type="radio"
                value="One"
                onClick={() => { setTwoGuests(false); }}
              />
              One
            </div>
            <div
              className={styles.radioWrapper}
            >
              <input
                {...register("guests", { required: true })}
                type="radio"
                value="Two"
                onClick={() => { setTwoGuests(true); }}
              />
              Two
            </div>
          </div>
        </>
      }
      {
        attending && twoGuests &&
        <div
          className={`${styles.nameBox} ${styles.dropShow}`}
        >
          <div
            className={styles.inputBox}
          >
            <p
              className={styles.fade}
            >
              Plus One's First Name
            </p>
            <input type="text" placeholder="First name" {...register("firstNamePlusOne", { required: true, maxLength: 80 })} />
          </div>
          <div
            className={styles.inputBox}
          >
            <p
              className={styles.fade}
            >
              Plus One's Last Name
            </p>
            <input type="text" placeholder="Last name" {...register("lastNamePlusOne", { required: true, maxLength: 100 })} />
          </div>
        </div>
      }
      <input type="submit" />
    </form>
  );
}
