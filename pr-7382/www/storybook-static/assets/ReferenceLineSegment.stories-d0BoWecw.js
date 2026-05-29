import{e}from"./iframe-Dq2D9WMR.js";import{g as i}from"./zIndexSlice-CMIgpwRl.js";import{C as a}from"./ComposedChart-Ctt5r4_8.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-Cf14918y.js";import{X as s}from"./XAxis-BEqsZJa-.js";import{Y as c}from"./YAxis-CJVhWVm-.js";import{L as d}from"./Line-ElG_lwe6.js";import{R as g}from"./ReferenceLine-BSuT1Oqc.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DBox_88Y.js";import"./get-Dg89qnmN.js";import"./resolveDefaultProps-CL0P-2Ye.js";import"./isWellBehavedNumber-CElaIhJa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Coa45hTw.js";import"./index-Vw7ge0ya.js";import"./index-toY2TPxE.js";import"./index-ComImMI9.js";import"./renderedTicksSlice-CfboEt5t.js";import"./axisSelectors-sK2-dJnb.js";import"./d3-scale-CJAlquTP.js";import"./CartesianChart-DTsAEBhV.js";import"./chartDataContext-DSYMXmV-.js";import"./CategoricalChart-DqFO3fer.js";import"./CartesianAxis-9djuB4O0.js";import"./Layer-CNg3jf3H.js";import"./Text-DsY1ckdl.js";import"./DOMUtils-DuGpXxvH.js";import"./Label-DafpBHua.js";import"./ZIndexLayer-BazpBvjE.js";import"./types-C93vTFKm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-B4KKsiQU.js";import"./step-uPZi_6ZX.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CnckncOE.js";import"./ActivePoints-Cd1Z09h4.js";import"./Dot-CjWxaC-Q.js";import"./RegisterGraphicalItemId-27foWtUc.js";import"./ErrorBarContext-ClYGb34v.js";import"./GraphicalItemClipPath-DwKkk3VM.js";import"./SetGraphicalItem-D7EoJphE.js";import"./useAnimationId-uSyAtuoQ.js";import"./getRadiusAndStrokeWidthFromDot-D25HmC7L.js";import"./ActiveShapeUtils-C8zRj9nc.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ae={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const pe=["Segment"];export{t as Segment,pe as __namedExportsOrder,ae as default};
