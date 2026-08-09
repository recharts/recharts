import{R as t}from"./iframe-CRyknHcV.js";import{R as p}from"./zIndexSlice-D94J06pN.js";import{C as m}from"./ComposedChart-DHhrqJQt.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BIaMaYLd.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CdnYcrez.js";import"./index-BbPWbk6H.js";import"./index-CEdVW4kJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bykyhg_C.js";import"./isWellBehavedNumber-BT2IcqCv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BtW47C_U.js";import"./index-BH8DbImd.js";import"./index-_DeEburD.js";import"./axisSelectors-HI2cMDW5.js";import"./d3-scale-BQSgkEBA.js";import"./renderedTicksSlice-D7DzHBC4.js";import"./CartesianChart-CYC8tTC2.js";import"./chartDataContext-CeCxKcZU.js";import"./CategoricalChart-C5pYrdFP.js";import"./Layer-tFywX8jB.js";import"./AnimatedItems-DuJcIC8o.js";import"./Label-Bb81vEf3.js";import"./Text-AosieIGC.js";import"./DOMUtils-DDmVxA4T.js";import"./ZIndexLayer-CO71XxiU.js";import"./useAnimationId-B3genVAW.js";import"./ActivePoints-DQSPDrQl.js";import"./Dot-Cg5Ch71G.js";import"./types-CgTXGcnU.js";import"./RegisterGraphicalItemId-CQD31yq-.js";import"./GraphicalItemClipPath-BjhjGLpR.js";import"./SetGraphicalItem-sEhy2M4N.js";import"./getRadiusAndStrokeWidthFromDot-CPUyhS2F.js";import"./ActiveShapeUtils-0pw7uw2c.js";import"./Curve-Cx7OO1Tc.js";import"./step-CoZJp4zn.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-CjmNK8Bl.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-EbGwL4_5.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
