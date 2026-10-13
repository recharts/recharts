import{R as r}from"./iframe-BPWq5wK1.js";import{R as c}from"./zIndexSlice--l6A9Cgd.js";import{C as d}from"./ComposedChart-eM1OIXHR.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DFrjdrGo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BczP5WrX.js";import"./index-CBsqFzOA.js";import"./index-CMYr15XQ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DC_merMH.js";import"./isWellBehavedNumber-DPMDsRl8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DsTQCipn.js";import"./axisSelectors-B8iXPLx4.js";import"./d3-scale-t9m5JmsQ.js";import"./index-QtD_rERt.js";import"./index-CIFWdTWa.js";import"./renderedTicksSlice-B7Vn66iT.js";import"./index-BlcYejsd.js";import"./CartesianChart-DDcEhH92.js";import"./chartDataContext-D-s48IOU.js";import"./CategoricalChart-D94cXkjn.js";import"./Layer-CeC_x2uD.js";import"./activeStyles-Fhy11XH6.js";import"./Label-DfIBtU5a.js";import"./Text-Dv2kvEh7.js";import"./pageBackground-BKi1BKrf.js";import"./useId-BNAqUaya.js";import"./useBackwardsCompatibleTheme-DmujFuGs.js";import"./ZIndexLayer-Du5K3aCJ.js";import"./useAnimationId-37s3ARsg.js";import"./dataEntryStyles-3NXA5k2R.js";import"./ActivePoints-BfMx66PR.js";import"./Dot-C_XJnXRn.js";import"./types-BIKEZWlZ.js";import"./GraphicalItemClipPath-DqP6JkJs.js";import"./SetGraphicalItem-C-FePfke.js";import"./getRadiusAndStrokeWidthFromDot-CKPkLz7f.js";import"./ActiveShapeUtils-DkTWf27X.js";import"./Curve-hjGlvn7z.js";import"./step-1i9O5IHq.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-CfXPni2y.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
