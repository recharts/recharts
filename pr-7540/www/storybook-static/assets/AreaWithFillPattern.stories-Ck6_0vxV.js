import{R as t}from"./iframe-DGYc5Evr.js";import{R as p}from"./zIndexSlice-CjPpABdt.js";import{C as m}from"./ComposedChart-DPdiH-nu.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DcliiwXJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-44TCHeAp.js";import"./index-D_ZxU5Q3.js";import"./index-sF9bEsAF.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BzwDYh32.js";import"./isWellBehavedNumber-BpEOcoHg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CM9ry10x.js";import"./index-cJf64k7_.js";import"./index-xTx_eyuL.js";import"./renderedTicksSlice-BojFd99l.js";import"./axisSelectors-BNixzxMM.js";import"./d3-scale-DWZ-qO9T.js";import"./CartesianChart-BPYrXhHn.js";import"./chartDataContext-CnthLNs9.js";import"./CategoricalChart-CwbInpB3.js";import"./Layer-Cp66mevN.js";import"./AnimatedItems-DpTt0Un9.js";import"./Label-ByCQCza6.js";import"./Text-C1RHjt0W.js";import"./DOMUtils-D9lLS2TF.js";import"./ZIndexLayer-BiqJjXGY.js";import"./useAnimationId-CRdgro7A.js";import"./ActivePoints-vXI-iHsm.js";import"./Dot-CRtBS-b6.js";import"./types-m9Fzmc4X.js";import"./RegisterGraphicalItemId-BYtbpB8Y.js";import"./GraphicalItemClipPath-D4tdWuXE.js";import"./SetGraphicalItem-sSG1dofq.js";import"./getRadiusAndStrokeWidthFromDot-CuWeSJ3l.js";import"./ActiveShapeUtils-0IrxfALl.js";import"./Curve-CIxbvgQM.js";import"./step-ClaeK2JI.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-o-2IsEs2.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["FillPattern"];export{e as FillPattern,$ as __namedExportsOrder,Z as default};
