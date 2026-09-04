import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-CfT4cgn7.js";import{n as a,t as o}from"./Legend-XcO656Mc.js";import{n as s,t as c}from"./Tooltip-YHivrOZa.js";import{n as l,t as u}from"./ReferenceArea-BXOtZgUB.js";import{n as d,t as f}from"./CartesianGrid-C0BAtXH9.js";import{n as p,t as m}from"./Scatter-1pIxgP4h.js";import{n as h,t as g}from"./XAxis-BC2eC402.js";import{n as _,t as v}from"./YAxis-Ch1VfSce.js";import{n as y,t as b}from"./ZAxis-AM4UfM6E.js";import{n as x,t as S}from"./ScatterChart-CRWwXPlP.js";import{n as C,t as w}from"./utils-vqcWnakT.js";import{t as T}from"./assertNotNull-BvM1b6J5.js";import{n as E,t as D}from"./ScatterChartArgs-BTSdCahn.js";var O;function k(){return(k=t((()=>{O=[{year:2011,babies:312,length:194.5},{year:2012,babies:335,length:345.333},{year:2013,babies:366,length:243.667},{year:2014,babies:409,length:843.5},{year:2015,babies:382,length:484.4},{year:2016,babies:427,length:735.898},{year:2017,babies:439,length:733.833},{year:2018,babies:430,length:638.625},{year:2019,babies:438,length:700.172},{year:2020,babies:463,length:1009.8},{year:2021,babies:568,length:1556.52},{year:2022,babies:476,length:1288.42}]})))()}var A,j,M,N,P,F,I,L;function R(){return(R=t((()=>{A=e(n()),d(),a(),l(),i(),p(),x(),s(),h(),_(),y(),C(),k(),E(),j={component:S,argTypes:D,docs:{autodocs:!1}},M={render:e=>A.createElement(S,e,A.createElement(f,{vertical:!1,yAxisId:`axis-babies`}),A.createElement(g,{type:`category`,dataKey:`year`,name:`Year`}),A.createElement(v,{yAxisId:`axis-babies`,type:`number`,dataKey:`babies`,label:{value:`Babies born`,position:`center`,angle:-90,stroke:`black`,dx:-20},domain:[`dataMin`,`dataMax`],stroke:`black`,name:`Babies born`,unit:``,orientation:`left`,axisLine:!1,tickLine:!1,tickCount:5}),A.createElement(v,{yAxisId:`axis-youtube`,type:`number`,dataKey:`length`,stroke:`red`,orientation:`right`,name:`Video length`,unit:``,domain:[`dataMin`,`dataMax`],label:{value:`Length in seconds`,position:`center`,angle:90,stroke:`red`,dx:30},tickCount:5,axisLine:!1,tickLine:!1}),A.createElement(o,null),A.createElement(m,{lineType:`joint`,line:!0,name:`Babies of all sexes born in the US named Mara. Source: US Social Security Administration (https://www.ssa.gov/oact/babynames/index.html)`,yAxisId:`axis-babies`,fill:`black`,shape:`diamond`,strokeWidth:2,strokeDasharray:`3 1`}),A.createElement(m,{line:!0,lineType:`joint`,name:`Average length of Stand-up Maths YouTube videos. Source: YouTube`,yAxisId:`axis-youtube`,fill:`red`,strokeWidth:2,shape:`circle`}),A.createElement(c,{cursor:{strokeDasharray:`3 3`},shared:!1})),args:{...w(D),width:800,height:400,margin:{top:0,right:20,bottom:0,left:20},data:O}},N={render:e=>A.createElement(r,{width:`100%`,height:400},A.createElement(S,null,A.createElement(f,null),A.createElement(g,{type:`category`,allowDuplicatedCategory:!!e.allowDuplicatedCategory,dataKey:`x`,name:`stature`,unit:`cm`}),A.createElement(v,{type:`category`,allowDuplicatedCategory:!!e.allowDuplicatedCategory,dataKey:`y`,name:`weight`,unit:`kg`}),A.createElement(m,{activeShape:{fill:`red`},name:`A school`,data:[{x:100,y:100,z:200},{x:100,y:200,z:200},{x:100,y:300,z:200}]}),A.createElement(c,{cursor:{strokeDasharray:`3 3`}}),A.createElement(o,null))),args:{allowDuplicatedCategory:!1}},P={render:e=>{let t=[{x:{value:1},name:`x1`},{x:{value:2},name:`x2`},{x:{value:3},name:`x3`}],n=[{y:{value:3},name:`y1`},{y:{value:2},name:`y2`},{y:{value:1},name:`y3`}],r=e=>(T(e.x),e.x.value),i=e=>(T(e.y),e.y.value),[a,s]=(0,A.useState)(!1),[l,u]=(0,A.useState)(!0);return A.createElement(A.Fragment,null,A.createElement(`button`,{type:`button`,onClick:()=>{s(!1),u(!0)}},`Use data1`),A.createElement(`button`,{type:`button`,onClick:()=>{s(!0),u(!0)}},`Use data2`),A.createElement(`button`,{type:`button`,onClick:()=>{u(!1)}},`Hide`),A.createElement(S,{...e,data:a?n:t},A.createElement(f,{strokeDasharray:`3 3`}),A.createElement(g,{dataKey:`name`,padding:{left:30,right:30}}),A.createElement(v,{dataKey:a?i:r,width:`auto`}),A.createElement(b,{range:[200,200]}),A.createElement(c,null),A.createElement(o,null),A.createElement(m,{name:`Animated Scatter`,lineType:`joint`,line:!0,hide:!l,dataKey:a?i:r,stroke:`#8884d8`,fill:`#8884d8`,strokeWidth:3,strokeDasharray:`2 2`,label:{fill:`red`,dy:-25,dataKey:a?i:r}})))},args:{...w(D),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}},F=e=>{let t=new Date(e),n=t.getHours(),r=t.getMinutes(),i=n>=12?`PM`:`AM`;return n%=12,n=n===0?12:n,r>0?`${n}:${r.toString().padStart(2,`0`)} ${i}`:`${n} ${i}`},I={render:()=>A.createElement(r,{width:`100%`,height:400},A.createElement(S,{margin:{top:20,right:20,bottom:20,left:20}},A.createElement(f,null),A.createElement(u,{y1:70,y2:150}),A.createElement(g,{type:`number`,allowDataOverflow:!0,ticks:[new Date(`2025-05-06T00:00:00`).getTime(),new Date(`2025-05-06T03:00:00`).getTime(),new Date(`2025-05-06T06:00:00`).getTime(),new Date(`2025-05-06T09:00:00`).getTime(),new Date(`2025-05-06T12:00:00`).getTime(),new Date(`2025-05-06T15:00:00`).getTime(),new Date(`2025-05-06T18:00:00`).getTime(),new Date(`2025-05-06T21:00:00`).getTime(),new Date(`2025-05-07T00:00:00`).getTime()],tickFormatter:(e,t)=>typeof e==`number`?F(e):String(e),dataKey:`hour`,domain:[new Date(`2025-05-06T00:00:00`).getTime(),new Date(`2025-05-07T00:00:00`).getTime()]}),A.createElement(v,{allowDataOverflow:!0,type:`number`,ticks:[0,80,180,220]}),A.createElement(c,{cursor:{strokeDasharray:`3 3`}}),A.createElement(m,{name:`A school`,data:[],fill:`#8884d8`})))},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L=[`SpurriousCorrelation`,`WithDuplicatedCategory`,`ChangingDataKey`,`EmptyChart`]})))()}R();export{P as ChangingDataKey,I as EmptyChart,M as SpurriousCorrelation,N as WithDuplicatedCategory,L as __namedExportsOrder,j as default};