import{R as r}from"./iframe-V0uWMpm8.js";import{R as c}from"./zIndexSlice-DUX4TIf3.js";import{C as d}from"./ComposedChart-BN51dTxx.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CJKTmNrG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CmD5MtuF.js";import"./index-D_MUhraT.js";import"./index-DPqbft9D.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-aKGdeQK0.js";import"./isWellBehavedNumber-MEUC6Th_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CCLf8n2o.js";import"./axisSelectors-SQHKz4ZO.js";import"./d3-scale-BJHPeQPf.js";import"./index-kjeSN6uv.js";import"./index-3fJcv3y4.js";import"./renderedTicksSlice-DZhKT_zE.js";import"./index-SLBi9NdX.js";import"./CartesianChart-DXwmQtN1.js";import"./chartDataContext-CQKtni77.js";import"./CategoricalChart-zmhxTVhd.js";import"./Layer--mIrdw0x.js";import"./AnimatedItems-BOhMHwpv.js";import"./Label-2hyP-tsc.js";import"./Text-CDsr0dRv.js";import"./DOMUtils-BW4dN_KI.js";import"./useId--nrsw05H.js";import"./useBackwardsCompatibleTheme-CEplzgd4.js";import"./ZIndexLayer-DivbHHVg.js";import"./useAnimationId-Dtpy8skx.js";import"./ActivePoints-BYb_Gd1q.js";import"./Dot-BU72Jr9Q.js";import"./types-CDLzu-PR.js";import"./RegisterGraphicalItemId-XrZ7XOK-.js";import"./GraphicalItemClipPath-B0v9QHui.js";import"./SetGraphicalItem-DNGP3yw2.js";import"./getRadiusAndStrokeWidthFromDot-Bet3JchB.js";import"./ActiveShapeUtils-CaWetUUl.js";import"./Curve-Dbv7OhLZ.js";import"./step-Z9qPbZSL.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BcaMYi1E.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
