import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons'; 
import uuid from 'react-native-uuid';

const NavigationBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.view}>
      <Image 
        style={styles.profileImage}
        source={require('../../assets/dummyProfile.png')}
      />
      <Image 
        style={styles.qrIcon}
        source={require('../../assets/qrIcon.png')}
      />
      {/* <TouchableOpacity
        key={uuid.v4()}
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
      </TouchableOpacity> */}
    </View>
    // <View style={styles.customTabBar}>
    //   {state.routes.map((route, index) => {
    //     const { options } = descriptors[route.key];
    //     const label =
    //       options.tabBarLabel !== undefined
    //         ? options.tabBarLabel
    //         : options.title !== undefined
    //         ? options.title
    //         : route.name;

    //     const icon = {
    //       'Home': <MaterialCommunityIcons name="gamepad-round-outline" size={26} color="black" />,
    //       'Profile': <Feather name="user" size={26} color="black" />,
    //       'Scan': <Ionicons name="md-scan-sharp" size={26} color="black" />
    //     }

    //     const isFocused = state.index === index;

    //     const onPress = () => {
    //       const event = navigation.emit({
    //         type: 'tabPress',
    //         target: route.key,
    //         canPreventDefault: true,
    //       });

    //       if (!isFocused && !event.defaultPrevented) {
    //         // The `merge: true` option makes sure that the params inside the tab screen are preserved
    //         navigation.navigate({ name: route.name, merge: true });
    //       }
    //     };

    //     const onLongPress = () => {
    //       navigation.emit({
    //         type: 'tabLongPress',
    //         target: route.key,
    //       });
    //     };

    //     return (
    //       <TouchableOpacity
    //         key={uuid.v4()}
    //         accessibilityRole="button"
    //         accessibilityState={isFocused ? { selected: true } : {}}
    //         accessibilityLabel={options.tabBarAccessibilityLabel}
    //         testID={options.tabBarTestID}
    //         onPress={onPress}
    //         onLongPress={onLongPress}
    //         style={styles.tabButton}
    //       >
    //         <View style={styles.icon}>{icon[label]}</View>
    //         <Text style={styles.tabButtonText}>{label.toUpperCase()}</Text>
    //       </TouchableOpacity>
    //     );
    //   })}
    //</View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  customTabBar: {
    width: 'auto',
    flexDirection: 'row',
    backgroundColor: '#cef246',
    position: 'relative',
  },
  tabButton: {
    flex: 1, 
    alignItems: 'center',
  },
  tabButtonText: {
    color: '#000',
    paddingTop: 7,
    fontSize: 16,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 4
  },
  qrIcon: {
    width: 28,
    height: 28
  }
});

export default NavigationBar;
