This is a project for KAIST CS470: Introduction to A.I.


# StarGAN-Voice-Conversion: Web service
We implement singer-conversion. On the web page, users can convert the song with the singer they want. Please refer to https://github.com/seo3650/Audio_style_transfer/.


# Web Page Link
http://34.64.145.248:3000/


# How to use
On the page, you need 2 songs: the song you want to convert, and the song which the singer you want to sing. The songs should be .mp3 file.

After selecting the file and click the convert, wait ~5 minutes for conversion. If the conversion end, a converted song will be downloaded automatically.


# Back-end
## Dependencies
* Python 3.6
* Pytorch 1.7.0
* pyworld
* tqdm
* librosa
* tensorboardX and tensorboard

## Model
We use StarGAN pretrained model. Please refer to:
https://github.com/seo3650/Audio_style_transfer/



index.py is the main file. When a user requests a conversion, the index.py file receives the request. The conversion pipeline is below.


* Upload the user's mp3 files into the server
* Extract vocal & MR wav files from each of the 2 mp3 files
* Convert the voice of source wav file
* Merge the converted file with MR

# Front-end
This is the main page of our website.
<img width="1434" alt="스크린샷 2020-12-12 오후 9 45 15" src="https://user-images.githubusercontent.com/63027385/101984464-f7962180-3cc4-11eb-883a-a45bc351698b.png">

Choose mp3 file of song and singer.
File name should not contain spaces and file name should be in English.
<img width="1438" alt="스크린샷 2020-12-12 오후 10 16 04" src="https://user-images.githubusercontent.com/63027385/101984971-0df1ac80-3cc8-11eb-8979-fddd6b153f78.png">

Our website will convert a singer of the song and the song will be automatically downloaded. It will take ~5 minutes.
<img width="1419" alt="스크린샷 2020-12-12 오후 10 19 30" src="https://user-images.githubusercontent.com/63027385/101984982-2792f400-3cc8-11eb-9b20-6ecdc7aeafc4.png">

(Too many people can be unstable)


## Dependencies
  * antd
  * styled-components
  * react-router-dom


# Server Info
Google Cloud Platform


