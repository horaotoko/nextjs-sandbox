 // Link.react.js
import React, {useEffect} from 'react';
import { useRouter } from 'next/router'
import NextLink from 'next/link';

const Link = () => {
  const router = useRouter();
  const { id } = router?.query;
  let userId = ""

  if (id) {
    userId = id;
  }

  useEffect(() => {
    console.log(id);
  }, [id])

  return (
    <NextLink href="" onClick={() => {console.log('clicked')}}>
      <a href="">ID is {userId}</a>
    </NextLink>
  );
};

export default Link;