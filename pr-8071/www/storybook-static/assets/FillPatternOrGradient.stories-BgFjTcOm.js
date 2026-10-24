import{R as t}from"./iframe-B1_QfljJ.js";import{R as s}from"./zIndexSlice-Cb-_WhSJ.js";import{C as m}from"./ComposedChart-CmygcsGV.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-CTsBmcsP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D7IvOyg1.js";import"./index-C0R_VbD9.js";import"./index-C4Bv3TLI.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BKBpJeVO.js";import"./isWellBehavedNumber-CjzDakCh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-eNWWZf5L.js";import"./axisSelectors-7XQKMXbV.js";import"./d3-scale-Ch4lSu5M.js";import"./index-DrIBMx-a.js";import"./index-PfBmA6Mj.js";import"./renderedTicksSlice-QhE759w-.js";import"./index-D_5ex_s0.js";import"./CartesianChart-0PUgz-fD.js";import"./chartDataContext-W36SsBCK.js";import"./CategoricalChart-Bnl3KIy2.js";import"./Layer-B_0rxCBF.js";import"./activeStyles-Cj23hm4O.js";import"./Label-Dq-PRmXE.js";import"./Text-l_2w-j-6.js";import"./pageBackground-C2L5RPBY.js";import"./useId-5cvDRGiM.js";import"./useBackwardsCompatibleTheme-Cn0U0gME.js";import"./ZIndexLayer-DCJHrufs.js";import"./dataEntryStyles-DFEzHfWh.js";import"./useAnimationId-g_gs6Adq.js";import"./types-DbTvfnZ9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CLSVVjg0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DhsBwk0C.js";import"./tooltipContext-Bae-_IL0.js";import"./RegisterGraphicalItemId-nMZsofRB.js";import"./ErrorBarContext-teR4Ylft.js";import"./SetGraphicalItem-BVP4iL4X.js";import"./getZIndexFromUnknown-DoRjXW1P.js";import"./useEffectiveDataKey-FDkhhmBo.js";import"./omit-6Ev2RNPr.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";const ot={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},at=["Fill"];var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{r as Fill,at as __namedExportsOrder,ot as default};
