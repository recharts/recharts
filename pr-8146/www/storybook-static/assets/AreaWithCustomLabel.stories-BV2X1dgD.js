import{R as r}from"./iframe-BSZdIOb1.js";import{R as c}from"./zIndexSlice-x95uaAeG.js";import{C as d}from"./ComposedChart-CDWJbZ6n.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DhrgwX1F.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D3SG1Voa.js";import"./throttle-CSUb4-AW.js";import"./index-MExGibHi.js";import"./index-zsHkXx4R.js";import"./RechartsWrapper-BkCZoC17.js";import"./axisSelectors-YkanTYDO.js";import"./polarAxisSelectors-3PQGkC2Y.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-4UnkzbhN.js";import"./index-bJBh3omb.js";import"./index-TMoyXsD5.js";import"./renderedTicksSlice-BJuGaZyZ.js";import"./index-KnfBFAge.js";import"./fillDefinitions-DxVVI7tr.js";import"./CartesianChart-Bw5m5b1-.js";import"./ZIndexPortal-4kIQjZh0.js";import"./CategoricalChart-DA0Cyxxs.js";import"./Layer-uHX297jU.js";import"./LabelList-lC_U3aX6.js";import"./Label-Cim8hMW4.js";import"./Text-Bz3RDDRF.js";import"./DOMUtils-bqeGnrQd.js";import"./ZIndexLayer-yq1Eddx2.js";import"./ActivePoints-x8Ig6mBR.js";import"./Dot-BTQ1Y3aj.js";import"./types-Dvrgl9IY.js";import"./activeStyles-DKcFBEEB.js";import"./useAnimationId-CA_zjy4c.js";import"./dataEntryStyles-CFBEHlKQ.js";import"./Symbols-CWFcXiNy.js";import"./symbol-DRMp_7qO.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-C-eJsLZg.js";import"./getRadiusAndStrokeWidthFromDot-CVUy3O5W.js";import"./ActiveShapeUtils-D_M0EMWZ.js";import"./Curve-ClwfprbW.js";import"./step-DTMXh9wp.js";import"./useEffectiveDataKey-e2XyZYHS.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
