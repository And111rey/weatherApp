import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View, ActivityIndicator, Button} from 'react-native';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';
import {useSelector, useDispatch} from 'react-redux';

import {getCurrentWeatherAction} from '../redux/actions/getCurrentWeatherAction';
import {
  ForecastBlock,
  CurrentWeathreBlock,
  ButtonweathreBlock,
} from '../Components';
import {useTheme} from '../layouts/theme';

type Location = {
  latitude: string;
  longitude: string;
};

export const WeatherApp = () => {
  const {isLoad, weatherData, forecast} = useSelector(
    state => state.weatherReducer,
  );
  const dispatch = useDispatch();
  const {isDarkMode, toggleTheme, colors} = useTheme();

  const styles = useStyles();

  const [location, setLocation] = useState<Location>({
    latitude: '49.421998333333335',
    longitude: '-122.084',
  });

  useEffect(() => {
    getLocation();
  }, [dispatch]);

  const getLocation = useCallback(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
      },
      error => {
        console.error('Error getting location:', error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, [dispatch]);

  useEffect(() => {
    getLocation();
    dispatch(
      getCurrentWeatherAction({
        latitude: location.latitude,
        longitude: location.longitude,
      }),
    );
  }, [dispatch, location.latitude, location.longitude]);

  return (
    <View style={styles.container}>
      {isLoad ? (
        <ActivityIndicator
          color="blue"
          style={{position: 'absolute', top: '50%', zIndex: 5}}
          size="large"
        />
      ) : (
        <>
          <Button title="Theme" onPress={toggleTheme} />
          <CurrentWeathreBlock weatherData={weatherData} />
          <ButtonweathreBlock location={location} />
          <ForecastBlock forecast={forecast} />
        </>
      )}
    </View>
  );
};

const useStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
  });
};
