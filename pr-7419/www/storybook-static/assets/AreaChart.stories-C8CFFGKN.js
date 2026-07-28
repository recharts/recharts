import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,J as i,Q as a,R as o,Rt as s,Vn as c,kn as l,m as u,t as d,u as f}from"./iframe-BiMB5Acc.js";import{p,t as m}from"./data-J2vpPkF6.js";import{o as h,r as g}from"./Page-C0w_0_Yr.js";import{n as _,t as v}from"./utils-4uF5A2JM.js";import{n as y,t as b}from"./AreaChartArgs-f-9wms1F.js";var x,S,C,w,T,E,D,O,k;e((()=>{x=t(n()),m(),d(),_(),y(),S={component:u,docs:{autodocs:!1},argTypes:b},C={render:e=>x.createElement(c,{width:`100%`,height:`100%`},x.createElement(u,e,x.createElement(a,{strokeDasharray:`3 3`}),x.createElement(o,null),x.createElement(r,{dataKey:`x`,type:`number`,scale:`time`,domain:[`auto`,`auto`]}),x.createElement(i,{type:`monotone`,dataKey:`y`,stackId:`1`,stroke:`#8884d8`,fill:`#8884d8`}),x.createElement(i,{type:`monotone`,dataKey:`z`,stackId:`1`,stroke:`#82ca9d`,fill:`#82ca9d`}),x.createElement(s,{active:!0,defaultIndex:2}),x.createElement(l,null))),args:{...v(b),width:500,height:400,data:p,margin:{top:10,right:30,left:0,bottom:0}}},w={render:e=>x.createElement(c,{width:`100%`,height:`100%`},x.createElement(u,e,x.createElement(r,{dataKey:`day`}),x.createElement(o,null),x.createElement(i,{dataKey:`temperature`,stroke:`#d82428`,fill:`#8884d8`}),x.createElement(s,{defaultIndex:4,active:!0}))),args:{...v(b),width:500,height:400,data:h,margin:{top:10,right:30,left:0,bottom:0}}},T=[{timeHorizon:1,range:[-2.1,12.6]},{timeHorizon:3,range:[1,9.5]},{timeHorizon:5,range:[2,8.5]},{timeHorizon:10,range:[2.9,7.6]},{timeHorizon:15,range:[3.4,7.1]}],E={render:()=>x.createElement(c,{width:`100%`,height:`100%`},x.createElement(u,{data:T,width:1e3,height:600,margin:{top:20,right:200,bottom:20,left:20}},x.createElement(`defs`,null,x.createElement(`linearGradient`,{id:`fill-gradient`,gradientTransform:`rotate(90)`},x.createElement(`stop`,{offset:`5%`,stopColor:`green`,stopOpacity:1}),x.createElement(`stop`,{offset:.86,stopColor:`green`,stopOpacity:.1}),x.createElement(`stop`,{offset:.86,stopColor:`red`,stopOpacity:.1}),x.createElement(`stop`,{offset:`95%`,stopColor:`red`,stopOpacity:1}))),x.createElement(i,{type:`monotone`,dataKey:`range`,fill:`url(#fill-gradient)`,stroke:`none`}),x.createElement(r,{dataKey:`timeHorizon`,type:`number`,domain:[1,`dataMax`],axisLine:!1,ticks:[1,3,5,10,15],unit:` yr`}),x.createElement(o,{unit:`%`,ticks:[-5,0,5,10,15],domain:[-5,15]}),x.createElement(s,null))),args:{...v(b)}},D={render:e=>{let[t,n]=x.useState(`uv`);return x.createElement(x.Fragment,null,x.createElement(`form`,{style:{display:`flex`,flexDirection:`column`},onChange:e=>`value`in e.target&&typeof e.target.value==`string`&&n(e.target.value)},x.createElement(`label`,{htmlFor:`dataKey-uv`,style:{display:`flex`,flexDirection:`row`}},x.createElement(`input`,{type:`radio`,id:`dataKey-uv`,name:`dataKey`,value:`uv`,defaultChecked:t===`uv`}),`dataKey=uv`),x.createElement(`label`,{htmlFor:`dataKey-pv`,style:{display:`flex`,flexDirection:`row`}},x.createElement(`input`,{type:`radio`,id:`dataKey-pv`,name:`dataKey`,value:`pv`,defaultChecked:t===`pv`}),`dataKey=pv`),x.createElement(`label`,{htmlFor:`dataKey-empty`,style:{display:`flex`,flexDirection:`row`}},x.createElement(`input`,{type:`radio`,id:`dataKey-empty`,name:`dataKey`,value:`hidden`,defaultChecked:t===`hidden`}),`Hidden`)),x.createElement(c,{width:`100%`},x.createElement(f,e,x.createElement(l,null),x.createElement(r,{dataKey:`name`}),x.createElement(o,null),x.createElement(i,{dataKey:t,label:{fill:`green`},dot:!0}),x.createElement(s,null))))},args:{...v(b),width:500,height:400,data:g,margin:{top:10,right:30,left:0,bottom:0}}},O={render:e=>{let[t,n]=x.useState([]),s=({dataKey:e})=>{typeof e==`string`&&n(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return x.createElement(c,{width:`100%`,height:`100%`},x.createElement(u,{...e,stackOffset:`silhouette`},x.createElement(a,{strokeDasharray:`3 3`}),x.createElement(r,{dataKey:`name`}),x.createElement(o,null),x.createElement(i,{type:`monotone`,dataKey:`uv`,stackId:`1`,stroke:`#8884d8`,strokeWidth:3,fill:`rgba(136,132,216,0.47)`,hide:t.includes(`uv`),animationBegin:0}),x.createElement(i,{type:`monotone`,dataKey:`pv`,stackId:`1`,stroke:`#82ca9d`,strokeWidth:3,fill:`rgba(130,202,157,0.47)`,hide:t.includes(`pv`),animationBegin:300}),x.createElement(i,{type:`monotone`,dataKey:`amt`,stackId:`1`,stroke:`#ffc658`,strokeWidth:3,fill:`rgba(255,198,88,0.47)`,hide:t.includes(`amt`),animationBegin:600}),x.createElement(l,{content:({payload:e})=>x.createElement(`ul`,{style:{display:`flex`,flexDirection:`row`,listStyleType:`none`,padding:0}},e?.map((e,n)=>x.createElement(`li`,{key:`item-${n}`,style:{color:e.color}},x.createElement(`button`,{type:`button`,onClick:()=>s(e),style:{background:`none`,border:e.inactive?`3px solid #ccc`:`3px solid ${e.color}`,borderRadius:`20%`,padding:`10px`,cursor:`pointer`,opacity:typeof e.dataKey==`string`&&t.includes(e.dataKey)?.2:1}},e.value))))})))},args:{...v(b),width:500,height:400,data:g,margin:{top:10,right:30,left:0,bottom:0}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis />
          <XAxis dataKey="x" type="number" scale="time" domain={['auto', 'auto']} />
          <Area type="monotone" dataKey="y" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="z" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Tooltip active defaultIndex={2} />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: timeData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <XAxis dataKey="day" />
          <YAxis />
          <Area dataKey="temperature" stroke="#d82428" fill="#8884d8" />
          <Tooltip defaultIndex={4} active />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: rangeData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={rangeData2} width={1000} height={600} margin={{
        top: 20,
        right: 200,
        bottom: 20,
        left: 20
      }}>
          <defs>
            <linearGradient id="fill-gradient" gradientTransform="rotate(90)">
              <stop offset="5%" stopColor="green" stopOpacity={1} />
              <stop offset={0.86} stopColor="green" stopOpacity={0.1} />
              <stop offset={0.86} stopColor="red" stopOpacity={0.1} />
              <stop offset="95%" stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="range" fill="url(#fill-gradient)" stroke="none" />
          <XAxis dataKey="timeHorizon" type="number" domain={[1, 'dataMax']} axisLine={false} ticks={[1, 3, 5, 10, 15]} unit=" yr" />
          <YAxis unit="%" ticks={[-5, 0, 5, 10, 15]} domain={[-5, 15]} />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs)
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [dataKey, setDataKey] = React.useState('uv');
    return <>
        <form style={{
        display: 'flex',
        flexDirection: 'column'
      }} onChange={e => 'value' in e.target && typeof e.target.value === 'string' && setDataKey(e.target.value)}>
          <label htmlFor="dataKey-uv" style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
            <input type="radio" id="dataKey-uv" name="dataKey" value="uv" defaultChecked={dataKey === 'uv'} />
            dataKey=uv
          </label>
          <label htmlFor="dataKey-pv" style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
            <input type="radio" id="dataKey-pv" name="dataKey" value="pv" defaultChecked={dataKey === 'pv'} />
            dataKey=pv
          </label>
          <label htmlFor="dataKey-empty" style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
            <input type="radio" id="dataKey-empty" name="dataKey" value="hidden" defaultChecked={dataKey === 'hidden'} />
            Hidden
          </label>
        </form>
        <ResponsiveContainer width="100%">
          <ComposedChart {...args}>
            <Legend />
            <XAxis dataKey="name" />
            <YAxis />
            <Area dataKey={dataKey} label={{
            fill: 'green'
          }} dot />
            <Tooltip />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: pageData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  // Reproducing https://github.com/recharts/recharts/issues/5992
  render: (args: Args) => {
    const [hiddenItems, setHiddenItems] = React.useState<ReadonlyArray<string>>([]);
    const handleClick = ({
      dataKey
    }: LegendPayload) => {
      if (typeof dataKey !== 'string') {
        return;
      }
      setHiddenItems(prev => prev.includes(dataKey) ? prev.filter(key => key !== dataKey) : [...prev, dataKey]);
    };
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args} stackOffset="silhouette">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" strokeWidth={3} fill="rgba(136,132,216,0.47)" hide={hiddenItems.includes('uv')} animationBegin={0} />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" strokeWidth={3} fill="rgba(130,202,157,0.47)" hide={hiddenItems.includes('pv')} animationBegin={300} />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" strokeWidth={3} fill="rgba(255,198,88,0.47)" hide={hiddenItems.includes('amt')} animationBegin={600} />
          <Legend content={({
          payload
        }) => <ul style={{
          display: 'flex',
          flexDirection: 'row',
          listStyleType: 'none',
          padding: 0
        }}>
                {payload?.map((entry, index) => <li key={\`item-\${index}\`} style={{
            color: entry.color
          }}>
                    <button type="button" onClick={() => handleClick(entry)} style={{
              background: 'none',
              border: entry.inactive ? '3px solid #ccc' : \`3px solid \${entry.color}\`,
              borderRadius: '20%',
              padding: '10px',
              cursor: 'pointer',
              opacity: typeof entry.dataKey === 'string' && hiddenItems.includes(entry.dataKey) ? 0.2 : 1
            }}>
                      {entry.value}
                    </button>
                  </li>)}
              </ul>} />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: pageData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }
}`,...O.parameters?.docs?.source}}},k=[`StackedAreaChart`,`RangedAreaChart`,`RangedAreaChartWithGradient`,`WithChangingDataKeyAndAnimations`,`StackedAreaWithCustomLegend`]}))();export{w as RangedAreaChart,E as RangedAreaChartWithGradient,C as StackedAreaChart,O as StackedAreaWithCustomLegend,D as WithChangingDataKeyAndAnimations,k as __namedExportsOrder,S as default};