import{R as t}from"./iframe-BkVFpUlY.js";import{R as p}from"./zIndexSlice-DsJvGkf_.js";import{C as m}from"./ComposedChart-B-luCTs0.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-qnUFdArJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BmqzJcEu.js";import"./index-0hsVYWu6.js";import"./index-DymoF_97.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BteSFwB2.js";import"./isWellBehavedNumber-CfBMT12P.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-odbOlBoE.js";import"./axisSelectors-B50PWx2F.js";import"./d3-scale-DYQ4LMXq.js";import"./index-Q5aHXVFQ.js";import"./index-YkbYvVvq.js";import"./renderedTicksSlice-CwTU9gZs.js";import"./index-DUxWWrkZ.js";import"./CartesianChart-CqMhYxBy.js";import"./chartDataContext-VrlvbsLo.js";import"./CategoricalChart-CzfSjKl0.js";import"./Layer-DQ1QN6bj.js";import"./AnimatedItems-BpowKEth.js";import"./Label-Cg9XptP0.js";import"./Text-BIwedGTb.js";import"./DOMUtils-BcDWMqtm.js";import"./useId-Cugd2wLY.js";import"./useBackwardsCompatibleTheme-bP9OoM6q.js";import"./ZIndexLayer-CfoAs0yr.js";import"./useAnimationId-Bk6mcJf6.js";import"./ActivePoints-De3lIG5I.js";import"./Dot-D7W2BemX.js";import"./types-CKn4wQG_.js";import"./RegisterGraphicalItemId-C4Vmg6Ny.js";import"./GraphicalItemClipPath-KjuHWuk-.js";import"./SetGraphicalItem-BGmRK6gI.js";import"./getRadiusAndStrokeWidthFromDot-QIQHTPvf.js";import"./ActiveShapeUtils-BSJyn28s.js";import"./Curve-j6CNmiH0.js";import"./step-BxPdVPhz.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D9FBhzIW.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
