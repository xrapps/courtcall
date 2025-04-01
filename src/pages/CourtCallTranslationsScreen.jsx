import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import CourtCallHeader from '../components/CourtCallHeader';
import BackgroundImage from '../assets/background.png';
import Cricket from '../assets/icons8-basketball-96.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <Image source={Cricket} style={styles.image} />

      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <CourtCallHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('NBA', '02.05 21:00', 'Los Angeles Lakers \n' + 'Boston Celtics')}
        {renderBroadcast('EuroLeague', '05.05 19:30', 'Barcelona \n' + 'Olympiacos')}
        {renderBroadcast('FIBA World Cup', '08.05 20:45', 'USA \n' + 'Spain')}
        {renderBroadcast('ACB', '11.05 18:00', 'Real Madrid \n' + 'Valencia')}
        {renderBroadcast('NCAA', '14.05 22:15', 'Gonzaga \n' + 'Duke')}
        {renderBroadcast('LNB Pro A', '17.05 20:30', 'Monaco \n' + 'ASVEL')}
        {renderBroadcast('CBA', '20.05 18:45', 'Shanghai Sharks \n' + 'Beijing Ducks')}
        {renderBroadcast('VTB League', '23.05 21:00', 'CSKA Moscow \n' + 'Lokomotiv Kuban')}
        {renderBroadcast('WNBA', '26.05 23:30', 'Chicago Sky \n' + 'Las Vegas Aces')}
        {renderBroadcast('NBA Finals', '30.05 21:00', 'Miami Heat \n' + 'Golden State Warriors')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderStyle: 'dashed',
  },
  league: {
    fontSize: 22,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    width: '60%',
    marginLeft: 15,
    opacity: 0.8,
  },
  teams: {
    textAlign: 'right',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginRight: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'flex-end',
    margin: 5,
  },
});
