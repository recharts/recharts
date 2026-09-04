import{R as t}from"./iframe-DccHD9cJ.js";import{R as s}from"./zIndexSlice-DTUZOs4Q.js";import{C as m}from"./ComposedChart-IZbmlTb-.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-D2ZEg9FM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DVrp2GLO.js";import"./index-DMwNxWPw.js";import"./index-N3-9WR0Y.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bx2wnEd4.js";import"./isWellBehavedNumber-DqPgz5Yi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Df3mrbj3.js";import"./axisSelectors-F-OrX_Xw.js";import"./d3-scale-Bc5gFn0f.js";import"./index-6ZXP3-Xk.js";import"./index-C-5pzGe4.js";import"./renderedTicksSlice-D4ngpquf.js";import"./index-CWyYWxmD.js";import"./CartesianChart-ByhNp3iB.js";import"./chartDataContext-TE-BNMGm.js";import"./CategoricalChart-BciEww7Z.js";import"./Layer-DWnnL9ma.js";import"./AnimatedItems-DAcltxFf.js";import"./Label-DVskdjtu.js";import"./Text-jeWIJF52.js";import"./DOMUtils-D6lsaUk9.js";import"./useId-Dai3NE_g.js";import"./useBackwardsCompatibleTheme-DZ6Qm6iv.js";import"./ZIndexLayer-DKXOPUJQ.js";import"./useAnimationId-pGJexV-0.js";import"./types-CsFJg5Ml.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DZ08DrgT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-tvNFAdrs.js";import"./tooltipContext-CBdCq4p-.js";import"./RegisterGraphicalItemId-DELhDSX_.js";import"./ErrorBarContext-CYJw9jDs.js";import"./GraphicalItemClipPath-D_oXYnWb.js";import"./SetGraphicalItem-BeH6rSAO.js";import"./getZIndexFromUnknown-z1xVsGK0.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D_9KmnKg.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const it=["Fill"];export{e as Fill,it as __namedExportsOrder,rt as default};
