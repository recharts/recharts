import{e as t}from"./iframe-Dw3q2J_C.js";import{R as s}from"./arrayEqualityCheck-CyZN96pQ.js";import{C as l}from"./ComposedChart-qdmZkWDY.js";import{B as r}from"./Bar-DOE3cfUG.js";import{R as m}from"./RechartsHookInspector-CjBXEdYk.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BpxWTFo7.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BxCpSvqF.js";import"./hooks-CXCEGVm_.js";import"./axisSelectors-Bj4F6VGN.js";import"./zIndexSlice-CgOi6Kpf.js";import"./CartesianChart-BoeRzCq2.js";import"./chartDataContext-toYkGVnu.js";import"./CategoricalChart-D0JPHmvG.js";import"./Layer-kgIv22jT.js";import"./tooltipContext-DjZXsZgx.js";import"./ReactUtils-CRr71kpZ.js";import"./Label-BTeufvbK.js";import"./Text-DlpZzH26.js";import"./DOMUtils-9f_FxyP7.js";import"./ZIndexLayer-QOZqstTD.js";import"./types-BJHbMGwM.js";import"./ActiveShapeUtils-CnPzR9TY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdkJqkle.js";import"./useAnimationId-BJQnqM8-.js";import"./Trapezoid-BYebN7Pj.js";import"./Sector-C3UDCS_F.js";import"./Symbols-CuhIBlUX.js";import"./Curve-DlYk4-Kk.js";import"./RegisterGraphicalItemId-CrW_A7sx.js";import"./ErrorBarContext-CH81KESR.js";import"./GraphicalItemClipPath-BL_BqIRg.js";import"./SetGraphicalItem-C0Kooi_K.js";import"./getZIndexFromUnknown-MbbDtbEN.js";import"./graphicalItemSelectors-3hnzH_cf.js";import"./index-cG5s137W.js";import"./ChartSizeDimensions-BOI7XDYO.js";import"./OffsetShower-shA12VSX.js";import"./PlotAreaShower-DksCyK2N.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const et=["Fill"];export{e as Fill,et as __namedExportsOrder,tt as default};
