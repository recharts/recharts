import{R as t}from"./iframe-D0XP5FT3.js";import{R as s}from"./zIndexSlice-D8-60lXw.js";import{C as m}from"./ComposedChart-CmUditNM.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-C_iNq178.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-z8Ap2dYF.js";import"./index-BIEuecVB.js";import"./index-CS8PxtTR.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DjekxJOz.js";import"./isWellBehavedNumber-Ceh04LdS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BDDfTGvW.js";import"./axisSelectors-D4AJEAvo.js";import"./d3-scale-DGDSvNHr.js";import"./index-C2YY5PF9.js";import"./index-D5oWhNFN.js";import"./renderedTicksSlice-BOt15qXr.js";import"./index-a0gINIJJ.js";import"./CartesianChart-B85ukqJW.js";import"./chartDataContext-BcyL-ikw.js";import"./CategoricalChart-w8Ip9gJm.js";import"./Layer-Bdc6UUg3.js";import"./AnimatedItems-BLak8TNm.js";import"./Label-CLcGGCVq.js";import"./Text-D0tua1LJ.js";import"./DOMUtils-CiVsTIiM.js";import"./useId-CfurG6Ob.js";import"./useBackwardsCompatibleTheme-CnQkr5Gq.js";import"./ZIndexLayer-CZS0piq5.js";import"./useAnimationId-DjrvOMwt.js";import"./types-C9t2smuM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bjcm2Wl_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Da2wOC1_.js";import"./tooltipContext-BE5TOI6g.js";import"./RegisterGraphicalItemId-HdNBGK70.js";import"./ErrorBarContext-IzNwiufM.js";import"./GraphicalItemClipPath-iiifM8JF.js";import"./SetGraphicalItem-CSNZjUhi.js";import"./getZIndexFromUnknown-CnVILsAO.js";import"./useGraphicalItemIdentity-DszFn3dP.js";import"./dataEntryStyles-B0aWZ42d.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
