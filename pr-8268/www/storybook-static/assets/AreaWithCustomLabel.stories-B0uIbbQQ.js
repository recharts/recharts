import{R as r}from"./iframe-B4BvLeme.js";import{R as c}from"./zIndexSlice-DyTYWVcs.js";import{C as d}from"./ComposedChart-D4s6ZbXJ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-_0pH7oQD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-6IdFK7Ih.js";import"./throttle-DQNRL0AJ.js";import"./index-ClYdslLd.js";import"./index-59WpEyYi.js";import"./RechartsWrapper-B0OT4wWF.js";import"./axisSelectors-DS5uRUAA.js";import"./polarAxisSelectors-DqM84NZ8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DfUXkppW.js";import"./index-CwZtWez3.js";import"./index-Ba_PgChy.js";import"./renderedTicksSlice-D5gysmL5.js";import"./index-eMahtaOk.js";import"./fillDefinitions-CE1xVmK7.js";import"./CartesianChart-B8uUCQhO.js";import"./chartDataContext-DPDAwbOK.js";import"./CategoricalChart-gG_kR-cF.js";import"./getRadiusAndStrokeWidthFromDot-CutWxkzF.js";import"./Layer-Bxh7arjC.js";import"./dataEntryStyles-n779GVpT.js";import"./Label-Bp5zUoNH.js";import"./Text-B4NS4A04.js";import"./ZIndexLayer-Cb7Yxv7n.js";import"./ActivePoints-Cz0D4X-h.js";import"./Dot-BDYf7Xcg.js";import"./types-UPHeghFs.js";import"./activeStyles-BtDPe58A.js";import"./useAnimationId-B1vlq9HU.js";import"./Symbols-BPMmDEMk.js";import"./symbol-YAvM_-gl.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-WJo3C0-v.js";import"./ActiveShapeUtils-CXNsVwUA.js";import"./Curve-B5oomGBl.js";import"./step-il89s-4w.js";import"./useEffectiveDataKey-cN06FnCm.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
