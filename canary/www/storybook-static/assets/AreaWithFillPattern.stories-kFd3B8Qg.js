import{R as t}from"./iframe-HQzZVjBz.js";import{R as p}from"./zIndexSlice-CGQ7Au-h.js";import{C as m}from"./ComposedChart-CL_dGEsU.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DfEABfIU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CBKyBD78.js";import"./index-B-hjV7sb.js";import"./index-CoahYeeF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-FnTseFp7.js";import"./isWellBehavedNumber-CcswNJGt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CHbQgt_R.js";import"./axisSelectors-Pv4KR-zj.js";import"./d3-scale-Bm5seH5s.js";import"./index-Du00f8Ig.js";import"./index-Cd4WuegV.js";import"./renderedTicksSlice-CBd_vSTQ.js";import"./index-DBkbRNLm.js";import"./CartesianChart-CBFKxon3.js";import"./chartDataContext-B1WnW-uC.js";import"./CategoricalChart-CFFTEefl.js";import"./Layer-CZF3Yvdy.js";import"./activeStyles-Ctuz9FGV.js";import"./Label-CkcS20G_.js";import"./Text-BOeOqlf9.js";import"./pageBackground-BMzh5QHA.js";import"./useId-CLiKfQI1.js";import"./useBackwardsCompatibleTheme-BydTEdxL.js";import"./ZIndexLayer-B9EFhzLD.js";import"./useAnimationId-D_-yy58E.js";import"./dataEntryStyles-CrN8We-Y.js";import"./ActivePoints-B2Wdpvql.js";import"./Dot-CrUvj508.js";import"./types-Bq-isVxM.js";import"./GraphicalItemClipPath-CmI_2v97.js";import"./SetGraphicalItem-CCrIsVeT.js";import"./getRadiusAndStrokeWidthFromDot-DJSL-cTD.js";import"./ActiveShapeUtils-BYEpmP72.js";import"./Curve-CCST94p6.js";import"./step-mtRqlT_G.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-DU6QRSRw.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
