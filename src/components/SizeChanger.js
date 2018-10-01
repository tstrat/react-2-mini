import React from 'react';

export default function SizeChanger(props) {
  return (
    <select className="dropDownContainer"
      value={props.fontSize}
      onChange={e => props.update(e.target.value)}
      disabled={!props.allowEdit}>
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
      <option value="20"> 20 </option>
    </select>
  )
}