import{R as t}from"./iframe-DIZ3O37q.js";import{R as p}from"./zIndexSlice-BQzkuVGb.js";import{C as m}from"./ComposedChart-D39bvl9W.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DbDXXgfX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CmJg4BXK.js";import"./index-v0zH_vno.js";import"./index-eN1sdWPw.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CZ7A5O_B.js";import"./isWellBehavedNumber-C03WQupV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DCqN-I2W.js";import"./axisSelectors-CgxEqo8X.js";import"./d3-scale-BsLoKPkH.js";import"./index-Cmvub_uM.js";import"./index-ywKEni0y.js";import"./renderedTicksSlice-dPbGmcjH.js";import"./index-DJHqlgJe.js";import"./CartesianChart-BArvePMg.js";import"./chartDataContext-DHk2uxah.js";import"./CategoricalChart-C-yl_Evz.js";import"./Layer-dog9ZdZ9.js";import"./activeStyles-heSOU5tv.js";import"./Label-BKiGyQaq.js";import"./Text-CxShOurV.js";import"./pageBackground-RtZmpZCV.js";import"./useId-JbG4rdAV.js";import"./useBackwardsCompatibleTheme-BOuG0K82.js";import"./ZIndexLayer-DpnduxRR.js";import"./dataEntryStyles-DEoRHL3P.js";import"./useAnimationId-1Ju_H0cm.js";import"./ActivePoints-CKzWXL41.js";import"./Dot-CFyjFdrS.js";import"./types-DIw8xebl.js";import"./RegisterGraphicalItemId-CU20DwEk.js";import"./SetGraphicalItem-BH1Y0jBy.js";import"./getRadiusAndStrokeWidthFromDot-DM7-yOyB.js";import"./ActiveShapeUtils-CU9aD14w.js";import"./Curve-BKoNYh1Q.js";import"./step-Bx5ie7RH.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-CsQCtOFi.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
