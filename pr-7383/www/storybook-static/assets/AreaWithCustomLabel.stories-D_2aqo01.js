import{c as e}from"./iframe-C5fgHeit.js";import{g as c}from"./zIndexSlice-Cm8Wfowt.js";import{C as d}from"./ComposedChart-BKA8oJoR.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-B6W_g6ur.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-kTf3s8ve.js";import"./index-DjwzGHbn.js";import"./index-BKpk60GZ.js";import"./get-DWrZfuk9.js";import"./resolveDefaultProps-CYeq70FN.js";import"./isWellBehavedNumber-D0_xXiuE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bfu9Nl_Q.js";import"./index-CS-SMU20.js";import"./index-GhOblPXW.js";import"./renderedTicksSlice-BX_JZwB0.js";import"./axisSelectors-DhSKO8Kw.js";import"./d3-scale-CZ_aTrcE.js";import"./CartesianChart-aHIkR0ek.js";import"./chartDataContext-CZBf5hkj.js";import"./CategoricalChart-DGE9Xwb5.js";import"./Curve-C5tRxImZ.js";import"./types-CutKYO-q.js";import"./step-Dfgw13sm.js";import"./path-DyVhHtw_.js";import"./Layer-Cc_zBrzh.js";import"./ReactUtils-XexX1ZTx.js";import"./Label-DviSNP2P.js";import"./Text-tcokI-pA.js";import"./DOMUtils-DIorzim0.js";import"./ZIndexLayer-DJnVmrOS.js";import"./ActivePoints-CQ8RyYGT.js";import"./Dot-1zqir61q.js";import"./RegisterGraphicalItemId-Dq8Ivo6G.js";import"./GraphicalItemClipPath-BWUEd7L8.js";import"./SetGraphicalItem-dBJjG1CE.js";import"./useAnimationId-DkZHsCyz.js";import"./getRadiusAndStrokeWidthFromDot-D7vHONas.js";import"./graphicalItemSelectors-CtyXf51U.js";const rt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
