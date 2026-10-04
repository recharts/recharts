import{R as r}from"./iframe-F-DUQmzx.js";import{R as c}from"./zIndexSlice-B0XgO37h.js";import{C as d}from"./ComposedChart-BciQM212.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CZf2i_K6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DpMrsvGt.js";import"./index-CK09KYl6.js";import"./index-1Q76C7eb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-54NLwGe7.js";import"./isWellBehavedNumber-DyMPBI8-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWiWdscD.js";import"./axisSelectors-DjOC7WMp.js";import"./d3-scale-DSOPMY6A.js";import"./index-CT1gIdoP.js";import"./index-EzdhIVAG.js";import"./renderedTicksSlice-COhWqkvU.js";import"./index-DM4X_zuN.js";import"./CartesianChart-DpAEY0eR.js";import"./chartDataContext-CwixCkf7.js";import"./CategoricalChart-DjizJXcn.js";import"./Layer-BrEHje-t.js";import"./AnimatedItems-TRoMQ37Y.js";import"./Label-B3Zz6TZ9.js";import"./Text-CORYS8dP.js";import"./DOMUtils-DPU74_Ri.js";import"./useId-CqYFbuGw.js";import"./useBackwardsCompatibleTheme-BfIpGN6N.js";import"./ZIndexLayer-G7VYzfve.js";import"./useAnimationId-BjShbhcH.js";import"./ActivePoints-W2_hwO6R.js";import"./Dot-DGu6gs3Q.js";import"./types-DvcDlHh9.js";import"./RegisterGraphicalItemId-osvmWAHd.js";import"./GraphicalItemClipPath-Ts1JrvmG.js";import"./SetGraphicalItem-Dh88RhAB.js";import"./getRadiusAndStrokeWidthFromDot-C7HQlZ5t.js";import"./ActiveShapeUtils-BBGLeya9.js";import"./Curve-Bx9XDM_v.js";import"./step-B5u9AGFi.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Co6jLI_S.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
