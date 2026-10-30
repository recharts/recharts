import{R as t}from"./iframe-3XHGwrzY.js";import{R as p}from"./zIndexSlice-Brmhs58T.js";import{C as m}from"./ComposedChart-3w0CXkas.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DvJzsCfx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B1pnPDuf.js";import"./throttle-CcufCSOD.js";import"./index-DfXu2aPp.js";import"./index-x3pA7Xn9.js";import"./RechartsWrapper-DFT9i2CK.js";import"./axisSelectors-0sscf7qw.js";import"./polarAxisSelectors-DX_jscyS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DC4T9Y5K.js";import"./index-CxvxzVyz.js";import"./index-Bka_NUAq.js";import"./renderedTicksSlice-dj_CVdaS.js";import"./index-B22a4gCm.js";import"./CartesianChart-CeapXKiM.js";import"./ZIndexPortal-v1uidM1c.js";import"./CategoricalChart-D2_ES5Wf.js";import"./Layer-Cs_-jK6s.js";import"./LabelList-KPZxqPb8.js";import"./Label-DV0q5jx7.js";import"./Text-BPYl0AVs.js";import"./DOMUtils-CArHkVGP.js";import"./ZIndexLayer-Da5OPXz2.js";import"./ActivePoints-CP837bSg.js";import"./Dot-aAEHGIGY.js";import"./types-DBamYHnY.js";import"./activeStyles-Pcudkpr-.js";import"./useAnimationId-9M90yRIF.js";import"./dataEntryStyles-DQz1PP-z.js";import"./fillDefinitions-Czp8LH37.js";import"./themeFill-BM4c2Gyu.js";import"./Symbols-CVFCOhtY.js";import"./symbol-Bnf2KWTy.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-pMWsFYWu.js";import"./getRadiusAndStrokeWidthFromDot-C8YM2wm9.js";import"./ActiveShapeUtils-VZdYbIVb.js";import"./Curve-BVBbiuI4.js";import"./step-DpyDB26Q.js";import"./useEffectiveDataKey-3BqFsLAv.js";const it={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},ot=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,ot as __namedExportsOrder,it as default};
