import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {getCurrentWeatherActionForDays} from '../redux/actions/getCurrentWeatherAction';
import {ThemeProvider, useTheme, } from '../layouts/theme';


type Location = {
  latitude: string;
  longitude: string;
};

interface ButtonWeatherBlockProps {
  location: Location;
}

export const ButtonweathreBlock: React.FC<ButtonWeatherBlockProps> = ({
  location,
}) => {
  const dispatch = useDispatch();
  const styles = useStyles()

  const getForecast = useCallback((days: string) => {
    dispatch(
      getCurrentWeatherActionForDays({
        latitude: location.latitude,
        longitude: location.longitude,
        days,
      }),
    );
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => getForecast('3')} style={styles.btn}>
        <Text style={styles.txt}>3 Days</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => getForecast('10')} style={styles.btn}>
        <Text style={styles.txt}>10 Days</Text>
      </TouchableOpacity>
    </View>
  );
};

const useStyles= () => {
    const {colors} = useTheme();

    return  StyleSheet.create({
        container: {
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
        },
        btn: {
          backgroundColor: colors.primary,
          alignItems: 'center',
          width: '30%',
          padding: '3%',
          borderRadius: 5,
        },
        txt: {
            fontSize: 20,
        },
      });
      
}  