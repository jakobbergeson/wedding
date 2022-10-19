import BoxCol from '../BoxCol';
import ReserveBlurbBox from './ReserveBlurbBox';
import Form from './Form';

export default function Rsvp() {
  return (
    <BoxCol>
      <ReserveBlurbBox
        header={'RSVP'}
        paragraph={'Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.'}
      />
      <Form />
    </BoxCol>
  );
}
