import{R as t}from"./iframe-B5plfFOD.js";import{R as p}from"./zIndexSlice-DbNmOY3-.js";import{C as m}from"./ComposedChart-DIa361yX.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Bo7j2yjz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B-azr0kq.js";import"./index-PX_n5hQs.js";import"./index-CNQoj7bz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BlDjsfrB.js";import"./isWellBehavedNumber-Da64mp0K.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGezTKFK.js";import"./index-CL4khl8X.js";import"./index-Wbnw9Fvi.js";import"./axisSelectors-BLYlno2y.js";import"./d3-scale-DCKop38A.js";import"./renderedTicksSlice-BhrWC83q.js";import"./CartesianChart-DwKWqDkX.js";import"./chartDataContext-kMO755bg.js";import"./CategoricalChart-C1LQoQak.js";import"./Layer-ByEseNp7.js";import"./AnimatedItems-B1lzxzMI.js";import"./Label-D1J3ucoA.js";import"./Text-CpDGg_G2.js";import"./DOMUtils-D6jyt4Vs.js";import"./useId-Bp2MS-0a.js";import"./useBackwardsCompatibleTheme-DbWiZjcQ.js";import"./ZIndexLayer-IfT3mYts.js";import"./useAnimationId-B-SkX0Hu.js";import"./ActivePoints-0px9-aiA.js";import"./Dot-DN6yzzHr.js";import"./types-BGPhMwrg.js";import"./RegisterGraphicalItemId-CWna7QKU.js";import"./GraphicalItemClipPath-Qthp7O67.js";import"./SetGraphicalItem-CTmoE1ld.js";import"./getRadiusAndStrokeWidthFromDot-bk7Qsl9y.js";import"./ActiveShapeUtils-DUhOL-u8.js";import"./Curve-CaJzkXTx.js";import"./step-BSKO3-IJ.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-8MsBpaW-.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
