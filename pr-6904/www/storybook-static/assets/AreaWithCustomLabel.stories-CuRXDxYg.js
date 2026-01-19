import{e as t}from"./iframe-DKGTY5BH.js";import{R as c}from"./arrayEqualityCheck-a5J2QiQR.js";import{C as d}from"./ComposedChart-ByBlCzet.js";import{A as l}from"./Area-BPIou5qM.js";import{R as h}from"./RechartsHookInspector-ltFkNW4M.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CYnJQ9Tz.js";import"./PolarUtils-BgS5trn7.js";import"./RechartsWrapper-C4nUVXRx.js";import"./hooks-l5gEcxv4.js";import"./axisSelectors-BRnicQ57.js";import"./zIndexSlice-BN50EdKr.js";import"./CartesianChart-DZl_tmIf.js";import"./chartDataContext-D-E7lauC.js";import"./CategoricalChart-Q4yJ_XVO.js";import"./Curve-B8K-f9lF.js";import"./types-BBKXijxu.js";import"./Layer-BMyAm0Vh.js";import"./ReactUtils-_yo6pVT0.js";import"./Label-8CsqNV_S.js";import"./Text-DzT2f_9r.js";import"./DOMUtils-DUCvdtk_.js";import"./ZIndexLayer-ChxBgnpv.js";import"./ActivePoints-bLONFCl1.js";import"./Dot-B8GCPTtM.js";import"./RegisterGraphicalItemId-M1wxD3TO.js";import"./GraphicalItemClipPath-C08gEDH6.js";import"./SetGraphicalItem-BCvWrM_W.js";import"./useAnimationId-Br5iK6pF.js";import"./getRadiusAndStrokeWidthFromDot-1QeMtlLN.js";import"./graphicalItemSelectors-kXqMHh1l.js";import"./index-DpSNf8hh.js";import"./ChartSizeDimensions-CHWSVwWw.js";import"./OffsetShower-fEjtwpJv.js";import"./PlotAreaShower-TADFRiun.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const tt=["CustomizedLabel"];export{e as CustomizedLabel,tt as __namedExportsOrder,Z as default};
