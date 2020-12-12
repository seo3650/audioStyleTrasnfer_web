This is a project for KAIST CS470: Introduction to A.I.


# StarGAN-Voice-Conversion: Web service
We implement the singer-conversion. In the web page, users can convert the song with the singer they want. Please refer to https://github.com/seo3650/Audio_style_transfer/.


# Web Page Link
http://34.64.145.248:3000/


# How to use
In the page, you need 2 songs: the song you want to convert, and the song which the singer you want sing. The songs should be .mp3 file.

After select the file and click the convert, wait ~5 minutes for conversion. If the conversion end, a converted song will be downloaded automatically.


# Back-end
## Dependencies
* Python 3.6
* Pytorch 0.4.0
* pyworld
* tqdm
* librosa
* tensorboardX and tensorboard

## Model
We use StarGAN pretrained model. Please refer to:
https://github.com/seo3650/Audio_style_transfer/



index.py is the main file. When user request the convert, the index.py file receive the request. The conversion pipeline is below.


* Upload the user's mp3 files into server
* Extract vocal & MR wav files from each of the 2 mp3 files
* Convert the voice of source wav file
* Merge the converted file with MR

# Front-end
This is main page of our website.
<img width="1434" alt="스크린샷 2020-12-12 오후 9 45 15" src="https://user-images.githubusercontent.com/63027385/101984464-f7962180-3cc4-11eb-883a-a45bc351698b.png">
Choose mp3 file of song and singer.
<img width="1436" alt="스크린샷 2020-12-12 오후 9 48 12" src="https://user-images.githubusercontent.com/63027385/101984651-1ba63280-3cc6-11eb-8215-620496cd0af6.png">
Our website will convert a singer of song ,and automatically downloaded . It will takes 5 minutes.
<img width="1436" alt="스크린샷 2020-12-12 오후 9 53 24" src="https://user-images.githubusercontent.com/63027385/101984657-21037d00-3cc6-11eb-809a-830a2797c489.png">
(Too many people can be unstable)


## Dependencies
  * antd
  * styled-components
  * react-router-dom


# Server Info
Google Cloud Platfrom
