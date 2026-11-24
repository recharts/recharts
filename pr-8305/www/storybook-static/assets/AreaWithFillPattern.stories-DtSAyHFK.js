import{R as t}from"./iframe-rnrsK-Eh.js";import{R as p}from"./zIndexSlice-D3HmR0ZR.js";import{C as m}from"./ComposedChart-D54WX9hH.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-pdWG59h_.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-b1TTGhvT.js";import"./get-CjriyByo.js";import"./throttle-BHymO33n.js";import"./index-BSOAsjef.js";import"./index-D8r-4r4t.js";import"./RechartsWrapper-tBuCuUXe.js";import"./axisSelectors-CIZ-q5JG.js";import"./polarAxisSelectors-B1h4eON8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BaDfMMmk.js";import"./index-BZjQac1j.js";import"./index-BcrgJFGN.js";import"./renderedTicksSlice-3O1E6NtI.js";import"./index-BWQTU1nE.js";import"./fillDefinitions-ooWue1m4.js";import"./CartesianChart-CdGDQA5c.js";import"./chartDataContext-BaXmKLtm.js";import"./CategoricalChart-B0mb1tZK.js";import"./getRadiusAndStrokeWidthFromDot-Aa26YM9W.js";import"./Layer-D4ktbd_J.js";import"./dataEntryStyles-DPy91L9k.js";import"./Label-DJYYuUsE.js";import"./Text-WHgqMzAs.js";import"./ZIndexLayer-dsZ60IUc.js";import"./ActivePoints-G3nCAY-X.js";import"./Dot-CpkbvyGy.js";import"./types-CAJhQIqW.js";import"./activeStyles-9CDj_AEF.js";import"./useAnimationId-COqzWo9S.js";import"./Symbols-CFUB5kvN.js";import"./symbol-B4eSOryt.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-Bhp-y0Ji.js";import"./ActiveShapeUtils-O7QOH_04.js";import"./Curve-B8ieUi4B.js";import"./step-BNGv-ij0.js";import"./useEffectiveDataKey-DftwbdUx.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
