import{R as t}from"./iframe-CZEQ_wjd.js";import{R as p}from"./zIndexSlice-CGZbBTjh.js";import{C as m}from"./ComposedChart-DVaTaaXl.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Cdn0x40L.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DA2J31XT.js";import"./index-BbxbGDW7.js";import"./index-CRdNX2-K.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CHpCBz4P.js";import"./isWellBehavedNumber-B8rPL1qd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CLkKKSWb.js";import"./axisSelectors-BfF4ImUe.js";import"./d3-scale-er3AEJAE.js";import"./index-B-hyiig3.js";import"./index-JtUUyrZR.js";import"./renderedTicksSlice-BMpJvFdR.js";import"./index-C8Xv27VY.js";import"./CartesianChart-BSz7TA42.js";import"./chartDataContext-BAAQoJGX.js";import"./CategoricalChart-DuqmwY6B.js";import"./Layer-D6WM8pRX.js";import"./activeStyles-BfHlsJSZ.js";import"./Label-COoLstIf.js";import"./Text-Dsq3-wjY.js";import"./pageBackground-CKNOMxYJ.js";import"./useId-rjEqgZ2X.js";import"./useBackwardsCompatibleTheme-Bh5QeLej.js";import"./ZIndexLayer-Dn2bo3WS.js";import"./useAnimationId-Eb1qMFFs.js";import"./dataEntryStyles-y-eKYJRz.js";import"./ActivePoints-DAIZAef7.js";import"./Dot-D8BQdXw6.js";import"./types-CKK75Clx.js";import"./GraphicalItemClipPath-iEKWMFl6.js";import"./SetGraphicalItem-DS-LfVWp.js";import"./getRadiusAndStrokeWidthFromDot-CEOY72lw.js";import"./ActiveShapeUtils-Dfohsprr.js";import"./Curve-XL3ybND_.js";import"./step-BKPm417p.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BUx5XxQj.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
