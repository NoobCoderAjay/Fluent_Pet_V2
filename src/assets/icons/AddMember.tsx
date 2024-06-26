import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { Colors } from 'src/theme/Colors';

type Props = {
  color: Colors;
  size: number;
};

const AddMember: React.FC<Props> = ({ color, size = 20 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 19 18" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 2C8.103 2 9 2.897 9 4C9 5.103 8.103 6 7 6C5.897 6 5 5.103 5 4C5 2.897 5.897 2 7 2ZM7 8C9.206 8 11 6.206 11 4C11 1.794 9.206 0 7 0C4.794 0 3 1.794 3 4C3 6.206 4.794 8 7 8ZM7 10C3.141 10 0 13.14 0 17C0 17.552 0.447 18 1 18C1.553 18 2 17.552 2 17C2 14.243 4.243 12 7 12C9.757 12 12 14.243 12 17C12 17.552 12.447 18 13 18C13.553 18 14 17.552 14 17C14 13.14 10.859 10 7 10ZM17 3H18C18.55 3 19 3.45 19 4C19 4.55 18.55 5 18 5H17V6C17 6.55 16.55 7 16 7C15.45 7 15 6.55 15 6V5H14C13.45 5 13 4.55 13 4C13 3.45 13.45 3 14 3H15V2C15 1.45 15.45 1 16 1C16.55 1 17 1.45 17 2V3Z"
        fill={color}
      />
    </Svg>
  );
};

export default AddMember;
