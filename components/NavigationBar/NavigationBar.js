import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons'; 

const NavigationBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.customTabBar}>
      <View style={styles.navigationBackground} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const icon = {
          'Home': <MaterialCommunityIcons name="gamepad-round-outline" size={26} color="black" />,
          'Profile': <Feather name="user" size={26} color="black" />,
          'Scan': <Ionicons name="md-scan-sharp" size={26} color="black" />
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}
          >
            <View style={styles.icon}>{icon[label]}</View>
            <Text style={styles.tabButtonText}>{label.toUpperCase()}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  customTabBar: {
    width: 'auto',
    flexDirection: 'row',
    backgroundColor: '#cef246',
    position: 'relative',
    bottom: 30
  },
  navigationBackground: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 100,
    transform: [{ scale: 35 }],
    backgroundColor: '#cef246',
    position: 'absolute',
    top: 1670,
    left: 130
  },
  tabButton: {
    flex: 1, 
    alignItems: 'center',
  },
  tabButtonText: {
    color: '#000',
    paddingTop: 7,
    fontSize: 16,
    fontFamily: 'Teko_500Medium'
  },
  dummyIcon: {
    width: 25,
    height: 25,
    backgroundColor: '#000'
  }
});

export default NavigationBar;
