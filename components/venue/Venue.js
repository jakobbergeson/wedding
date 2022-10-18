import MessageBox from './MessageBox';
import Picture from './Picture';
import BoxRow from '../BoxRow';

export default function Venue() {
  return (
    <BoxRow
      id='venue'
    >
      <MessageBox />
      <Picture />
    </BoxRow>
  );
}
