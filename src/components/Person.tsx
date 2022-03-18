import { FC } from 'react';
interface Props {
  name?: string;
  age?: number;
  getName?: (name: string) => string;
}

const Person: FC<Props> = ({ name, age }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{age}</p>
    </div>
  );
};

export default Person;
