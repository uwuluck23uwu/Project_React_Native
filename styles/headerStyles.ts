import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: '#000',
    },
    iconContainer: {
      padding: 5,
    },
    headerTitle: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    profileImage: {
      width: 30,
      height: 30,
      borderRadius: 15,
    },
  });