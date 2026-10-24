import{R as t}from"./iframe-DZbjLUQo.js";import{R as s}from"./zIndexSlice-kNjtHJvr.js";import{C as m}from"./ComposedChart-B2VCtYfx.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-CMJK2iYb.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cj_7MghT.js";import"./index--Cvbr4ei.js";import"./index-s3XojKdv.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-7vFM5A8a.js";import"./isWellBehavedNumber-C3IgPBb_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7gpneaA.js";import"./axisSelectors-SzDg3mS0.js";import"./d3-scale-BGQa_b-A.js";import"./index-Fa7FBVrf.js";import"./index-DZ5C6rYB.js";import"./renderedTicksSlice-Ds3e7SoF.js";import"./index-DGK0wEWr.js";import"./CartesianChart-xRZlZbQd.js";import"./chartDataContext-DvL8FmIv.js";import"./CategoricalChart-D0VTS456.js";import"./Layer-Dh4rshAh.js";import"./activeStyles-jlHAdlvX.js";import"./Label-QWXq4PsH.js";import"./Text-DfE0Fd2l.js";import"./pageBackground-j9oVi7TB.js";import"./useId-uis-dzmY.js";import"./useBackwardsCompatibleTheme-BfjKogZ5.js";import"./ZIndexLayer-CKCEdo-g.js";import"./dataEntryStyles-OfgH0EAC.js";import"./useAnimationId-CK6aB1Dm.js";import"./types-BIiFdC-Q.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle--8czTBQy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ncETWQyV.js";import"./tooltipContext-BxxS945K.js";import"./RegisterGraphicalItemId-DrXewaeQ.js";import"./ErrorBarContext-BdWQYqFr.js";import"./GraphicalItemClipPath-BDvSZObJ.js";import"./SetGraphicalItem-BJ2EKqIC.js";import"./getZIndexFromUnknown-BvjAa1eF.js";import"./useEffectiveDataKey-DRn6J3kp.js";import"./omit-BhIDzA7q.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";const at={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},pt=["Fill"];var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{r as Fill,pt as __namedExportsOrder,at as default};
