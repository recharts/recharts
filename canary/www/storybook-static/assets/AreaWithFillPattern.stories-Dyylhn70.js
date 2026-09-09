import{R as t}from"./iframe-AEyLiqgG.js";import{R as p}from"./zIndexSlice-D63QIr0o.js";import{C as m}from"./ComposedChart-d9_wimj2.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Bqz4tSMU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bat5tgt5.js";import"./index-C1HLBiKP.js";import"./index-DRegLE30.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DP3BTRCk.js";import"./isWellBehavedNumber-CgqhIRbA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-r-JuCoEl.js";import"./axisSelectors-Drhca-__.js";import"./d3-scale-BLrrudvV.js";import"./index-qjC2aIyR.js";import"./index-BZWHGH__.js";import"./renderedTicksSlice-CAIsZf4o.js";import"./index-DlIzpnmQ.js";import"./CartesianChart-DnWnPxAf.js";import"./chartDataContext-D_5ADK7F.js";import"./CategoricalChart-h7ez30w9.js";import"./Layer-vEMMDrrH.js";import"./AnimatedItems-Du4BhFIJ.js";import"./Label-dgv50JbQ.js";import"./Text-CjbzIRNa.js";import"./DOMUtils-D23knL3w.js";import"./useId-CE7L0gFR.js";import"./useBackwardsCompatibleTheme-BeLYcOfU.js";import"./ZIndexLayer-CKKDdXeu.js";import"./useAnimationId-DhGl4rOB.js";import"./ActivePoints-DgZdabsv.js";import"./Dot-DYEfFyl7.js";import"./types-C4U-Yuut.js";import"./RegisterGraphicalItemId-CBHkDVSs.js";import"./GraphicalItemClipPath-TjZaHmNz.js";import"./SetGraphicalItem-D3eOc8Q8.js";import"./getRadiusAndStrokeWidthFromDot-BJa_7REZ.js";import"./ActiveShapeUtils-Cns3WvQL.js";import"./Curve-XYWVXy9Z.js";import"./step-Dc7t_wqW.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Cs1UF85t.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
