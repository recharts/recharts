import{R as t}from"./iframe-Bz2BdfN4.js";import{R as p}from"./zIndexSlice-CrpvQ3cZ.js";import{C as m}from"./ComposedChart-BId0bh4a.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DgwKDdyP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B-XPotXa.js";import"./index-m3Fpm_2g.js";import"./index-C_HDr07T.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CwyxmUze.js";import"./isWellBehavedNumber-CN1l9n-g.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BKy4IHB9.js";import"./axisSelectors-DHqPZzoA.js";import"./d3-scale-BYzlom2n.js";import"./index-Coj5AO7r.js";import"./index-D7YhX5lQ.js";import"./renderedTicksSlice-BaDfPCVK.js";import"./index-CC0XKx94.js";import"./CartesianChart-D9Oal9EV.js";import"./chartDataContext-BjNcuyRP.js";import"./CategoricalChart-Bq1JSSY0.js";import"./Layer-DzdETfRU.js";import"./AnimatedItems-CrHQSA2B.js";import"./Label-CorAy009.js";import"./Text-BBc8PFQR.js";import"./DOMUtils-DYVcve-D.js";import"./useId-BTmP1k4h.js";import"./useBackwardsCompatibleTheme-CuJrnw16.js";import"./ZIndexLayer-CfRVDFXb.js";import"./useAnimationId-DBdf0eRq.js";import"./ActivePoints-CCokz9Hm.js";import"./Dot-l8R5dmYj.js";import"./types-DhKwB64F.js";import"./RegisterGraphicalItemId-T7-fSXxk.js";import"./GraphicalItemClipPath-DlHTJze-.js";import"./SetGraphicalItem-BSvf_Zq8.js";import"./getRadiusAndStrokeWidthFromDot-DcpCddvL.js";import"./ActiveShapeUtils-Ds6IyY6j.js";import"./Curve-Di-YqH3x.js";import"./step-BuRQ76GT.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Ccoked2c.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
