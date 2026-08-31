import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-Dy7ciYWo.js";import{n as a,t as o}from"./Line-CCKkHve0.js";import{n as s,t as c}from"./XAxis-B3WODRl4.js";import{n as l,t as u}from"./LineChart-BRH708ee.js";import{n as d,t as f}from"./Tick-BmTbv5eM.js";var p,m,h,g;function _(){return(_=t((()=>{p=e(n()),a(),l(),i(),s(),f(),m={title:`Examples/cartesian/Cartesian Axis/Tick Positioning`},h={render:()=>p.createElement(r,null,p.createElement(u,{data:d,margin:{top:20,right:30,left:20,bottom:20}},p.createElement(o,{dataKey:`coordinate`}),[`preserveStart`,`preserveEnd`,`preserveStartEnd`,`equidistantPreserveStart`,0].map((e,t)=>p.createElement(c,{dataKey:`value`,key:e,interval:e,xAxisId:t,label:e,height:70}))))},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`TickPositioning`]})))()}_();export{h as TickPositioning,g as __namedExportsOrder,m as default};