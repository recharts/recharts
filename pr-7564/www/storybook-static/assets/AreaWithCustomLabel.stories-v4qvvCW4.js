import{R as e}from"./iframe-MCQmK-TG.js";import{R as c}from"./zIndexSlice-BMHpWHLe.js";import{C as d}from"./ComposedChart-CupTaTlB.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-_ZEkPFB6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-exFJ19dN.js";import"./index-iUk-FcRS.js";import"./index-CGFRGdbT.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DF8ch7IU.js";import"./isWellBehavedNumber-DF6QZ0lN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSMirUgA.js";import"./index-DCwDEUXM.js";import"./index-4hl_PvHL.js";import"./renderedTicksSlice-5teDD8C_.js";import"./axisSelectors-t6G1HMN1.js";import"./d3-scale-1trsZxCl.js";import"./CartesianChart-CbiEQRIX.js";import"./chartDataContext-oq73vT2r.js";import"./CategoricalChart-DG8zA7C6.js";import"./Layer-BUisE7Gh.js";import"./AnimatedItems-Z_ZNAYUP.js";import"./Label-DaldQZFv.js";import"./Text-LGFyNulV.js";import"./DOMUtils-DeN2A_86.js";import"./ZIndexLayer-BnKxJfbB.js";import"./useAnimationId-Ptyt1Cmf.js";import"./ActivePoints-DBM0wjQk.js";import"./Dot-CZGz3E6B.js";import"./types-Cz27ONEA.js";import"./RegisterGraphicalItemId-CwAmMMrt.js";import"./GraphicalItemClipPath-BDardp6y.js";import"./SetGraphicalItem-RVuvzcbz.js";import"./getRadiusAndStrokeWidthFromDot-00OVvYcl.js";import"./ActiveShapeUtils-BJxvN-bC.js";import"./Curve-DfisrzMh.js";import"./step-DU3HZd3T.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DTYEBY2T.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
