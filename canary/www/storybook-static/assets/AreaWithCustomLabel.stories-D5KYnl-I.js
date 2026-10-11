import{R as r}from"./iframe-DfTkQmXX.js";import{R as c}from"./zIndexSlice-CK1KsdwK.js";import{C as d}from"./ComposedChart-DiyxxUr9.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-ITP6RxwB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BVJmkUn0.js";import"./index-Ba59U2Y8.js";import"./index-CsAN8_eV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DzYEjrKC.js";import"./isWellBehavedNumber-BsgXnYfL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DxAPF2hj.js";import"./axisSelectors-BlOH_04s.js";import"./d3-scale-DmiuGQyG.js";import"./index-CKqFjhNi.js";import"./index-MdrQnTxf.js";import"./renderedTicksSlice-Br06-4O3.js";import"./index-B9XVTu1f.js";import"./CartesianChart-DTtp-RK_.js";import"./chartDataContext-0kN3l1x_.js";import"./CategoricalChart-W3tTj6f2.js";import"./Layer-B_W6fsjz.js";import"./activeStyles-BILREjwj.js";import"./Label-SXOQPAQ7.js";import"./Text-B1vqPWff.js";import"./pageBackground-Bwi0dJpd.js";import"./useId-Dtq_j8MX.js";import"./useBackwardsCompatibleTheme-19GRtDCt.js";import"./ZIndexLayer-DPEED4Hn.js";import"./useAnimationId-BR_dOTuF.js";import"./dataEntryStyles-U8DJYbqc.js";import"./ActivePoints-dsaCSJiB.js";import"./Dot-CX7jfzvx.js";import"./types-D3zQeAKc.js";import"./GraphicalItemClipPath-xajKPwIx.js";import"./SetGraphicalItem-CbFA-TWr.js";import"./getRadiusAndStrokeWidthFromDot-DArtm6VW.js";import"./ActiveShapeUtils-CGTBxphT.js";import"./Curve-gJd5arqO.js";import"./step-BPp5YbXE.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-C9Z0QIkA.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
