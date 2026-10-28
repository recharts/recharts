import{R as r}from"./iframe-BmTk4yvk.js";import{R as c}from"./zIndexSlice-Yn5j7TCZ.js";import{C as d}from"./ComposedChart-Bc1PW_h6.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DDX-1dA6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cn0PCCle.js";import"./throttle-C169ds0A.js";import"./index-iOVTbJVR.js";import"./index-DmmaZxkJ.js";import"./RechartsWrapper-C4oIzQNw.js";import"./axisSelectors-jta8-9EA.js";import"./polarAxisSelectors-DyW5Xsuk.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B_DRoaP4.js";import"./index-D6yCXLHc.js";import"./index-D-9h2rsp.js";import"./renderedTicksSlice-Dl_orwkE.js";import"./index-DOadfo9X.js";import"./CartesianChart-Fep-b6_D.js";import"./ZIndexPortal-CWm5UVGf.js";import"./CategoricalChart-D92RpbLO.js";import"./Layer-DW7OR7eh.js";import"./LabelList-DAIqpE2b.js";import"./Label-CYaQfkAd.js";import"./Text-U4GGp_wV.js";import"./pageBackground-QX1GlboQ.js";import"./ZIndexLayer-DvmFXfZN.js";import"./ActivePoints-D2fdi6S1.js";import"./Dot-DCITuPps.js";import"./types-BwQb0UT4.js";import"./activeStyles-PiE_qWsW.js";import"./useAnimationId-Crx209Lx.js";import"./dataEntryStyles-D6I3YMTN.js";import"./Symbols-C5McylxL.js";import"./symbol-DPYOxqZZ.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DFIrza8W.js";import"./getRadiusAndStrokeWidthFromDot-K0OFVwh2.js";import"./ActiveShapeUtils-DOogD9OD.js";import"./Curve-DHjJHUtL.js";import"./step-X3pWD_rY.js";import"./useEffectiveDataKey-B__g_9Jm.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
