import{c as t}from"./iframe-eXOzs3YY.js";import{g as p}from"./zIndexSlice-CuY-7AxA.js";import{C as m}from"./ComposedChart-zMtNTxE8.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-MS46iW3i.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DwC3AsAE.js";import"./index-C3pdYAEU.js";import"./index-BeZCe1sB.js";import"./get-DyNLp3_i.js";import"./resolveDefaultProps-DFOijNU4.js";import"./isWellBehavedNumber-AEitUNgh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BX65N_tr.js";import"./index-DS3rRRFa.js";import"./index-CIP6DqMy.js";import"./renderedTicksSlice-Bq0EglVk.js";import"./axisSelectors-2h318yzI.js";import"./d3-scale-CfOtqMhF.js";import"./CartesianChart-BbQfwcfl.js";import"./chartDataContext-CxkR6oQJ.js";import"./CategoricalChart-DeYGfYtA.js";import"./Curve-CaJWe8Oa.js";import"./types-ty1UrU8J.js";import"./step-a4qbb-H-.js";import"./path-DyVhHtw_.js";import"./Layer-VPMddfpg.js";import"./ReactUtils-C6uVGLKp.js";import"./Label-A2hDBNkM.js";import"./Text-Geh_dgxu.js";import"./DOMUtils-CZvt8Baf.js";import"./ZIndexLayer-NeCcTin-.js";import"./ActivePoints-D8PlVKN0.js";import"./Dot-DA7Kaq93.js";import"./RegisterGraphicalItemId-qKqyupEJ.js";import"./GraphicalItemClipPath-BFD_fJ-h.js";import"./SetGraphicalItem-CWrfv76Z.js";import"./useAnimationId-B5pCqy41.js";import"./getRadiusAndStrokeWidthFromDot-BBLB3WSC.js";import"./graphicalItemSelectors--zOGyG2I.js";const Y={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const Z=["FillPattern"];export{e as FillPattern,Z as __namedExportsOrder,Y as default};
