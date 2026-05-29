import{c as t}from"./iframe-C5MHh42j.js";import{g as p}from"./zIndexSlice-BAxAD9Hd.js";import{C as m}from"./ComposedChart-WRhT-Z7E.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-DVPuU0ZD.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BEKu5nAB.js";import"./index-BtGgX82p.js";import"./index-CtWdDAnJ.js";import"./get-w_pNkTrF.js";import"./resolveDefaultProps-50eaHBP1.js";import"./isWellBehavedNumber-Fry2DCdR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXiQbHg3.js";import"./index-DTHX5ifG.js";import"./index-Ddmpcm8d.js";import"./renderedTicksSlice-DJahilIk.js";import"./axisSelectors-l2EEhLAN.js";import"./d3-scale-DROX3YQd.js";import"./CartesianChart-DdDBbaWH.js";import"./chartDataContext-B3IBL15G.js";import"./CategoricalChart-iSFUJ3mM.js";import"./Curve-thevB7o-.js";import"./types-DIsFNNUR.js";import"./step-CW5jkV_V.js";import"./path-DyVhHtw_.js";import"./Layer-BTdnKXgq.js";import"./ReactUtils-BVj-7vfo.js";import"./Label-DPuGsfIc.js";import"./Text-Dd3m04ll.js";import"./DOMUtils-DPyYMl93.js";import"./ZIndexLayer-BqFMND8v.js";import"./ActivePoints-hHK0AETy.js";import"./Dot-C9bGlN1x.js";import"./RegisterGraphicalItemId-D7dR1c0l.js";import"./GraphicalItemClipPath-D6R49ofK.js";import"./SetGraphicalItem-3zA0iFCt.js";import"./useAnimationId-D3rbPHOS.js";import"./getRadiusAndStrokeWidthFromDot-Om5tnWtK.js";import"./graphicalItemSelectors-CXCIX9f6.js";const Y={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const Z=["FillPattern"];export{e as FillPattern,Z as __namedExportsOrder,Y as default};
