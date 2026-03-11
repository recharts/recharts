import{e as t}from"./iframe-D86QwX9l.js";import{R as c}from"./arrayEqualityCheck-CgXO-ZuA.js";import{C as d}from"./ComposedChart-CSnYCF8C.js";import{A as l}from"./Area-BEr6rW6X.js";import{R as h}from"./RechartsHookInspector-BUpx_xVe.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dk2nPyU3.js";import"./immer-8-oQo3xP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-9Ks6YNdz.js";import"./index-Dlozd1Zf.js";import"./hooks-CqXI__Cc.js";import"./axisSelectors-CDwpVfsZ.js";import"./d3-scale-Be_57Quy.js";import"./zIndexSlice-Cs40vUo3.js";import"./renderedTicksSlice-Cs4zqxJz.js";import"./CartesianChart-BPHLQ0t0.js";import"./chartDataContext-Ct7JPcI4.js";import"./CategoricalChart-C13dIv8W.js";import"./Curve-r3vqpxAw.js";import"./types-BKmbYWQ3.js";import"./step-lGE8FQDz.js";import"./Layer-7ZFhhqEA.js";import"./ReactUtils-BRuRWbDc.js";import"./Label-Db7DMkNg.js";import"./Text-Du8Py4Em.js";import"./DOMUtils-BHs0vF9m.js";import"./ZIndexLayer-UcIV_jcl.js";import"./ActivePoints-oDQ7pGW6.js";import"./Dot-Bkmwyapo.js";import"./RegisterGraphicalItemId-Cb3ALFIQ.js";import"./GraphicalItemClipPath-DOcGoQ4n.js";import"./SetGraphicalItem-rCG6xPW_.js";import"./useAnimationId-DeGRDsC6.js";import"./getRadiusAndStrokeWidthFromDot-BEX2oyUV.js";import"./graphicalItemSelectors-BjIRo1dU.js";import"./index-BhBhI1sn.js";import"./ChartSizeDimensions-0WIqpo-P.js";import"./OffsetShower-laCN2MaK.js";import"./PlotAreaShower-DL6rBkyw.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
