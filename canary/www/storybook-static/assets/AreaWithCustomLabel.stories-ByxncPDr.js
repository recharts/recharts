import{R as r}from"./iframe-DJb0mK8M.js";import{R as c}from"./zIndexSlice-CT0NLGnJ.js";import{C as d}from"./ComposedChart-CuzfZC2T.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B5d_M_bf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BS7HrNsT.js";import"./index-CM4XLoJ2.js";import"./index-DkIcBYOu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C1NQQxfw.js";import"./isWellBehavedNumber-BNoJVovK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cglq1y_f.js";import"./axisSelectors-E250IIX0.js";import"./d3-scale-BU1MyCto.js";import"./index-Co9bt_zj.js";import"./index-BZmySJQF.js";import"./renderedTicksSlice-CwZjK2uF.js";import"./index-CyzL3WIR.js";import"./CartesianChart-DJ8n3cc1.js";import"./chartDataContext-CJdXqT5i.js";import"./CategoricalChart-Dsw_Culz.js";import"./Layer-DK2FwCPg.js";import"./activeStyles-DMsULg9O.js";import"./Label-BzZymjIq.js";import"./Text-COb6PIBf.js";import"./pageBackground-CexaD8jP.js";import"./useId-BX-mSSik.js";import"./useBackwardsCompatibleTheme-CKzY57lx.js";import"./ZIndexLayer-DD8rlV_m.js";import"./useAnimationId-CFtssWv7.js";import"./dataEntryStyles-DWwC517V.js";import"./ActivePoints-CCNXmb9c.js";import"./Dot--GGfWb34.js";import"./types-B-rYYW-g.js";import"./GraphicalItemClipPath-BFBWrIDQ.js";import"./SetGraphicalItem-BBlb6zhf.js";import"./getRadiusAndStrokeWidthFromDot-9uxOnNFL.js";import"./ActiveShapeUtils-s8ySMG5_.js";import"./Curve-Byf9oq4a.js";import"./step-Bi1Gxitb.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BCzrZ4XH.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
