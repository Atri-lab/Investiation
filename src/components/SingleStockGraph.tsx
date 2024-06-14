import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/SingleStockGraph.css';

const data = [
  {
    name: 'Jan',
    NVIDIA: 1000,
    Apple: 1200,
    Tesla: 1100,
    GoldmanSachs: 900,
    volume: 1200,
    movingAvg: 1100,
    risk: 0.1,
    sharpeRatio: 1.2,
    beta: 1.3,
  },
  {
    name: 'Feb',
    NVIDIA: 1050,
    Apple: 1250,
    Tesla: 1150,
    GoldmanSachs: 950,
    volume: 1300,
    movingAvg: 1150,
    risk: 0.15,
    sharpeRatio: 1.3,
    beta: 1.4,
  },
  {
    name: 'Mar',
    NVIDIA: 1100,
    Apple: 1300,
    Tesla: 1200,
    GoldmanSachs: 1000,
    volume: 1400,
    movingAvg: 1200,
    risk: 0.2,
    sharpeRatio: 1.4,
    beta: 1.5,
  },
  {
    name: 'Apr',
    NVIDIA: 1150,
    Apple: 1350,
    Tesla: 1250,
    GoldmanSachs: 1050,
    volume: 1500,
    movingAvg: 1250,
    risk: 0.25,
    sharpeRatio: 1.5,
    beta: 1.6,
  },
  {
    name: 'May',
    NVIDIA: 1200,
    Apple: 1400,
    Tesla: 1300,
    GoldmanSachs: 1100,
    volume: 1600,
    movingAvg: 1300,
    risk: 0.3,
    sharpeRatio: 1.6,
    beta: 1.7,
  },
];

interface SingleStockGraphProps {
  stock: string;
}

const SingleStockGraph: React.FC<SingleStockGraphProps> = ({ stock }) => {
  return (
    <div className="stock-graph-container">
      <div className="single-stock-graph-graph-wrapper">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" tick={{ fill: '#888' }} />
            <YAxis tick={{ fill: '#888' }} />
            <Tooltip contentStyle={{ backgroundColor: '#222', border: 'none' }} itemStyle={{ color: '#ddd' }} />
            <Legend verticalAlign="top" height={36} />
            {stock === 'NVIDIA' && <Line type="monotone" dataKey="NVIDIA" stroke="#00e676" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />}
            {stock === 'Apple' && <Line type="monotone" dataKey="Apple" stroke="#82ca9d" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />}
            {stock === 'Tesla' && <Line type="monotone" dataKey="Tesla" stroke="#ffc658" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />}
            {stock === 'GoldmanSachs' && <Line type="monotone" dataKey="GoldmanSachs" stroke="#ff7300" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />}
            <Line type="monotone" dataKey="movingAvg" stroke="#007bff" strokeWidth={1.5} dot={false} />
            <Line type="monotone" dataKey="volume" stroke="#413ea0" strokeWidth={1.5} dot={false} />
            <Line type="monotone" dataKey="risk" stroke="#ff1744" strokeWidth={1.5} dot={false} />
            <Line type="monotone" dataKey="sharpeRatio" stroke="#d500f9" strokeWidth={1.5} dot={false} />
            <Line type="monotone" dataKey="beta" stroke="#7b68ee" strokeWidth={1.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SingleStockGraph;