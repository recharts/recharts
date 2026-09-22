import{R as r}from"./iframe-D0zbLhxA.js";import{R as c}from"./zIndexSlice-CWkdbIA2.js";import{C as d}from"./ComposedChart-Bxco2poZ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Bd6pxOca.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B_CESfsw.js";import"./index-88DQaVXO.js";import"./index-CyOzo8aY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BgsmPYXb.js";import"./isWellBehavedNumber-x1jcTYzd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BY5Xz_58.js";import"./axisSelectors-BlTNsS6D.js";import"./d3-scale-DfMtHGNT.js";import"./index-BWHvlcOR.js";import"./index-Blp0C-1x.js";import"./renderedTicksSlice-DXlRaIPl.js";import"./index-Bnqxj0FR.js";import"./CartesianChart-BS4vd5Ws.js";import"./chartDataContext-CXCNMTYE.js";import"./CategoricalChart-0fndcTvE.js";import"./Layer-CmDCK7Pe.js";import"./AnimatedItems-Wcsxci2q.js";import"./Label-BXZW4D8v.js";import"./Text-_UZJg8Mt.js";import"./DOMUtils-CI9OljrR.js";import"./useId-DQM9uYad.js";import"./useBackwardsCompatibleTheme-BiiWRDQN.js";import"./ZIndexLayer-BARNP0Xd.js";import"./useAnimationId-DmbXEcsZ.js";import"./ActivePoints-EMJbfe9W.js";import"./Dot-Dj6uRf99.js";import"./types-CtSuVyzs.js";import"./RegisterGraphicalItemId-FqWIkkm7.js";import"./GraphicalItemClipPath-CTIN6h-2.js";import"./SetGraphicalItem-oTDI8Dya.js";import"./getRadiusAndStrokeWidthFromDot-CxIU_DtO.js";import"./ActiveShapeUtils-BN8uTuPe.js";import"./Curve-DcMb9zNQ.js";import"./step-BSEqRnvY.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Bpqle07f.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
