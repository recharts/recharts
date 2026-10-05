import{R as t}from"./iframe-Mdt8VJ2w.js";import{R as p}from"./zIndexSlice-BsdMuIdb.js";import{C as m}from"./ComposedChart-eoHVURcz.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BpMXYykM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-VIBdIbYw.js";import"./index-aQiBtsFK.js";import"./index-CBF1PFXA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CpPg4Klh.js";import"./isWellBehavedNumber-t2MA1Hj2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BSXOrQ0o.js";import"./axisSelectors-BFf5BOkR.js";import"./d3-scale-DhLC6v_0.js";import"./index-Bh66vNwH.js";import"./index-BNwNegUe.js";import"./renderedTicksSlice-DSt8-RgC.js";import"./index-DXJpIZWy.js";import"./CartesianChart-Cjv56MYV.js";import"./chartDataContext-bPArfWn-.js";import"./CategoricalChart-DQulxF7t.js";import"./Layer-CcarLXD9.js";import"./AnimatedItems-B_SFlbBu.js";import"./Label-CtCuuSl7.js";import"./Text-C4xsU_o9.js";import"./DOMUtils-BUFAvfGk.js";import"./useId-DFFN6HWZ.js";import"./useBackwardsCompatibleTheme-CUPajrH3.js";import"./ZIndexLayer-Di_3Ujup.js";import"./useAnimationId-BjS9VFFE.js";import"./ActivePoints-BlFeeX4-.js";import"./Dot-BWITrl2w.js";import"./types-6Q4AmTS7.js";import"./RegisterGraphicalItemId-B7ELoHw_.js";import"./GraphicalItemClipPath-D5E8uSuA.js";import"./SetGraphicalItem-DcJbL-HK.js";import"./getRadiusAndStrokeWidthFromDot-CbmfEoix.js";import"./ActiveShapeUtils-COWK-Ag5.js";import"./Curve-Bg2QEuKe.js";import"./step-CRIOY1t7.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Dbl0dkEe.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
