import{R as e}from"./iframe-C7qTZtPI.js";import{R as c}from"./zIndexSlice-BcOfmYYd.js";import{C as d}from"./ComposedChart-C_NHVXsk.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DZ7qS-np.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DLOScDmO.js";import"./index-BL1FkC_h.js";import"./index-cjepjzxR.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Ce1865_D.js";import"./isWellBehavedNumber-D1UA-S7t.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-o9fcaOJn.js";import"./index-DzpRwwXn.js";import"./index-Bl3ZtZEI.js";import"./renderedTicksSlice-CqCAs39i.js";import"./axisSelectors-vHpYaHv4.js";import"./d3-scale-BJE91LPh.js";import"./CartesianChart-CYC5HkCy.js";import"./chartDataContext-B2ck_4kp.js";import"./CategoricalChart-DlWBLDD7.js";import"./Layer-y2Nfuyvg.js";import"./AnimatedItems-HRihbpAW.js";import"./Label-DS1cnk1C.js";import"./Text-BCZsvPKZ.js";import"./DOMUtils-DEhyc4Rj.js";import"./ZIndexLayer-B8jqXSnt.js";import"./useAnimationId-D4WzgVDK.js";import"./ActivePoints-GVhqjKv2.js";import"./Dot-nbmu8EHp.js";import"./types-Bx79eQJf.js";import"./RegisterGraphicalItemId-hstJQcJh.js";import"./GraphicalItemClipPath-CJL-G-6t.js";import"./SetGraphicalItem-B6Vsn-QI.js";import"./getRadiusAndStrokeWidthFromDot-DdigNmch.js";import"./ActiveShapeUtils-BJUH9QkP.js";import"./Curve-DiMbH13e.js";import"./step-THYeIvAN.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DidJxMin.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
