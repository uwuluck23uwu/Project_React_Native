import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import styles from '../styles/headerStyles';

interface Props {
  options: NativeStackNavigationOptions;
}

export default function Header({ options }: Props) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="bars" size={24} color="green" />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>{options?.title ?? 'หน้าหลัก'}</Text>

      <TouchableOpacity style={styles.iconContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/30' }}
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  );
}
