import{R as r}from"./iframe-O6BbDbFD.js";import{R as c}from"./zIndexSlice-ufl9shMa.js";import{C as d}from"./ComposedChart-BrGWNJAt.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BYRQm7H9.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C3IkSeoT.js";import"./index-BpSs36Jm.js";import"./index-C0YTM7Q0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Tk25gN9F.js";import"./isWellBehavedNumber-CZqzhzTI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CoeUwGvc.js";import"./index-CnIZ7xjW.js";import"./index-BUePfml7.js";import"./axisSelectors-B4uTofMj.js";import"./d3-scale-C59jQ7wQ.js";import"./renderedTicksSlice-B4DLXLOp.js";import"./CartesianChart-B9Asj-o-.js";import"./chartDataContext-CMEfpaNZ.js";import"./CategoricalChart-aiOnciBW.js";import"./Layer-BCiB-dL4.js";import"./AnimatedItems-BmR1pSA0.js";import"./Label-SH09pAJC.js";import"./Text-ti8Fj8zJ.js";import"./DOMUtils-BG1uuH7H.js";import"./useId-Cennb_xj.js";import"./useBackwardsCompatibleTheme-DlXi3557.js";import"./ZIndexLayer-Bt9vBpxW.js";import"./useAnimationId-DHIHugsV.js";import"./ActivePoints-BgZirJxM.js";import"./Dot-D6BD33aP.js";import"./types-o_WouL0J.js";import"./RegisterGraphicalItemId-DqjeB-Ir.js";import"./GraphicalItemClipPath-DQtsyL-k.js";import"./SetGraphicalItem-BTWaHo9u.js";import"./getRadiusAndStrokeWidthFromDot-DUN_awyu.js";import"./ActiveShapeUtils-CApqjo8g.js";import"./Curve-r6vAjm_u.js";import"./step-rmFojxwR.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DWFN68Iw.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
