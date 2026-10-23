import{R as t}from"./iframe-D54unYLy.js";import{R as p}from"./zIndexSlice-Cm3b7ejj.js";import{C as m}from"./ComposedChart-D7cf1DfT.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-ChzN4-1G.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DMkP6nmZ.js";import"./index-DTKKzB_q.js";import"./index-DJM2R3WX.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CJCAn8xn.js";import"./isWellBehavedNumber-BRWfHs55.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Sp30bFVi.js";import"./axisSelectors-CGx4lpK1.js";import"./d3-scale-izKDfaZA.js";import"./index-C9p80rQK.js";import"./index-DILyQNHS.js";import"./renderedTicksSlice-D7aoxSus.js";import"./index-BNdKzrH5.js";import"./CartesianChart-CcD5rs5o.js";import"./chartDataContext-Coa6LtBf.js";import"./CategoricalChart-Bg1dkEg1.js";import"./Layer-crHiZgAm.js";import"./activeStyles-qzo8AQBX.js";import"./Label-A3PRHVZO.js";import"./Text-CRGGbb6_.js";import"./pageBackground-CsysAoq2.js";import"./useId-B4uqruq9.js";import"./useBackwardsCompatibleTheme-BSJdofEh.js";import"./ZIndexLayer-DfUYfUZg.js";import"./useAnimationId-C7SuCt1Q.js";import"./dataEntryStyles-CsFYoURq.js";import"./ActivePoints-Bqn9pf-5.js";import"./Dot-B2rX6rOm.js";import"./types-BmPqNA2a.js";import"./GraphicalItemClipPath-DDtxOsTL.js";import"./SetGraphicalItem-Y9oO0QZg.js";import"./getRadiusAndStrokeWidthFromDot-DqXexg1f.js";import"./ActiveShapeUtils-DPaRxWi8.js";import"./Curve-leEdGdAp.js";import"./step-C309cuJU.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BB9JnQ0o.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,rt as __namedExportsOrder,et as default};
