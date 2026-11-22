import{R as r}from"./iframe-C2FiVbx6.js";import{R as c}from"./zIndexSlice-CIwOLMY2.js";import{C as d}from"./ComposedChart-Bj-Vd15E.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BYQu7BkS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CRuYPp9Y.js";import"./throttle-Cf_mfeUw.js";import"./index-abbND0en.js";import"./index-qkgHpql3.js";import"./RechartsWrapper-CzRJf9wd.js";import"./axisSelectors-DzJ8Skeq.js";import"./polarAxisSelectors-Bm0LaijP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dmh-LY51.js";import"./index-2QDsETde.js";import"./index-CRK-dYW4.js";import"./renderedTicksSlice-DfOOwYLv.js";import"./index-CmXMjoXJ.js";import"./fillDefinitions-0TcAAZ0C.js";import"./CartesianChart-DXHWhKco.js";import"./chartDataContext-CxmIzf3r.js";import"./CategoricalChart-CH_w6Aat.js";import"./getRadiusAndStrokeWidthFromDot-0SqF3Wbd.js";import"./Layer-BbCOnDJZ.js";import"./dataEntryStyles-Cr8Jhwhl.js";import"./Label-oSfspIu2.js";import"./Text-DUuV2-iR.js";import"./ZIndexLayer-CyqrJVrU.js";import"./ActivePoints-BoBRdB0i.js";import"./Dot-CKxlSMqI.js";import"./types-CTWOnDaX.js";import"./activeStyles-Cz6uJME2.js";import"./useAnimationId-DeWO3OMz.js";import"./Symbols-D3G4ac0V.js";import"./symbol-By85hRRg.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-CdikQP2n.js";import"./ActiveShapeUtils-xS0QhUpf.js";import"./Curve-r64DCwYW.js";import"./step-CFQC-oeW.js";import"./useEffectiveDataKey-pHEaOl4p.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
