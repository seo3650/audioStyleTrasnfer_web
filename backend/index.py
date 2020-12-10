from flask import Flask, render_template, request, send_file
from werkzeug.utils import secure_filename
import shutil

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

if __name__ == '__main__':
    app.run(host='0.0.0.0')