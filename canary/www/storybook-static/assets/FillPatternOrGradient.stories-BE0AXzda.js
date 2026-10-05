import{R as t}from"./iframe-BO6kNEfQ.js";import{R as s}from"./zIndexSlice-CSvwJ_UT.js";import{C as m}from"./ComposedChart-BIhV4Cn8.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BCNHGISt.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CC5fq1IH.js";import"./index-C9e-3BIk.js";import"./index-CAnCLEru.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DeeWTLmP.js";import"./isWellBehavedNumber-B-Ulh-Re.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjhorxtA.js";import"./axisSelectors-clIGt-1m.js";import"./d3-scale-B89J0uLC.js";import"./index-CTBq7QCd.js";import"./index-BiTwoYeC.js";import"./renderedTicksSlice-CyXD3owy.js";import"./index-DGFWSvO2.js";import"./CartesianChart-DbU3p1bm.js";import"./chartDataContext-C8PMDwYi.js";import"./CategoricalChart-BBSMzdqi.js";import"./Layer-DAnsZuJj.js";import"./AnimatedItems-FM3uBbR2.js";import"./Label-ktTcBfs2.js";import"./Text-CvDq8Z5Q.js";import"./DOMUtils-DjzhJzRg.js";import"./useId-CAIxAqit.js";import"./useBackwardsCompatibleTheme-DwFWyF9F.js";import"./ZIndexLayer-BVG745mx.js";import"./useAnimationId-NFss7X44.js";import"./types-CrvIZc3a.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-bQ1U5Rvt.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CRw266nd.js";import"./tooltipContext-C49m0VKq.js";import"./RegisterGraphicalItemId-DXmwJq0A.js";import"./ErrorBarContext-DAb2_Ge3.js";import"./GraphicalItemClipPath-CqCtj_pv.js";import"./SetGraphicalItem-CMnburaU.js";import"./getZIndexFromUnknown-WTg4YCq7.js";import"./useGraphicalItemIdentity-BOcRclg4.js";import"./dataEntryStyles-DKRdmVZc.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,it as __namedExportsOrder,rt as default};
