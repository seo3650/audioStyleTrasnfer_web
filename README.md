This is a project for KAIST CS470: Introduction to A.I.


We implement the singer-conversion. In the web page, users can convert the song with the singer they want. Please refer to https://github.com/seo3650/Audio_style_transfer/.

# Web Page Link
채우기

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

# Front-end
## Dependencies
  * antd
  * styled-components
  * react-router-dom


# Server Info
Google Cloud Platfrom
