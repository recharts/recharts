import{R as t}from"./iframe-DsTklGd_.js";import{R as p}from"./zIndexSlice-BtbFiuZY.js";import{C as m}from"./ComposedChart-CSeGHIwL.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DyBdlvpf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DdQ2CShf.js";import"./index-BXaEWxS9.js";import"./index-CDyKR3cz.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bms6p2jX.js";import"./isWellBehavedNumber-CnKVaaX2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DgwcOqsJ.js";import"./axisSelectors-DYheqAyK.js";import"./d3-scale-m8FOg4h4.js";import"./index-DPiom88R.js";import"./index-DwiZHk90.js";import"./renderedTicksSlice-BKqQhYx3.js";import"./index-blk6unfu.js";import"./CartesianChart-CPHbQoR9.js";import"./chartDataContext-PmdzKedQ.js";import"./CategoricalChart-DoFDJCgx.js";import"./Layer-CZKgQj5k.js";import"./activeStyles-CRt5O3EE.js";import"./Label-D9BiQh3x.js";import"./Text-BbSBkVqk.js";import"./pageBackground-BHVKZknb.js";import"./useId-Dh4XaEh2.js";import"./useBackwardsCompatibleTheme-DVVyS6sc.js";import"./ZIndexLayer-DFFwnPWa.js";import"./useAnimationId-DDiQkgxw.js";import"./dataEntryStyles-Cfp8oK59.js";import"./ActivePoints-B7jiKkUq.js";import"./Dot-DzYpmtjj.js";import"./types-CPppnSS0.js";import"./GraphicalItemClipPath-K8g7er1I.js";import"./SetGraphicalItem-Bi7lJTO4.js";import"./getRadiusAndStrokeWidthFromDot-D7P1mq2m.js";import"./ActiveShapeUtils-Cg3stx7N.js";import"./Curve-BNsFHGFj.js";import"./step-DT1sNEdD.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-yxNF_elp.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
