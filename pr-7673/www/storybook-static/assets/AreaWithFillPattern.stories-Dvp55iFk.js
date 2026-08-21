import{R as t}from"./iframe-CH2RirRG.js";import{R as p}from"./zIndexSlice-EPNgUqra.js";import{C as m}from"./ComposedChart-B-gNv-fY.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BSKO82-n.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-wiaHzbqm.js";import"./index-CDgfCI1k.js";import"./index-BGjYA4Me.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DE_sbK1H.js";import"./isWellBehavedNumber-DS-LXYSK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjB8dZxg.js";import"./index-CO5DxbW1.js";import"./index-DCEj_OWD.js";import"./axisSelectors-CkKizBw1.js";import"./d3-scale-_MlV87vT.js";import"./renderedTicksSlice-p29IB_-G.js";import"./CartesianChart-RyXtRN5Z.js";import"./chartDataContext-Bjvolui9.js";import"./CategoricalChart-DISzDu-A.js";import"./Layer-DUd8J6bA.js";import"./AnimatedItems-CsoBD4nr.js";import"./Label-JTJpVxOG.js";import"./Text-D0Ni_nG3.js";import"./DOMUtils-CjXikq8H.js";import"./useId-rSQwkCR7.js";import"./useBackwardsCompatibleTheme-B43Y9MW-.js";import"./ZIndexLayer-DaLmvsT2.js";import"./useAnimationId-vcXUsSrn.js";import"./ActivePoints-Dg4SvqYZ.js";import"./Dot-DUdZMRdV.js";import"./types-BWjPFUtA.js";import"./RegisterGraphicalItemId-CdD2mOwf.js";import"./GraphicalItemClipPath-D4fexUqU.js";import"./SetGraphicalItem-CVh4pOat.js";import"./getRadiusAndStrokeWidthFromDot-BtjAJPPD.js";import"./ActiveShapeUtils-CWoQL3Mu.js";import"./Curve-BsDu1IjD.js";import"./step-C8By5YWW.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-qX5VSJNP.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const rt=["FillPattern"];export{e as FillPattern,rt as __namedExportsOrder,et as default};
