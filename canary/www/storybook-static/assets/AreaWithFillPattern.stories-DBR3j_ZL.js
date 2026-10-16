import{R as t}from"./iframe-D9OaE0-D.js";import{R as p}from"./zIndexSlice-C6kYgFGy.js";import{C as m}from"./ComposedChart-7wLgVQR2.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DrUNqhiB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C2SndTCZ.js";import"./index-CPbI-VNQ.js";import"./index-Dk0thkU_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BdEIFooo.js";import"./isWellBehavedNumber-BGqhKh1u.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-2JOV4OxH.js";import"./axisSelectors-D_Wp4SpS.js";import"./d3-scale-C7A9n28f.js";import"./index-BY4SHn_n.js";import"./index-Bvh82Xr6.js";import"./renderedTicksSlice-PaBI4ux9.js";import"./index-Dd8asFuH.js";import"./CartesianChart-FZa6BBKS.js";import"./chartDataContext-Cp5Fg0uV.js";import"./CategoricalChart-CEVp6apd.js";import"./Layer-D4toxw-K.js";import"./activeStyles-8VQiBHQs.js";import"./Label-DM3WzLWy.js";import"./Text-BzPsoW0G.js";import"./pageBackground-Cv-86bVo.js";import"./useId-DeYBD4I8.js";import"./useBackwardsCompatibleTheme-ClikVWmk.js";import"./ZIndexLayer-D_H7NPBA.js";import"./useAnimationId-D-wfB7qE.js";import"./dataEntryStyles-Bho6MXC7.js";import"./ActivePoints-BxgbZhZA.js";import"./Dot-B6z8g14w.js";import"./types-CXdLVzsF.js";import"./GraphicalItemClipPath-DMgrRmW6.js";import"./SetGraphicalItem-jAe7eVS9.js";import"./getRadiusAndStrokeWidthFromDot-CakziVew.js";import"./ActiveShapeUtils-Dsfqnr6i.js";import"./Curve-BeWRx8o8.js";import"./step-BNV5-s-4.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-B44sET-2.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
