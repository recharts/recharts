import{R as r}from"./iframe-EacBJx3u.js";import{R as c}from"./zIndexSlice-BiNX82M2.js";import{C as d}from"./ComposedChart-DLV9kOGF.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CXTOrEro.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CQWyIvYS.js";import"./index-zONtSjtR.js";import"./index-Cp5XPxNK.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Pp64jnNu.js";import"./isWellBehavedNumber-cllAzHLG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DvnaJvMy.js";import"./axisSelectors-BsKbaT3c.js";import"./d3-scale-XN8I2g_L.js";import"./index-Cjnu8Ghr.js";import"./index-DAXn18Z3.js";import"./renderedTicksSlice-Bi45b659.js";import"./index-BWFLwSJj.js";import"./CartesianChart-CpkU4zi_.js";import"./chartDataContext-6_AZEoRj.js";import"./CategoricalChart-DR3NAbyi.js";import"./Layer-BUsl6vHA.js";import"./AnimatedItems-CgPok0XL.js";import"./Label-DrX_jEaz.js";import"./Text-DusUwDRl.js";import"./DOMUtils-R4-PljPA.js";import"./useId-Cx3ryNMd.js";import"./useBackwardsCompatibleTheme-C878E-FF.js";import"./ZIndexLayer-CbjobkdE.js";import"./useAnimationId-BrvpB7V7.js";import"./ActivePoints-BKu6KFOZ.js";import"./Dot-Dlf7mAE0.js";import"./types-CDt3wtpt.js";import"./RegisterGraphicalItemId-C6xi7qpR.js";import"./GraphicalItemClipPath-DdpslyMR.js";import"./SetGraphicalItem-DIVfOwKJ.js";import"./getRadiusAndStrokeWidthFromDot-D1gfmqoH.js";import"./ActiveShapeUtils-D1Q_UPVj.js";import"./Curve-DXkxZuR3.js";import"./step--LIF_hlk.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-PgG_6CLw.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
