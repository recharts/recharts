import{e as t}from"./iframe-BheSPRxC.js";import{R as c}from"./arrayEqualityCheck-DTJTJDIZ.js";import{C as d}from"./ComposedChart-CU5BXUNz.js";import{A as l}from"./Area-DWtwKcuT.js";import{R as h}from"./RechartsHookInspector-BuIPrOmw.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-YxfO8nVM.js";import"./immer-Bk3tlmFk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BReu-8p6.js";import"./index-BTAK_CzP.js";import"./hooks-D7thV8Yx.js";import"./axisSelectors-Bt_ndlyL.js";import"./d3-scale-Bi7kPPR-.js";import"./zIndexSlice-RIxi073z.js";import"./renderedTicksSlice-B7gUlO0Z.js";import"./CartesianChart-oljUKRjY.js";import"./chartDataContext-CTcUXfN7.js";import"./CategoricalChart-BxAT78Yw.js";import"./Curve-D5XGZpaq.js";import"./types-Ig8fwHS7.js";import"./step-BEEMHEX_.js";import"./Layer-Dnr25hkA.js";import"./ReactUtils-eBHsRDRZ.js";import"./Label-DvFgjn-2.js";import"./Text-BUur2DfR.js";import"./DOMUtils-qoxeJE6c.js";import"./ZIndexLayer-BR-xGhiB.js";import"./ActivePoints-Bsd3d-yb.js";import"./Dot-DYB5kbJj.js";import"./RegisterGraphicalItemId-CfZTXmBZ.js";import"./GraphicalItemClipPath-CyqMb0de.js";import"./SetGraphicalItem-vkl4WKoz.js";import"./useAnimationId-CA-fcZvu.js";import"./getRadiusAndStrokeWidthFromDot-BDUfg5jI.js";import"./graphicalItemSelectors-BKYERbNk.js";import"./index-NavELH2p.js";import"./ChartSizeDimensions-Dbu0-vjG.js";import"./OffsetShower-DiJ1X-2O.js";import"./PlotAreaShower-CtIhvInc.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
