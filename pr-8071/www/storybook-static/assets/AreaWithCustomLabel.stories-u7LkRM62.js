import{R as r}from"./iframe-B1_QfljJ.js";import{R as c}from"./zIndexSlice-Cb-_WhSJ.js";import{C as d}from"./ComposedChart-CmygcsGV.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DIfeSKPK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D7IvOyg1.js";import"./index-C0R_VbD9.js";import"./index-C4Bv3TLI.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BKBpJeVO.js";import"./isWellBehavedNumber-CjzDakCh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-eNWWZf5L.js";import"./axisSelectors-7XQKMXbV.js";import"./d3-scale-Ch4lSu5M.js";import"./index-DrIBMx-a.js";import"./index-PfBmA6Mj.js";import"./renderedTicksSlice-QhE759w-.js";import"./index-D_5ex_s0.js";import"./CartesianChart-0PUgz-fD.js";import"./chartDataContext-W36SsBCK.js";import"./CategoricalChart-Bnl3KIy2.js";import"./Layer-B_0rxCBF.js";import"./activeStyles-Cj23hm4O.js";import"./Label-Dq-PRmXE.js";import"./Text-l_2w-j-6.js";import"./pageBackground-C2L5RPBY.js";import"./useId-5cvDRGiM.js";import"./useBackwardsCompatibleTheme-Cn0U0gME.js";import"./ZIndexLayer-DCJHrufs.js";import"./dataEntryStyles-DFEzHfWh.js";import"./useAnimationId-g_gs6Adq.js";import"./ActivePoints-DeQ4AICV.js";import"./Dot-Dys0AMJj.js";import"./types-DbTvfnZ9.js";import"./RegisterGraphicalItemId-nMZsofRB.js";import"./SetGraphicalItem-BVP4iL4X.js";import"./getRadiusAndStrokeWidthFromDot-DrVK3vcj.js";import"./ActiveShapeUtils-DhsBwk0C.js";import"./Curve-BRi-m77E.js";import"./step-CRnCkLM-.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-FDkhhmBo.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
