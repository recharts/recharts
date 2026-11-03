import{R as t}from"./iframe-BC6iQeUr.js";import{R as p}from"./zIndexSlice-DwuZ2Ow7.js";import{C as m}from"./ComposedChart-Bivk-oUr.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Djiy65XN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIZ3ps7e.js";import"./throttle-MiaNLFmz.js";import"./index-D3yqD8af.js";import"./index-CYTdWqrV.js";import"./RechartsWrapper-DHIomU5i.js";import"./axisSelectors-Bd1LmNHc.js";import"./polarAxisSelectors-mzCge1J3.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Daj11TvY.js";import"./index-D34_hmzU.js";import"./index-DraKlH0s.js";import"./renderedTicksSlice-BGFaFbR8.js";import"./index-B7dOZ4Mr.js";import"./fillDefinitions-B6DkeJW_.js";import"./CartesianChart-BLRdoMZg.js";import"./ZIndexPortal-jmLjufPW.js";import"./CategoricalChart-9j6tsrvq.js";import"./Layer-Cuu8DjLO.js";import"./LabelList-BFjn3eEm.js";import"./Label-BCMvROnb.js";import"./Text-fEDBC_0o.js";import"./DOMUtils-B8TR7nYh.js";import"./ZIndexLayer-DCc79hxk.js";import"./ActivePoints-JuUDd9nh.js";import"./Dot-DyLV3zJ_.js";import"./types-Dwpv4Yth.js";import"./activeStyles-DfgAGK4N.js";import"./useAnimationId-Cw69Pi1k.js";import"./dataEntryStyles-BFig0g5r.js";import"./Symbols-DBa5o5yK.js";import"./symbol-BvmQmKKh.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CqMMnBeb.js";import"./getRadiusAndStrokeWidthFromDot-DQip5ZIl.js";import"./ActiveShapeUtils-DxbJ9fQI.js";import"./Curve-BvPWva0Q.js";import"./step-DPNt-X3R.js";import"./useEffectiveDataKey-Bk74mtUJ.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
