import React, {useState} from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import moment from 'moment'
import {Row, Col, Card, Avatar, Typography, Select} from 'antd'
const News = ({simplified}) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const {data: cryptoNews, isFetching} = useGetCryptoNewsQuery({newsCategory, count: simplified? 6 : 12})
    const {data} = useGetCryptosQuery(100)
    const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'
  

    if(isFetching) return 'Loading...'
    else if(!isFetching && !cryptoNews) return 'No data'

    return (
        <Row gutter={[24, 24]}>
          {!simplified &&
          <Col span={24}>
            <Select
            showSearch
            className='select-news'
            placeholder='Select a Crypto'
            optionFilterProp='children'
            onChange={value=>setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase())}
            >
              <Select.Option value='Cryptocurrency'>Cryptocurrency</Select.Option>
              {data?.data?.coins.map(coin=> <Select.Option value={coin.name}>{coin.name}</Select.Option>)}
            </Select>
          </Col>
          }
          {cryptoNews.value?.map((news, index)=> 
          <Col xs={24} sm={12} lg={8} ke={index}>
            <Card hoverable className='news-card'>
              <a href={news.url} target='_blank' rel='noreferrer'>
                <div className='news-image-container'>
                  <Typography.Title className='news-title' level={4}>{news.name}</Typography.Title>
                  <img style={{maxWidth:'200px', maxHeight:'100px'}} src={news?.image?.thumbnail?.contentUrl ?? demoImage} alt='news'/>
                </div>
                <p>
                  {news.description > 100
                    ?`${news.description.substring(0,100)}...`
                    : news.description
                  }
                </p>
                <div className='provider-container'>
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl ?? demoImage} alt='news'/>
                    <Typography.Text className='provider-name'>{news.provider[0]?.name}</Typography.Text>
                  </div>
                    <Typography.Text>{moment(news.datePublished).startOf('ss').fromNow()}</Typography.Text>
                </div>
              </a>
            </Card>
          </Col>
          )}

        </Row>
    )
}

export default News
