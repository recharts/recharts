import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{A as r,B as i,Q as a,R as o,Rt as s,Vn as c,X as l,ct as u,kn as d,ot as f,t as p,u as m}from"./iframe-BiMB5Acc.js";import{t as h}from"./data-J2vpPkF6.js";import{r as g}from"./Page-C0w_0_Yr.js";var _,v,y,b,x,S;e((()=>{_=t(n()),p(),h(),v={component:u},y={render:e=>{let[t,n]=(0,_.useState)(2),[r,i]=(0,_.useState)(5);return _.createElement(_.Fragment,null,_.createElement(c,{width:`100%`,height:400},_.createElement(m,{data:g},_.createElement(l,{dataKey:`uv`,isAnimationActive:!1}),_.createElement(u,{startIndex:t,endIndex:r,onChange:e=>{i(e.endIndex),n(e.startIndex)},alwaysShowText:!0}))),_.createElement(`input`,{type:`number`,"aria-label":`startIndex`,value:t,onChange:e=>{let t=Number(e.target.value);Number.isInteger(t)&&n(t)}}),_.createElement(`input`,{"aria-label":`endIndex`,value:r,onChange:e=>{let t=Number(e.target.value);Number.isInteger(t)&&i(t)}}))}},b={render:e=>_.createElement(m,{width:600,height:300,data:g,margin:{top:0,right:0,left:0,bottom:0}},_.createElement(i,{dataKey:`name`}),_.createElement(o,null),_.createElement(a,{strokeDasharray:`3 3`}),_.createElement(d,null),_.createElement(l,{type:`monotone`,dataKey:`pv`,stroke:`#8884d8`,activeDot:{r:8}}),_.createElement(l,{type:`monotone`,dataKey:`uv`,stroke:`#82ca9d`}),_.createElement(f,{stroke:`red`,strokeOpacity:`red`,strokeWidth:3,strokeLinecap:`round`,y:1e3}),_.createElement(u,{dataKey:`name`},_.createElement(r,null,_.createElement(f,{key:`test`,stroke:`red`,strokeOpacity:`red`,strokeWidth:3,strokeLinecap:`round`,y:1e3}),_.createElement(a,{strokeDasharray:`1 1`,verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),_.createElement(l,{type:`monotone`,dataKey:`pv`,stroke:`#8884d8`,activeDot:{r:8}}),_.createElement(l,{type:`monotone`,dataKey:`uv`,stroke:`#82ca9d`}))),_.createElement(s,null))},x={render:e=>_.createElement(m,{width:600,height:300,data:g},_.createElement(u,null,_.createElement(r,null,_.createElement(f,{key:`test`,stroke:`red`,strokeOpacity:`red`,strokeWidth:3,strokeLinecap:`round`,y:1e3}),_.createElement(a,{strokeDasharray:`1 1`,verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),_.createElement(l,{type:`monotone`,dataKey:`pv`,stroke:`#8884d8`,activeDot:{r:8}}),_.createElement(l,{type:`monotone`,dataKey:`uv`,stroke:`#82ca9d`}))))},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (_args: Args) => {
    const [startIndex, setStartIndex] = useState<number | undefined>(2);
    const [endIndex, setEndIndex] = useState<number | undefined>(5);
    return <>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={pageData}>
            <Line dataKey="uv" isAnimationActive={false} />

            <Brush startIndex={startIndex} endIndex={endIndex} onChange={e => {
            setEndIndex(e.endIndex);
            setStartIndex(e.startIndex);
          }} alwaysShowText />
          </ComposedChart>
        </ResponsiveContainer>
        <input type="number" aria-label="startIndex" value={startIndex} onChange={evt => {
        const num = Number(evt.target.value);
        if (Number.isInteger(num)) setStartIndex(num);
      }} />
        <input aria-label="endIndex" value={endIndex} onChange={evt => {
        const num = Number(evt.target.value);
        if (Number.isInteger(num)) setEndIndex(num);
      }} />
      </>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (_args: Args) => {
    return <ComposedChart width={600} height={300} data={pageData} margin={{
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
        r: 8
      }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <ReferenceLine stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
        <Brush dataKey="name">
          <LineChart>
            <ReferenceLine key="test" stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
            <CartesianGrid strokeDasharray="1 1" verticalPoints={[10, 20, 30]} horizontalPoints={[10, 20, 30]} />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Brush>
        <Tooltip />
      </ComposedChart>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (_args: Args) => {
    return <ComposedChart width={600} height={300} data={pageData}>
        <Brush>
          <LineChart>
            <ReferenceLine key="test" stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
            <CartesianGrid strokeDasharray="1 1" verticalPoints={[10, 20, 30]} horizontalPoints={[10, 20, 30]} />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Brush>
      </ComposedChart>;
  }
}`,...x.parameters?.docs?.source}}},S=[`ControlledBrush`,`PanoramicBrush`,`NoChartBrush`]}))();export{y as ControlledBrush,x as NoChartBrush,b as PanoramicBrush,S as __namedExportsOrder,v as default};