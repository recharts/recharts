import{e as t}from"./iframe-C4IWMahh.js";import{R as c}from"./arrayEqualityCheck-0GnG-RUv.js";import{C as d}from"./ComposedChart-nnzp2Q6q.js";import{A as l}from"./Area-CQ7je0Jo.js";import{R as h}from"./RechartsHookInspector-CpFOwYB5.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DtgeT8pD.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-D1ed8gsV.js";import"./hooks-D4XFO7pe.js";import"./axisSelectors-BJBfabjw.js";import"./zIndexSlice-CIYOR3wZ.js";import"./CartesianChart-D8zP0xhX.js";import"./chartDataContext-kpLSUwh0.js";import"./CategoricalChart-DyuPf8cz.js";import"./Curve-DlsjNj4d.js";import"./types-Dnr4tbcG.js";import"./Layer-CdQ-wzgp.js";import"./ReactUtils-DjwylJ1a.js";import"./Label-C0TeAK2L.js";import"./Text-TpjxoAAm.js";import"./DOMUtils-BgZ5XZxL.js";import"./ZIndexLayer-BJJTWLZI.js";import"./ActivePoints-uikp9xPQ.js";import"./Dot-B6v543Pb.js";import"./RegisterGraphicalItemId-CADIBD7u.js";import"./GraphicalItemClipPath-CTryCVIw.js";import"./SetGraphicalItem-Qx2BbNwy.js";import"./useAnimationId-DNnry8cr.js";import"./getRadiusAndStrokeWidthFromDot-DZBvYZ8u.js";import"./graphicalItemSelectors-BtB6JhS2.js";import"./index-aiWA5sXu.js";import"./ChartSizeDimensions-DBfcvr5j.js";import"./OffsetShower-CMENuWZ2.js";import"./PlotAreaShower-c29i0cb1.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
