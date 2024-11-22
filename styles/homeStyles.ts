import { StyleSheet } from 'react-native';
import { Colors } from '../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colors1,
    padding: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: 'gray',
  },
  announcementBox: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  announcementText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  guideButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  guideButtonText: {
    color: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  animalCard: {
    width: 150,
    marginRight: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
  },
  animalImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  animalName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16,
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  serviceIcon: {
    alignItems: 'center',
  },
});

