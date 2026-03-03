import{e as t}from"./iframe-q7EKBh7o.js";import{R as c}from"./arrayEqualityCheck-CNeXmyp-.js";import{C as d}from"./ComposedChart-DSwqeICk.js";import{A as l}from"./Area-DpuL8aUB.js";import{R as h}from"./RechartsHookInspector-DewVmCy0.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B7X7PXgS.js";import"./immer-so6Ulnev.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B22qLPQG.js";import"./index-C4-9aL-F.js";import"./hooks-BZKkCtfI.js";import"./axisSelectors-D3C9QRtF.js";import"./d3-scale-C3h6liLe.js";import"./zIndexSlice-FB6DIKIg.js";import"./renderedTicksSlice-egFijHun.js";import"./CartesianChart-B_NqAGOq.js";import"./chartDataContext-KwgMu4Lm.js";import"./CategoricalChart-BZ540HIN.js";import"./Curve-CMEBV0h5.js";import"./types-8fLOkEDP.js";import"./step-BUn93TOQ.js";import"./Layer-QiojE74q.js";import"./ReactUtils-CCO8h_ST.js";import"./Label-D0Yxhrga.js";import"./Text-Df64Y-kP.js";import"./DOMUtils-CVphFinv.js";import"./ZIndexLayer-CyDdrDhA.js";import"./ActivePoints-DPbjwaD_.js";import"./Dot-DPAcQCLX.js";import"./RegisterGraphicalItemId-CxyJNLVz.js";import"./GraphicalItemClipPath-CMf4z5s0.js";import"./SetGraphicalItem-D3d8G_vE.js";import"./useAnimationId-CVW780SS.js";import"./getRadiusAndStrokeWidthFromDot-D64HU0Nx.js";import"./graphicalItemSelectors-BqHaBQ_b.js";import"./index-z6UB51wB.js";import"./ChartSizeDimensions-xzO8bMu2.js";import"./OffsetShower-Dpn1KfVs.js";import"./PlotAreaShower-BRuQ0joF.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
