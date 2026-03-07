import{e as t}from"./iframe-BUt3wnEM.js";import{R as c}from"./arrayEqualityCheck-DNOyFRmd.js";import{C as d}from"./ComposedChart-D7vv44Nm.js";import{A as l}from"./Area-717JLD8Y.js";import{R as h}from"./RechartsHookInspector-u0LRhk5N.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dk1l2Vo6.js";import"./immer-Djj2d5DN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-z5ezD12U.js";import"./index-pWLF-s6P.js";import"./hooks-CaJZCr7l.js";import"./axisSelectors-B8r2gBVy.js";import"./d3-scale-BSxK4JDa.js";import"./zIndexSlice-7peEmfkk.js";import"./renderedTicksSlice-Cr17VpQE.js";import"./CartesianChart-BzRkrrXE.js";import"./chartDataContext-Cyy9MogO.js";import"./CategoricalChart-BpyTrJhB.js";import"./Curve-BEPpct8h.js";import"./types-C3jmTsfH.js";import"./step-CelYc6K9.js";import"./Layer-f0MP4yLB.js";import"./ReactUtils-Cta0-SSd.js";import"./Label-BNS9QM1w.js";import"./Text-D2qhx32y.js";import"./DOMUtils-Depo16NU.js";import"./ZIndexLayer-CD2y65wD.js";import"./ActivePoints-QLUPv-Aq.js";import"./Dot-Jhi_4Eo2.js";import"./RegisterGraphicalItemId-Cwf1Uzb7.js";import"./GraphicalItemClipPath-7Tn5wXWU.js";import"./SetGraphicalItem-DIiOAn_y.js";import"./useAnimationId-0NKy_VJI.js";import"./getRadiusAndStrokeWidthFromDot-0A88qvLk.js";import"./graphicalItemSelectors-DlzXSuer.js";import"./index-vkdvzxS4.js";import"./ChartSizeDimensions-Ch1iJoza.js";import"./OffsetShower-Bgrzwk34.js";import"./PlotAreaShower-BgnhljdN.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
