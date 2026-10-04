import{R as r}from"./iframe-C-Iuj2CY.js";import{R as c}from"./zIndexSlice-C4JSr5KN.js";import{C as d}from"./ComposedChart-nt2Gmc-a.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CatE1UFm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bp4liTDw.js";import"./index-BYGjDTj5.js";import"./index-CKdK4Tlm.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DL7WVnFH.js";import"./isWellBehavedNumber-Ku-m6vnz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-7_EuFQF-.js";import"./axisSelectors-BMEelndQ.js";import"./d3-scale-C4GnCzHc.js";import"./index-C4z0ADpB.js";import"./index-8RkzDuen.js";import"./renderedTicksSlice-Cor1xeVL.js";import"./index-DFGRvPnn.js";import"./CartesianChart-BAWmemtm.js";import"./chartDataContext-oGc_LYLd.js";import"./CategoricalChart-CSHLIlSH.js";import"./Layer-CTC_B_AO.js";import"./AnimatedItems-BJhHPNtS.js";import"./Label-BQbGJ4sW.js";import"./Text-CuFXobZ8.js";import"./DOMUtils-D1JEdLYA.js";import"./useId-DB-RDK5Y.js";import"./useBackwardsCompatibleTheme-CO0ZmmTO.js";import"./ZIndexLayer-ChUJUaqX.js";import"./useAnimationId-Cs7J9c_D.js";import"./ActivePoints-D8XBSWMg.js";import"./Dot-BlUpubQM.js";import"./types-DTCaWYmj.js";import"./RegisterGraphicalItemId-C_gzfzaw.js";import"./GraphicalItemClipPath-D1JmIf9k.js";import"./SetGraphicalItem-CVWA9VpP.js";import"./getRadiusAndStrokeWidthFromDot-D9zL_eAZ.js";import"./ActiveShapeUtils-DE2-A3Sf.js";import"./Curve-A3JiVHPQ.js";import"./step-CDAaK65-.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-_eCurvUA.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
