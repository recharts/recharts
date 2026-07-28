import{R as e}from"./iframe-BdYAncLR.js";import{R as c}from"./zIndexSlice-5bpfVQyA.js";import{C as d}from"./ComposedChart-CAVG_F2Z.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CtlAAGYr.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BjujQpzW.js";import"./index-CGm2P49p.js";import"./index-B2x5-TIo.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-5h8_lZEQ.js";import"./isWellBehavedNumber-_Cj0WZhc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B45z8Y-R.js";import"./index-Du0b8e_w.js";import"./index-B0-wIR84.js";import"./renderedTicksSlice-L4Igrea0.js";import"./axisSelectors-zM0j77wa.js";import"./d3-scale-23ottKw2.js";import"./CartesianChart-BhQs_YPC.js";import"./chartDataContext-CgP-nFTi.js";import"./CategoricalChart-Bp8IO2Nw.js";import"./Layer-DIV0oEbW.js";import"./AnimatedItems-Dy_aktOc.js";import"./Label-JmhQBV8Y.js";import"./Text-C319EuNs.js";import"./DOMUtils-DBahITf2.js";import"./ZIndexLayer-TIVdTQGS.js";import"./useAnimationId-CVihXN2U.js";import"./ActivePoints-DqzUtciu.js";import"./Dot-axcqS0GT.js";import"./types-OsxZUaOH.js";import"./RegisterGraphicalItemId-CwjribNO.js";import"./GraphicalItemClipPath-1-xikmiv.js";import"./SetGraphicalItem-QdG8FGgR.js";import"./getRadiusAndStrokeWidthFromDot-B-U7YWSC.js";import"./ActiveShapeUtils-DqTrL5g1.js";import"./Curve-Bi7tJxo-.js";import"./step-DGS-jgb3.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CZ0r_s02.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
