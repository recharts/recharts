import{R as r}from"./iframe-CFiYbyYn.js";import{R as c}from"./zIndexSlice-CfnjI_J7.js";import{C as d}from"./ComposedChart-AVSPcUwt.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CuP0JV9e.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D5Jgld6M.js";import"./throttle-C32GRzNi.js";import"./index-BgXu95am.js";import"./index-D8Rvzs5o.js";import"./RechartsWrapper-DnJ3Lnfw.js";import"./axisSelectors-ZJRlSH7p.js";import"./polarAxisSelectors-C73NV54c.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BQZOe2uw.js";import"./index-CeN26RCh.js";import"./index-B2eeTemT.js";import"./renderedTicksSlice-DEUuAR6D.js";import"./index-CTcpyI6-.js";import"./fillDefinitions-DQn9hMkI.js";import"./CartesianChart-BI7GK76V.js";import"./chartDataContext-CxLvIdoH.js";import"./CategoricalChart-CA4HG4Fk.js";import"./Layer-BfyvsZKx.js";import"./dataEntryStyles-CEdPYhQz.js";import"./Label-BO6v_mC5.js";import"./Text-BvA3DBG3.js";import"./ZIndexLayer-BDfLEL3A.js";import"./ActivePoints-Dj8mj1pc.js";import"./Dot-DG45E_Jc.js";import"./types-BgyTt6P7.js";import"./activeStyles-P0GMx-UH.js";import"./useAnimationId-BDSeKkxz.js";import"./Symbols-dPAJMo6f.js";import"./symbol-aLQJyVpc.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CGu2i_Hy.js";import"./getRadiusAndStrokeWidthFromDot-Ce32xTZu.js";import"./ActiveShapeUtils-CsNOZNpW.js";import"./Curve-CKgWn92F.js";import"./step-DxzKinYr.js";import"./useEffectiveDataKey-Dy2gs8KS.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
