import React from "react";
import { Path, Svg } from "react-native-svg";
import { Colors } from "../../theme/Colors";

type Props = {
  color?: Colors;
  width?: number;
};

const QuestionMark: React.FC<Props> = ({
  color = Colors.WHITE,
  width = 20,
}) => {
  return (
    <Svg width={width} height="28" viewBox="0 0 18 28" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.99935 0.666992C13.5943 0.666992 17.3327 4.40533 17.3327 9.00033C17.3327 13.0237 14.4643 16.392 10.666 17.1637V19.0003C10.666 19.922 9.92102 20.667 8.99935 20.667C8.07768 20.667 7.33268 19.922 7.33268 19.0003V15.667C7.33268 14.7453 8.07768 14.0003 8.99935 14.0003C11.756 14.0003 13.9993 11.757 13.9993 9.00033C13.9993 6.24366 11.756 4.00033 8.99935 4.00033C6.24268 4.00033 3.99935 6.24366 3.99935 9.00033C3.99935 9.92199 3.25435 10.667 2.33268 10.667C1.41102 10.667 0.666016 9.92199 0.666016 9.00033C0.666016 4.40533 4.40435 0.666992 8.99935 0.666992ZM7.33268 25.667C7.33268 24.7453 8.07768 24.0003 8.99935 24.0003C9.92101 24.0003 10.666 24.7453 10.666 25.667C10.666 26.5887 9.92101 27.3337 8.99935 27.3337C8.07768 27.3337 7.33268 26.5887 7.33268 25.667Z"
        fill={color}
      />
    </Svg>
  );
};

export default QuestionMark;