import{c as e}from"./iframe-D2N5XcPI.js";import{g as c}from"./zIndexSlice-RoIFDUUO.js";import{C as d}from"./ComposedChart-Blurisz3.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-Dm9XFX86.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DD2jh41l.js";import"./index-DnYw-Xim.js";import"./index-B5AuwgDI.js";import"./get-DEEjpUoM.js";import"./resolveDefaultProps-Bi-9DeEE.js";import"./isWellBehavedNumber-TNE8-lTU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CuZS2kGu.js";import"./index-mVudWXdT.js";import"./index-BhCsKlJc.js";import"./renderedTicksSlice-uobIs_9Z.js";import"./axisSelectors-CRrbvK-r.js";import"./d3-scale-BsFKuCR3.js";import"./string-yHBgcFlJ.js";import"./CartesianChart-1QuMF_W-.js";import"./chartDataContext-CC_X3BVp.js";import"./CategoricalChart-BLp4HgeB.js";import"./Layer-BVkY8iZh.js";import"./AnimatedItems-BoZ9ojjB.js";import"./Label-Cnng5bNL.js";import"./Text-S_HdFT4_.js";import"./DOMUtils-i2_cO7II.js";import"./ZIndexLayer-C0bDYuES.js";import"./useAnimationId-DqQ-6Bs7.js";import"./ActivePoints-DlrEajwU.js";import"./Dot-CsqPwlDd.js";import"./types-O2bCi3CM.js";import"./RegisterGraphicalItemId-B3-aUvfY.js";import"./GraphicalItemClipPath-C443LB5B.js";import"./SetGraphicalItem-Bb7tRa3R.js";import"./getRadiusAndStrokeWidthFromDot-DOJOfu6K.js";import"./ActiveShapeUtils-hlQp3kXL.js";import"./Curve-QwKIY61o.js";import"./step-CVnlc3Ua.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CEu_GPOk.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
