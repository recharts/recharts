import{R as r}from"./iframe-Mdt8VJ2w.js";import{R as c}from"./zIndexSlice-BsdMuIdb.js";import{C as d}from"./ComposedChart-eoHVURcz.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BpMXYykM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-VIBdIbYw.js";import"./index-aQiBtsFK.js";import"./index-CBF1PFXA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CpPg4Klh.js";import"./isWellBehavedNumber-t2MA1Hj2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BSXOrQ0o.js";import"./axisSelectors-BFf5BOkR.js";import"./d3-scale-DhLC6v_0.js";import"./index-Bh66vNwH.js";import"./index-BNwNegUe.js";import"./renderedTicksSlice-DSt8-RgC.js";import"./index-DXJpIZWy.js";import"./CartesianChart-Cjv56MYV.js";import"./chartDataContext-bPArfWn-.js";import"./CategoricalChart-DQulxF7t.js";import"./Layer-CcarLXD9.js";import"./AnimatedItems-B_SFlbBu.js";import"./Label-CtCuuSl7.js";import"./Text-C4xsU_o9.js";import"./DOMUtils-BUFAvfGk.js";import"./useId-DFFN6HWZ.js";import"./useBackwardsCompatibleTheme-CUPajrH3.js";import"./ZIndexLayer-Di_3Ujup.js";import"./useAnimationId-BjS9VFFE.js";import"./ActivePoints-BlFeeX4-.js";import"./Dot-BWITrl2w.js";import"./types-6Q4AmTS7.js";import"./RegisterGraphicalItemId-B7ELoHw_.js";import"./GraphicalItemClipPath-D5E8uSuA.js";import"./SetGraphicalItem-DcJbL-HK.js";import"./getRadiusAndStrokeWidthFromDot-CbmfEoix.js";import"./ActiveShapeUtils-COWK-Ag5.js";import"./Curve-Bg2QEuKe.js";import"./step-CRIOY1t7.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Dbl0dkEe.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
