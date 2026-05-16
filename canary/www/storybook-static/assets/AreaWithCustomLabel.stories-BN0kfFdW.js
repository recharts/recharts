import{e as t}from"./iframe-CbvHz0qJ.js";import{g as c}from"./arrayEqualityCheck-CIVk4CxQ.js";import{C as d}from"./ComposedChart-C-53BhDQ.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-BoVUczuZ.js";import{R as u}from"./RechartsHookInspector-C8-wiP8k.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-FfHzzJ36.js";import"./immer-C8JaxkgT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5t1ZP3_.js";import"./index-QoqGOv4u.js";import"./hooks-BggtznHY.js";import"./axisSelectors-CyVqvn-7.js";import"./d3-scale-CaSsgBWf.js";import"./zIndexSlice-DOjchSOT.js";import"./renderedTicksSlice-DxWAR4bl.js";import"./CartesianChart-5KTQh7sp.js";import"./chartDataContext-CMNbR_6b.js";import"./CategoricalChart-DaBAgJKk.js";import"./Curve-DeTt9QyO.js";import"./types-D2ZhhyQv.js";import"./step-BAeK-y3y.js";import"./Layer-oNxAKppL.js";import"./ReactUtils-Bd_oEybG.js";import"./Label-DiuN5RYa.js";import"./Text-zXYfGIDc.js";import"./DOMUtils-KYbfHoFv.js";import"./ZIndexLayer-CFivYDgH.js";import"./ActivePoints-n-MNJHjI.js";import"./Dot-7cbWo9Mj.js";import"./RegisterGraphicalItemId-DcNWQseR.js";import"./GraphicalItemClipPath-CH-wZPAw.js";import"./SetGraphicalItem-Dnr1kOuh.js";import"./useAnimationId-cKMJpCeK.js";import"./getRadiusAndStrokeWidthFromDot-FRm3bVco.js";import"./graphicalItemSelectors-BIise6HR.js";import"./index-B7VOlChJ.js";import"./ChartSizeDimensions-Baj3tE5Q.js";import"./OffsetShower-CepRLrgp.js";import"./PlotAreaShower-Bm7LeybJ.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
