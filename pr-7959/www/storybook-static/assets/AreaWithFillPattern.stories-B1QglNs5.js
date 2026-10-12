import{R as t}from"./iframe-D1Pqp3X7.js";import{R as p}from"./zIndexSlice-CC0vixK0.js";import{C as m}from"./ComposedChart-BLkMIV9V.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-sWnq2xxa.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ukQujWSR.js";import"./index-hC6YZk0S.js";import"./index-4O2rY_Cx.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BY3VWyF-.js";import"./isWellBehavedNumber-D9UYuuaw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dlv3UuBc.js";import"./axisSelectors-D2uT0zOX.js";import"./d3-scale-BBX2CRCX.js";import"./index-tZNJXdgS.js";import"./index-BxZa8ohf.js";import"./renderedTicksSlice-BfFvXFNo.js";import"./index-C4H2qa0s.js";import"./CartesianChart-C5RCyQJ8.js";import"./chartDataContext-Bgnde7n0.js";import"./CategoricalChart-B93ipspd.js";import"./Layer-Bv1Fmb_W.js";import"./activeStyles-Bni41BPX.js";import"./Label-CD1DJmaw.js";import"./Text-B3gTwU4t.js";import"./pageBackground-BD-8uHz0.js";import"./useId-DZsUPY-C.js";import"./useBackwardsCompatibleTheme-yQkddBeS.js";import"./ZIndexLayer-Bv7_Srb_.js";import"./useAnimationId-Bu_aUyhK.js";import"./dataEntryStyles-DesCUen4.js";import"./ActivePoints-BTUoBtm0.js";import"./Dot-q9DoNaCP.js";import"./types-CpySGoie.js";import"./GraphicalItemClipPath-BrZXwUEO.js";import"./SetGraphicalItem-DW-Ki2gV.js";import"./getRadiusAndStrokeWidthFromDot-8ztb8GwF.js";import"./ActiveShapeUtils-NtxvAIW2.js";import"./Curve-D1xsq6-l.js";import"./step-7AUpGbZt.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-D04u3iKL.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
