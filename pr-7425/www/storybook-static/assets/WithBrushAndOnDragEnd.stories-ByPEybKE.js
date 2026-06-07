import{R as t}from"./iframe-DsrD6wpT.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DkgP7dBP.js";import{B as p}from"./BarChart-D5i6btic.js";import{X as l}from"./XAxis-DizM2ccM.js";import{Y as h}from"./YAxis-C8AD80e7.js";import{B as x}from"./Brush-BqDgwYI1.js";import{B as c}from"./Bar-CFg5lR5p.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BAPcb6RO.js";import"./index-Z0dAwhZH.js";import"./index-CKvlhhLQ.js";import"./get-C10pg2Pt.js";import"./resolveDefaultProps-DQfgYWkZ.js";import"./isWellBehavedNumber-CgPFccj7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DIY-yJrq.js";import"./index-D23QGT2y.js";import"./index-DLTbKQJZ.js";import"./renderedTicksSlice-VRajnlWn.js";import"./axisSelectors-CJUUuARo.js";import"./d3-scale-CqXFZCr9.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BgP_pNrE.js";import"./chartDataContext-CD2wssdB.js";import"./CategoricalChart-BwGaQnIJ.js";import"./CartesianAxis-CiwuyPTT.js";import"./Layer-Cn-q1z5M.js";import"./Text-BEnCKmcO.js";import"./DOMUtils-Cn9VGpSS.js";import"./Label-TNDcrVM2.js";import"./ZIndexLayer-D3qjSsRd.js";import"./types-B5JJF1dm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-D4wXR-2t.js";import"./AnimatedItems-8lESwhOr.js";import"./useAnimationId-BDJzCpgi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Di4BNLUB.js";import"./ActiveShapeUtils-BxUohkw2.js";import"./RegisterGraphicalItemId-Ch7WvGaf.js";import"./ErrorBarContext-H2sebB4O.js";import"./GraphicalItemClipPath-CeOkm8u8.js";import"./SetGraphicalItem-DZD_Etrn.js";import"./getZIndexFromUnknown-DuyXBv5Y.js";import"./graphicalItemSelectors-CBTkQduC.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
