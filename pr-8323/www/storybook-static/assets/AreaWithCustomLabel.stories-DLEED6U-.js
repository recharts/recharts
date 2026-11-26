import{R as r}from"./iframe-J6essBJs.js";import{R as c}from"./zIndexSlice-BsmeZsA8.js";import{C as d}from"./ComposedChart-Bs7sztQ5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Bae11mIU.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B0dQjUYN.js";import"./get-CjriyByo.js";import"./throttle-rB4iKGhW.js";import"./index-BfoAYr9-.js";import"./index-B048aLjq.js";import"./RechartsWrapper-CQZiUgoa.js";import"./axisSelectors-COh-2QwC.js";import"./polarAxisSelectors-DoWbS56a.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-mCWeQZGc.js";import"./index-CDhxvRQi.js";import"./index-B6b_sXBt.js";import"./renderedTicksSlice-CxD0Hqd-.js";import"./index-CrSQFTfs.js";import"./fillDefinitions-DxPSgWUP.js";import"./CartesianChart-89WXJ_-l.js";import"./chartDataContext-BzXVBn_L.js";import"./CategoricalChart-BsPicsjO.js";import"./getRadiusAndStrokeWidthFromDot-Jh2oIQpE.js";import"./Layer-ePHruQv_.js";import"./dataEntryStyles-BOxNMiFO.js";import"./Label-DrwYb9eR.js";import"./Text-Ik43AMmT.js";import"./ZIndexLayer-CqPJfsaa.js";import"./ActivePoints-C9YqKELU.js";import"./Dot-CUXpspz7.js";import"./types-B8ASDW8U.js";import"./activeStyles-Bv4vkUPt.js";import"./useAnimationId-TXNHUPXz.js";import"./Symbols-DkB_uy8_.js";import"./symbol-CVLBGIRz.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-DrwlXMoh.js";import"./ActiveShapeUtils-CpyR9gHD.js";import"./Curve-BL_nBUj1.js";import"./step-B4vSzXfO.js";import"./useEffectiveDataKey-XIQJdOoE.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
