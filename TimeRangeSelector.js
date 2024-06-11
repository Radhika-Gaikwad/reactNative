import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TimeRangeSelector = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState([]);
  const [excludedTime, setExcludedTime] = useState([]);

  const handleTimeSelect = (time) => {
    setSelectedTimeRange([...selectedTimeRange, time]);
    console.log({ selectedTimeRange, excludedTime });
  };

  const handleExcludeTime = (time) => {
    setExcludedTime([...excludedTime, time]);
    console.log({ selectedTimeRange, excludedTime });
  };

  return (
    <View style={styles.container}>
      <Text>Time Range Selector</Text>
      <View style={styles.buttonContainer}>
        {Array.from({ length: 24 }, (_, index) => (
          <Button
            key={index}
            title={`${index}`}
            onPress={() => handleTimeSelect(index)}
          />
        ))}
      </View>
      <Text>Excluded Time</Text>
      <View style={styles.buttonContainer}>
        {Array.from({ length: 24 }, (_, index) => (
          <Button
            key={index}
            title={`Exclude ${index}`}
            onPress={() => handleExcludeTime(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default TimeRangeSelector;
