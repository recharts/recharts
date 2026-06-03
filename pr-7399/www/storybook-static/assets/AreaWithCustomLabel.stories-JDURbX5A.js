import{c as e}from"./iframe-CSdIsBuA.js";import{g as c}from"./zIndexSlice-Cwyv9NeI.js";import{C as d}from"./ComposedChart-Ckj1xbao.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-HIjTc5tu.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DsufihQm.js";import"./index-Cpoemtz2.js";import"./index-DE5N2T-X.js";import"./get-Duntrb6V.js";import"./resolveDefaultProps-DILKQm8l.js";import"./isWellBehavedNumber-C3OI8iVg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B89fPpLO.js";import"./index-BTvkQKhU.js";import"./index-Bec9HE3p.js";import"./renderedTicksSlice-B5Ptxudq.js";import"./axisSelectors-BnFkCmMm.js";import"./d3-scale-B9s2XGKQ.js";import"./CartesianChart-Bk8EQL3g.js";import"./chartDataContext-BUAn3ipS.js";import"./CategoricalChart-DbkFDn9v.js";import"./Curve-CKKHwC-M.js";import"./types-Ct8C6hXI.js";import"./step-w2kxUIwB.js";import"./path-DyVhHtw_.js";import"./Layer-B_G2sVc2.js";import"./ReactUtils-BhhiwOUg.js";import"./Label-BjSFKFzq.js";import"./Text-B3fnIIS6.js";import"./DOMUtils-BrUe4Qn6.js";import"./ZIndexLayer-D0Yli8nf.js";import"./ActivePoints-DxvB2SaA.js";import"./Dot-DEg4e3iy.js";import"./RegisterGraphicalItemId-DM7h7YxF.js";import"./GraphicalItemClipPath-DPD0FrgU.js";import"./SetGraphicalItem-D2hWeYSE.js";import"./useAnimationId-B6008U_B.js";import"./getRadiusAndStrokeWidthFromDot-DJfd0kAV.js";import"./graphicalItemSelectors-COfuKnh5.js";const rt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ot=["CustomizedLabel"];export{t as CustomizedLabel,ot as __namedExportsOrder,rt as default};
