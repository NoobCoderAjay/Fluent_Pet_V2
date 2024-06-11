import React from "react";
import { Colors } from "../../theme/Colors";

export type AvatarBadgeContent = number | React.ReactNode;

export interface AvatarBadge {
  content: AvatarBadgeContent;
  color?: Colors;
}
