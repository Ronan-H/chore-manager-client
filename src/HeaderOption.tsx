import React, { useState } from 'react';
import './App.css';

type HeaderOptionProps = {
    text: string,
    checked: boolean,
    onChange: (checked: boolean) => void
}

function HeaderOption(props: HeaderOptionProps) {
  const onChange = (event) => {
    props.onChange(event.target.checked)
  };

  return (
    <span className='header-option'>{props.text}: <input type="checkbox" checked={props.checked} onChange={onChange} /></span>
  );
}

export default HeaderOption;
