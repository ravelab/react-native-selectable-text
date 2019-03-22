import React from "react";
import { Text, requireNativeComponent, Platform } from "react-native";

const RNSelectableText = requireNativeComponent("RNSelectableText");

export const SelectableText = ({ onSelection, value, children, ...props }) => {
  const onSelectionNative = ({
    nativeEvent: { content, eventType, selectionStart, selectionEnd }
  }) => {
    onSelection &&
      onSelection({ content, eventType, selectionStart, selectionEnd });
  };

  return Platform.OS === "ios" ? (
    <RNSelectableText
      {...props}
      value={value}
      onSelection={onSelectionNative}
    />
  ) : (
    <RNSelectableText {...props} onSelection={onSelectionNative}>
      <Text>{children ? children : value}</Text>
    </RNSelectableText>
  );
};
