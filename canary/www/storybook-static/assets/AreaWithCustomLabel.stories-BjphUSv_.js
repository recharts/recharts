import{R as r}from"./iframe-Knpgl7bH.js";import{R as c}from"./zIndexSlice-D_JvDPdC.js";import{C as d}from"./ComposedChart-Bz1qQazH.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C9nXx10P.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-E9uQbFMh.js";import"./throttle-CxSZxpUT.js";import"./index-CMcZZbu7.js";import"./index-flTgedm9.js";import"./RechartsWrapper-RFuLYV8r.js";import"./axisSelectors-DzWAhEt3.js";import"./polarAxisSelectors-_ossNi2Y.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-loN--ZL0.js";import"./index-DBy5LZ5m.js";import"./index-CtQ1gC2H.js";import"./renderedTicksSlice-BhGylDYr.js";import"./index-DCjquko5.js";import"./fillDefinitions-D-i4EmzR.js";import"./CartesianChart-BRDQdhrJ.js";import"./chartDataContext-DMJoTbMZ.js";import"./CategoricalChart-BP24IEWh.js";import"./getRadiusAndStrokeWidthFromDot-OQ1wYRa8.js";import"./Layer-BPxKddK_.js";import"./dataEntryStyles-CP1LR4vd.js";import"./Label-CUqt0NPv.js";import"./Text-2mzzLjyY.js";import"./ZIndexLayer-B7sLboyu.js";import"./ActivePoints-CLrwMv3j.js";import"./Dot-B0z7ItJf.js";import"./types-TSpqzzom.js";import"./activeStyles-Dx-Bb5mv.js";import"./useAnimationId-sq4gt-Rn.js";import"./Symbols-DbPd2MPF.js";import"./symbol-D5IcYaCj.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-CJ2jMQXm.js";import"./ActiveShapeUtils-DmSfMRR5.js";import"./Curve-CoppqT_1.js";import"./step-CX6BMVFF.js";import"./useEffectiveDataKey-DbJ28nvU.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
