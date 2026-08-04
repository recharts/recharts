import{R as t}from"./iframe-COvR6m4y.js";import{R as p}from"./zIndexSlice-ou7P1k4B.js";import{C as m}from"./ComposedChart-Dhs-HtCT.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DMmRXe0D.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CwSdkZJ2.js";import"./index-C-vvr8x7.js";import"./index-FWviPRnN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bslp9ftf.js";import"./isWellBehavedNumber-BMFlPjoz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-S2j0RMDF.js";import"./index-DaYFSMwi.js";import"./index-BTT3eJrw.js";import"./renderedTicksSlice-BCt_pLiN.js";import"./axisSelectors-CgZaOuWk.js";import"./d3-scale-BKhMit0q.js";import"./CartesianChart-B3NTwVXz.js";import"./chartDataContext-BtNlXKIo.js";import"./CategoricalChart-dbTixxWK.js";import"./Layer-BxScpKop.js";import"./AnimatedItems-DVdwO1UF.js";import"./Label-DL7W3oea.js";import"./Text-CVNPXLFS.js";import"./DOMUtils-CI2tOPO2.js";import"./ZIndexLayer-fZm6clI3.js";import"./useAnimationId-Cb3gVBxS.js";import"./ActivePoints-BCa4N9Pu.js";import"./Dot-COu3_HTT.js";import"./types-C40QwNfk.js";import"./RegisterGraphicalItemId-DqoHzEMf.js";import"./GraphicalItemClipPath-BFgUMlnl.js";import"./SetGraphicalItem-CQMRhEff.js";import"./graphicalItemIdentity-KbS-c8wy.js";import"./ActiveShapeUtils-crCTkC1S.js";import"./Curve-C1YATuiv.js";import"./step-CeMcQkHX.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-bMPPd1I7.js";import"./graphicalItemSelectors-BqCxd3oP.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const tt=["FillPattern"];export{e as FillPattern,tt as __namedExportsOrder,$ as default};
