import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { StyleSettings } from '../../style/settings';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    // backgroundColor: '#333'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 48,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },

  incidentValue: {
    marginTop: 8,
    marginBottom: 24,
    fontSize: 15,
    color: StyleSettings.colorLight,
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: StyleSettings.colorDark,
    lineHeight: 30,
    // textAlign:'center',
  },

  heroDescription: {
    fontSize: 15,
    color: StyleSettings.colorLight,
    marginTop: 16,
    // textAlign:'center'
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  action: {
    backgroundColor: StyleSettings.colorPrimary,
    borderRadius: 8,
    height: 50,
    width: '48%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

});