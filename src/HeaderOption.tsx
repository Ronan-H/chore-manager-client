import React, { useState } from 'react';
import './App.css';

type HeaderOptionProps = {
    text: string,
    defaultChecked: boolean,
    onChange: (checked: boolean) => void
}

function HeaderOption(props: HeaderOptionProps) {
    const [checked, setChecked] = useState(props.defaultChecked);

    const onChange = () => {
        props.onChange(checked);
        setChecked(val => { return !val });
    };

  return (
    <span>{props.text}: <input type="checkbox" checked={checked} onChange={onChange} /></span>
  );
}

export default HeaderOption;
