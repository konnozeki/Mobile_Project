import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import ImageViewer from 'react-native-image-zoom-viewer'

const ViewImage = () => {
    const [visible, setVisible] = useState(false)
    const onPress = () => setVisible(true);
  return (
    <Modal visible = {visible} transparent={true} onRequestClose={() => {this.setVisible(false)}}>
        <ImageViewer enableSwipeDown={true} onSwipeDown={() => {setVisible(false)}} imageUrls={[{url: '', width: '100%', props : {source: require('../../../assets/images/welcome.jpg')}}]}></ImageViewer>
    </Modal>
  )
}

export default ViewImage

const styles = StyleSheet.create({})