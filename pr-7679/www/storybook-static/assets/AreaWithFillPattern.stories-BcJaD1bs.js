import{R as t}from"./iframe-COdQ-_i9.js";import{R as p}from"./zIndexSlice-BAUHEZhm.js";import{C as m}from"./ComposedChart-BtTR-vCs.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Dpa8UwKB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DRdGH59w.js";import"./index-nH6MfLbp.js";import"./index-m-v483sf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-dt-7inwK.js";import"./isWellBehavedNumber-B44fORf2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BTy3ifzR.js";import"./index-DZp6-Cy2.js";import"./index-CaZNwhso.js";import"./axisSelectors-DbJ1cRpx.js";import"./d3-scale-CMt_xflf.js";import"./renderedTicksSlice-hdjV5rOA.js";import"./CartesianChart--ZzFWipT.js";import"./chartDataContext-C8omdLZa.js";import"./CategoricalChart-BY1Qswpd.js";import"./Layer-LpNLyWgX.js";import"./AnimatedItems-ePeQa2pM.js";import"./Label-CFb-_bkR.js";import"./Text-BgPldVXh.js";import"./DOMUtils-Di9E6LdJ.js";import"./useId-CipAwz_I.js";import"./useBackwardsCompatibleTheme-Cu3drd5h.js";import"./ZIndexLayer-BadBbMoS.js";import"./useAnimationId-B94kpDIK.js";import"./ActivePoints-ekgNIGe7.js";import"./Dot-BSGkTFAh.js";import"./types-Blz_Jgjg.js";import"./RegisterGraphicalItemId-WjWZ93CB.js";import"./GraphicalItemClipPath-BoTywd6M.js";import"./SetGraphicalItem-DdM0uyL7.js";import"./getRadiusAndStrokeWidthFromDot-CyRm1MKY.js";import"./ActiveShapeUtils-CaEJ6Khj.js";import"./Curve-K6myfO05.js";import"./step-CqirpvzS.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CURy2YR3.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
