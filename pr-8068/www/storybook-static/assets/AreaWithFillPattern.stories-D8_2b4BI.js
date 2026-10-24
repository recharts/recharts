import{R as t}from"./iframe-fRQcLAl5.js";import{R as p}from"./zIndexSlice-Dn-AwdFU.js";import{C as m}from"./ComposedChart-EXBPqiIb.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-B72zkI4X.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D9yJ7HBS.js";import"./index-k5JxmCtc.js";import"./index-DGdlAhFZ.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BSRNeAis.js";import"./isWellBehavedNumber-D73y1wlb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-UgoWSvvL.js";import"./axisSelectors-BcHvjcBD.js";import"./d3-scale-DfAPImNq.js";import"./index-CvX2HSRN.js";import"./index-BMhLMrsl.js";import"./renderedTicksSlice-B-odeO7S.js";import"./index-0uuwnO43.js";import"./CartesianChart-78VpV4en.js";import"./chartDataContext-DbJ6pwXa.js";import"./CategoricalChart-BOoKbn6G.js";import"./Layer-CbRW8QEs.js";import"./activeStyles-mU47mh7y.js";import"./Label-B-GmpToQ.js";import"./Text-Cru6BjP5.js";import"./pageBackground-CEHLL-Ei.js";import"./useId-C-HGw4dN.js";import"./useBackwardsCompatibleTheme-BHb08z9X.js";import"./ZIndexLayer-Cs8fSrLZ.js";import"./dataEntryStyles-DAJ1H5Ij.js";import"./useAnimationId-BA218cv-.js";import"./ActivePoints-D7vn9lL2.js";import"./Dot-CoF5eEMQ.js";import"./types-9LI4VHBg.js";import"./RegisterGraphicalItemId-B0TmU9i7.js";import"./GraphicalItemClipPath-DvSzn1zw.js";import"./SetGraphicalItem-fs95wN3Y.js";import"./getRadiusAndStrokeWidthFromDot-BW7yBTjT.js";import"./ActiveShapeUtils-DqrHb297.js";import"./Curve-CS-yaUma.js";import"./step-CpSFtT8B.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-H8Jal8DL.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,it as __namedExportsOrder,rt as default};
