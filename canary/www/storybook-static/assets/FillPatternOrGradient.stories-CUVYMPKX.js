import{R as t}from"./iframe-C98xM-14.js";import{R as s}from"./zIndexSlice-PFqQVngT.js";import{C as m}from"./ComposedChart-DEvNrsRG.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DyAmsiQM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cpn-KPW0.js";import"./index-BfkVHUSN.js";import"./index-lWYWFl_c.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BpgNO45K.js";import"./isWellBehavedNumber-B0B1V1Mw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNpWLRvv.js";import"./axisSelectors-DE9vQUUE.js";import"./d3-scale-BIaFt0TH.js";import"./index-B33qjCts.js";import"./index-CRw9oTKs.js";import"./renderedTicksSlice-BVBdj9en.js";import"./index-Bwd0n8ve.js";import"./CartesianChart-DdfFkL89.js";import"./chartDataContext-BX4jELOi.js";import"./CategoricalChart-Cg6rdWul.js";import"./Layer-DV2USN9H.js";import"./AnimatedItems-CTflnzuI.js";import"./Label-6WZ-bs73.js";import"./Text-CdsOrPG8.js";import"./DOMUtils-Cyba50bX.js";import"./useId-gkj8hVD1.js";import"./useBackwardsCompatibleTheme-CnvikNkE.js";import"./ZIndexLayer-_jlJOhPE.js";import"./useAnimationId-B6O86EG4.js";import"./types-C3nHa31Z.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EqmP3HLD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-bQFjdaPv.js";import"./tooltipContext-CWvdZnjM.js";import"./RegisterGraphicalItemId-CrKJMoiy.js";import"./ErrorBarContext-eOyXWxlr.js";import"./GraphicalItemClipPath-Dn-XuIGK.js";import"./SetGraphicalItem-CJTGWUG8.js";import"./getZIndexFromUnknown-LWe_bofs.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BPErp3cx.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
