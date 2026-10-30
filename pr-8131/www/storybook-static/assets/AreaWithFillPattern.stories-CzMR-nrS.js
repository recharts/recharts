import{R as t}from"./iframe-DRd8L1ij.js";import{R as p}from"./zIndexSlice-DWK0mKBW.js";import{C as m}from"./ComposedChart-BgiL4Xm-.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CWqLyYkB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps--2iGUKCh.js";import"./throttle-BZHSEq8k.js";import"./index-DuLNwG6c.js";import"./index-GNzKGxFd.js";import"./RechartsWrapper-CVHpNPrj.js";import"./axisSelectors-DKYErlU4.js";import"./polarAxisSelectors-B7CzXU5n.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Degm7ixx.js";import"./index-BOBLZBKw.js";import"./index-BnUkaxQb.js";import"./renderedTicksSlice-VRZysoJN.js";import"./index-DZh8SmTQ.js";import"./fillDefinitions-BcJsDDFO.js";import"./CartesianChart-xzJeK0ZT.js";import"./ZIndexPortal-BX35EtJy.js";import"./CategoricalChart-C3H_aI_M.js";import"./Layer-C-w_mvnX.js";import"./LabelList-C56jidjO.js";import"./Label-Dlqk38Aa.js";import"./Text-DOqNkwx7.js";import"./DOMUtils-BMkGHkgN.js";import"./ZIndexLayer-BYH3DLDW.js";import"./ActivePoints-DpFFg10s.js";import"./Dot-Dinx-ymZ.js";import"./types-99rmuj1o.js";import"./activeStyles-N3dA5laV.js";import"./useAnimationId-C1EYHtHK.js";import"./dataEntryStyles-CMr7JuEI.js";import"./Symbols-C10Tu53k.js";import"./symbol-CYG96CRr.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Cted8rHa.js";import"./getRadiusAndStrokeWidthFromDot-CcwRzSoX.js";import"./ActiveShapeUtils-Dj9_Xfwc.js";import"./Curve-B3UG50Pe.js";import"./step-CVL70ILG.js";import"./useEffectiveDataKey-C0wXpfOI.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,it as __namedExportsOrder,rt as default};
