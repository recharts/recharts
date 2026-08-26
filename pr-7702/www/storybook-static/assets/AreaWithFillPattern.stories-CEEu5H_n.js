import{R as t}from"./iframe-NQEVGrWF.js";import{R as p}from"./zIndexSlice-CP33F7KF.js";import{C as m}from"./ComposedChart-Cgzz0lSa.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-B_t7Sx-B.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CkddbLRN.js";import"./index-B9NPWI0k.js";import"./index-CRVzIMtc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CGKk3whs.js";import"./isWellBehavedNumber-Dsnr4nI4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7RacVym.js";import"./axisSelectors-5o3NJxix.js";import"./d3-scale-C0DHVJ_t.js";import"./index-aCLowHDg.js";import"./index-B8SC5NXw.js";import"./renderedTicksSlice-Cd3xmYKN.js";import"./index-DGDKtdxG.js";import"./CartesianChart-BeI0IYJq.js";import"./chartDataContext-CvCTBKTZ.js";import"./CategoricalChart-CoPL0zMa.js";import"./Layer-BG4rdiih.js";import"./AnimatedItems-DrvzgAVh.js";import"./Label-B9UYxviU.js";import"./Text-DakXKvvI.js";import"./DOMUtils-CiNl2Unk.js";import"./useId-DDLNeh8Q.js";import"./useBackwardsCompatibleTheme-B1LwAuqZ.js";import"./ZIndexLayer-n1tytnrA.js";import"./useAnimationId-CyMrVWUy.js";import"./ActivePoints-jIqLZQku.js";import"./Dot-BomDn2NI.js";import"./types-BJqKvaYz.js";import"./RegisterGraphicalItemId-DJee5cpk.js";import"./GraphicalItemClipPath-Bh5K_QLr.js";import"./SetGraphicalItem-D8Gbozo5.js";import"./getRadiusAndStrokeWidthFromDot-B6sJlwAv.js";import"./ActiveShapeUtils-DwrA3FQy.js";import"./Curve-Do1Fb_jm.js";import"./step-ByZJsQBm.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BjkPEz73.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const it=["FillPattern"];export{e as FillPattern,it as __namedExportsOrder,rt as default};
