import { useStore } from 'effector-react';
import Link from 'next/link';
import React from 'react';
import { $data } from '../models';

export default function StaticOptimizedPage() {
  const data = useStore($data);
  console.log(1);

  return (
    <div>
      <h1>Static Page</h1>
      <h2>Store state: {JSON.stringify(data)}</h2>
      <br />
      <Link href="/test">
        <a href="/">to server page</a>
      </Link>
    </div>
  );
}
