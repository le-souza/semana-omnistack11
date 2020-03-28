import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { StyleSettings } from '../../style/settings';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 15,
    color: StyleSettings.colorPrimary,
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: StyleSettings.colorDark,
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: StyleSettings.colorLight,
  },

  incidentList: {
    marginTop: 32,
  },
  
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
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

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsButtonText: {
    color: StyleSettings.colorPrimary,
    fontSize: 15,
    fontWeight: 'bold',
  }

});