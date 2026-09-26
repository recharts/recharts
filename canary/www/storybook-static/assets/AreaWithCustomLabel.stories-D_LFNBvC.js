import{R as r}from"./iframe-B-cvRuUs.js";import{R as c}from"./zIndexSlice-CMjvBZBG.js";import{C as d}from"./ComposedChart-CN8RK9qn.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-lwZHGl3p.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CDbcUl2N.js";import"./index-wXQifNwN.js";import"./index-fP6QOzMc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-JrkDvvW3.js";import"./isWellBehavedNumber-CUJFmfDc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Sn-pOtLi.js";import"./axisSelectors-BWIhKYR0.js";import"./d3-scale-DR_59xyj.js";import"./index-CfNq1WsM.js";import"./index-Cb6llO21.js";import"./renderedTicksSlice-h9-Npuy6.js";import"./index-43fZ4l-Z.js";import"./CartesianChart-7OIiMPC1.js";import"./chartDataContext-D-4rsKBi.js";import"./CategoricalChart-sOR53Pms.js";import"./Layer-BuVUUS9m.js";import"./AnimatedItems-Dsd4czhw.js";import"./Label-vDwlhiVA.js";import"./Text-CxPZ3A1T.js";import"./DOMUtils-3oIj9XlO.js";import"./useId-aeSZs_FJ.js";import"./useBackwardsCompatibleTheme-HncKzdMk.js";import"./ZIndexLayer-DLKwVcRH.js";import"./useAnimationId-Dhj6Z_Vv.js";import"./ActivePoints-CQAXHfdf.js";import"./Dot-F1dblK_0.js";import"./types-BMpC1VHb.js";import"./RegisterGraphicalItemId-DKARvEgF.js";import"./GraphicalItemClipPath-C12hutx0.js";import"./SetGraphicalItem-DuL8o0QU.js";import"./getRadiusAndStrokeWidthFromDot-B-dIKKPR.js";import"./ActiveShapeUtils-C9LbS6Cy.js";import"./Curve-BQq91RH8.js";import"./step-D9kLagG3.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BfmGadKt.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
