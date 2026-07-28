import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{A as r,B as i,Vn as a,X as o,t as s}from"./iframe-BiMB5Acc.js";import{h as c,t as l}from"./data-J2vpPkF6.js";var u,d,f,p;e((()=>{u=t(n()),s(),l(),d={title:`Examples/cartesian/Cartesian Axis/Tick Positioning`},f={render:()=>u.createElement(a,null,u.createElement(r,{data:c,margin:{top:20,right:30,left:20,bottom:20}},u.createElement(o,{dataKey:`coordinate`}),[`preserveStart`,`preserveEnd`,`preserveStartEnd`,`equidistantPreserveStart`,0].map((e,t)=>u.createElement(i,{dataKey:`value`,key:e,interval:e,xAxisId:t,label:e,height:70}))))},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...f.parameters?.docs?.source}}},p=[`TickPositioning`]}))();export{f as TickPositioning,p as __namedExportsOrder,d as default};