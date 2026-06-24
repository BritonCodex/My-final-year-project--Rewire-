import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFormattedDate } from './timeHook';
import { scale } from '../../themes/scale';
import HeaderComponent from '../header/component';

const TimeComponent = () => {
  const { formattedDate, formattedTime } = useFormattedDate();
  const [greeting, setGreetings] = useState('');

  useEffect(()=>{
    const getGreetings = () =>{
        const hour = new Date().getHours();
        if (hour < 12 && hour < 7) return 'Good Morning';
            if (hour < 12) return 'Good Morning ☀️';
            if (hour < 17) return 'Good Afternoon 🌞';
            if (hour < 20) return 'Good Evening';
            if (hour > 22 && hour < 23 ) return 'Hey, late Sleeper 🌜';
            return "How's Your Night? 🌜";
        };
        setGreetings(getGreetings());
            //Update greeting every 30 seconds to stay fresh
        const interval = setInterval(() => {
            setGreetings(getGreetings());
        }, 30000);
        return () => clearInterval(interval);
    }, []);
  return (
  <View style={styles.container}>
      <View style={styles.dateSection}>
        <Text style={styles.date}>{formattedDate}</Text>
        <Text style={styles.date}>{formattedTime}</Text>
      </View>
      <View style={styles.dateSection}>
        <Text style={styles.greetings}>{`${greeting}, Briton`}</Text>
        <Text>Avatar</Text>
      </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    width: '100%' ,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#EEF2F7', //#EEF2F7
    paddingHorizontal: scale(10),
    paddingVertical: scale(10),
    marginHorizontal: scale(2),
    marginTop: scale(2),
    borderRadius: scale(12),
    shadowColor: '#FFFFFF',
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#F8FAFC',
  },
  dateSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  date: {
    fontSize: scale(8),
    fontWeight: '600',
    color: '#94A3B8',
    marginBottom: scale(8),
    letterSpacing: 0.5,
  },

  greetings:{
    fontSize: scale(12),
    fontWeight: '700',
    color: '#121213ff',
    marginBottom: scale(8),
    letterSpacing: 0.5,
  },

  timeContainer: {
    backgroundColor: '#EEF2F7', //#EEF2F7
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 18,
    shadowColor: '#FFFFFF',
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#F8FAFC',
  },
});

export default TimeComponent;