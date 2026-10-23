import{R as r}from"./iframe-ByLAgMyT.js";import{R as c}from"./zIndexSlice-DbH_vqN6.js";import{C as d}from"./ComposedChart-CZJUN3bH.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-0xOBg2Cl.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CEah83BE.js";import"./index-Bd0XDIKz.js";import"./index-DQDYz7Kn.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-ZOEnIxye.js";import"./isWellBehavedNumber-ib3lWxb6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8hL2knQK.js";import"./axisSelectors-1NzaQeZW.js";import"./d3-scale-C7CraIkv.js";import"./index-BzVpSiBS.js";import"./index-Dm91Zbdm.js";import"./renderedTicksSlice-Rz2ip3G5.js";import"./index-DiiEfgcg.js";import"./CartesianChart-CKytCKi1.js";import"./chartDataContext-xQwTU35T.js";import"./CategoricalChart-CKR8_K54.js";import"./Layer-g3XAbIKO.js";import"./activeStyles-Dj4g-rEk.js";import"./Label-DiFVkyKf.js";import"./Text-K2cZEaeG.js";import"./pageBackground-CJjC7Pe6.js";import"./useId-N2SJ_s2K.js";import"./useBackwardsCompatibleTheme-CAGUGjI_.js";import"./ZIndexLayer-J8gq1KPk.js";import"./useAnimationId-CBnq7Z5z.js";import"./dataEntryStyles-Cy26GKXH.js";import"./ActivePoints-BaYU0Cf-.js";import"./Dot-C6LI6MNA.js";import"./types-B5PcYGv_.js";import"./GraphicalItemClipPath-Bv7X_kga.js";import"./SetGraphicalItem-BhbU4A3u.js";import"./getRadiusAndStrokeWidthFromDot-RbzC3joP.js";import"./ActiveShapeUtils-C4wijBbi.js";import"./Curve-CcWf2VYJ.js";import"./step-CewcAd9T.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-DILJl117.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
