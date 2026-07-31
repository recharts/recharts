import{R as e}from"./iframe-BNn_UWWx.js";import{R as c}from"./zIndexSlice-DE7GeAH-.js";import{C as d}from"./ComposedChart-iCBZpoeK.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DUFOPQCJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dubphbjd.js";import"./index-Bj9l6yop.js";import"./index-D_0E2Dfj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BEtD5DPC.js";import"./isWellBehavedNumber-BKaWcWBZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWGaw5tQ.js";import"./index-DbExzsUk.js";import"./index-C_8szxEx.js";import"./renderedTicksSlice-CR8grWP_.js";import"./axisSelectors-C-S7b24Y.js";import"./d3-scale-Dfsy3Tmh.js";import"./CartesianChart-CP3XnrfD.js";import"./chartDataContext-rNOOEU-v.js";import"./CategoricalChart-DKj_eLFg.js";import"./Layer-C9Gg67SI.js";import"./AnimatedItems-DzsSkQFR.js";import"./Label-BR5BCwPX.js";import"./Text-BkqgwmxZ.js";import"./DOMUtils-kgC6vmME.js";import"./ZIndexLayer-DbGeHIXa.js";import"./useAnimationId-DDbhsfXp.js";import"./ActivePoints-OEb_V2h_.js";import"./Dot-BO-47chS.js";import"./types-BuPE8SUX.js";import"./RegisterGraphicalItemId-BNqd9LzC.js";import"./GraphicalItemClipPath-n0yD8gXz.js";import"./SetGraphicalItem-DKdZ-jRK.js";import"./graphicalItemIdentity-BD7rPDFr.js";import"./ActiveShapeUtils-w8zJ4JkR.js";import"./Curve-B398d6Gz.js";import"./step-1QEEOZnW.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-MW3Vir6H.js";import"./graphicalItemSelectors-6pmbpWWP.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
