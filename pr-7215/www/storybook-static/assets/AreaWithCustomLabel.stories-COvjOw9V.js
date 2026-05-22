import{e as t}from"./iframe-B82q9u-Y.js";import{g as c}from"./arrayEqualityCheck-CKCQU2qV.js";import{C as d}from"./ComposedChart-CBqvY07d.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-sJLufpVq.js";import{R as u}from"./RechartsHookInspector-z9cebFjB.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-g5aDd7Yf.js";import"./immer-WiujJWUS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CBADlju4.js";import"./index-DXyPKPXc.js";import"./hooks-Sri1sPLr.js";import"./axisSelectors-DXfv2Drb.js";import"./d3-scale-B8FZewzC.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-I2t58hxh.js";import"./renderedTicksSlice-CInncnPk.js";import"./CartesianChart-5ApupumH.js";import"./chartDataContext-D6HVVC2S.js";import"./CategoricalChart-DKDPW_6L.js";import"./Layer-C2GvyuKR.js";import"./AnimatedItems-COwEU_uD.js";import"./Label-yJEcHIim.js";import"./Text-DlTF1_pF.js";import"./DOMUtils-CfA92o7z.js";import"./ZIndexLayer-DTDC0Rqe.js";import"./useAnimationId-DLlegLLP.js";import"./ActivePoints-BsAXJsSc.js";import"./Dot-Ca9kKcpV.js";import"./types-BjP-coDb.js";import"./RegisterGraphicalItemId-kL3h8ct-.js";import"./GraphicalItemClipPath-BpOAg0aH.js";import"./SetGraphicalItem-BoZe1188.js";import"./getRadiusAndStrokeWidthFromDot-Dgtb5g0j.js";import"./ActiveShapeUtils-D-OS5cJ_.js";import"./Curve-BwRgum1p.js";import"./step-BxVbCn_a.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-_7iDSOmF.js";import"./index-dYimQAlj.js";import"./ChartSizeDimensions-BGSkMu5K.js";import"./OffsetShower-DzS61Pg9.js";import"./PlotAreaShower-uXu1OgRK.js";const nt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:e,y:o}=n;return t.createElement("text",{key:s,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},r={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var m,a,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const st=["CustomizedLabel"];export{r as CustomizedLabel,st as __namedExportsOrder,nt as default};
