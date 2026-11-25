import{R as r}from"./iframe-DkUPJ-sS.js";import{R as c}from"./zIndexSlice-12UiSTLm.js";import{C as d}from"./ComposedChart-3SzIkZlG.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-y4t0EOeH.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-R0X1asWy.js";import"./get-CjriyByo.js";import"./throttle-B27eHaYH.js";import"./index-CRD-EhW_.js";import"./index-t-OvK83N.js";import"./RechartsWrapper-mRcsep52.js";import"./axisSelectors-DXomLufj.js";import"./polarAxisSelectors-BXszvLGt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CycPPIVV.js";import"./index-C1Em399f.js";import"./index-Cvlsg4mt.js";import"./renderedTicksSlice-DufVH7D7.js";import"./index-BSGDHpsm.js";import"./fillDefinitions-z6sEEzMG.js";import"./CartesianChart-DoFuwDSF.js";import"./chartDataContext-90C9fl16.js";import"./CategoricalChart-B3U5Ej9_.js";import"./getRadiusAndStrokeWidthFromDot-CiiVoAk9.js";import"./Layer-Dz0e5F_f.js";import"./dataEntryStyles-BCBCgPLo.js";import"./Label-8ZjagO8_.js";import"./Text-ChMlRx0j.js";import"./ZIndexLayer-BEv6P927.js";import"./ActivePoints-D6Ig6JoZ.js";import"./Dot-1lM7GFo1.js";import"./types-BwlCxTmg.js";import"./activeStyles-DgOrLWSA.js";import"./useAnimationId-2gl_z5Fx.js";import"./Symbols-u4sk2XTY.js";import"./symbol-C2La0w81.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-D8P9Tqtn.js";import"./ActiveShapeUtils-Dnx5Vb0n.js";import"./Curve-CbuCUFZQ.js";import"./step-BRslF1pk.js";import"./useEffectiveDataKey-CN20ww8a.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
