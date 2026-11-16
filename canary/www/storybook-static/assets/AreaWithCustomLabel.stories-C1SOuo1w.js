import{R as r}from"./iframe-1fJ5z_WZ.js";import{R as c}from"./zIndexSlice-BJlX5T59.js";import{C as d}from"./ComposedChart-Ejf7RFZN.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Ci00k7ur.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DpYz-CI8.js";import"./throttle-6GiZsFaS.js";import"./index-DsJre9D2.js";import"./index-CN35TrPh.js";import"./RechartsWrapper-CR62a_mQ.js";import"./axisSelectors-V7mZ-cGP.js";import"./polarAxisSelectors-DJTK4O93.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DqY1ZQ_w.js";import"./index-n_irgge3.js";import"./index-BVEyPHm4.js";import"./renderedTicksSlice-C4Oi_vEC.js";import"./index-Cn_Mqps3.js";import"./fillDefinitions-BKoNuBLW.js";import"./CartesianChart-DqvtgvX5.js";import"./chartDataContext-B7GlDzou.js";import"./CategoricalChart-DhN17CFo.js";import"./Layer-6gV2DTZI.js";import"./dataEntryStyles-CqRs5fjI.js";import"./Label-C7hOOLTD.js";import"./Text-BeONQBVt.js";import"./ZIndexLayer-CrU6dYup.js";import"./ActivePoints-D175dDtY.js";import"./Dot-B85RmoVX.js";import"./types-XVdAxFZ3.js";import"./activeStyles-C3pl5b-R.js";import"./useAnimationId-BaNyc8zg.js";import"./Symbols-CPapFf10.js";import"./symbol-CvHFU9Z0.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BkhZc2Qn.js";import"./getRadiusAndStrokeWidthFromDot-BILnwdsR.js";import"./ActiveShapeUtils-DH_zMc_D.js";import"./Curve-D2bzFbuS.js";import"./step-DaCSxOe-.js";import"./useEffectiveDataKey-BB-f3APH.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
