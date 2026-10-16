import{R as t}from"./iframe-BMLr-N8m.js";import{R as s}from"./zIndexSlice-CNoIWiIj.js";import{C as m}from"./ComposedChart-CRR_BNj7.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-aA6K6mbP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DpCsf_je.js";import"./index-g4GeTxJm.js";import"./index-jx1ZEi_d.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-jOc_O7Kv.js";import"./isWellBehavedNumber-gG-DUVNw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D6IV3yYd.js";import"./axisSelectors-QHFm6bdo.js";import"./d3-scale-uv4cuZVX.js";import"./index-B5o-g1JC.js";import"./index-BoO0kGmt.js";import"./renderedTicksSlice-D6osv6XO.js";import"./index-CL1KOieJ.js";import"./CartesianChart-crhgf43U.js";import"./chartDataContext-Ch0M7QOU.js";import"./CategoricalChart-D8IryVYJ.js";import"./Layer-D25gMhyW.js";import"./activeStyles-Bwhdd0Sh.js";import"./Label-CO8bLvFk.js";import"./Text-Cz3Pbtag.js";import"./pageBackground-cNUAWp1v.js";import"./useId-Dyawny2A.js";import"./useBackwardsCompatibleTheme-TjicyzGG.js";import"./ZIndexLayer-B6k-j2NC.js";import"./useAnimationId--2Xv8oOg.js";import"./dataEntryStyles-BB_5qzNe.js";import"./types-ClqQg-f4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DVvn14nh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_iPwrws.js";import"./tooltipContext-Buu601Jv.js";import"./ErrorBarContext-CNWoIG-z.js";import"./GraphicalItemClipPath--PSqgLsU.js";import"./SetGraphicalItem-Bhbnxfc6.js";import"./getZIndexFromUnknown-51_r1wPI.js";import"./useEffectiveDataKey-BCNG7ZLV.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
