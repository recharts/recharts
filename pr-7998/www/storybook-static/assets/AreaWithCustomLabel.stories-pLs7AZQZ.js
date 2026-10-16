import{R as r}from"./iframe-BMLr-N8m.js";import{R as c}from"./zIndexSlice-CNoIWiIj.js";import{C as d}from"./ComposedChart-CRR_BNj7.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-bajlWe--.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DpCsf_je.js";import"./index-g4GeTxJm.js";import"./index-jx1ZEi_d.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-jOc_O7Kv.js";import"./isWellBehavedNumber-gG-DUVNw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D6IV3yYd.js";import"./axisSelectors-QHFm6bdo.js";import"./d3-scale-uv4cuZVX.js";import"./index-B5o-g1JC.js";import"./index-BoO0kGmt.js";import"./renderedTicksSlice-D6osv6XO.js";import"./index-CL1KOieJ.js";import"./CartesianChart-crhgf43U.js";import"./chartDataContext-Ch0M7QOU.js";import"./CategoricalChart-D8IryVYJ.js";import"./Layer-D25gMhyW.js";import"./activeStyles-Bwhdd0Sh.js";import"./Label-CO8bLvFk.js";import"./Text-Cz3Pbtag.js";import"./pageBackground-cNUAWp1v.js";import"./useId-Dyawny2A.js";import"./useBackwardsCompatibleTheme-TjicyzGG.js";import"./ZIndexLayer-B6k-j2NC.js";import"./useAnimationId--2Xv8oOg.js";import"./dataEntryStyles-BB_5qzNe.js";import"./ActivePoints-rASjYmBp.js";import"./Dot-DbGsYyOE.js";import"./types-ClqQg-f4.js";import"./GraphicalItemClipPath--PSqgLsU.js";import"./SetGraphicalItem-Bhbnxfc6.js";import"./getRadiusAndStrokeWidthFromDot-C_Z9reo5.js";import"./ActiveShapeUtils-C_iPwrws.js";import"./Curve-xHb5ea2i.js";import"./step-5G9v9Gpk.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BCNG7ZLV.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
