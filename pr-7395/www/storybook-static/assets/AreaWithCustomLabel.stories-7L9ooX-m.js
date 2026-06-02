import{c as e}from"./iframe-QM_Hy95O.js";import{g as c}from"./zIndexSlice-BlNPxokt.js";import{C as d}from"./ComposedChart-CQ4Xoo2c.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-CjiFXGZi.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-fQ35ak9n.js";import"./index-CPQwco96.js";import"./index-CyaeIqvy.js";import"./get-in6fAyvy.js";import"./resolveDefaultProps-BlXEfe9z.js";import"./isWellBehavedNumber-COg8tf3N.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ls9ymLSy.js";import"./index-rIa8t0ZL.js";import"./index-CGSa8iwo.js";import"./renderedTicksSlice-CdDiUgXh.js";import"./axisSelectors-CnIWqyv7.js";import"./d3-scale-CDUvP8fj.js";import"./CartesianChart-BOBGMUhC.js";import"./chartDataContext-Cuzu216J.js";import"./CategoricalChart-C66Yjwv3.js";import"./Curve-BXRuFBMP.js";import"./types-B29_egWp.js";import"./step-BH3XZet7.js";import"./path-DyVhHtw_.js";import"./Layer-DMLrZzOp.js";import"./ReactUtils-BIEdgNAL.js";import"./Label-D4PO75Y9.js";import"./Text-CiqEhbxu.js";import"./DOMUtils-O0X-t8NY.js";import"./ZIndexLayer-BiKPrQca.js";import"./ActivePoints-48Z6mXbE.js";import"./Dot-CfJGHcqY.js";import"./RegisterGraphicalItemId-Ch0Vf5AU.js";import"./GraphicalItemClipPath-BHIKYbjI.js";import"./SetGraphicalItem-DzbZ3uGV.js";import"./useAnimationId-BxdIxPQQ.js";import"./getRadiusAndStrokeWidthFromDot-6yNSu3ln.js";import"./graphicalItemSelectors-BTjfDUNL.js";const rt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
