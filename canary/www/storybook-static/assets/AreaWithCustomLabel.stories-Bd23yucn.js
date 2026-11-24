import{R as r}from"./iframe-Be1JwYLB.js";import{R as c}from"./zIndexSlice-CgSPm-wc.js";import{C as d}from"./ComposedChart-aW1EvLk8.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Dhh1vxz2.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-vtDVNmS9.js";import"./get-CjriyByo.js";import"./throttle-DjxQctYo.js";import"./index-ueUT9Xj6.js";import"./index-Bkv44dvd.js";import"./RechartsWrapper-BztyyuwI.js";import"./axisSelectors-rS5FKSRX.js";import"./polarAxisSelectors-petp68tp.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C_iM0uvU.js";import"./index-Dg9s7T6j.js";import"./index-m2EJzzBW.js";import"./renderedTicksSlice-DiKCMxPA.js";import"./index-B-llFuKq.js";import"./fillDefinitions-Be1jCOoc.js";import"./CartesianChart-C7B4dY_Y.js";import"./chartDataContext-DDExTKyo.js";import"./CategoricalChart-C-aFkl_F.js";import"./getRadiusAndStrokeWidthFromDot-B_Y3WA9D.js";import"./Layer-L6JSSqUT.js";import"./dataEntryStyles-BkzBQ6X2.js";import"./Label-Cm4G9M_4.js";import"./Text-BqUDv62U.js";import"./ZIndexLayer-ByAD4IkB.js";import"./ActivePoints-BUYZbsLY.js";import"./Dot-C-gvMhjL.js";import"./types-DiTos3ch.js";import"./activeStyles-CdOMMJXp.js";import"./useAnimationId-DZ7icYC0.js";import"./Symbols-34MkMdpP.js";import"./symbol-CfD9aVNT.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-CZx3vw8X.js";import"./ActiveShapeUtils-C6jNLipX.js";import"./Curve-DQRadQHz.js";import"./step-Dq96qlXf.js";import"./useEffectiveDataKey-dwd_hOHx.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
