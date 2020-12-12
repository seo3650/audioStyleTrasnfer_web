from flask import Flask, render_template, request, send_file
from werkzeug.utils import secure_filename
import shutil
from pydub import AudioSegment
import torch
from transfer.model import Generator
import subprocess
import os

app = Flask(__name__)

@app.route('/')
def render_file():
    return render_template('upload.html')

@app.route('/fileUpload', methods = ['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['song']
        f2 = request.files['singer']
        f.save('./reqFiles/' + secure_filename(f.filename))
        f2.save('./transfer/data/VCTK-Corpus/cs/p232/' + secure_filename(f2.filename))
        for file in os.scandir("transfer/data/VCTK-Corpus/cs/p232"):
            os.remove(file.path)
        if (split_mr(f.filename) == 0):
            print("Split finished")
            shutil.move("./splittedFiles/" + f.filename.split('.')[0] + "/vocals.wav",
                        "./reqConverted/p229/p229_009.wav")
            print("Start conversion")
            if (convert_vc(f.filename) == 0):
                print("Conversion finished")
                merge_mr("./splittedFiles/" + f.filename.split('.')[0] + "/accompaniment.wav",
                         './converted/100000/p229_009-vcto-p232.wav')
                print("Merge finished")
                return send_file('./converted/audio_merged.wav',
                                    attachment_filename=f.filename,
                                    as_attachment=True)
    return "Failure"

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
    return subprocess.call(["spleeter", 'separate', '-i', './reqFiles/' + music_file, '-o', './splittedFiles'])

"""
Requirement: pydub
usage - pip install pydub
"""
def merge_mr(mr_file, converted_file):
    mr = AudioSegment.from_wav(mr_file)
    output = AudioSegment.from_wav(converted_file)
    combined_sounds = output.overlay(mr)
    combined_sounds.export("./converted/audio_merged.wav", format="wav")

def convert_vc(music_file):
    return subprocess.call(["python", "./transfer/convert.py", "--wav_dir", "./reqConverted",
                            "--train_data_dir", "./transfer/data/mc/train",
                            "--test_data_dir", "./transfer/data/mc/test",
                            "--model_save_dir", "./transfer/models"])

if __name__ == '__main__':
    app.run(host='0.0.0.0')