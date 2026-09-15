import{R as t}from"./iframe-tthEZROf.js";import{R as p}from"./zIndexSlice-x-BIVIBz.js";import{C as m}from"./ComposedChart-DHi0lKW1.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C0JjBgEs.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DytOPEyf.js";import"./index-DkFq0gE6.js";import"./index-oZ0OTb3C.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps--ww6vB9W.js";import"./isWellBehavedNumber-CJmmz2h5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CTnk9UBm.js";import"./axisSelectors-CCMb6f1X.js";import"./d3-scale-De6zhOSb.js";import"./index-BVTzxVB3.js";import"./index-CqetqEae.js";import"./renderedTicksSlice-CpQrC_np.js";import"./index-DkBTTuWT.js";import"./CartesianChart-DQWCoQde.js";import"./chartDataContext-D6MYvejF.js";import"./CategoricalChart-BHtoZx7C.js";import"./Layer-B-lEtj28.js";import"./AnimatedItems-D4IOxZdb.js";import"./Label-43myQ-K3.js";import"./Text-Cxp0AK4z.js";import"./DOMUtils-CUwo8lte.js";import"./useId-5DCloKRu.js";import"./useBackwardsCompatibleTheme-p9GfZJFz.js";import"./ZIndexLayer-3Td9gWAI.js";import"./useAnimationId-DDIADmfd.js";import"./ActivePoints-CeSECBNu.js";import"./Dot-9TYH62xU.js";import"./types-DSfbGXGs.js";import"./RegisterGraphicalItemId-3Sw_ADlZ.js";import"./GraphicalItemClipPath-CGwPa5y8.js";import"./SetGraphicalItem-DjBM1G-g.js";import"./getRadiusAndStrokeWidthFromDot-CkbsG5Hk.js";import"./ActiveShapeUtils--TNHR6BT.js";import"./Curve-SLfcRw16.js";import"./step-BTKEfH_z.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-C5skwmjT.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
