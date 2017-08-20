import React from 'react';
import {Upload, Button, Icon} from 'antd';

class ImageCrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: undefined
    }
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
    this.readBlobAsDataURL(file, (result) => self.setState({url: result}));
    return false;
  };

  render() {
    const {url} = this.state;
    return (
      <div>
        <Upload
          beforeUpload={this.onBefore}
        >
          <Button><Icon type='upload' />上传</Button>
        </Upload>
        {url ? <img src={url} alt="" /> : ''}
      </div>
    )
  }
}
export default ImageCrop;
