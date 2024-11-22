import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, Modal } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import styles from '../styles/homeStyles';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }}
          style={styles.profileImage}
        />
        <Text style={styles.headerText}>Chiang Mai Zoo</Text>
        <Text style={styles.headerSubtitle}>นานาสัตว์ที่น่าสนใจที่นี่เลย !!</Text>
      </View>

      <View style={styles.announcementBox}>
        <Text style={styles.announcementText}>เยี่ยมชมสัตว์ต่างๆ</Text>
        <Text>นำทางผ่านแผนที่ในสวนสัตว์</Text>
        <TouchableOpacity style={styles.guideButton}>
          <Text style={styles.guideButtonText}>แผนที่</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="ค้นหาสัตว์ที่ต้องการ"
        />
        <FontAwesome name="search" size={24} color="gray" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>สัตว์ยอดนิยม</Text>
        <ScrollView horizontal>
          <AnimalCard name="สิงโต" rating={5.0} description="สัตว์นักล่า..." />
          <AnimalCard name="เสือ" rating={4.5} description="สัตว์นักล่า..." />
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>สัตว์แนะนำ</Text>
        <ScrollView horizontal>
          <AnimalCard name="สิงโต" rating={4.0} description="สัตว์นักล่า..." />
          <AnimalCard name="ช้าง" rating={4.7} description="สัตว์ใหญ่..." />
        </ScrollView>
      </View>

      <View style={styles.servicesContainer}>
        <ServiceIcon name="สัตว์" icon="paw" />
        <ServiceIcon name="ร้านค้า" icon="shopping-cart" />
        <ServiceIcon name="บริจาค" icon="hand-holding-usd" />
      </View>
    </ScrollView>
  );
}

const AnimalCard = ({ name, rating, description }: any) => (
  <View style={styles.animalCard}>
    <Image
      source={{ uri: 'https://via.placeholder.com/150' }}
      style={styles.animalImage}
    />
    <Text style={styles.animalName}>{name}</Text>
    <Text>{description}</Text>
    <View style={styles.ratingContainer}>
      <FontAwesome name="star" size={16} color="gold" />
      <Text style={styles.ratingText}>{rating}</Text>
    </View>
  </View>
);

const ServiceIcon = ({ name, icon }: any) => (
  <View style={styles.serviceIcon}>
    <FontAwesome5 name={icon} size={24} color="green" />
    <Text>{name}</Text>
  </View>
);
