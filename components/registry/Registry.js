import BoxRow from '../BoxRow';
import BlurbBox from './BlurbBox';
import RegLink from './RegLink';

export default function Registry({
  children
}) {
  return (
    <div
      id='registry'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {children}
      <BoxRow>
        <BlurbBox
          header={'Registry'}
          paragraph={'Your company is all we desire on our special day. However, if you insist on bestowing us with a gift, feel free to visit our Amazon registry or donate to our Venmo. Thanks in advance :3!'}
        />
        <RegLink />
      </BoxRow>
    </div>
  );
}
