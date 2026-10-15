import{R as r}from"./iframe-B0MhV86h.js";import{R as c}from"./zIndexSlice-JhYmjiRs.js";import{C as d}from"./ComposedChart-Bh5N048-.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BVl8T08g.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BiG1uYFs.js";import"./index-I3GMq-pj.js";import"./index-R2Dh29NI.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B7HpHAm5.js";import"./isWellBehavedNumber-Cfafrgq8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_6wPZYR.js";import"./axisSelectors-CrrgMfKB.js";import"./d3-scale-CR10n00v.js";import"./index-ZJn3ELdV.js";import"./index-By5cImAN.js";import"./renderedTicksSlice-DHx9pPwr.js";import"./index-DmgedYxy.js";import"./CartesianChart-plZLO0XN.js";import"./chartDataContext-DI3_2rek.js";import"./CategoricalChart-BLaINhxr.js";import"./Layer-TaFZ6cEO.js";import"./activeStyles-DryRBlXh.js";import"./Label-DtBWxW0-.js";import"./Text-03E8A-Bw.js";import"./pageBackground-qvgCZBpb.js";import"./useId-BhVD5AMJ.js";import"./useBackwardsCompatibleTheme-DIfSIBwo.js";import"./ZIndexLayer-OiTLfYLd.js";import"./useAnimationId-CudNOC-V.js";import"./dataEntryStyles--cHZ_1nv.js";import"./ActivePoints-DTScXn02.js";import"./Dot-Btw3znVN.js";import"./types-BhM_mLRi.js";import"./GraphicalItemClipPath-B8x00Z-R.js";import"./SetGraphicalItem-BAdS99gT.js";import"./getRadiusAndStrokeWidthFromDot-B_7w4E3e.js";import"./ActiveShapeUtils-BLQr2vhf.js";import"./Curve-BkmryfS-.js";import"./step-D52lSMQ-.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-DkWEBp9n.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
