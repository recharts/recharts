import{R as t}from"./iframe-CWlxxFHy.js";import{R as p}from"./zIndexSlice-eChv8v5o.js";import{C as m}from"./ComposedChart-euduWCYe.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-1Rd9v__c.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cuwp_Om4.js";import"./index-COS8QMAe.js";import"./index-BmRJ-b8E.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CVJCZaPv.js";import"./isWellBehavedNumber-ChXHiBih.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B211gnQK.js";import"./axisSelectors-CY4U4PmW.js";import"./d3-scale-OLXd5h8I.js";import"./index-CVuc-u2_.js";import"./index-uNGw9-ET.js";import"./renderedTicksSlice-BfstiInC.js";import"./index-C1WwnpLj.js";import"./CartesianChart-3sXmRDbR.js";import"./chartDataContext-tJUp4txc.js";import"./CategoricalChart-D5zBV6NM.js";import"./Layer-bfSBtv71.js";import"./AnimatedItems-mLTl2k4L.js";import"./Label-DN7T9GpD.js";import"./Text-th2Jn0HQ.js";import"./DOMUtils-Cr7AYV1x.js";import"./useId-pWQDKLmz.js";import"./useBackwardsCompatibleTheme-DcL_98G3.js";import"./ZIndexLayer-C0s9Ohbn.js";import"./useAnimationId-BVaZGbnp.js";import"./ActivePoints-DyM9bM1H.js";import"./Dot-CVl6koMA.js";import"./types-CjEkwpQR.js";import"./RegisterGraphicalItemId-C2KKr6Fw.js";import"./GraphicalItemClipPath-BZhOYfMs.js";import"./SetGraphicalItem-tjuShIDU.js";import"./getRadiusAndStrokeWidthFromDot-DJ40vw26.js";import"./ActiveShapeUtils-CN9JJwYa.js";import"./Curve-DlnhjhNv.js";import"./step-ClKKiZTa.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BaE4xim7.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
