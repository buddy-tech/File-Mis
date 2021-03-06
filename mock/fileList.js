import randomGroup from './utils/randomGroup'
export default function getFileList (req, res) {
  let fileList = []
  for (let i = 0; i < 10; i++) {
    fileList.push({
      id: 'fileid-' + i,
      title: 'file-' + i,
      createDate: '2018-11-' + i,
      content: 'this is a test file',
      creator: 'root',
      type: 'pdf',
      group: randomGroup('Folder', 3)
    })
  }
  fileList.push({
    id: '_fake_1',
    title: '..',
    createDate: '2018-11-1',
    content: 'this is a test file',
    creator: 'root',
    type: 'folder',
    group: ['Folder-1']
  })
  fileList.push({
    id: '_fake_2',
    title: '..',
    createDate: '2018-11-1',
    content: 'this is a test file',
    creator: 'root',
    type: 'folder',
    group: ['Folder-1', 'Folder-2']
  })
  fileList.push({
    id: '_fake_3',
    title: '..',
    createDate: '2018-11-1',
    content: 'this is a test file',
    creator: 'root',
    type: 'folder',
    group: ['Folder-1', 'Folder-2', 'Folder-3']
  })
  fileList.push({
    id: '_fake_4',
    title: '..',
    createDate: '2018-11-1',
    content: 'this is a test file',
    creator: 'root',
    type: 'folder',
    group: []
  })
  res.json({
    success: true,
    data: fileList
  })
}