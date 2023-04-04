import React from 'react';
import ReactDOM from 'react-dom';

// 在线ide不习惯，可以本地完成，贴进来

/**
 * 券卡片渲染数据
 */
interface IDirectVoucher {
  /** 标题 */
  title?: string;
  /** 副标题 */
  subTitle?: string;
}

// 卡片数据
const cardDataList: IDirectVoucher[] = [
  {
    title: '杭州市通用5元券',
    subTitle: '杭味面馆非常好吃，太好吃了，相当不错，味道鲜美，特别划算，快快抢购，聚划算',
  },
  {
    title: '杭州市10元券',
    subTitle: '兰州拉面非常好吃'
  },
];

interface ICardProps {
  data: IDirectVoucher;
}
  
  
/** 这里是react实现方式**/
const CardReact: React.FC<ICardProps> = (props) => {
  const { data } = props;
  return (
    <div className="card">
    	<div>{data.title}</div>
      <div>待实现</div>
    </div>
  );
};

const CardList: React.FC<{ list: IDirectVoucher[] }> = (props) => {
  return (
    <>
      {props.list.map((data) => (
        <CardReact data={data} />
      ))}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app-react'));
root.render(<CardList list={cardDataList} />);

