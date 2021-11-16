import { withStart } from 'effector-next';
import { useEvent, useStore } from 'effector-react';
import Link from 'next/link';
import { $data, buttonClicked, pageLoaded } from '../models';

const enhance = withStart(pageLoaded);

function HomePage() {
  const data = useStore($data);
  const handleClick = useEvent(buttonClicked);

  return (
    <div>
      <h1>Server Page</h1>
      <h2>Store state: {JSON.stringify(data)}</h2>
      <button onClick={handleClick}>click to change store state</button>
      <br />
      <br />
      <Link href="/static">
        <a>to static page</a>
      </Link>
    </div>
  );
}

export default enhance(HomePage);
