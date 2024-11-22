import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/registerAndLoginStyles';

export default function RegisterAndLogin() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Image source={require('../../assets/app-icon.png')} style={styles.pandaImage} />
      
      <Text style={styles.title}>Chiang Mai Zoo</Text>
      
      <Text style={styles.subtitle}>ลงทะเบียนเพื่อเข้าใช้งานเว็บไซต์สวนสัตว์</Text>
      
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>สมัครสมาชิก</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>เข้าสู่ระบบ</Text>
      </TouchableOpacity>
    </View>
  );
}
