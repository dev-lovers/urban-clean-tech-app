import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { Marker, Callout } from "react-native-maps";

interface CustomMarkerProps {
  id: string;
  name: string;
  type: "garbage-container" | "garbage-collection-truck";
  color?: string;
  latitude: number;
  longitude: number;
  onPress?: (
    latitude: number,
    longitude: number,
    type: "garbage-container" | "garbage-collection-truck"
  ) => void;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({
  id,
  name,
  type,
  color,
  latitude,
  longitude,
  onPress,
}) => {
  return (
    <Marker
      identifier={id}
      key={id}
      coordinate={{
        latitude: latitude,
        longitude: longitude,
      }}
      onPress={() => onPress && onPress(latitude, longitude, type)}
      tracksViewChanges={false}
    >
      <View style={styles.markerWrapper}>
        <Avatar.Icon
          icon={
            type === "garbage-collection-truck" ? "dump-truck" : "trash-can"
          }
          size={30}
          style={{ backgroundColor: color }}
        />
        <View
          style={[
            styles.markerArrow,
            {
              borderBottomColor: color,
            },
          ]}
        />
      </View>
      <Callout style={styles.callout}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text>Latitude: {latitude}</Text>
          <Text>Longitude: {longitude}</Text>
        </View>
      </Callout>
    </Marker>
  );
};

const styles = StyleSheet.create({
  markerWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  markerArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    transform: [{ rotate: "180deg" }],
    marginTop: -5,
  },
  callout: {
    width: 250,
    height: 100,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 5,
  },
});

export default React.memo(CustomMarker);
