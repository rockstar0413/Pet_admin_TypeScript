import IncreaseGraph from '../../assets/images/IncreaseGraph.svg'
import DecreaseGraph from '../../assets/images/DecreaseGraph.svg'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="mt-[60px] lg:ml-[250px] bg-[#2a2a31] min-h-[calc(100vh-60px)] lg:h-full  p-5 pb-7">
      <div className="text-white font-bold text-2xl mb-20">Dashboard</div>
      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-4 lg:col-span-2 2xl:col-span-1  bg-[#232329] py-2 px-5">
          <div className="text-lg text-[#999999] font-medium uppercase">Invites sent</div>
          <div className="flex justify-between">
            <div className="text-[58px] font-bold text-[#BBBBBB]">3,215</div>
            <div className='flex items-center'>
              <div><img src={IncreaseGraph} alt="IncreaseGraph" /></div>
              <div className="text-[#51B950] text-sm mr-1">+1.7%</div>
              <div className='text-white'>this week</div>
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 2xl:col-span-1 bg-[#232329] py-2 px-5">
          <div className="text-lg text-[#999999] font-medium uppercase">Open rate</div>
          <div className="flex justify-between">
            <div className="text-[58px] font-bold text-[#BBBBBB]">85%</div>
            <div className='flex items-center'>
              <div><img src={IncreaseGraph} alt="IncreaseGraph" /></div>
              <div className="text-[#51B950] text-sm mr-1">+1.7%</div>
              <div className='text-white'>this week</div>
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 2xl:col-span-1 bg-[#232329] py-2 px-5">
          <div className="text-lg text-[#999999] font-medium uppercase">watch status</div>
          <div className="flex justify-between">
            <div>
              <div className="text-[58px] font-bold text-[#BBBBBB]">51</div>
              <div className="text-lg text-[#999999] font-medium uppercase">opened</div>
            </div>
            <div>
              <div className="text-[58px] font-bold text-[#BBBBBB]">39</div>
              <div className="text-lg text-[#999999] font-medium uppercase">partial</div>
            </div>
            <div>
              <div className="text-[58px] font-bold text-[#BBBBBB]">12</div>
              <div className="text-lg text-[#999999] font-medium uppercase">full</div>
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 2xl:col-span-1 bg-[#232329] py-2 px-5">
          <div className="text-lg text-[#999999] font-medium uppercase">unique prospects added</div>
          <div className="flex justify-between">
            <div className="text-[58px] font-bold text-[#F66C7D]">5,414</div>
            <div className='flex items-center'>
              <div><img src={DecreaseGraph} alt="DecreaseGraph" /></div>
              <div className="text-[#F66C7D] text-sm mr-1">+1.7%</div>
              <div className='text-white'>this week</div>
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 2xl:col-span-1 bg-[#232329] py-2 px-5">
          <div className="text-lg text-[#999999] font-medium uppercase">CUSTOMERS CONVERTED</div>
          <div className="flex justify-between">
            <div className="text-[58px] font-bold text-[#51B950]">2,874</div>
            <div className='flex items-center'>
              <div><img src={IncreaseGraph} alt="IncreaseGraph" /></div>
              <div className="text-[#51B950] text-sm mr-1">+1.7%</div>
              <div className='text-white'>this week</div>
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 2xl:col-span-1 bg-[#232329] py-2 px-5">
          <div className="text-lg text-[#999999] font-medium uppercase">DISTRIBUTORS CONVERTED</div>
          <div className="flex justify-between">
            <div className="text-[58px] font-bold text-[#F66C7D]">1,259</div>
            <div className='flex items-center'>
              <div><img src={DecreaseGraph} alt="DecreaseGraph" /></div>
              <div className="text-[#F66C7D] text-sm mr-1">+1.7%</div>
              <div className='text-white'>this week</div>
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 2xl:col-span-1 bg-[#232329] py-2 px-5">
          <div className="text-lg text-[#999999] font-medium uppercase">OVERALL CONVERSION RATE</div>
          <div className="flex justify-between">
            <div className="text-[58px] font-bold text-[#51B950]">39%</div>
            <div className='flex items-center'>
              <div><img src={IncreaseGraph} alt="IncreaseGraph" /></div>
              <div className="text-[#51B950] text-sm mr-1">+1.7%</div>
              <div className='text-white'>this week</div>
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 2xl:col-span-1 bg-[#232329] py-2 px-5">
          <div className="text-lg text-[#999999] font-medium uppercase">Unique app logins</div>
          <div className="flex justify-between">
            <div className="text-[58px] font-bold text-[#51B950]">541</div>
            <div className='flex items-center'>
              <div><img src={IncreaseGraph} alt="IncreaseGraph" /></div>
              <div className="text-[#51B950] text-sm mr-1">+1.7%</div>
              <div className='text-white'>this week</div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <ResponsiveContainer width="100%" height="500px">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Line dataKey="pv" stroke="#8884d8" />
          <Line dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;