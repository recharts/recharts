import{e as t}from"./iframe-Dic5b5u9.js";import{R as s}from"./arrayEqualityCheck-CfNiUq5T.js";import{C as m}from"./ComposedChart-C5Un0Pn6.js";import{B as e}from"./Bar-Bxzwlyex.js";import{R as l}from"./RechartsHookInspector-BvAm56d5.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDhFhLoK.js";import"./immer-DO_1p9A2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwcAc9rH.js";import"./index-BBLbjH9O.js";import"./hooks-Bu1stH2v.js";import"./axisSelectors-CqWe9_C7.js";import"./d3-scale-CJF7DMMB.js";import"./zIndexSlice-c2vW1fTY.js";import"./renderedTicksSlice-CXC0QcBD.js";import"./CartesianChart-ouzhSpug.js";import"./chartDataContext-hawu8zXf.js";import"./CategoricalChart-CJvtpOjk.js";import"./Layer--MXbGqBf.js";import"./tooltipContext-BCIFIRU3.js";import"./ReactUtils-C3t93VlX.js";import"./Label-XiLbdVhV.js";import"./Text-DgjxsA1i.js";import"./DOMUtils-Dx-Do2uf.js";import"./ZIndexLayer-Du88RvFA.js";import"./types-MaB3S0wV.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Bfxy2ZjA.js";import"./isPlainObject-DFOBG5y0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C-Toc0UH.js";import"./useAnimationId-BHBeabuo.js";import"./Trapezoid-BhSV_XOS.js";import"./Sector-Dn12wzOD.js";import"./Symbols-Dq5eEVdj.js";import"./symbol-DYOCtDcg.js";import"./step-CGWB_5kj.js";import"./Curve-C8vpU7Np.js";import"./RegisterGraphicalItemId-Wdyfwocl.js";import"./ErrorBarContext-BCjIHby4.js";import"./GraphicalItemClipPath-Uq3L6gOZ.js";import"./SetGraphicalItem-DESbPWBV.js";import"./getZIndexFromUnknown-baSjVdEM.js";import"./graphicalItemSelectors-BaU2hrjo.js";import"./index-D-G3yyNK.js";import"./ChartSizeDimensions-BPhsCp9P.js";import"./OffsetShower-DiZAUQqT.js";import"./PlotAreaShower-BoaFsJKz.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
