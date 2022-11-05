import BoxCol from '../BoxCol';
import ReserveBlurbBox from './ReserveBlurbBox';
import Form from './Form';

export default function Rsvp({
  children
}) {
  return (
    <BoxCol
      id='rsvp'
    >
      {children}
      <ReserveBlurbBox
        header={'RSVP'}
        paragraph={`Please RSVP by December 31st, 2022 11:59 p.m PST. The sooner the better! If you have special requests or additional guests please email us at `}
      />
      <Form />
    </BoxCol>
  );
}
