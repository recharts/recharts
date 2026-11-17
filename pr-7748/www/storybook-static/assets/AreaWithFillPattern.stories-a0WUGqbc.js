import{R as t}from"./iframe-SOI7ETqc.js";import{R as p}from"./zIndexSlice-BU6oUWx4.js";import{C as m}from"./ComposedChart-CZsCC2GL.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-1pCDIfbf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BpnJBtrD.js";import"./throttle-BuYpA644.js";import"./index-Code9Alh.js";import"./index-RwN-WdR-.js";import"./RechartsWrapper-2ihhOObz.js";import"./axisSelectors-DhazdA5O.js";import"./polarAxisSelectors-C18_Wica.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-3TBblIj9.js";import"./index-B7zG0fHt.js";import"./index-QpX9BTHL.js";import"./renderedTicksSlice-B4lGJD7y.js";import"./index-C2xwEmrx.js";import"./fillDefinitions-C3mr1Tm6.js";import"./CartesianChart-D5ZzAIe3.js";import"./chartDataContext-8RiMC0Sw.js";import"./CategoricalChart-D1aUY5yi.js";import"./getRadiusAndStrokeWidthFromDot-CdssLho3.js";import"./Layer-BdUzTy7V.js";import"./dataEntryStyles-Dm-FbuH_.js";import"./Label-_MgncHEc.js";import"./Text-CVVDOvxk.js";import"./ZIndexLayer-uSStm6JU.js";import"./ActivePoints-D6TlCm2l.js";import"./Dot-QFOGovAa.js";import"./types-DLi1Gmf3.js";import"./activeStyles--vF_fmID.js";import"./useAnimationId-C4SjfD_p.js";import"./Symbols-D5dhbVXH.js";import"./symbol-D7DCXDTW.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CGNGdUIc.js";import"./ActiveShapeUtils-BXeGDetF.js";import"./Curve-B541BDSp.js";import"./step-B7wEb5SP.js";import"./useEffectiveDataKey-B6JvOkpp.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
