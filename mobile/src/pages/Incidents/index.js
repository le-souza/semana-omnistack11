import React, { useEffect, useState } from 'react';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';

import {StyleSettings} from '../../style/settings';
import global from '../../style/global';
import local from './styles';
import { apisAreAvailable } from 'expo';

export default function Incidents() {
  
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate('Detail', {incident});
  }

  async function loadIncidentes() {

    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);
    
    const response = await api.get('incidents', { params: {page} });
    
    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidentes();
  }, [])
  
  return (
    <View style={local.container} >
      
      <View style={local.header} >
        <Image source={logoImg}></Image>
        <Text style={local.headerText}>
          Total de <Text style={global.bold}>{total} casos</Text>
        </Text>
      </View>

      <Text style={local.title} >Bem vindo!</Text>
      <Text style={local.description} >
        Escolha um dos casos abaixo e salve o dia
      </Text>

      <FlatList
        data={incidents}
        style={local.incidentList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidentes}
        onEndReachedThreshold={0.2}
        renderItem={({item: incident}) => (  
          <View style={local.incident}>
            <Text style={local.incidentProperty}>ONG:</Text>
            <Text style={local.incidentValue}>{incident.name}</Text>
            
            <Text style={local.incidentProperty}>CASO:</Text>
            <Text style={local.incidentValue}>{incident.title}</Text>
            
            <Text style={local.incidentProperty}>Valor:</Text>
            <Text style={local.incidentValue}>
              {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(incident.value)}
            </Text>
          
            <TouchableOpacity
              style={local.detailsButton}
              onPress={() => navigateToDetail(incident)}
            >
              
              <Text style={local.detailsButtonText}>Ver mais detalhes</Text>
              
              <Feather name='arrow-right' size={16} color={StyleSettings.colorPrimary}></Feather>

            </TouchableOpacity>
          
          </View>
        )}
      />

    </View>
  );
}