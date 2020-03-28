import React, { useEffect, useState } from 'react';
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, ScrollView, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from "expo-mail-composer";

import logoImg from '../../assets/logo.png';

import {StyleSettings} from '../../style/settings';
import global from '../../style/global';
import local from './styles';

export default function Detail() {

  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  const message = `Olá ${incident.name}, estou entrando em contato, pois gostaria de ajudar no caso "${incident.title}" com o valor de ${
    Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(incident.value)}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}
      &text=${message}`)
  }

  return (
    <View style={local.container} >

      <View style={local.header} >
        
        <Image source={logoImg}></Image>
        
        <TouchableOpacity onPress={navigateBack} >
          <Feather name='arrow-left' size={28} color={StyleSettings.colorPrimary} ></Feather>
        </TouchableOpacity>

      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={local.incident}>

          <Text style={local.incidentProperty}>ONG:</Text>
          <Text style={local.incidentValue}>
            {incident.name} de {incident.city}/{incident.uf}
          </Text>
          
          <Text style={local.incidentProperty}>CASO:</Text>
          <Text style={local.incidentValue}>{incident.title}</Text>
          <Text style={[local.incidentValue, {marginTop:-10}]}>
            {incident.description}
          </Text>
          
          <Text style={local.incidentProperty}>Valor:</Text>
          <Text style={local.incidentValue}>
            {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)}
          </Text>
        
        </View>

        <View style={local.contactBox}>
          <Text style={local.heroTitle}>Salve o dia!</Text>
          <Text style={local.heroTitle}>Seja o herói desse caso.</Text>
          <Text style={local.heroDescription}>Entre em contato:</Text>

          <View style={local.actions} >
            
            <TouchableOpacity style={local.action} onPress={sendWhatsapp} >
              <Text style={local.actionText}>Whatsapp</Text>
              <FontAwesome
                name="whatsapp"
                size={22}
                color={'#fff'}
                onPress={() => {}}>
              </FontAwesome>
            </TouchableOpacity>

            <TouchableOpacity style={local.action} onPress={sendMail} >
              <Text style={local.actionText}>E-mail</Text>
              <Feather
                name='mail'
                size={22}
                color={'#fff'} >
              </Feather>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </View> //End Container
  );
}