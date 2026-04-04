import{e as t}from"./iframe-DUJvjQLt.js";import{R as s}from"./arrayEqualityCheck-D73e69Gl.js";import{C as m}from"./ComposedChart-ClTTKAwr.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-HuRVswbs.js";import{R as c}from"./RechartsHookInspector-DrzYioyl.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-8ySwU0EB.js";import"./immer-5FyrIQvG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CgMQObc0.js";import"./index-5w8w8rw4.js";import"./hooks-yQB_dM7s.js";import"./axisSelectors-sUoMIbfp.js";import"./d3-scale-DeFOwVvR.js";import"./zIndexSlice-Bkmt5zDA.js";import"./renderedTicksSlice-CvJNCVvu.js";import"./CartesianChart-DJ5W1dUn.js";import"./chartDataContext-BQu7UVSx.js";import"./CategoricalChart-Fz_Uxhkr.js";import"./Layer-CllgDPqI.js";import"./tooltipContext-Bdh0HiMB.js";import"./ReactUtils-t-sHadM3.js";import"./Label-DTyf3h_b.js";import"./Text-xsfGunAq.js";import"./DOMUtils-DjWXT55X.js";import"./ZIndexLayer-CKSncrZg.js";import"./types-CDGURZBi.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BpbAKqrS.js";import"./isPlainObject-Dz-OvCgD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BxgoD1Qw.js";import"./useAnimationId-Dw_qoDvw.js";import"./Trapezoid-6uim8m8Z.js";import"./Sector-CpvLellE.js";import"./Symbols-uJbjONwG.js";import"./symbol-Dyd8e6t_.js";import"./step-Cx__dv2e.js";import"./Curve-VbNPleyE.js";import"./RegisterGraphicalItemId-D72lmnH7.js";import"./ErrorBarContext-DyOg8xi-.js";import"./GraphicalItemClipPath-CkZzGh0E.js";import"./SetGraphicalItem-vFCTqo9Z.js";import"./getZIndexFromUnknown-C2h-A9e3.js";import"./graphicalItemSelectors-CyfSSe6N.js";import"./index-v5p6oAve.js";import"./ChartSizeDimensions-BX1JxuVN.js";import"./OffsetShower-CNz_UBJI.js";import"./PlotAreaShower-C2224vVQ.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const lt=["Fill"];export{r as Fill,lt as __namedExportsOrder,mt as default};
