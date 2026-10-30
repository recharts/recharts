import{R as t}from"./iframe-C9f0XnT9.js";import{R as p}from"./zIndexSlice-CHa-NfW0.js";import{C as m}from"./ComposedChart-ta3a0B_A.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D-ETHx8t.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-OglZgdvE.js";import"./throttle-KQYU95ys.js";import"./index-lRcOI8Cy.js";import"./index-Dd8czCIR.js";import"./RechartsWrapper-DtDu-9p6.js";import"./axisSelectors-DJl001RI.js";import"./polarAxisSelectors-DnDsCJfT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRci95pZ.js";import"./index-Bf7Rq1hF.js";import"./index-C_QD7AAh.js";import"./renderedTicksSlice-CaUdmayY.js";import"./index-DJqYT1Am.js";import"./CartesianChart-CjAW9dlX.js";import"./ZIndexPortal-DsfmsICI.js";import"./CategoricalChart-C4AmyGV7.js";import"./Layer-BGqt9quM.js";import"./LabelList-CjS5fbS8.js";import"./Label-HDB1mOS9.js";import"./Text-BBa2fCF5.js";import"./DOMUtils-CkdhxU4H.js";import"./ZIndexLayer-Dk9V8YH1.js";import"./ActivePoints-CjTQST-x.js";import"./Dot-Dha_7IA1.js";import"./types-Cq0tVQAG.js";import"./activeStyles-BitiIAzx.js";import"./useAnimationId-BNUZJ-Q8.js";import"./dataEntryStyles-Bof1DRSv.js";import"./Symbols-CSFO1ejf.js";import"./symbol-BFxxKdiv.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BKb40hJg.js";import"./getRadiusAndStrokeWidthFromDot-B1pkRXwd.js";import"./ActiveShapeUtils-IcXhTV6f.js";import"./Curve-BuH0ARbV.js";import"./step-D2_GuXTT.js";import"./useEffectiveDataKey-B2_fgQbM.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
