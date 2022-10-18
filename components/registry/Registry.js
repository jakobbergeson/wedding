import BoxRow from '../BoxRow';
import BlurbBox from './BlurbBox';
import RegLink from './RegLink';

export default function Registry() {
  return (
    <BoxRow
      id='registry'
    >
      <BlurbBox
        header={'Registry'}
        paragraph={'Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.'}
      />
      <RegLink />
    </BoxRow>
  );
}
