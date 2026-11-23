import{R as r}from"./iframe-BPMC3WYJ.js";import{R as c}from"./zIndexSlice-Dj40vb7g.js";import{C as d}from"./ComposedChart-q5KBJ-2n.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CMX2Sypc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DrqSG9Sb.js";import"./throttle-B4k3GkVg.js";import"./index--Kmbgs-i.js";import"./index-AyLBa-KC.js";import"./RechartsWrapper-DOOVVQ84.js";import"./axisSelectors-CrZDIgWl.js";import"./polarAxisSelectors-BUrPAP_8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DWK10Otc.js";import"./index-RBnEXtxa.js";import"./index-CYO9i6D-.js";import"./renderedTicksSlice-DlYiisC_.js";import"./index-sIio76FK.js";import"./fillDefinitions-D5RroE9V.js";import"./CartesianChart-DjwHqbL7.js";import"./chartDataContext-Duv-qyDG.js";import"./CategoricalChart-3WFZ3cEW.js";import"./getRadiusAndStrokeWidthFromDot-Dlem8Fc0.js";import"./Layer-Cp3c10oW.js";import"./dataEntryStyles-BuPGiwQu.js";import"./Label-pm6AJFCJ.js";import"./Text-DQWN35zZ.js";import"./ZIndexLayer-edtK9VrY.js";import"./ActivePoints-D3NC-ckk.js";import"./Dot-Ctn63yOC.js";import"./types-w6DZXHOl.js";import"./activeStyles-Ci2F5zQC.js";import"./useAnimationId-BI9f9iTm.js";import"./Symbols-BiXrA8HB.js";import"./symbol-DMDdywXz.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BZWLeuys.js";import"./ActiveShapeUtils-yBzGzkry.js";import"./Curve-S3vEoheb.js";import"./step-DsVBo6Bh.js";import"./useEffectiveDataKey-o3mJFvm5.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
