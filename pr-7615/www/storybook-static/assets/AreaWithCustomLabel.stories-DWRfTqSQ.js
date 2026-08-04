import{R as e}from"./iframe-BpT5bjyP.js";import{R as c}from"./zIndexSlice-6ZjUmd8N.js";import{C as d}from"./ComposedChart-VG8L4Dm0.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DEL2_xiF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DrtrRvnQ.js";import"./index-D8dxtA6W.js";import"./index-BdWqmQ-h.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DDabcDAr.js";import"./isWellBehavedNumber-C47drcC6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CU2X_CAJ.js";import"./index-DEeMmmG_.js";import"./index-rBmp_rAe.js";import"./renderedTicksSlice-DruWQWhq.js";import"./axisSelectors-DSgRntKH.js";import"./d3-scale-CxG8NgTa.js";import"./CartesianChart-BHxGC6l9.js";import"./chartDataContext-vyuuOWQ4.js";import"./CategoricalChart-B5HQoLMh.js";import"./Layer-JsFzk0bC.js";import"./AnimatedItems-CJc5QMM0.js";import"./Label-BW7muwsN.js";import"./Text-HFJbCo1I.js";import"./DOMUtils-DLC4sCDo.js";import"./ZIndexLayer-BeMfDg3A.js";import"./useAnimationId-C2b5i1-K.js";import"./ActivePoints-C2xP28N-.js";import"./Dot-C23HV8Lj.js";import"./types-TjqF4iRF.js";import"./RegisterGraphicalItemId-rnVsHys1.js";import"./GraphicalItemClipPath-B_g_u1qL.js";import"./SetGraphicalItem-Bi4oedQq.js";import"./graphicalItemIdentity-N_badT-U.js";import"./ActiveShapeUtils-BtBl96a6.js";import"./Curve-BfRxDj3b.js";import"./step-BYJgq2pg.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-BtlbTq9b.js";import"./graphicalItemSelectors-eSkf4DNa.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
