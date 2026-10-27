import{R as r}from"./iframe-C-1IryXX.js";import{R as c}from"./zIndexSlice-fsCRj6jn.js";import{C as d}from"./ComposedChart-ldhMDYwV.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-tWUJBtE3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BhlxPQQ0.js";import"./throttle-_r7dS2f6.js";import"./index-D_guE_NV.js";import"./index-BpW2h4nW.js";import"./RechartsWrapper-Bb_GJAnC.js";import"./axisSelectors-DnbooZ92.js";import"./polarAxisSelectors-nNfiNjC3.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CK0ZBavL.js";import"./index-BM9qHJ3l.js";import"./index-CaHSXMyC.js";import"./renderedTicksSlice-B4PG9UaR.js";import"./index-BbeXMPlB.js";import"./CartesianChart-X1Ss8Xb_.js";import"./ZIndexPortal-D1pWS7G9.js";import"./CategoricalChart-CCP7izw9.js";import"./Layer-BY_4_n1M.js";import"./LabelList-BgJAhVhH.js";import"./Label-BTNrgHMM.js";import"./Text-bsivD33T.js";import"./pageBackground-BsKy__Zx.js";import"./ZIndexLayer-DcusPv6z.js";import"./dataEntryStyles-RoHSwMuf.js";import"./ActivePoints-Kxn86qrL.js";import"./Dot-DKVTZ3_d.js";import"./types-Ca1J50vn.js";import"./activeStyles-DZ3GRzLP.js";import"./useAnimationId-B4AGcQCE.js";import"./Symbols-DkSC4tBr.js";import"./symbol-D09AuR3g.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-BAsbW75f.js";import"./SetGraphicalItem-DzD-3glG.js";import"./getRadiusAndStrokeWidthFromDot-CSG42cOl.js";import"./ActiveShapeUtils-B19_Z8K8.js";import"./Curve-BZP4AtoJ.js";import"./step-D97QNVl7.js";import"./useEffectiveDataKey-B3UErnsT.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
