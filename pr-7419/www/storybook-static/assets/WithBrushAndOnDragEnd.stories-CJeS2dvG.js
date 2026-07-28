import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,O as i,R as a,Vn as o,W as s,ct as c,t as l}from"./iframe-BiMB5Acc.js";import{d as u,t as d}from"./data-J2vpPkF6.js";var f,p,m,h;e((()=>{f=t(n()),l(),d(),p={title:`Examples/cartesian/Bar/With Brush and onDragEnd`},m={render:()=>{let[e,t]=f.useState({startIndex:0,endIndex:u.length-1});return f.createElement(`div`,{style:{width:`100%`,height:`calc(100% - 84px)`}},f.createElement(`div`,null,`Start index:`,e.startIndex),f.createElement(`div`,null,`End index:`,e.endIndex),f.createElement(o,null,f.createElement(i,{data:u},f.createElement(r,{dataKey:`value`}),f.createElement(a,null),f.createElement(c,{dataKey:`name`,height:30,onDragEnd:e=>{t(e)}}),f.createElement(s,{dataKey:`value`}))))}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`WithBrushAndOnDragEnd`]}))();export{m as WithBrushAndOnDragEnd,h as __namedExportsOrder,p as default};