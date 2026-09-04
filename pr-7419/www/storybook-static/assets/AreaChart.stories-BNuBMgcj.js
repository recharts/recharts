import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-CfT4cgn7.js";import{n as a,t as o}from"./Legend-XcO656Mc.js";import{n as s,t as c}from"./Tooltip-YHivrOZa.js";import{n as l,t as u}from"./CartesianGrid-C0BAtXH9.js";import{n as d,t as f}from"./Area-CqYIOjBK.js";import{n as p,t as m}from"./XAxis-BC2eC402.js";import{n as h,t as g}from"./YAxis-Ch1VfSce.js";import{n as _,t as v}from"./AreaChart-en3j8Hu5.js";import{n as y,t as b}from"./ComposedChart-CZOHGVI-.js";import{o as x,r as S,t as C}from"./Page-DUsfWi7y.js";import{i as w,r as T}from"./Time-CX10VzMO.js";import{n as E,t as D}from"./utils-vqcWnakT.js";import{n as O,t as k}from"./AreaChartArgs-BTSdCahn.js";var A,j,M,N,P,F,I,L,R;function z(){return(z=t((()=>{A=e(n()),C(),T(),_(),i(),l(),p(),h(),s(),d(),a(),y(),E(),O(),j={component:v,docs:{autodocs:!1},argTypes:k},M={render:e=>A.createElement(r,{width:`100%`,height:`100%`},A.createElement(v,e,A.createElement(u,{strokeDasharray:`3 3`}),A.createElement(g,null),A.createElement(m,{dataKey:`x`,type:`number`,scale:`time`,domain:[`auto`,`auto`]}),A.createElement(f,{type:`monotone`,dataKey:`y`,stackId:`1`,stroke:`#8884d8`,fill:`#8884d8`}),A.createElement(f,{type:`monotone`,dataKey:`z`,stackId:`1`,stroke:`#82ca9d`,fill:`#82ca9d`}),A.createElement(c,{active:!0,defaultIndex:2}),A.createElement(o,null))),args:{...D(k),width:500,height:400,data:w,margin:{top:10,right:30,left:0,bottom:0}}},N={render:e=>A.createElement(r,{width:`100%`,height:`100%`},A.createElement(v,e,A.createElement(m,{dataKey:`day`}),A.createElement(g,null),A.createElement(f,{dataKey:`temperature`,stroke:`#d82428`,fill:`#8884d8`}),A.createElement(c,{defaultIndex:4,active:!0}))),args:{...D(k),width:500,height:400,data:x,margin:{top:10,right:30,left:0,bottom:0}}},P=[{timeHorizon:1,range:[-2.1,12.6]},{timeHorizon:3,range:[1,9.5]},{timeHorizon:5,range:[2,8.5]},{timeHorizon:10,range:[2.9,7.6]},{timeHorizon:15,range:[3.4,7.1]}],F={render:()=>A.createElement(r,{width:`100%`,height:`100%`},A.createElement(v,{data:P,width:1e3,height:600,margin:{top:20,right:200,bottom:20,left:20}},A.createElement(`defs`,null,A.createElement(`linearGradient`,{id:`fill-gradient`,gradientTransform:`rotate(90)`},A.createElement(`stop`,{offset:`5%`,stopColor:`green`,stopOpacity:1}),A.createElement(`stop`,{offset:.86,stopColor:`green`,stopOpacity:.1}),A.createElement(`stop`,{offset:.86,stopColor:`red`,stopOpacity:.1}),A.createElement(`stop`,{offset:`95%`,stopColor:`red`,stopOpacity:1}))),A.createElement(f,{type:`monotone`,dataKey:`range`,fill:`url(#fill-gradient)`,stroke:`none`}),A.createElement(m,{dataKey:`timeHorizon`,type:`number`,domain:[1,`dataMax`],axisLine:!1,ticks:[1,3,5,10,15],unit:` yr`}),A.createElement(g,{unit:`%`,ticks:[-5,0,5,10,15],domain:[-5,15]}),A.createElement(c,null))),args:{...D(k)}},I={render:e=>{let[t,n]=A.useState(`uv`);return A.createElement(A.Fragment,null,A.createElement(`form`,{style:{display:`flex`,flexDirection:`column`},onChange:e=>`value`in e.target&&typeof e.target.value==`string`&&n(e.target.value)},A.createElement(`label`,{htmlFor:`dataKey-uv`,style:{display:`flex`,flexDirection:`row`}},A.createElement(`input`,{type:`radio`,id:`dataKey-uv`,name:`dataKey`,value:`uv`,defaultChecked:t===`uv`}),`dataKey=uv`),A.createElement(`label`,{htmlFor:`dataKey-pv`,style:{display:`flex`,flexDirection:`row`}},A.createElement(`input`,{type:`radio`,id:`dataKey-pv`,name:`dataKey`,value:`pv`,defaultChecked:t===`pv`}),`dataKey=pv`),A.createElement(`label`,{htmlFor:`dataKey-empty`,style:{display:`flex`,flexDirection:`row`}},A.createElement(`input`,{type:`radio`,id:`dataKey-empty`,name:`dataKey`,value:`hidden`,defaultChecked:t===`hidden`}),`Hidden`)),A.createElement(r,{width:`100%`},A.createElement(b,e,A.createElement(o,null),A.createElement(m,{dataKey:`name`}),A.createElement(g,null),A.createElement(f,{dataKey:t,label:{fill:`green`},dot:!0}),A.createElement(c,null))))},args:{...D(k),width:500,height:400,data:S,margin:{top:10,right:30,left:0,bottom:0}}},L={render:e=>{let[t,n]=A.useState([]),i=({dataKey:e})=>{typeof e==`string`&&n(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return A.createElement(r,{width:`100%`,height:`100%`},A.createElement(v,{...e,stackOffset:`silhouette`},A.createElement(u,{strokeDasharray:`3 3`}),A.createElement(m,{dataKey:`name`}),A.createElement(g,null),A.createElement(f,{type:`monotone`,dataKey:`uv`,stackId:`1`,stroke:`#8884d8`,strokeWidth:3,fill:`rgba(136,132,216,0.47)`,hide:t.includes(`uv`),animationBegin:0}),A.createElement(f,{type:`monotone`,dataKey:`pv`,stackId:`1`,stroke:`#82ca9d`,strokeWidth:3,fill:`rgba(130,202,157,0.47)`,hide:t.includes(`pv`),animationBegin:300}),A.createElement(f,{type:`monotone`,dataKey:`amt`,stackId:`1`,stroke:`#ffc658`,strokeWidth:3,fill:`rgba(255,198,88,0.47)`,hide:t.includes(`amt`),animationBegin:600}),A.createElement(o,{content:({payload:e})=>A.createElement(`ul`,{style:{display:`flex`,flexDirection:`row`,listStyleType:`none`,padding:0}},e?.map((e,n)=>A.createElement(`li`,{key:`item-${n}`,style:{color:e.color}},A.createElement(`button`,{type:`button`,onClick:()=>i(e),style:{background:`none`,border:e.inactive?`3px solid #ccc`:`3px solid ${e.color}`,borderRadius:`20%`,padding:`10px`,cursor:`pointer`,opacity:typeof e.dataKey==`string`&&t.includes(e.dataKey)?.2:1}},e.value))))})))},args:{...D(k),width:500,height:400,data:S,margin:{top:10,right:30,left:0,bottom:0}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`StackedAreaChart`,`RangedAreaChart`,`RangedAreaChartWithGradient`,`WithChangingDataKeyAndAnimations`,`StackedAreaWithCustomLegend`]})))()}z();export{N as RangedAreaChart,F as RangedAreaChartWithGradient,M as StackedAreaChart,L as StackedAreaWithCustomLegend,I as WithChangingDataKeyAndAnimations,R as __namedExportsOrder,j as default};