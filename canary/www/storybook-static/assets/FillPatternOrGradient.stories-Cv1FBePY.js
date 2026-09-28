import{R as t}from"./iframe-DVTI7asB.js";import{R as s}from"./zIndexSlice-VrE65LwJ.js";import{C as m}from"./ComposedChart-D0z3ruTF.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-Or1Jwi_e.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BWtzmmFP.js";import"./index-CBeOLa_K.js";import"./index-x2lkdleK.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Brh9VJsQ.js";import"./isWellBehavedNumber-D3Ee2F4O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0XjKEbs7.js";import"./axisSelectors-BpjWm-Lu.js";import"./d3-scale-CTgt3q-T.js";import"./index-Dxlfd81A.js";import"./index-BME0E5Ea.js";import"./renderedTicksSlice-Dm0DClKF.js";import"./index-B1fyioQZ.js";import"./CartesianChart-TlzU5q-y.js";import"./chartDataContext-5tueJF_N.js";import"./CategoricalChart-DDdawTFM.js";import"./Layer-CKEADoVi.js";import"./AnimatedItems-DqWEvMcn.js";import"./Label-C5sDum5_.js";import"./Text-XQRKlDnX.js";import"./DOMUtils--MlKRlg5.js";import"./useId-D-envRVe.js";import"./useBackwardsCompatibleTheme-CTYeO19p.js";import"./ZIndexLayer-MKguLFMj.js";import"./useAnimationId-CwgRschT.js";import"./types-BbyfnRjt.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DR9uOGHN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DaFsN-Ec.js";import"./tooltipContext-BxZtXLsC.js";import"./RegisterGraphicalItemId-BCvN7nSY.js";import"./ErrorBarContext-BzIynu6X.js";import"./GraphicalItemClipPath-DpsQ0BRT.js";import"./SetGraphicalItem-Co1iXM8q.js";import"./getZIndexFromUnknown-BiZ_5tBQ.js";import"./useGraphicalItemIdentity-Bs2hvtnA.js";import"./dataEntryStyles-Cddtf00Q.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
