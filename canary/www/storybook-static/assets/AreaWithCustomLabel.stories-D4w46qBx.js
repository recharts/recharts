import{R as r}from"./iframe-Bibrvi93.js";import{R as c}from"./zIndexSlice-IRdU2Eq4.js";import{C as d}from"./ComposedChart-BDBh58IM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-5Vl_29LF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BYyvulfq.js";import"./index-DMM3MhtL.js";import"./index-30mt-Xh2.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DuLA9rob.js";import"./isWellBehavedNumber-DEJNr0Qw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bt5qeROs.js";import"./axisSelectors-DSlGSk_i.js";import"./d3-scale-Cv38ge3f.js";import"./index-DWooAmJS.js";import"./index-DnZq9tde.js";import"./renderedTicksSlice-B9WL6t6z.js";import"./index-BJXhTZS7.js";import"./CartesianChart-CEqCUP4y.js";import"./chartDataContext-uGfw2Upg.js";import"./CategoricalChart-DFHR8N3d.js";import"./Layer-DE86HNiB.js";import"./activeStyles-DrZDHncN.js";import"./Label-cYp5UoGe.js";import"./Text-BO_ppYYl.js";import"./pageBackground-XzqliJgP.js";import"./useId-BgICeW4-.js";import"./useBackwardsCompatibleTheme-DU3b-TNc.js";import"./ZIndexLayer-CR2StRvF.js";import"./dataEntryStyles-DDDSAcpo.js";import"./useAnimationId-CyOwunze.js";import"./ActivePoints-BrjJnJ33.js";import"./Dot-DajOJSdD.js";import"./types-Bq4foVci.js";import"./RegisterGraphicalItemId-Cbm3m_DF.js";import"./SetGraphicalItem-CE5ARGmx.js";import"./getRadiusAndStrokeWidthFromDot-CuI68Hzl.js";import"./ActiveShapeUtils-D9IZw5gW.js";import"./Curve-CMNJVVoM.js";import"./step-CRsn2MAq.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BbVSYZl7.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
