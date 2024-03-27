import React from 'react';

import {StyleSheet, Text, View, Image} from 'react-native';

type WeatherData = {
  max: string;
  min: string;
  description: string;
  img: string;
  date: string;
}

interface WeatherCardProps {
  element: {
    el: WeatherData;
  };
  index: number;
}

export const WeatherCard: React.FC<WeatherCardProps> = (element, i) => {
  const {max, min, description, img, date} = element.el;
  const dateFormat = (dateStr: string) => {
    const months = [
      'Jun',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'jul',
      'Ags',
      'Sep',
      'Oct',
      'Now',
      'Des',
    ];
    const date = new Date(dateStr);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${day} ${months[monthIndex]} ${year}`;
  };

  return (
    <View key={i} style={styles.wrap}>
      <Image style={styles.img} source={{uri: `https:${img}`}} />
      <Text>{dateFormat(date)}</Text>
      <Text>{max}°C</Text>
      <Text>{min}°C</Text>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  wrap: {
    backgroundColor: '#bdeef2',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 5,
    borderRadius: 5,
  },
  location: {
    fontSize: 24,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  condition: {
    fontSize: 18,
  },
  img: {
    width: 64,
    height: 64,
  },
});
