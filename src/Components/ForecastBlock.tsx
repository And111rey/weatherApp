import React, {useCallback, useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import {WeatherCard} from './WeatherCard';

type WeatherForecast = {
  max: string;
  min: string;
  description: string;
  img: string;
  date: string;
}

interface ForecastBlockProps {
  forecast: WeatherForecast[];
}

export const ForecastBlock: React.FC<ForecastBlockProps> = ({forecast}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrap}>
        {forecast.map((el, i) => {
          return <WeatherCard key={i} el={el} />;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%'},
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
