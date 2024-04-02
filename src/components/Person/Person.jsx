export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let personStatus;

  if (isMarried) {
    personStatus =
      sex === 'f'
        ? `${partnerName} is my husband`
        : `${partnerName} is my wife`;
  } else {
    personStatus = 'I am not married';
  }

  return (
    <div className="Person">
      <div className="Person__name">My name is {name}</div>
      {age && age !== null && <div className="Person__age">I am {age}</div>}
      <div className="Person__partner">{personStatus}</div>
    </div>
  );
};
