export const Person = ({ person }) => {
  return (
    <div className="Person">
      <div className="Person__name">My name is {person.name}</div>
      {person.age && person.age !== null && (
        <div className="Person__age">I am {person.age}</div>
      )}
      {person.sex === 'm' && person.sex !== null && (
        <div className="Person__partner">
          {person.isMarried
            ? `${person.partnerName} is my wife`
            : 'I am not married'}
        </div>
      )}
      {person.sex === 'f' && person.sex !== null && (
        <div className="Person__partner">
          {person.isMarried
            ? `${person.partnerName} is my husband`
            : 'I am not married'}
        </div>
      )}
      {!person.sex ||
        (person.sex === null && (
          <div className="Person__partner">`I am not married`</div>
        ))}
    </div>
  );
};
