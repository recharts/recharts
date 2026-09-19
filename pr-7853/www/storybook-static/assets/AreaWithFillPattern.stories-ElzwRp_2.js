import{R as t}from"./iframe-BrTyBnwX.js";import{R as p}from"./zIndexSlice-fCAjIC-s.js";import{C as m}from"./ComposedChart-D5HBBFyd.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CgXFy_s2.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DoecO86t.js";import"./index-Bv6_RxtD.js";import"./index-COio-J2v.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-pdBcEa5m.js";import"./isWellBehavedNumber-yFPwar6M.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BNiYksGw.js";import"./axisSelectors-CsVFdpc7.js";import"./d3-scale-BBCERD4_.js";import"./index-6bvANrWw.js";import"./index-CY5SFnak.js";import"./renderedTicksSlice-BfFRGBwT.js";import"./index-DWzY76B7.js";import"./CartesianChart-C4EYf5JO.js";import"./chartDataContext-C8snCbmL.js";import"./CategoricalChart-C8btz5qd.js";import"./Layer-DXlWYKjQ.js";import"./AnimatedItems-Cw_YQpsP.js";import"./Label-BmV3H-Sw.js";import"./Text-BiFKA33F.js";import"./DOMUtils-DAEkqOho.js";import"./useId-DsdbKPS3.js";import"./useBackwardsCompatibleTheme-DZwZ5sQ-.js";import"./ZIndexLayer-CRDOSP7u.js";import"./useAnimationId-CQ1-fLBA.js";import"./ActivePoints-DGnEStBQ.js";import"./Dot-BNzrtaBE.js";import"./types-CIyrEG5X.js";import"./RegisterGraphicalItemId-NAciwQoL.js";import"./GraphicalItemClipPath-DJrsjfnr.js";import"./SetGraphicalItem-eWJRfUVz.js";import"./getRadiusAndStrokeWidthFromDot-Ds0TVCkG.js";import"./ActiveShapeUtils-DenUl92R.js";import"./Curve-C0Njno5j.js";import"./step-DqmVBTvC.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CTGe8VwY.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
