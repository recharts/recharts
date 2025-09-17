import './NewMenuTag.scss';

type NewMenuTagProps = {
  name: string;
  isNew: boolean;
};

function NewMenuTag({ name, isNew }: NewMenuTagProps) {
  return (
    <span className="new-menu-tag-wrapper">
      <span className="new-menu-tag-name">{name}</span>
      {isNew ? <span className="new-menu-tag" /> : null}
    </span>
  );
}

export default NewMenuTag;
