import{R as r}from"./iframe-B0yo2V4n.js";import{R as c}from"./zIndexSlice-B7uClMUs.js";import{C as d}from"./ComposedChart-B_AnK-ab.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CN7C-jps.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CrsZu1Ef.js";import"./index-CksSbcNy.js";import"./index-CCtvozBT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C_-4-Tqn.js";import"./isWellBehavedNumber-CZXpTiYT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CQikX2jp.js";import"./axisSelectors-CMjYVwhk.js";import"./d3-scale-B4crR7Dq.js";import"./index-T1a_0V0g.js";import"./index-DKVx0AFW.js";import"./renderedTicksSlice-Boaz1NGF.js";import"./index-2BBeHhTL.js";import"./CartesianChart-DjmfdwhX.js";import"./chartDataContext-B2JeciGL.js";import"./CategoricalChart-BCaNllRk.js";import"./Layer-BkWM3RIH.js";import"./activeStyles-_C6RQVwk.js";import"./Label-CnUHNStt.js";import"./Text-CHF9ypYR.js";import"./pageBackground-0wikHvI2.js";import"./useId-BnV_tbx_.js";import"./useBackwardsCompatibleTheme-DI9J0y19.js";import"./ZIndexLayer-DLG58JCm.js";import"./useAnimationId-DO-aK-tu.js";import"./dataEntryStyles-CjubJGLE.js";import"./ActivePoints-ohc9ZXCs.js";import"./Dot-OL_y42KN.js";import"./types-L-bd4Nc-.js";import"./GraphicalItemClipPath-CMzZysYx.js";import"./SetGraphicalItem-Z-H48Tbu.js";import"./getRadiusAndStrokeWidthFromDot-BzPG4IYK.js";import"./ActiveShapeUtils-C0F7emTJ.js";import"./Curve-DRU8kykY.js";import"./step-BoSTRipl.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-Bupc-s0s.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
