import{e as t}from"./iframe-DRECDyJu.js";import{R as s}from"./arrayEqualityCheck-CwmcLezE.js";import{C as m}from"./ComposedChart-CFtzaxo-.js";import{B as r}from"./Bar-D8ay3I_c.js";import{R as l}from"./RechartsHookInspector-CkXF-mFA.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BL8CG5Be.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CU5EzhmX.js";import"./hooks-CjbPLp91.js";import"./axisSelectors-B-ON6UuJ.js";import"./zIndexSlice-DfG_LBZH.js";import"./renderedTicksSlice-BLRX00yy.js";import"./CartesianChart-B_9qra-d.js";import"./chartDataContext-D1nxolyM.js";import"./CategoricalChart-B6UPKjrz.js";import"./Layer-BVdUfIl0.js";import"./tooltipContext-kU_ZqqVJ.js";import"./ReactUtils--6xJa5xj.js";import"./Label-CYBLI-Y2.js";import"./Text-DYPz2gV9.js";import"./DOMUtils-bfarr5el.js";import"./ZIndexLayer-DsAf8BK3.js";import"./types-BSPZHGNH.js";import"./ActiveShapeUtils-BIKdmm5h.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bt3TSPnX.js";import"./useAnimationId-DgWDlavz.js";import"./Trapezoid-D7oKFicN.js";import"./Sector-DGNmg5hs.js";import"./Symbols-4bVcflIB.js";import"./Curve-BflKxEFk.js";import"./RegisterGraphicalItemId-CnbfgSt4.js";import"./ErrorBarContext-Du4SjFis.js";import"./GraphicalItemClipPath-Cm2-R3a1.js";import"./SetGraphicalItem-BUqWhQAE.js";import"./getZIndexFromUnknown-D6kEC5-j.js";import"./graphicalItemSelectors-C1R8rUPC.js";import"./index-2vD-No8t.js";import"./ChartSizeDimensions-EJWE07nJ.js";import"./OffsetShower-Dgs61RIJ.js";import"./PlotAreaShower-B71aiz9a.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const rt=["Fill"];export{e as Fill,rt as __namedExportsOrder,et as default};
