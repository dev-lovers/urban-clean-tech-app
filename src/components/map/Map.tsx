import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import { Alert, Dimensions, View, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import MapView, { Camera, Region } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import CustomMarker from "../custom-marker/CustomMarker";

interface Destination {
  latitude: number;
  longitude: number;
}

const { width, height } = Dimensions.get("window");

export default function Map() {
  const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY as string;

  const [camera, setCamera] = useState<Camera>({
    center: {
      latitude: 0,
      longitude: 0,
    },
    pitch: 0,
    heading: 0,
    altitude: 1000,
    zoom: 16,
  });
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [destinationLocation, setDestinationLocation] =
    useState<Destination | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [shouldFitMarkers, setShouldFitMarkers] = useState(true);
  const [followUserLocation, setFollowUserLocation] = useState(true);
  const mapRef = useRef<MapView | null>(null);

  useEffect(() => {
    const startTracking = async () => {
      const { status } = await requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Permissões para acessar a localização foram negadas.");
        return;
      }

      try {
        await watchPositionAsync(
          {
            accuracy: Accuracy.Highest,
            timeInterval: 5000,
            distanceInterval: 10,
          },
          (loc) => {
            setCamera((prevCamera) => ({
              ...prevCamera,
              center: {
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude,
              },
            }));

            if (followUserLocation && mapRef.current) {
              mapRef.current.animateCamera(
                {
                  center: {
                    latitude: loc.coords.latitude,
                    longitude: loc.coords.longitude,
                  },
                  pitch: camera.pitch,
                  heading: camera.heading,
                  altitude: camera.altitude,
                  zoom: camera.zoom ?? 17,
                },
                { duration: 2000 }
              );
              setFollowUserLocation(false);
            }
          }
        );
      } catch (err) {
        console.warn("Algo deu errado...", err);
      }
    };

    startTracking();
  }, []);

  const selectDestination = (
    latitude: number,
    longitude: number,
    type: string
  ) => {
    setSelectedDestination({ latitude, longitude });
  };

  const getDirections = () => {
    setDestinationLocation(selectedDestination);
    setShouldFitMarkers(true);
    setFollowUserLocation(false);
  };

  const removeDirections = () => {
    setDestinationLocation(null);
    setSelectedDestination(null);
  };

  const handleMapReady = useCallback(() => {
    setMapReady(true);
  }, []);

  const handleMapCamera = async (isGesture: boolean | undefined) => {
    const cameraRef = await mapRef.current?.getCamera();
    if (cameraRef) {
      setCamera((prevCamera) => ({
        ...prevCamera,
        heading: cameraRef.heading,
        pitch: cameraRef.pitch,
        altitude: cameraRef.altitude || 0,
        zoom: cameraRef.zoom,
      }));
      if (followUserLocation && isGesture) {
        setFollowUserLocation(false);
      }
    }
  };

  const handleFollowUserLocation = () => {
    if (mapRef.current) {
      mapRef.current.animateCamera(
        {
          center: camera.center,
          pitch: camera.pitch,
          heading: camera.heading,
          altitude: camera.altitude,
          zoom: camera.zoom ?? 17 <= 13 ? 17 : camera.zoom ?? 17,
        },
        { duration: 2000 }
      );
      setTimeout(() => setFollowUserLocation(true), 3000);
    }
  };

  return (
    <>
      <MapView
        style={mapReady ? styles.map : {}}
        camera={followUserLocation ? camera : undefined}
        showsUserLocation
        showsMyLocationButton={false}
        zoomControlEnabled
        loadingEnabled
        loadingBackgroundColor="#ffffff"
        toolbarEnabled={false}
        ref={mapRef}
        onMapReady={handleMapReady}
        onRegionChangeComplete={(region: Region) => handleMapCamera(true)}
        onPress={
          !destinationLocation ? () => setSelectedDestination(null) : undefined
        }
      >
        <CustomMarker
          id="1"
          name="Container de Lixo 01"
          type="garbage-container"
          color="#38761D"
          latitude={-12.937122635268654}
          longitude={-38.48954944454247}
          onPress={selectDestination}
        />
        <CustomMarker
          id="2"
          name="Container de Lixo 02"
          type="garbage-container"
          color="#38761D"
          latitude={-12.941101301384398}
          longitude={-38.49076716743698}
          onPress={selectDestination}
        />
        <CustomMarker
          id="3"
          name="Caminhão de Coleta 01"
          type="garbage-collection-truck"
          color="#6E7B8B"
          latitude={-12.934767371790906}
          longitude={-38.48394275662215}
        />
        {destinationLocation && (
          <MapViewDirections
            origin={camera.center}
            destination={destinationLocation}
            apikey={GOOGLE_API_KEY}
            strokeWidth={3}
            strokeColor="#4285F4"
            lineDashPattern={[0]}
            optimizeWaypoints
            precision="high"
            onError={() => Alert.alert("Erro ao obter direções...")}
            onReady={(result) => {
              if (shouldFitMarkers) {
                mapRef.current?.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: width / 10,
                    bottom: height / 10,
                    left: width / 10,
                    top: height / 10,
                  },
                });
                setShouldFitMarkers(false);
              }
            }}
          />
        )}
      </MapView>
      <View style={styles.buttonWrapper}>
        {selectedDestination && destinationLocation && (
          <IconButton
            mode="contained"
            containerColor="#ff4c4c"
            icon="close"
            iconColor="#ffffff"
            size={20}
            style={styles.iconButton}
            onPress={removeDirections}
          />
        )}
        {selectedDestination && (
          <IconButton
            mode="contained"
            containerColor="#4285f4"
            icon="directions"
            iconColor="#ffffff"
            size={20}
            style={styles.iconButton}
            onPress={getDirections}
          />
        )}
        <IconButton
          mode="contained"
          icon="crosshairs-gps"
          size={20}
          style={styles.iconButton}
          onPress={handleFollowUserLocation}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 115,
    right: 15,
    flexDirection: "column",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 5,
    borderRadius: 15,
    alignItems: "center",
    elevation: 10,
  },
  iconButton: {
    marginHorizontal: 5,
  },
});
