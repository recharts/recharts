import{R as t}from"./iframe-BlpdekQf.js";import{R as s}from"./zIndexSlice-Bd-549Vw.js";import{C as m}from"./ComposedChart-BYV5Fhyo.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-C6KH_Y-Z.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-8wef2bFQ.js";import"./index-Dg90symq.js";import"./index-Dn5eONY4.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BWwU0p8m.js";import"./isWellBehavedNumber-DfaAxwlE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BZ46sqe8.js";import"./axisSelectors-DwVSh5EL.js";import"./d3-scale-ffqjL1dY.js";import"./index-BcFSE7Eo.js";import"./index-Co2WS3GV.js";import"./renderedTicksSlice-rM-Or7ex.js";import"./index-BjAwxFOu.js";import"./CartesianChart-Dncy8Mq7.js";import"./chartDataContext-CXgp5rOX.js";import"./CategoricalChart-CJrl3V7y.js";import"./Layer-Cz4a7tst.js";import"./AnimatedItems-BKOKH3Gm.js";import"./Label-CrfPybH1.js";import"./Text-CRM9x0B4.js";import"./DOMUtils-C_8Iq0XJ.js";import"./useId-DvrsL6or.js";import"./useBackwardsCompatibleTheme-C9u8MjhE.js";import"./ZIndexLayer-C5ftRxf2.js";import"./useAnimationId-SlAZ3zMA.js";import"./types-DYnYQX3g.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bg9Sr7-8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BEiBGwD8.js";import"./tooltipContext-DP7cVDvd.js";import"./RegisterGraphicalItemId-D9zcRMey.js";import"./ErrorBarContext-DkC-IUMU.js";import"./GraphicalItemClipPath-Vs1wvJPe.js";import"./SetGraphicalItem-BG-oAwbp.js";import"./getZIndexFromUnknown-DeXLXtsN.js";import"./useGraphicalItemIdentity-BE0cCNWI.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,rt as __namedExportsOrder,et as default};
