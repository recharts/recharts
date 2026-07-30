import{R as e}from"./iframe-BCd41l8E.js";import{R as c}from"./zIndexSlice-vwglsLr7.js";import{C as d}from"./ComposedChart-Ca4-q80H.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-dwjuXyaj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-COzcAqD2.js";import"./index-DqhoEKLL.js";import"./index-DbWv8bq-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CfjrcH5k.js";import"./isWellBehavedNumber-By99v6ya.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAuP6JTc.js";import"./index-B6Q7w6aQ.js";import"./index-BUl2VpQi.js";import"./renderedTicksSlice-DGgd7qJG.js";import"./axisSelectors-BWK81-bk.js";import"./d3-scale-BUxy_yCJ.js";import"./CartesianChart-C3_p9XVE.js";import"./chartDataContext-Drys5Aq2.js";import"./CategoricalChart-D4f6D4jQ.js";import"./Layer-BlOdZtAq.js";import"./AnimatedItems-Dw69Yp-8.js";import"./Label-BGS-IakE.js";import"./Text-rlFfv_Ik.js";import"./DOMUtils--ioWONbC.js";import"./ZIndexLayer-C4KPetXp.js";import"./useAnimationId-CGoXgsW2.js";import"./ActivePoints-Ca9ELXuu.js";import"./Dot-k24tsyTI.js";import"./types-CEIkXXH7.js";import"./RegisterGraphicalItemId-BNOR99Vc.js";import"./GraphicalItemClipPath-mTO3f3R8.js";import"./SetGraphicalItem-C-GN70LS.js";import"./getRadiusAndStrokeWidthFromDot-Cs1a3Mwu.js";import"./ActiveShapeUtils-B7pKCaaA.js";import"./Curve-5IbJhmxY.js";import"./step-B-Fp4nlk.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DfdHeRAK.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
