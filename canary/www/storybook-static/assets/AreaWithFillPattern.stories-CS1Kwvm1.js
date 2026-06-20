import{R as t}from"./iframe-BFQyqMbU.js";import{R as p}from"./zIndexSlice-jJ_CaBDo.js";import{C as m}from"./ComposedChart-Pdj8BLwD.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BmKnNNTD.js";import"./preload-helper-Dp1pzeXC.js";import"./immer--b20-lFI.js";import"./index-lcxumIdx.js";import"./index-yqk7rkqd.js";import"./get-p4pcudXd.js";import"./resolveDefaultProps-B_ssPDKF.js";import"./isWellBehavedNumber-CXuZhh3h.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BounuTKv.js";import"./index-CDKHoQ9z.js";import"./index-Gba51aKu.js";import"./renderedTicksSlice-HnYJqdGr.js";import"./axisSelectors-CRFbB7ND.js";import"./d3-scale--vDRC-Zz.js";import"./CartesianChart-qgf-TM4c.js";import"./chartDataContext-BM8qcz36.js";import"./CategoricalChart-FqadQC9J.js";import"./Layer-BpUtlx2X.js";import"./AnimatedItems-BA8IgjUl.js";import"./Label-BBfCiCQ6.js";import"./Text-BMugx81A.js";import"./DOMUtils-CzHwSZC9.js";import"./ZIndexLayer-DPawcbSR.js";import"./useAnimationId-D_DRQ5ok.js";import"./ActivePoints-CftO_jkK.js";import"./Dot-BN0Lszie.js";import"./types-cy48Xvgh.js";import"./RegisterGraphicalItemId-BEWz97Wy.js";import"./GraphicalItemClipPath-B53LZcY2.js";import"./SetGraphicalItem-D0WJt6mF.js";import"./getRadiusAndStrokeWidthFromDot-C2SI6lR2.js";import"./ActiveShapeUtils-BDWRsG1S.js";import"./Curve-BGI4IKSF.js";import"./step-D-tHTqvJ.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Bgaf2_KE.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
