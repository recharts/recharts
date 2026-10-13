import{R as t}from"./iframe-D3EjTtxy.js";import{R as p}from"./zIndexSlice-CR47Grm-.js";import{C as m}from"./ComposedChart-DuMK799R.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DyJYwCy-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-EojsqAtG.js";import"./index-BrBaOJJz.js";import"./index-ClKWjY2h.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CypR0Li3.js";import"./isWellBehavedNumber-D6-F1Zhx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BKqCmNei.js";import"./axisSelectors-2jJKhRaD.js";import"./d3-scale-Bcyj84u8.js";import"./index-CW2m-a8N.js";import"./index-D-PCy9lp.js";import"./renderedTicksSlice-DWYht6zE.js";import"./index-C-LGK5kE.js";import"./CartesianChart-ClyYLTkq.js";import"./chartDataContext-tvTSeXcP.js";import"./CategoricalChart-D-xvlCPh.js";import"./Layer-CAR2aUbH.js";import"./activeStyles-Celt-13r.js";import"./Label-Cwzl5MfK.js";import"./Text-D8BNDsFW.js";import"./pageBackground-Bgbh54PU.js";import"./useId-CXtTlWvS.js";import"./useBackwardsCompatibleTheme-DShn4Fj5.js";import"./ZIndexLayer-DYrhxp9-.js";import"./useAnimationId-C3lA_xne.js";import"./dataEntryStyles-BOeZ2OB5.js";import"./ActivePoints-BFJ9lPgu.js";import"./Dot-B5LpJNu8.js";import"./types-OWn5Mrao.js";import"./GraphicalItemClipPath-qNx1D-3O.js";import"./SetGraphicalItem-2Yc4bdBx.js";import"./getRadiusAndStrokeWidthFromDot-O_fwqGez.js";import"./ActiveShapeUtils-DJnsuYPC.js";import"./Curve-DGfDXyXs.js";import"./step-BpQzdfyO.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-CruL2487.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
