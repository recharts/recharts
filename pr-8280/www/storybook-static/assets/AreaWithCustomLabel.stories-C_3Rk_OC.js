import{R as r}from"./iframe-BU2uaiQT.js";import{R as c}from"./zIndexSlice-B7Ww3qol.js";import{C as d}from"./ComposedChart-0ICAtkFu.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DlZI-UMM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C2wLywwD.js";import"./throttle-CcBx4b7F.js";import"./index-DgFA6NAr.js";import"./index-BrUaXQP2.js";import"./RechartsWrapper-DJs7SFO5.js";import"./axisSelectors-D_lL4SFu.js";import"./polarAxisSelectors-NZrfm7K-.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmCizgpV.js";import"./index-KnqMoSVw.js";import"./index-Y51TWOSn.js";import"./renderedTicksSlice-CbO7RmCe.js";import"./index-BmKufkZC.js";import"./fillDefinitions-CvAEkStr.js";import"./CartesianChart-C6-Tr1WN.js";import"./chartDataContext-C2FLfdfd.js";import"./CategoricalChart-LCCfHS5i.js";import"./getRadiusAndStrokeWidthFromDot-EXJcUNWf.js";import"./Layer-Bk2JkGA1.js";import"./dataEntryStyles-BQSK-138.js";import"./Label-CM1LVEBq.js";import"./Text-DcepGaW8.js";import"./ZIndexLayer-DWfXGHkj.js";import"./ActivePoints-BVY4H7tc.js";import"./Dot-tdH7rvCo.js";import"./types-BGeljdCR.js";import"./activeStyles-C3KdIcht.js";import"./useAnimationId-DGhOgRI0.js";import"./Symbols-D3wHF1gQ.js";import"./symbol-4tNLkD_c.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-DIE9SpoX.js";import"./ActiveShapeUtils-BmdPhGHL.js";import"./Curve-CAcSf3Dw.js";import"./step-B9D1ky0j.js";import"./useEffectiveDataKey-u5bBQA4i.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
