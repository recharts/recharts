import{R as t}from"./iframe-BcaWFD7u.js";import{R as p}from"./zIndexSlice-bS7cYBKO.js";import{C as m}from"./ComposedChart-BWld5lXM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Dn-qwbKS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dz1UTb_M.js";import"./index-DD-aKuCi.js";import"./index-DVZ7kkny.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CqMML5sA.js";import"./isWellBehavedNumber-BP6UcqH1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-VIMVig.js";import"./index-Cgtj3oPE.js";import"./index-xxpNQb8f.js";import"./axisSelectors-D0fMBFBE.js";import"./d3-scale-CjZBqtB1.js";import"./renderedTicksSlice-naYz1W_2.js";import"./CartesianChart-CjI4gSTo.js";import"./chartDataContext-BwgPsUMn.js";import"./CategoricalChart-CgNZHuyL.js";import"./Layer-BhtJX80Y.js";import"./AnimatedItems-e5mGDN3Y.js";import"./Label-C-frAhmf.js";import"./Text-C02gRxFY.js";import"./DOMUtils-BvzyNhX6.js";import"./useId-Dsncsbnj.js";import"./useBackwardsCompatibleTheme-R44_v_zH.js";import"./ZIndexLayer-CI7tJTJS.js";import"./useAnimationId-DDgucPPX.js";import"./ActivePoints-CvqJbqjR.js";import"./Dot-DD0Nn15x.js";import"./types-BCqYYX1O.js";import"./RegisterGraphicalItemId-C3WPLV-4.js";import"./GraphicalItemClipPath-BL_hooiS.js";import"./SetGraphicalItem-BClSdCLV.js";import"./getRadiusAndStrokeWidthFromDot-DyVM-7ZZ.js";import"./ActiveShapeUtils-BL97HDhi.js";import"./Curve-DaA6zKZn.js";import"./step-CXwuHX1W.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-ITGLymVg.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const rt=["FillPattern"];export{e as FillPattern,rt as __namedExportsOrder,et as default};
