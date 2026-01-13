import{e as t}from"./iframe-Cz5RPrzo.js";import{R as s}from"./arrayEqualityCheck-DuhA3hrU.js";import{C as l}from"./ComposedChart-kzL2mx6f.js";import{B as r}from"./Bar-BaqIKcqD.js";import{R as m}from"./RechartsHookInspector-DP8xCOal.js";import{p as c}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-x0GM_Fqy.js";import"./PolarUtils-BqV0Lm0k.js";import"./RechartsWrapper-cu-FIaeq.js";import"./hooks-BM-KAHTV.js";import"./axisSelectors-B5q7pd7-.js";import"./zIndexSlice-CcJ--Fig.js";import"./CartesianChart-eteQYMRm.js";import"./chartDataContext-CuN30YAe.js";import"./CategoricalChart-LFVK4bCX.js";import"./Layer-CngTgEke.js";import"./tooltipContext-Bauin2Js.js";import"./ReactUtils-BQq-yyvu.js";import"./Label-XMPDelhI.js";import"./Text-BayrHrEj.js";import"./DOMUtils-m1R-l7fT.js";import"./ZIndexLayer-DopQY-kA.js";import"./types-D1v_Rc2a.js";import"./ActiveShapeUtils-D5xwOR7W.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C2aKHHpL.js";import"./useAnimationId-ifmUbYmC.js";import"./Trapezoid-CFJnjNBB.js";import"./Sector-D7vvH_6F.js";import"./Symbols-R3z9Gbft.js";import"./Curve-C0KXugLq.js";import"./RegisterGraphicalItemId-B1o2SWmz.js";import"./ErrorBarContext-BeejT6aM.js";import"./GraphicalItemClipPath-apQ9eD6L.js";import"./SetGraphicalItem-BmMKLEXu.js";import"./getZIndexFromUnknown-DoRvxuoX.js";import"./graphicalItemSelectors-D7wkO2GZ.js";import"./index-nSyYgmIS.js";import"./ChartSizeDimensions-BL9_hnvT.js";import"./OffsetShower-9oUxrKwL.js";import"./PlotAreaShower-CCuY3b1X.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
