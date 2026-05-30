import{c as e}from"./iframe-UCAhYs-z.js";import{g as c}from"./zIndexSlice-D1yLUW4N.js";import{C as d}from"./ComposedChart-Z0W1ZhiK.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-CVi3WJrR.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C7lWlBZP.js";import"./index-DNUUkfMj.js";import"./index-DUfS7S-b.js";import"./get-_XX617w0.js";import"./resolveDefaultProps-x5qwSX1Y.js";import"./isWellBehavedNumber-km_cSMyX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DH9U6NxN.js";import"./index-CWyZ4H7B.js";import"./index-CgqmNVZ9.js";import"./renderedTicksSlice-c5635lKm.js";import"./axisSelectors-DDRfemS2.js";import"./d3-scale-4iD7H2_D.js";import"./CartesianChart-W_64lWDO.js";import"./chartDataContext-tDfcFOTc.js";import"./CategoricalChart-D1LSz5Gs.js";import"./Curve-DOjbLHoQ.js";import"./types-tyluCCo2.js";import"./step-BCk2IvEt.js";import"./path-DyVhHtw_.js";import"./Layer-BbZFEpf4.js";import"./ReactUtils-CzulCaS-.js";import"./Label-CtGR-die.js";import"./Text-Rw6qQ1RF.js";import"./DOMUtils-BWCSYHt1.js";import"./ZIndexLayer-CEmXwARt.js";import"./ActivePoints-DwgVtAw6.js";import"./Dot-Cu_IjLEt.js";import"./RegisterGraphicalItemId-ByRoWgeN.js";import"./GraphicalItemClipPath-C-wdvxqO.js";import"./SetGraphicalItem-X5GoC_bE.js";import"./useAnimationId-BjOATGeC.js";import"./getRadiusAndStrokeWidthFromDot-BL_cRC7m.js";import"./graphicalItemSelectors-BSW7Id0m.js";const rt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
