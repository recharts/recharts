import{e as t}from"./iframe-Gbg_l78M.js";import{R as s}from"./arrayEqualityCheck-B69LB4m3.js";import{C as m}from"./ComposedChart-B2lIhwzo.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-Ckyr1ywr.js";import{R as c}from"./RechartsHookInspector-Do2lkGOS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-sMeqIZjn.js";import"./immer-mU5ngVSZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B733cAvp.js";import"./index-Ck6DfcF7.js";import"./hooks-BX9UIUih.js";import"./axisSelectors-BhOsWb8H.js";import"./d3-scale-B1Xdl3mZ.js";import"./zIndexSlice-BsUMgwVy.js";import"./renderedTicksSlice-CfnOktJ2.js";import"./CartesianChart-D0_pR8lQ.js";import"./chartDataContext-DKgbTOGI.js";import"./CategoricalChart-CF19xo_7.js";import"./Layer-BI5znRpT.js";import"./tooltipContext-BuinOS6E.js";import"./ReactUtils-BEyTjZ-J.js";import"./Label-C97vZCUD.js";import"./Text-BbIMZo50.js";import"./DOMUtils-BEdmeFzJ.js";import"./ZIndexLayer-Cu_ZYhKd.js";import"./types-6-jxyL20.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BF5Ec1rO.js";import"./isPlainObject-C5_xiZ-_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ao9F5Oc0.js";import"./useAnimationId-FFZ8e1iF.js";import"./Trapezoid-B9yBSbp-.js";import"./Sector-NBw4H--I.js";import"./Symbols-DdxMLZNU.js";import"./symbol-gfqsi-zR.js";import"./step-BMA_kAfe.js";import"./Curve-CLZ73sU1.js";import"./RegisterGraphicalItemId-B4Pbzoa5.js";import"./ErrorBarContext-muYUytku.js";import"./GraphicalItemClipPath-C6vmlIdz.js";import"./SetGraphicalItem-BeRS8RAb.js";import"./getZIndexFromUnknown-Cy4PUDpq.js";import"./graphicalItemSelectors-DNwiyt9-.js";import"./index-Dqxuu1t4.js";import"./ChartSizeDimensions-BLrRxRyE.js";import"./OffsetShower-C_0qPv4p.js";import"./PlotAreaShower-C7q1PybE.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
