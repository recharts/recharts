import{e as t}from"./iframe-BDbjAAY0.js";import{R as s}from"./arrayEqualityCheck-DJY85fxA.js";import{C as m}from"./ComposedChart-DUpW5Dqy.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-CXs4wF06.js";import{R as c}from"./RechartsHookInspector-l9vgHPs1.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D-Zx47ck.js";import"./immer-3ylQEXI_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Gh-MCRwt.js";import"./index-BhpTR8oZ.js";import"./hooks-C0v4GivV.js";import"./axisSelectors-DbWMAUln.js";import"./d3-scale-BNnaBGak.js";import"./zIndexSlice-CHJt3ZwD.js";import"./renderedTicksSlice-CKF1aMX1.js";import"./CartesianChart-CLKXkeKc.js";import"./chartDataContext-BKhnDKi8.js";import"./CategoricalChart-DHzD4_v9.js";import"./Layer-ChHYMtjc.js";import"./tooltipContext-DhnNKd2C.js";import"./ReactUtils-BoM_s_He.js";import"./Label-CjqdpviA.js";import"./Text-BIZLV0ge.js";import"./DOMUtils-BrS2Cx0f.js";import"./ZIndexLayer-DzwMAaCJ.js";import"./types-rcyNgq1E.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-NUFnhrmW.js";import"./isPlainObject-BaMZfXSR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D6qTYq9W.js";import"./useAnimationId--rOGa3cY.js";import"./Trapezoid-DbFTD1xK.js";import"./Sector-Bpj1QdoM.js";import"./Symbols-DjgjaJLS.js";import"./symbol-CPmvNDGT.js";import"./step-EtEDGKHl.js";import"./Curve-0uMvsclI.js";import"./RegisterGraphicalItemId-C7xusUhZ.js";import"./ErrorBarContext-CdZbKyaL.js";import"./GraphicalItemClipPath-DAX0DDhK.js";import"./SetGraphicalItem-BNU0IRAh.js";import"./getZIndexFromUnknown-DDwWzgib.js";import"./graphicalItemSelectors-D9W_uuYm.js";import"./index-s419WJjU.js";import"./ChartSizeDimensions-DpPbcXoW.js";import"./OffsetShower-0WW1yvr8.js";import"./PlotAreaShower-BpI_n9Qg.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
