import{R as r}from"./iframe-Bu5r_UoW.js";import{R as c}from"./zIndexSlice-BoZi0EKL.js";import{C as d}from"./ComposedChart-CGLPX3yw.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-L-HhY4Bp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BDfy-Y9N.js";import"./throttle-BpoLTe0M.js";import"./index-CP6mH--B.js";import"./index-DnT_Ya4A.js";import"./RechartsWrapper-BqfNjaYX.js";import"./axisSelectors-Bhk2XSO9.js";import"./polarAxisSelectors-n0CqqZCi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DImarRMe.js";import"./index-pIfafh94.js";import"./index-C9YbC-S9.js";import"./renderedTicksSlice-CEkp7Ia_.js";import"./index-D8NerNAW.js";import"./fillDefinitions-BYA-kAp9.js";import"./CartesianChart-CmgmeyYa.js";import"./chartDataContext-epTHr0-d.js";import"./CategoricalChart-DkHDaSrl.js";import"./Layer-DFVqeIzd.js";import"./dataEntryStyles-C66iRC8T.js";import"./Label-0RpFXi-A.js";import"./Text-Whpl_RQm.js";import"./ZIndexLayer-BpE6rRDX.js";import"./ActivePoints-elCSEGa9.js";import"./Dot-Bi1b_c85.js";import"./types-Bn2H5HlC.js";import"./activeStyles-8B2_TUAk.js";import"./useAnimationId-BnIWNy46.js";import"./Symbols-Cn0dRiyA.js";import"./symbol-DRsT_y42.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CpMZVpWB.js";import"./getRadiusAndStrokeWidthFromDot-95VsLoAR.js";import"./ActiveShapeUtils-BGxbUkvX.js";import"./Curve-CsvMXB6L.js";import"./step-D2ytnSwm.js";import"./useEffectiveDataKey-BxhAq3wv.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
