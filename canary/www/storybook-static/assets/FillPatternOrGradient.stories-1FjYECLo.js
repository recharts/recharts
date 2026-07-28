import{R as t}from"./iframe-C-D94QkC.js";import{R as s}from"./zIndexSlice-BKwIbV_L.js";import{C as l}from"./ComposedChart-B8BsA69h.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-oPfR9M-J.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-2piy3LIT.js";import"./index-BIeQrv2Z.js";import"./index-CTfmrlJH.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-I0oO3hVe.js";import"./isWellBehavedNumber-CW3dwjTv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C8SdZUxr.js";import"./index-CVumJag_.js";import"./index-Dq3qqcGT.js";import"./renderedTicksSlice-DheIhU3o.js";import"./axisSelectors-RkZJ2biJ.js";import"./d3-scale-DDXy3r7j.js";import"./CartesianChart-DbK0sv1B.js";import"./chartDataContext-BuH_IHSv.js";import"./CategoricalChart-ChFoWP6Y.js";import"./Layer-CmhR3M6w.js";import"./tooltipContext-DC1yWL3Z.js";import"./AnimatedItems-CNnKFhUF.js";import"./Label-CEdJYykS.js";import"./Text-BGLH01e4.js";import"./DOMUtils-CTJUeuSO.js";import"./ZIndexLayer-D0m4rTFg.js";import"./useAnimationId-Qux1tHbm.js";import"./types-BVMbYXvi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DbIEjk7Y.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-mVYQLGWO.js";import"./RegisterGraphicalItemId-BEroCjsR.js";import"./ErrorBarContext-xYFd4kf3.js";import"./GraphicalItemClipPath-D86AO83t.js";import"./SetGraphicalItem-D38tmZrb.js";import"./getZIndexFromUnknown-DUi7QXhQ.js";import"./graphicalItemSelectors-B-svnAv6.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const $=["Fill"];export{e as Fill,$ as __namedExportsOrder,Z as default};
