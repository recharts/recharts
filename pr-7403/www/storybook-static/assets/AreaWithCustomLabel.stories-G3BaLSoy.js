import{c as e}from"./iframe-CaARQ0s4.js";import{g as c}from"./zIndexSlice-CT6cs3HE.js";import{C as d}from"./ComposedChart-0hkFxU0y.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-BLBt0c-D.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DoZyPWPm.js";import"./index-BPXM-FiZ.js";import"./index-BihqodT2.js";import"./get-CO6N6w1L.js";import"./resolveDefaultProps-B52lcPQI.js";import"./isWellBehavedNumber-D2fOOboq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BhQjrq0m.js";import"./index-B_8hMxBA.js";import"./index-DNa9UEyx.js";import"./renderedTicksSlice-MMq6D890.js";import"./axisSelectors-BR_tDNDG.js";import"./d3-scale-BQLIct9Q.js";import"./CartesianChart-CtVi6KY7.js";import"./chartDataContext-B9lvWDA4.js";import"./CategoricalChart-CAffiMXn.js";import"./Curve-aG6LIP1X.js";import"./types-v4PqfPoB.js";import"./step-Oxw9Oqwn.js";import"./path-DyVhHtw_.js";import"./Layer-CrNDeidH.js";import"./ReactUtils-BDfejln-.js";import"./Label-COAzSUqp.js";import"./Text-V5D_mpos.js";import"./DOMUtils-_DsZOp5Z.js";import"./ZIndexLayer-BSRcolRF.js";import"./ActivePoints-Bo3chioo.js";import"./Dot-FinFGek5.js";import"./RegisterGraphicalItemId-s6qV58ed.js";import"./GraphicalItemClipPath-ZB8y26XE.js";import"./SetGraphicalItem-CLCCJcFS.js";import"./useAnimationId-9oP4gOjo.js";import"./getRadiusAndStrokeWidthFromDot-BM_DPlIN.js";import"./graphicalItemSelectors-B8Fy9Cw5.js";const rt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
