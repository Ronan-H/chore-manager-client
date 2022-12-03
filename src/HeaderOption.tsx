import React, { useState, useEffect } from 'react';
import './App.css';

type HeaderOptionProps = {
    text: string,
    checked: boolean,
    onChange: (checked: boolean) => void
}

function HeaderOption(props: HeaderOptionProps) {
  const [checked, setChecked] = useState(props.checked);

  useEffect(() => {
    props.onChange(checked);
  }, [checked]);

  return (
    <span className={`header-option header-option-${checked ? 'checked' : 'unchecked'}`} onClick={() => setChecked(val => !val)}>{props.text}</span>
  );
}

export default HeaderOption;
