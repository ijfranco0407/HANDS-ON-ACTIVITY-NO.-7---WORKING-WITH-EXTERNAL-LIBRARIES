import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const MainScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Main Screen</Text>
      <DateTimePicker
        value={selectedDate} 
        buttonText={'Submit'}
        buttonTextColor={'#ffffff'}
        selectedMonthColor={'#1C5A9'}
        monthYearColor={'red'}
        dotColor={'green'}
        leftIconColor={'red'}
        getData={(item) => {
          setSelectedDate(item); 
          console.log('get calendar data', item);
        }}
      />
    </View>
  );
};

export default MainScreen;