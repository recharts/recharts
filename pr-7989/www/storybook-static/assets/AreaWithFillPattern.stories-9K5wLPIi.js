import{R as t}from"./iframe-B0yo2V4n.js";import{R as p}from"./zIndexSlice-B7uClMUs.js";import{C as m}from"./ComposedChart-B_AnK-ab.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CN7C-jps.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CrsZu1Ef.js";import"./index-CksSbcNy.js";import"./index-CCtvozBT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C_-4-Tqn.js";import"./isWellBehavedNumber-CZXpTiYT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CQikX2jp.js";import"./axisSelectors-CMjYVwhk.js";import"./d3-scale-B4crR7Dq.js";import"./index-T1a_0V0g.js";import"./index-DKVx0AFW.js";import"./renderedTicksSlice-Boaz1NGF.js";import"./index-2BBeHhTL.js";import"./CartesianChart-DjmfdwhX.js";import"./chartDataContext-B2JeciGL.js";import"./CategoricalChart-BCaNllRk.js";import"./Layer-BkWM3RIH.js";import"./activeStyles-_C6RQVwk.js";import"./Label-CnUHNStt.js";import"./Text-CHF9ypYR.js";import"./pageBackground-0wikHvI2.js";import"./useId-BnV_tbx_.js";import"./useBackwardsCompatibleTheme-DI9J0y19.js";import"./ZIndexLayer-DLG58JCm.js";import"./useAnimationId-DO-aK-tu.js";import"./dataEntryStyles-CjubJGLE.js";import"./ActivePoints-ohc9ZXCs.js";import"./Dot-OL_y42KN.js";import"./types-L-bd4Nc-.js";import"./GraphicalItemClipPath-CMzZysYx.js";import"./SetGraphicalItem-Z-H48Tbu.js";import"./getRadiusAndStrokeWidthFromDot-BzPG4IYK.js";import"./ActiveShapeUtils-C0F7emTJ.js";import"./Curve-DRU8kykY.js";import"./step-BoSTRipl.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-Bupc-s0s.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
