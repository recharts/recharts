import{R as r}from"./iframe-CwjnBdPJ.js";import{R as c}from"./zIndexSlice-DCK0oMjs.js";import{C as d}from"./ComposedChart-DEjJaHPL.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D8HxjyG7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-NOTipQ48.js";import"./index-Dd-h_ysm.js";import"./index-BjJumBGZ.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CiT0yrYA.js";import"./isWellBehavedNumber-UCnnTJQS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DssFoHZN.js";import"./axisSelectors-yVNmvCZQ.js";import"./d3-scale-B8EUKI5D.js";import"./index-CmMtCp92.js";import"./index-D5HInSgc.js";import"./renderedTicksSlice-dymauRC4.js";import"./index-Bgw_dChb.js";import"./CartesianChart-CAYSFbYO.js";import"./chartDataContext-Caz9nZMs.js";import"./CategoricalChart-C1fI2_Bl.js";import"./Layer-mPZxMc5S.js";import"./activeStyles-Dq37JbhA.js";import"./Label-DUPKJ4wq.js";import"./Text-CkJvnqMb.js";import"./pageBackground-CPZsdU6n.js";import"./useId-LApi4aFA.js";import"./useBackwardsCompatibleTheme-BaLhcLyB.js";import"./ZIndexLayer-Cf72LToz.js";import"./dataEntryStyles-MXIeXXjf.js";import"./useAnimationId-CsReVCtf.js";import"./ActivePoints-B-LCBBeH.js";import"./Dot-j5DVnIjt.js";import"./types-Bf6WAwuG.js";import"./RegisterGraphicalItemId-D_0UWgiO.js";import"./GraphicalItemClipPath-BaNkPOAO.js";import"./SetGraphicalItem-r-YteBa3.js";import"./getRadiusAndStrokeWidthFromDot-B0N-TNeB.js";import"./ActiveShapeUtils-5uA1VhfG.js";import"./Curve-_mg3fY-T.js";import"./step-_ilYVkYV.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-Cb7tOd6S.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
