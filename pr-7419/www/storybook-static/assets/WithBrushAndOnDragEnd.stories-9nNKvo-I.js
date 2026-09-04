import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-CfT4cgn7.js";import{n as a,t as o}from"./Brush-BT3Khapq.js";import{n as s,t as c}from"./Bar-CQB3-sR3.js";import{n as l,t as u}from"./XAxis-BC2eC402.js";import{n as d,t as f}from"./YAxis-Ch1VfSce.js";import{n as p,t as m}from"./BarChart-CpIQPN2H.js";import{n as h,r as g}from"./Time-CX10VzMO.js";var _,v,y,b;function x(){return(x=t((()=>{_=e(n()),a(),i(),s(),p(),l(),d(),g(),v={title:`Examples/cartesian/Bar/With Brush and onDragEnd`},y={render:()=>{let[e,t]=_.useState({startIndex:0,endIndex:h.length-1});return _.createElement(`div`,{style:{width:`100%`,height:`calc(100% - 84px)`}},_.createElement(`div`,null,`Start index:`,e.startIndex),_.createElement(`div`,null,`End index:`,e.endIndex),_.createElement(r,null,_.createElement(m,{data:h},_.createElement(u,{dataKey:`value`}),_.createElement(f,null),_.createElement(o,{dataKey:`name`,height:30,onDragEnd:e=>{t(e)}}),_.createElement(c,{dataKey:`value`}))))}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...y.parameters?.docs?.source}}},b=[`WithBrushAndOnDragEnd`]})))()}x();export{y as WithBrushAndOnDragEnd,b as __namedExportsOrder,v as default};