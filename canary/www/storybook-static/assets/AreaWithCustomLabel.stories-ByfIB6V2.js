import{R as r}from"./iframe-L3U4PXsg.js";import{R as c}from"./zIndexSlice-DEY0PQhJ.js";import{C as d}from"./ComposedChart-Dkixnof2.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C2jaBgsp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-1AGwrNmW.js";import"./index-Bc6oV31c.js";import"./index-DwDM_7Ax.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DZ-vNTge.js";import"./isWellBehavedNumber-BwlzE5Kb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dhr4IQZK.js";import"./index-kTWfYntd.js";import"./index-ywjMrX_X.js";import"./axisSelectors-BUQrPPfP.js";import"./d3-scale-BML9T1At.js";import"./renderedTicksSlice-D2JO8twM.js";import"./CartesianChart-INIUEhvM.js";import"./chartDataContext-EPhxp5b3.js";import"./CategoricalChart-mkEHtD3F.js";import"./Layer-CK7JaaLc.js";import"./AnimatedItems-Cx-Jnru-.js";import"./Label-B7Q2YiAq.js";import"./Text-DovToi-v.js";import"./DOMUtils-BtvfpILU.js";import"./ZIndexLayer-Bn3RUVWt.js";import"./useAnimationId-BO1w5K0N.js";import"./ActivePoints-DANj5o8Y.js";import"./Dot-B_tF6fjU.js";import"./types-oKR4keO9.js";import"./RegisterGraphicalItemId-CUZSiPzN.js";import"./GraphicalItemClipPath-BgQIEIQL.js";import"./SetGraphicalItem-BkVYHSQy.js";import"./getRadiusAndStrokeWidthFromDot-HzlbV5QW.js";import"./ActiveShapeUtils-DLAF0QLB.js";import"./Curve-SKtCcge4.js";import"./step-0OJURZ58.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-CsEJ0H_M.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BJYLeCHd.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
