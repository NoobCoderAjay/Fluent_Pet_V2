import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "../../common";
import { Colors } from "../../theme/Colors";
import { TextSize } from "../../theme/Text";
import { Size } from "../../theme/Size";

interface Props {
  labels: string[];
  disabledLabels: string[];
  value: string;
  compact?: boolean;
  onChange: (label: string) => void;
}

const INNER_BUTTON_HEIGHT = 38;

const FormSelect = ({
  labels,
  value,
  disabledLabels,
  compact = false,
  onChange,
}: Props) => {
  return (
    <View style={styles.container}>
      <Button fullWidth label="" color={Colors.GREY} />
      <View style={styles.buttonsContainer}>
        {labels.map((label) => {
          const isSelected = value === label;
          const backgroundColor = isSelected
            ? Colors.PRIMARY_NEW
            : Colors.GREY_NEW;

          const labelStyle = {
            color: isSelected ? Colors.WHITE : Colors.SECONDARY,
            letterSpacing: 1,
            fontSize: compact
              ? TextSize.caption1.fontSize
              : TextSize.body.fontSize,
          };

          const onPress = () => {
            onChange(label);
          };

          return disabledLabels.includes(label) ? null : (
            <View key={label} style={styles.buttonContainer}>
              <Button
                fullWidth
                height={INNER_BUTTON_HEIGHT}
                color={backgroundColor}
                label={label}
                labelStyle={labelStyle}
                onPress={onPress}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default FormSelect;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 8,
  },
  buttonsContainer: {
    position: "absolute",
    flexDirection: "row",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Size.X2_S,
    borderRadius: 8,
  },
  buttonContainer: {
    flexGrow: 1,
  },
});
