import { StyleSheet, ScrollView} from 'react-native'
import React from 'react'

import MainHeader from '../components/MainHeader'
import ScreenHeader from '../components/ScreenHeader';
import TopCarousel from '../components/TopCarousel';
import SectionHeader from '../components/SectionHeader';
import ImageList from '../components/ImageList';
const HomeScreen = () => {
  return (
    <>
    <MainHeader title='Daxua'/>
    <ScreenHeader/>
    <ScrollView showsVerticalScrollIndicator={false}>
      <TopCarousel list={FAVOURITE_LIST}></TopCarousel>
      <SectionHeader title="Solo Daxua" buttonTitle='More Daxua'/>
      <ImageList list={IMAGE_LIST}/>
    </ScrollView>
    </>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({})

const FAVOURITE_LIST = [
  {
      id: 1,
      title: 'Sleeping Day',
      image: require('./../../assets/images/welcome.jpg'),
      author: 'Yuuki'
  },
  {
      id: 2,
      title: 'Mlem desu',
      image: require('./../../assets/images/welcome.jpg'),
      author: 'Aiko'
  },
  {
    id: 3,
    title: 'Mlem desu nee',
    image: require('./../../assets/images/welcome.jpg'),
    author: 'Aiko'
  }
]

const IMAGE_LIST = [
  {
    id: 1,
    title: 'Sleeping Day',
    image: require('./../../assets/images/welcome1.jpg'),
    author: 'Yuuki'
},
{
    id: 2,
    title: 'Mlem desu',
    image: require('./../../assets/images/welcome2.jpg'),
    author: 'Aiko'
},
{
    id: 3,
    title: 'Mlem desu ne',
    image: require('./../../assets/images/welcome3.jpg'),
    author: 'Aiko-chi'
},
{
    id: 4,
    title: 'Mlem desu neee',
    image: require('./../../assets/images/welcome4.jpg'),
    author: 'Aiko chan'
},
{
  id: 5,
  title: 'Mlem desu ne',
  image: require('./../../assets/images/welcome3.jpg'),
  author: 'Aiko-chi'
},
{
  id: 6,
  title: 'Mlem desu neee',
  image: require('./../../assets/images/welcome4.jpg'),
  author: 'Aiko chan'
},
{
  id: 7,
  title: 'Mlem desu ne',
  image: require('./../../assets/images/welcome3.jpg'),
  author: 'Aiko-chi'
},
{
  id: 8,
  title: 'Mlem desu neee',
  image: require('./../../assets/images/welcome4.jpg'),
  author: 'Aiko chan'
},

]