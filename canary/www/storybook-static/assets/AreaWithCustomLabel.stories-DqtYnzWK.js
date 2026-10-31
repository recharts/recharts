import{R as r}from"./iframe-DrMLBoK_.js";import{R as c}from"./zIndexSlice-BAbfq_sX.js";import{C as d}from"./ComposedChart-BJO1Ycdb.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BJRbdkxd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C_WQkFbi.js";import"./throttle-2Z3dikKo.js";import"./index-CTLiCJTk.js";import"./index-IA7JdDoU.js";import"./RechartsWrapper-CXZPsywz.js";import"./axisSelectors-CrOsHKKG.js";import"./polarAxisSelectors-D2k-junf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BHx6I7KL.js";import"./index-BsgdmWE6.js";import"./index-DwcArmuD.js";import"./renderedTicksSlice-DjVfoptE.js";import"./index-pQjQ56sZ.js";import"./CartesianChart-Dzyi-du7.js";import"./ZIndexPortal-Cic8j-2O.js";import"./CategoricalChart-CZtxZv4h.js";import"./Layer-DCQ6NbAd.js";import"./LabelList-UL5cxJwa.js";import"./Label-CJPkFebi.js";import"./Text-CCAk-006.js";import"./DOMUtils-BZ5XTJuP.js";import"./ZIndexLayer-FCgsPrev.js";import"./ActivePoints-BqSYU_4H.js";import"./Dot-m22IE0o6.js";import"./types-CTebeEOM.js";import"./activeStyles-CN6y9IyH.js";import"./useAnimationId-C1T3lckw.js";import"./dataEntryStyles-DS33QVkf.js";import"./themeFill-BkM1x4hA.js";import"./Symbols-BVUslZbl.js";import"./symbol-DCFwQ7z8.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-u5R4LaUm.js";import"./getRadiusAndStrokeWidthFromDot-e3lSPE0u.js";import"./ActiveShapeUtils-BLsOucL8.js";import"./Curve-CDb7Uz9B.js";import"./step-LAZCFOYn.js";import"./useEffectiveDataKey-Cmfpsn2Q.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
