import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../layouts/theme';

type WeatherData = {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
  };
};

interface CurrentWeatherBlockProps {
  weatherData: WeatherData | null;
}

export const CurrentWeathreBlock: React.FC<CurrentWeatherBlockProps> = ({
  weatherData,
}) => {
  const styles = useStyles();

  return (
    <>
      {weatherData && (
        <View>
          <Text style={styles.location}>
            {weatherData.location.name}, {weatherData.location.country}
          </Text>
          <Text style={styles.temperature}>{weatherData.current.temp_c}°C</Text>
          <Text style={styles.condition}>
            {weatherData.current.condition.text}
          </Text>
          <Text style={styles.condition}></Text>
        </View>
      )}
    </>
  );
};

const useStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    location: {
      fontSize: 24,
      marginBottom: 10,
      color: colors.text,
    },
    temperature: {
      fontSize: 48,
      fontWeight: 'bold',
      color: colors.text,
    },
    condition: {
      fontSize: 18,
      color: colors.text,
    },
  });
};
