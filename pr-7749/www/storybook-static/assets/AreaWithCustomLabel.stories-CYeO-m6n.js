import{R as r}from"./iframe-DTRlEa3u.js";import{R as c}from"./zIndexSlice-CDXLYYsJ.js";import{C as d}from"./ComposedChart-sAjY7YWJ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BZhb5432.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D6N_0nid.js";import"./index-CS48B7tj.js";import"./index-o_WhDpRH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BJzTCoJ3.js";import"./isWellBehavedNumber-BJiDbB8v.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BBFKLgiK.js";import"./axisSelectors-DdPePiMV.js";import"./d3-scale-5lZtxq-z.js";import"./index-CpmklETy.js";import"./index-Cvz-VVDw.js";import"./renderedTicksSlice-CMohq2ew.js";import"./index-BE7ByIQm.js";import"./CartesianChart-C0fRKmIL.js";import"./chartDataContext-0lwkG_AO.js";import"./CategoricalChart-Br64IOu-.js";import"./Layer-Cxb9aykb.js";import"./AnimatedItems-D3NTNo-L.js";import"./Label-CwRVD2C4.js";import"./Text-BwGttioZ.js";import"./DOMUtils-BlPhfohB.js";import"./useId-DA93zQ1i.js";import"./useBackwardsCompatibleTheme-Tyqh7EHZ.js";import"./ZIndexLayer-B42FtzLK.js";import"./useAnimationId-BQWcd1jo.js";import"./ActivePoints-DKYwbTj3.js";import"./Dot-Dein_ccS.js";import"./types-BPUiziHz.js";import"./RegisterGraphicalItemId-NS8Y_EHr.js";import"./GraphicalItemClipPath-DCT6ZGzY.js";import"./SetGraphicalItem-D-a-mss5.js";import"./getRadiusAndStrokeWidthFromDot-scqYoR8I.js";import"./ActiveShapeUtils-0NSyvuwL.js";import"./Curve-BqpssSWR.js";import"./step-jNVSHd8N.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CL95YKlR.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
