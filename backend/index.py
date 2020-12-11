from flask import Flask, render_template, request, send_file
from werkzeug.utils import secure_filename
import shutil
from pydub import AudioSegment
import torch
from transfer.model import Generator
import subprocess


app = Flask(__name__)

@app.route('/')
def render_file():
    return render_template('upload.html')

@app.route('/fileUpload', methods = ['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['file']
        f.save('/home/ubuntu/audio_style_transfer/backend/reqFiles/' + secure_filename(f.filename))
        
        # TODO: Change to convert
        shutil.move('/home/ubuntu/audio_style_transfer/backend/reqFiles/' + secure_filename(file_name),
                '/home/ubuntu/audio_style_transfer/backend/convertedFiles/' + secure_filename(file_name))
        return "success"

@app.route("/fileDownload", methods = ['GET'])
def download_file():
    file_name = request.args.get('fileName')
    return send_file('/home/ubuntu/audio_style_transfer/backend/convertedFiles/' + secure_filename(file_name),
                     attachment_filename=file_name,
                     as_attachment=True)

"""
Load model
"""
def load_info(state_dict_path):
    global model
    model =  Generator()
    model.load_state_dict(torch.load(state_dict_path))
    model.eval()
"""
Split music to mr and vocal

You should make directory named output
file loaded in output like
- accompaniment.wav
- vocal.wav
"""
def split_mr(music_file):
    subprocess.call(["spleeter", 'separate', '-i', music_file, '-o', 'output'])

"""
Requirement: pydub
usage - pip install pydub
"""
def merge_mr(mr_file, converted_file):
    mr = AudioSegment.from_wav(mr_file)
    output = AudioSegment.from_wav(converted_file)
    combined_sounds = output.overlay(mr)
    combined_sounds.export("./audio_merged.wav", format="wav")


if __name__ == '__main__':
    app.run(host='0.0.0.0')