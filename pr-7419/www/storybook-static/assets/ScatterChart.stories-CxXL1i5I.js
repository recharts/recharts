import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,H as i,I as a,Q as o,R as s,Rt as c,Vn as l,g as u,kn as d,nt as f,t as p}from"./iframe-BiMB5Acc.js";import{n as m,t as h}from"./utils-4uF5A2JM.js";import{n as g,t as _}from"./assertNotNull-yYG3ZHnW.js";import{n as v,t as y}from"./ScatterChartArgs-f-9wms1F.js";var b,x=e((()=>{b=[{year:2011,babies:312,length:194.5},{year:2012,babies:335,length:345.333},{year:2013,babies:366,length:243.667},{year:2014,babies:409,length:843.5},{year:2015,babies:382,length:484.4},{year:2016,babies:427,length:735.898},{year:2017,babies:439,length:733.833},{year:2018,babies:430,length:638.625},{year:2019,babies:438,length:700.172},{year:2020,babies:463,length:1009.8},{year:2021,babies:568,length:1556.52},{year:2022,babies:476,length:1288.42}]})),S,C,w,T,E,D,O,k;e((()=>{S=t(n()),p(),m(),x(),v(),g(),C={component:u,argTypes:y,docs:{autodocs:!1}},w={render:e=>S.createElement(u,e,S.createElement(o,{vertical:!1,yAxisId:`axis-babies`}),S.createElement(r,{type:`category`,dataKey:`year`,name:`Year`}),S.createElement(s,{yAxisId:`axis-babies`,type:`number`,dataKey:`babies`,label:{value:`Babies born`,position:`center`,angle:-90,stroke:`black`,dx:-20},domain:[`dataMin`,`dataMax`],stroke:`black`,name:`Babies born`,unit:``,orientation:`left`,axisLine:!1,tickLine:!1,tickCount:5}),S.createElement(s,{yAxisId:`axis-youtube`,type:`number`,dataKey:`length`,stroke:`red`,orientation:`right`,name:`Video length`,unit:``,domain:[`dataMin`,`dataMax`],label:{value:`Length in seconds`,position:`center`,angle:90,stroke:`red`,dx:30},tickCount:5,axisLine:!1,tickLine:!1}),S.createElement(d,null),S.createElement(i,{lineType:`joint`,line:!0,name:`Babies of all sexes born in the US named Mara. Source: US Social Security Administration (https://www.ssa.gov/oact/babynames/index.html)`,yAxisId:`axis-babies`,fill:`black`,shape:`diamond`,strokeWidth:2,strokeDasharray:`3 1`}),S.createElement(i,{line:!0,lineType:`joint`,name:`Average length of Stand-up Maths YouTube videos. Source: YouTube`,yAxisId:`axis-youtube`,fill:`red`,strokeWidth:2,shape:`circle`}),S.createElement(c,{cursor:{strokeDasharray:`3 3`},shared:!1})),args:{...h(y),width:800,height:400,margin:{top:0,right:20,bottom:0,left:20},data:b}},T={render:e=>S.createElement(l,{width:`100%`,height:400},S.createElement(u,null,S.createElement(o,null),S.createElement(r,{type:`category`,allowDuplicatedCategory:!!e.allowDuplicatedCategory,dataKey:`x`,name:`stature`,unit:`cm`}),S.createElement(s,{type:`category`,allowDuplicatedCategory:!!e.allowDuplicatedCategory,dataKey:`y`,name:`weight`,unit:`kg`}),S.createElement(i,{activeShape:{fill:`red`},name:`A school`,data:[{x:100,y:100,z:200},{x:100,y:200,z:200},{x:100,y:300,z:200}]}),S.createElement(c,{cursor:{strokeDasharray:`3 3`}}),S.createElement(d,null))),args:{allowDuplicatedCategory:!1}},E={render:e=>{let t=[{x:{value:1},name:`x1`},{x:{value:2},name:`x2`},{x:{value:3},name:`x3`}],n=[{y:{value:3},name:`y1`},{y:{value:2},name:`y2`},{y:{value:1},name:`y3`}],l=e=>(_(e.x),e.x.value),f=e=>(_(e.y),e.y.value),[p,m]=(0,S.useState)(!1),[h,g]=(0,S.useState)(!0);return S.createElement(S.Fragment,null,S.createElement(`button`,{type:`button`,onClick:()=>{m(!1),g(!0)}},`Use data1`),S.createElement(`button`,{type:`button`,onClick:()=>{m(!0),g(!0)}},`Use data2`),S.createElement(`button`,{type:`button`,onClick:()=>{g(!1)}},`Hide`),S.createElement(u,{...e,data:p?n:t},S.createElement(o,{strokeDasharray:`3 3`}),S.createElement(r,{dataKey:`name`,padding:{left:30,right:30}}),S.createElement(s,{dataKey:p?f:l,width:`auto`}),S.createElement(a,{range:[200,200]}),S.createElement(c,null),S.createElement(d,null),S.createElement(i,{name:`Animated Scatter`,lineType:`joint`,line:!0,hide:!h,dataKey:p?f:l,stroke:`#8884d8`,fill:`#8884d8`,strokeWidth:3,strokeDasharray:`2 2`,label:{fill:`red`,dy:-25,dataKey:p?f:l}})))},args:{...h(y),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}},D=e=>{let t=new Date(e),n=t.getHours(),r=t.getMinutes(),i=n>=12?`PM`:`AM`;return n%=12,n=n===0?12:n,r>0?`${n}:${r.toString().padStart(2,`0`)} ${i}`:`${n} ${i}`},O={render:()=>S.createElement(l,{width:`100%`,height:400},S.createElement(u,{margin:{top:20,right:20,bottom:20,left:20}},S.createElement(o,null),S.createElement(f,{y1:70,y2:150}),S.createElement(r,{type:`number`,allowDataOverflow:!0,ticks:[new Date(`2025-05-06T00:00:00`).getTime(),new Date(`2025-05-06T03:00:00`).getTime(),new Date(`2025-05-06T06:00:00`).getTime(),new Date(`2025-05-06T09:00:00`).getTime(),new Date(`2025-05-06T12:00:00`).getTime(),new Date(`2025-05-06T15:00:00`).getTime(),new Date(`2025-05-06T18:00:00`).getTime(),new Date(`2025-05-06T21:00:00`).getTime(),new Date(`2025-05-07T00:00:00`).getTime()],tickFormatter:(e,t)=>typeof e==`number`?D(e):String(e),dataKey:`hour`,domain:[new Date(`2025-05-06T00:00:00`).getTime(),new Date(`2025-05-07T00:00:00`).getTime()]}),S.createElement(s,{allowDataOverflow:!0,type:`number`,ticks:[0,80,180,220]}),S.createElement(c,{cursor:{strokeDasharray:`3 3`}}),S.createElement(i,{name:`A school`,data:[],fill:`#8884d8`})))},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ScatterChart {...args}>
        <CartesianGrid vertical={false} yAxisId="axis-babies" />
        <XAxis type="category" dataKey="year" name="Year" />
        <YAxis yAxisId="axis-babies" type="number" dataKey="babies" label={{
        value: 'Babies born',
        position: 'center',
        angle: -90,
        stroke: 'black',
        dx: -20
      }} domain={['dataMin', 'dataMax']} stroke="black" name="Babies born" unit="" orientation="left" axisLine={false} tickLine={false} tickCount={5} />
        <YAxis yAxisId="axis-youtube" type="number" dataKey="length" stroke="red" orientation="right" name="Video length" unit="" domain={['dataMin', 'dataMax']} label={{
        value: 'Length in seconds',
        position: 'center',
        angle: 90,
        stroke: 'red',
        dx: 30
      }} tickCount={5} axisLine={false} tickLine={false} />
        <Legend />
        <Scatter lineType="joint" line name="Babies of all sexes born in the US named Mara. Source: US Social Security Administration (https://www.ssa.gov/oact/babynames/index.html)" yAxisId="axis-babies" fill="black" shape="diamond" strokeWidth={2} strokeDasharray="3 1" />
        <Scatter line lineType="joint" name="Average length of Stand-up Maths YouTube videos. Source: YouTube" yAxisId="axis-youtube" fill="red" strokeWidth={2} shape="circle" />
        <Tooltip cursor={{
        strokeDasharray: '3 3'
      }} shared={false} />
      </ScatterChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterChartArgs),
    width: 800,
    height: 400,
    margin: {
      top: 0,
      right: 20,
      bottom: 0,
      left: 20
    },
    data: babiesAndVideosCorrelation
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const data = [{
      x: 100,
      y: 100,
      z: 200
    }, {
      x: 100,
      y: 200,
      z: 200
    }, {
      x: 100,
      y: 300,
      z: 200
    }];
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis type="category" allowDuplicatedCategory={Boolean(args.allowDuplicatedCategory)} dataKey="x" name="stature" unit="cm" />
          <YAxis type="category" allowDuplicatedCategory={Boolean(args.allowDuplicatedCategory)} dataKey="y" name="weight" unit="kg" />
          <Scatter activeShape={{
          fill: 'red'
        }} name="A school" data={data} />
          <Tooltip cursor={{
          strokeDasharray: '3 3'
        }} />
          <Legend />
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    allowDuplicatedCategory: false
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    type MockDataType = {
      x?: {
        value: number;
      };
      y?: {
        value: number;
      };
      name: string;
    };
    const data1: ReadonlyArray<MockDataType> = [{
      x: {
        value: 1
      },
      name: 'x1'
    }, {
      x: {
        value: 2
      },
      name: 'x2'
    }, {
      x: {
        value: 3
      },
      name: 'x3'
    }];
    const data2: ReadonlyArray<MockDataType> = [{
      y: {
        value: 3
      },
      name: 'y1'
    }, {
      y: {
        value: 2
      },
      name: 'y2'
    }, {
      y: {
        value: 1
      },
      name: 'y3'
    }];
    const dataKey1 = (d: MockDataType) => {
      assertNotNull(d.x);
      return d.x.value;
    };
    const dataKey2 = (d: MockDataType) => {
      assertNotNull(d.y);
      return d.y.value;
    };
    const [useData2, setUseData2] = useState(false);
    const [visible, setVisible] = useState(true);
    return <>
        <button type="button" onClick={() => {
        setUseData2(false);
        setVisible(true);
      }}>
          Use data1
        </button>
        <button type="button" onClick={() => {
        setUseData2(true);
        setVisible(true);
      }}>
          Use data2
        </button>
        <button type="button" onClick={() => {
        setVisible(false);
      }}>
          Hide
        </button>
        <ScatterChart {...args} data={useData2 ? data2 : data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{
          left: 30,
          right: 30
        }} />
          <YAxis dataKey={useData2 ? dataKey2 : dataKey1} width="auto" />
          <ZAxis range={[200, 200]} />
          <Tooltip />
          <Legend />
          <Scatter name="Animated Scatter" lineType="joint" line hide={!visible} dataKey={useData2 ? dataKey2 : dataKey1} stroke="#8884d8" fill="#8884d8" strokeWidth={3} strokeDasharray="2 2" label={{
          fill: 'red',
          dy: -25,
          dataKey: useData2 ? dataKey2 : dataKey1
        }} />
        </ScatterChart>
      </>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterChartArgs),
    width: 500,
    height: 300,
    margin: {
      top: 30,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <CartesianGrid />
          <ReferenceArea y1={70} y2={150} />
          <XAxis type="number" allowDataOverflow ticks={[new Date('2025-05-06T00:00:00').getTime(), new Date('2025-05-06T03:00:00').getTime(), new Date('2025-05-06T06:00:00').getTime(), new Date('2025-05-06T09:00:00').getTime(), new Date('2025-05-06T12:00:00').getTime(), new Date('2025-05-06T15:00:00').getTime(), new Date('2025-05-06T18:00:00').getTime(), new Date('2025-05-06T21:00:00').getTime(), new Date('2025-05-07T00:00:00').getTime()]} tickFormatter={(tickValue, _index) => {
          if (typeof tickValue !== 'number') return String(tickValue);
          const label = getHourFromTimestamp(tickValue);
          return label;
        }} dataKey="hour" domain={[new Date('2025-05-06T00:00:00').getTime(), new Date('2025-05-07T00:00:00').getTime()]} />
          <YAxis allowDataOverflow type="number" ticks={[0, 80, 180, 220]} />
          <Tooltip cursor={{
          strokeDasharray: '3 3'
        }} />
          <Scatter name="A school" data={[]} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>;
  }
}`,...O.parameters?.docs?.source}}},k=[`SpurriousCorrelation`,`WithDuplicatedCategory`,`ChangingDataKey`,`EmptyChart`]}))();export{E as ChangingDataKey,O as EmptyChart,w as SpurriousCorrelation,T as WithDuplicatedCategory,k as __namedExportsOrder,C as default};