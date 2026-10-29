import{R as t}from"./iframe-LvrC9cNQ.js";import{R as p}from"./zIndexSlice-Chla-YhC.js";import{C as m}from"./ComposedChart-DQuHGzhG.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CKZ_ehfN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-yQwV084p.js";import"./throttle-BrACn0xJ.js";import"./index-Dqr70K98.js";import"./index-D77JjdwQ.js";import"./RechartsWrapper-CiGR2OiQ.js";import"./axisSelectors-C8xBMBuJ.js";import"./polarAxisSelectors-DMX56tfl.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CfvKpIbF.js";import"./index-LmwlvfKc.js";import"./index-Cxc9kCWG.js";import"./renderedTicksSlice-BsmmD3xm.js";import"./index-Bs0fdiGB.js";import"./CartesianChart-C9KorEin.js";import"./ZIndexPortal-DytdVxJW.js";import"./CategoricalChart-DgMeZkIA.js";import"./Layer-CcIpGH5s.js";import"./LabelList-DdXF3DfJ.js";import"./Label-DdT2eLCH.js";import"./Text-DGG_TkrL.js";import"./DOMUtils-CdIFc34u.js";import"./ZIndexLayer-Dv3aUmzs.js";import"./ActivePoints-CCaTRIyk.js";import"./Dot-C6CSCKrA.js";import"./types-Dk8bWHyp.js";import"./activeStyles-MYCrrU5C.js";import"./useAnimationId-BX5uo1zq.js";import"./dataEntryStyles-CJNDsNBI.js";import"./Symbols-Z0uJKVZu.js";import"./symbol-BDoGzdqc.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CEH73uPW.js";import"./getRadiusAndStrokeWidthFromDot-BgrGISNG.js";import"./ActiveShapeUtils-Dyl71ZcK.js";import"./Curve-CVAgTuhQ.js";import"./step-XOREPbKt.js";import"./useEffectiveDataKey-BIhhRaL_.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
