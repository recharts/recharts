import{e as t}from"./iframe-CsBbFWpF.js";import{R as s}from"./arrayEqualityCheck-jcy1YLjA.js";import{C as l}from"./ComposedChart-BxAEf0za.js";import{B as r}from"./Bar-DnPRHuD-.js";import{R as m}from"./RechartsHookInspector-Ce0vrec4.js";import{p as c}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Di-bRFCz.js";import"./PolarUtils-DudrDAyL.js";import"./RechartsWrapper-M1yD5X0u.js";import"./hooks-51EGl8Fk.js";import"./axisSelectors-C8uaVJja.js";import"./zIndexSlice-CXgHVliP.js";import"./CartesianChart-DlU5PpKX.js";import"./chartDataContext-C4MvfWzW.js";import"./CategoricalChart-BoRcIHlb.js";import"./Layer-B5pUJ7d6.js";import"./tooltipContext-BJ3STaWo.js";import"./ReactUtils-B73M-NEp.js";import"./Label-vO0tFBMQ.js";import"./Text-CXOTFpC0.js";import"./DOMUtils-DCk3Ra7U.js";import"./ZIndexLayer-DoHUAHyH.js";import"./types-DZkoNYJ-.js";import"./ActiveShapeUtils-Cp7opGs8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CRfJXidx.js";import"./useAnimationId-DQyCpAJd.js";import"./Trapezoid-CqG9LomH.js";import"./Sector-DZ4anR9n.js";import"./Symbols-GutgQl5i.js";import"./Curve-BV6casI8.js";import"./RegisterGraphicalItemId-DEKbhPBq.js";import"./ErrorBarContext-UJH6PLVM.js";import"./GraphicalItemClipPath-BGGubKyF.js";import"./SetGraphicalItem-D-yEZ2eQ.js";import"./getZIndexFromUnknown-BgxLqYAp.js";import"./graphicalItemSelectors-p0H2OFb-.js";import"./index-30ex7hAw.js";import"./ChartSizeDimensions-BxqurYlH.js";import"./OffsetShower-Cz9yhNvC.js";import"./PlotAreaShower-CYw1ViUZ.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
