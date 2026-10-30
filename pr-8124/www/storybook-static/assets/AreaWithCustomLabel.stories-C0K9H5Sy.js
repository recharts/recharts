import{R as r}from"./iframe-SPJaGn0F.js";import{R as c}from"./zIndexSlice-nIWAtr6b.js";import{C as d}from"./ComposedChart-CmUNzOx5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Cjp3SIlM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DgTytEg2.js";import"./throttle-Cb7coFKv.js";import"./index-BiFHN7g6.js";import"./index-DUJEB6Vl.js";import"./RechartsWrapper-DA_3WzAb.js";import"./axisSelectors-BV5QtOCC.js";import"./polarAxisSelectors-CIAIQYnO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-ChAd5Ihl.js";import"./index-U_F_U_yW.js";import"./index-B2XfpK0R.js";import"./renderedTicksSlice-CknOQqZ1.js";import"./index-Bl846mwt.js";import"./CartesianChart-DHKYKaYX.js";import"./ZIndexPortal-zVY5zLCl.js";import"./CategoricalChart-CWkGyQY4.js";import"./Layer-GoN2yHWA.js";import"./LabelList-BeGqiY0d.js";import"./Label-COXn0L8P.js";import"./Text-BYUbuGtp.js";import"./DOMUtils-BDkhG4Mf.js";import"./ZIndexLayer-CuxzF6Ru.js";import"./ActivePoints-BWJOXnL8.js";import"./Dot-CJO9q9fw.js";import"./types-DJ6_4iq2.js";import"./activeStyles-BViWZA4B.js";import"./useAnimationId-d7QVaKqG.js";import"./dataEntryStyles-DAzBzzsr.js";import"./Symbols-CUkMeiyc.js";import"./symbol-DauxKq8Z.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-B-k8mUay.js";import"./getRadiusAndStrokeWidthFromDot-DYuKOPnc.js";import"./ActiveShapeUtils-zpveVZ8b.js";import"./Curve-CQDBLSXd.js";import"./step-g9-z_5ZT.js";import"./fillDefinitions-CRqjOhTR.js";import"./useEffectiveDataKey-PspZ4BaC.js";import"./themeFill-BkM1x4hA.js";const st={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},nt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,nt as __namedExportsOrder,st as default};
