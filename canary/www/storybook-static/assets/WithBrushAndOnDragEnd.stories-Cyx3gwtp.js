import{R as t}from"./iframe-BLYaiTCo.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-lQffsUG8.js";import{B as p}from"./BarChart-CqEa3ZF5.js";import{X as l}from"./XAxis-B1NcdzKW.js";import{Y as h}from"./YAxis-ryWccSzT.js";import{B as x}from"./Brush-DMY63Ky1.js";import{B as c}from"./Bar-CvofeXM2.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-ILyg-GW3.js";import"./index-DnQ-U2Qg.js";import"./index-BI_7Ub3B.js";import"./get-C6fkE9tv.js";import"./resolveDefaultProps-DpWzBvps.js";import"./isWellBehavedNumber-BqumoSwm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DuKK4DBL.js";import"./index-CCG5587O.js";import"./index-RDG97xsP.js";import"./renderedTicksSlice-kJn42Rl8.js";import"./axisSelectors-D6Dyr_Wd.js";import"./d3-scale-B2LK6XqV.js";import"./CartesianChart-C6NG5vyr.js";import"./chartDataContext-Bb8xEPvd.js";import"./CategoricalChart-CQ3ECWGQ.js";import"./CartesianAxis-D8ReKkO7.js";import"./Layer-Cjsn70fL.js";import"./Text-OjYntAZR.js";import"./DOMUtils-CIYC9pgo.js";import"./Label-BDDWEbHy.js";import"./ZIndexLayer-BDdQieuE.js";import"./types-B8ff9nYs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-oF71F9U5.js";import"./AnimatedItems-LYPYqGuf.js";import"./useAnimationId-e0tJBS7c.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D-pvWCLO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B7KxHmGn.js";import"./RegisterGraphicalItemId-C8Ak7Vaq.js";import"./ErrorBarContext-B1uz4CKa.js";import"./GraphicalItemClipPath-D0PBT0ws.js";import"./SetGraphicalItem-DCGW6Zln.js";import"./getZIndexFromUnknown-BSzBOnuG.js";import"./graphicalItemSelectors-7Wfrp7_u.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
