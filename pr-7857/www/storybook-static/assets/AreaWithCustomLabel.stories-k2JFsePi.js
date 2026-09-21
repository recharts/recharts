import{R as r}from"./iframe-Dj8Z6PrK.js";import{R as c}from"./zIndexSlice-Dis8kkjQ.js";import{C as d}from"./ComposedChart-CNA_xZ2H.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-4et2r_f0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CKdcDnHb.js";import"./index-Bx3PqqYW.js";import"./index-CA6chf5t.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B-9SHASA.js";import"./isWellBehavedNumber-BxyDY2ba.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-XYW6BA6T.js";import"./axisSelectors-B4pFlXeA.js";import"./d3-scale-1D4CewQG.js";import"./index-BBXX-7T2.js";import"./index-BMZ0mV9M.js";import"./renderedTicksSlice-zGdO_NAv.js";import"./index-MAP75uR-.js";import"./CartesianChart-pWv6R1U2.js";import"./chartDataContext-DnNc1DHN.js";import"./CategoricalChart-B9MwHwt-.js";import"./Layer-BAM8ommd.js";import"./AnimatedItems-0rSS-oCT.js";import"./Label-BbvgfVci.js";import"./Text-c1trxvgH.js";import"./DOMUtils-Bp6mSslK.js";import"./useId-mH59anzj.js";import"./useBackwardsCompatibleTheme-BW-Eyyrw.js";import"./ZIndexLayer-DjnDFneh.js";import"./useAnimationId-DORt3e-J.js";import"./ActivePoints-Bg_cfUBG.js";import"./Dot-M4-D-D3c.js";import"./types-CIgkXEGC.js";import"./RegisterGraphicalItemId-B_hXYrSH.js";import"./GraphicalItemClipPath-WRfkTQaB.js";import"./SetGraphicalItem-vQHk7qeP.js";import"./getRadiusAndStrokeWidthFromDot-iWXc3UEX.js";import"./ActiveShapeUtils-tGmUUFtW.js";import"./Curve-m98fbF0c.js";import"./step-ncsjPZ4b.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-WP1DKWAp.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
