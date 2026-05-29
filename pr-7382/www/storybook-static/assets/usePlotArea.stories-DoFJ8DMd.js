import{e as t}from"./iframe-Dq2D9WMR.js";import{e as a}from"./CategoricalChart-DqFO3fer.js";import{g as p}from"./zIndexSlice-CMIgpwRl.js";import{C as s}from"./ComposedChart-Ctt5r4_8.js";import{p as n}from"./Page-DPte-9pC.js";import{L as d}from"./Line-ElG_lwe6.js";import{X as l}from"./XAxis-BEqsZJa-.js";import{Y as h}from"./YAxis-CJVhWVm-.js";import{L as c}from"./Legend-OStlbhf3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Coa45hTw.js";import"./index-Vw7ge0ya.js";import"./immer-DBox_88Y.js";import"./get-Dg89qnmN.js";import"./index-toY2TPxE.js";import"./index-ComImMI9.js";import"./renderedTicksSlice-CfboEt5t.js";import"./axisSelectors-sK2-dJnb.js";import"./d3-scale-CJAlquTP.js";import"./resolveDefaultProps-CL0P-2Ye.js";import"./isWellBehavedNumber-CElaIhJa.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DTsAEBhV.js";import"./chartDataContext-DSYMXmV-.js";import"./Curve-B4KKsiQU.js";import"./types-C93vTFKm.js";import"./step-uPZi_6ZX.js";import"./path-DyVhHtw_.js";import"./Layer-CNg3jf3H.js";import"./ReactUtils-CnckncOE.js";import"./Label-DafpBHua.js";import"./Text-DsY1ckdl.js";import"./DOMUtils-DuGpXxvH.js";import"./ZIndexLayer-BazpBvjE.js";import"./ActivePoints-Cd1Z09h4.js";import"./Dot-CjWxaC-Q.js";import"./RegisterGraphicalItemId-27foWtUc.js";import"./ErrorBarContext-ClYGb34v.js";import"./GraphicalItemClipPath-DwKkk3VM.js";import"./SetGraphicalItem-D7EoJphE.js";import"./useAnimationId-uSyAtuoQ.js";import"./getRadiusAndStrokeWidthFromDot-D25HmC7L.js";import"./ActiveShapeUtils-C8zRj9nc.js";import"./CartesianAxis-9djuB4O0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CDSRvdpp.js";import"./symbol-CuF7W8Ad.js";import"./useElementOffset-CBQMpBJe.js";import"./uniqBy-Bftont1e.js";import"./iteratee-4ZWKoi0K.js";const dt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const lt=["UsePlotArea"];export{e as UsePlotArea,lt as __namedExportsOrder,dt as default};
