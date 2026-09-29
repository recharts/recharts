import{R as t}from"./iframe-CkExmVLh.js";import{R as s}from"./zIndexSlice-a3gNrCTg.js";import{C as m}from"./ComposedChart-BhMk3qvU.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DCTHwCGT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BNvjyLg8.js";import"./index-tbID_CTU.js";import"./index-oO8SHF6a.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-RkN2bWVj.js";import"./isWellBehavedNumber-B9ULLFc9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CmpmZooC.js";import"./axisSelectors-DjYqkdMk.js";import"./d3-scale-BQavAiMn.js";import"./index-3Scx8lTS.js";import"./index-Dlo0KE1-.js";import"./renderedTicksSlice-D-2PA2Wz.js";import"./index-Cl_0IqIO.js";import"./CartesianChart-DTXpoHpD.js";import"./chartDataContext-DYa5wr5P.js";import"./CategoricalChart-BF6nCoHF.js";import"./Layer-CGaMavgo.js";import"./AnimatedItems-V2dSiKDR.js";import"./Label-C8EtCHaI.js";import"./Text-mbh8kfNk.js";import"./DOMUtils-B9viDuiF.js";import"./useId-B6th-B23.js";import"./useBackwardsCompatibleTheme-DZHep05A.js";import"./ZIndexLayer-DuxWNsKn.js";import"./useAnimationId-B25s9B77.js";import"./types-D0Lh6MHk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B72I1dSe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CeXBNDiM.js";import"./tooltipContext-CFW5lOAg.js";import"./RegisterGraphicalItemId-Bmf5uTtn.js";import"./ErrorBarContext-B3pTgu-r.js";import"./GraphicalItemClipPath-CSuIt2Pb.js";import"./SetGraphicalItem-CjeIiMwy.js";import"./getZIndexFromUnknown-DUP84ONz.js";import"./useGraphicalItemIdentity-BSB2zAct.js";import"./dataEntryStyles-D4_BoS-z.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
