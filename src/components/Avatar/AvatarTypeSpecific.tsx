import React from "react";

import Avatar, { AvatarProps } from "./Avatar";
import { JournalIcon, QuestionMarkIcon } from "../../assets/icons";
import {
  Pusher,
  isPusherBase,
  isPusherEventNote,
} from "../../Home/model/pusher";
import { Colors } from "../../theme/Colors";
import { SizeV2 } from "../../theme/Size";
import { getPusherInitials } from "../helpers/getPusherInitials";

interface AvatarTypeSpecificProps extends AvatarProps {
  name: string;
  pushers: Pusher[];
}

const AvatarTypeSpecific = (props: AvatarTypeSpecificProps) => {
  if (isPusherBase(props.name)) {
    return <Avatar {...props} name={null} icon={<QuestionMarkIcon />} />;
  }

  if (isPusherEventNote(props.name)) {
    return (
      <Avatar
        backgroundColor={Colors.PRIMARY_TRANSPARENT}
        {...props}
        name={null}
        icon={<JournalIcon width={SizeV2.XL} />}
      />
    );
  }

  return (
    <Avatar
      {...props}
      name={
        props.pushers
          ? getPusherInitials(props.name, props.pushers)
          : props.name
      }
    />
  );
};

export default AvatarTypeSpecific;
