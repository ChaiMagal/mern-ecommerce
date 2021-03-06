import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }
  return (
    <Form
      onSubmit={submitHandler}
      inline
      style={{ maxWidth: '200px' }}
      className='mt-2 mr-5 shadow-sm'
    >
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search...'
        // className='mx-xs-2'
        style={{
          fontSize: '16px',
          width: '75%',
          border: 0,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
      ></Form.Control>
      <Button
        type='submit'
        variant='light'
        className='px-2 ml-auto'
        style={{
          fontSize: '16px',
          width: '25%',
          borderRadius: 0,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        <i className='fas fa-search'></i>
      </Button>
    </Form>
  )
}

export default SearchBox
