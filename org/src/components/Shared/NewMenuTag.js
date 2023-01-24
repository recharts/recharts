import React from 'react';
import './NewMenuTag.scss';

function NewMenuTag({ name, isNew }) {
  return (
    <span className="new-menu-tag-wrapper">
      <span className="new-menu-tag-name">{name}</span>
      {isNew ? <span className="new-menu-tag" /> : null}
    </span>
  );
}

export default NewMenuTag;
