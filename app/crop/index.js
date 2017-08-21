import React from 'react';
import Cropper from './ReactCropper';
import {Button, Icon, Upload} from 'antd';
import './style.less';

const {Component} = React;

class Crop extends Component {
  constructor(props) {
    super(props);
    this.size = 500;
    this.state = {
      url: undefined
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.url !== this.state.url;
  }

  readBlobAsDataURL = (blob, callback) => {
    const a = new FileReader();
    a.onload = function (e) {
      callback(e.target.result);
    };
    a.readAsDataURL(blob);
  };
  onBefore = (file, fileList) => {
    const self = this;
    this.isReady = false;
    this.readBlobAsDataURL(file, (result) => self.setState({url: result}));
    return false;
  };
  onCrop = (e) => {
    if (!this.isReady) {
      return false;
    }
    const canvas = this.cropper.getCroppedCanvas();
    if (typeof canvas === 'undefined') {
      return;
    }
    this.cropImage = canvas.toDataURL();
    this.image1.src = this.cropImage;
    this.image54.src = this.cropImage;
  };
  onReady = () => {
    this.isReady = true;
  };
  onZoom = (radio) => {
    this.cropper.zoom(radio);
  };
  onReset = () => {
    this.cropper.reset();
  };

  render() {
    const {url} = this.state;
    return (
      <div className='h-app-content h-crop'>
        <Upload
          beforeUpload={this.onBefore}
        >
          <Button><Icon type='upload' />上传</Button>
        </Upload>
        {url ?
          <Cropper
            ref={r => this.cropper = r}
            src={url}
            style={{height: this.size, width: this.size}}
            aspectRatio={1}
            guides={false}
            crop={this.onCrop}
            ready={this.onReady}
            // viewMode={3}
            // dragMode='move'
            // autoCropArea={1}
            // restore={false}
            // modal={false}
            // highlight={false}
            // cropBoxMovable={false}
            // cropBoxResizable={false}
          /> : ''}
        <div style={{width: this.size}}>
          <Button onClick={() => this.onZoom(0.1)}><Icon type='plus-circle-o' /></Button>
          <Button onClick={() => this.onZoom(-0.1)}><Icon type='minus-circle-o' /></Button>
          <Button onClick={this.onReset}><Icon type='reload' /></Button>
        </div>
        <div style={{width: this.size}}>
          <div className='box' style={{float: 'left'}}>
            <h1>1:1</h1>
            <div style={{width: (this.size / 2) - 20, height: (this.size / 2) - 20, border: '1px solid #dddddd'}}>
              <img ref={r => this.image1 = r} alt='图片预览' style={{width: '100%', height: '100%'}} />
            </div>
          </div>
          <div className='box' style={{float: 'left'}}>
            <h1>5:4</h1>
            <div className='img-preview' style={{
              width: (this.size / 2) - 20,
              float: 'left',
              height: 4 * ((this.size / 2) - 20) / 5,
              border: '1px solid #dddddd'
            }}>
              <img ref={r => this.image54 = r} alt='图片预览'
                   style={{width: '100%', marginTop: `-${((this.size / 2) - 20) / 10}px`}} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Crop;
