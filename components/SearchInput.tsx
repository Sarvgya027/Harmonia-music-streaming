'use client'

import useDebounce from '@/hooks/useDebouncer';
import { useRouter } from 'next/navigation'
import queryString from 'query-string';
import React, { useEffect, useState } from 'react'
import Input from './Input';

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue
    }

    const url = queryString.stringifyUrl({
      url: '/search',
      query: query
    })

    router.push(url);

  }, [debouncedValue, router])

  return (
    <Input placeholder='Search what you want to listen to' value={value} onChange={(e) => setValue(e.target.value)} />
  )
}

export default SearchInput
