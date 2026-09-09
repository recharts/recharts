import{R as t}from"./iframe-CiBEWf8Q.js";import{R as s}from"./zIndexSlice-CF6C51G2.js";import{C as m}from"./ComposedChart-BHUU1HHB.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-hFDIRDmN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Br6qQatL.js";import"./index-ChQP2zgF.js";import"./index-DQl4yRvy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cheer07s.js";import"./isWellBehavedNumber-CTCV4BvK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DwV4v4eg.js";import"./axisSelectors-B1sNcXcW.js";import"./d3-scale-DOQDVnBo.js";import"./index-B7Lle2z-.js";import"./index-4YB-Ccb_.js";import"./renderedTicksSlice-CoMChRdU.js";import"./index-2IKC_5hn.js";import"./CartesianChart-J5V6zdaG.js";import"./chartDataContext-DDFLXgxQ.js";import"./CategoricalChart-D02G0NrG.js";import"./Layer-Cb-HZ0sR.js";import"./AnimatedItems-BvlvVcPM.js";import"./Label-DPc6TFRy.js";import"./Text-CsV3VR-3.js";import"./DOMUtils-9fJMrmCV.js";import"./useId-fAK_bkox.js";import"./useBackwardsCompatibleTheme-CXlfy45z.js";import"./ZIndexLayer-D9-T3nqJ.js";import"./useAnimationId-DjyXFux3.js";import"./types-P989fbDX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CGbECz4J.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BlIjGu9a.js";import"./tooltipContext-_PF8ziuh.js";import"./RegisterGraphicalItemId-CHeBqfEu.js";import"./ErrorBarContext-BpAFB1gw.js";import"./GraphicalItemClipPath-DMEdIjUU.js";import"./SetGraphicalItem-CegZ7sSO.js";import"./getZIndexFromUnknown-Df9d_AP2.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-e2lxP05N.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
