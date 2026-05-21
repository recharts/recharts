import{e as t}from"./iframe-CWtGA3nN.js";import{g as s}from"./arrayEqualityCheck-SSZ_TbBR.js";import{C as m}from"./ComposedChart-C0UtoPhu.js";import{p as l}from"./Page-DPte-9pC.js";import{B as r}from"./Bar-DPt3FqP7.js";import{R as c}from"./RechartsHookInspector-C5rf562U.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DAVWEwBG.js";import"./immer-BFspOnss.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BtFvOF_N.js";import"./index-CJJNMar2.js";import"./hooks-2GkvPwk3.js";import"./axisSelectors-B2ypiSef.js";import"./d3-scale-QF4ItY9H.js";import"./zIndexSlice-DXFiHolo.js";import"./renderedTicksSlice-dpcUCF55.js";import"./CartesianChart-CjBRb4BQ.js";import"./chartDataContext-BDE8JW6h.js";import"./CategoricalChart-VkWulsmh.js";import"./Layer-CPnmijdU.js";import"./tooltipContext-CnfOawa_.js";import"./ReactUtils-JfqC4NUj.js";import"./Label-C--aO5Ak.js";import"./Text-C8joD4Pq.js";import"./DOMUtils-CParKcwz.js";import"./ZIndexLayer-DtffmqPt.js";import"./types-DgK_EaWG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNr5V-0I.js";import"./useAnimationId-B0ac7aow.js";import"./ActiveShapeUtils-CdHtuYAv.js";import"./RegisterGraphicalItemId-6R0wFFYv.js";import"./ErrorBarContext-Bkb8bdCY.js";import"./GraphicalItemClipPath-636H-9xI.js";import"./SetGraphicalItem-DcEByKaS.js";import"./getZIndexFromUnknown-CDklThju.js";import"./graphicalItemSelectors-BfrjCcn5.js";import"./index-DsA403Ur.js";import"./ChartSizeDimensions-BdcGth4f.js";import"./OffsetShower-BzgHuzNu.js";import"./PlotAreaShower-5_nPAcLw.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <pattern id="star" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
            </pattern>
            <pattern id="stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="red" />
            </pattern>
          </defs>
          <Bar dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Bar dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#stripe)" />
          <Bar dataKey="amt" stroke="#8884d8" fillOpacity={1} fill="url(#star)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const rt=["Fill"];export{e as Fill,rt as __namedExportsOrder,et as default};
