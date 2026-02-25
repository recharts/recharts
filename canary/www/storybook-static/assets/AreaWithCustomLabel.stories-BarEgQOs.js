import{e as t}from"./iframe-DOwSMESw.js";import{R as c}from"./arrayEqualityCheck-CX9-bfYH.js";import{C as d}from"./ComposedChart-DebGIEfT.js";import{A as l}from"./Area-CdvyzIAs.js";import{R as h}from"./RechartsHookInspector-CcCJcHZ5.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ChqUwM3U.js";import"./immer-ZyDpTiiy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ls6tVJyv.js";import"./index-BBfb_97C.js";import"./hooks-xQD_-akz.js";import"./axisSelectors-BKSMdbwV.js";import"./d3-scale-D4rgCaup.js";import"./zIndexSlice-DitFxlYL.js";import"./renderedTicksSlice-B9YC84oJ.js";import"./CartesianChart-DFwJmcFp.js";import"./chartDataContext-CzK82F7Z.js";import"./CategoricalChart-CxUtgmSG.js";import"./Curve-HyoTL5em.js";import"./types-BVuvkN0T.js";import"./step-CPI5XPf7.js";import"./Layer-Dw0puBgf.js";import"./ReactUtils-D4p-v0tr.js";import"./Label-CGJJW7mt.js";import"./Text-DHnTXj9j.js";import"./DOMUtils-DbGofJNd.js";import"./ZIndexLayer-Dk3cu7q_.js";import"./ActivePoints-Bwmmy_Xm.js";import"./Dot-aBSUYWpk.js";import"./RegisterGraphicalItemId-BYUuyceh.js";import"./GraphicalItemClipPath-CYCx10_G.js";import"./SetGraphicalItem-CB9uDBjU.js";import"./useAnimationId-B99eNrnj.js";import"./getRadiusAndStrokeWidthFromDot-BkGX9HE7.js";import"./graphicalItemSelectors-DvSC0wdE.js";import"./index-aBvahWCN.js";import"./ChartSizeDimensions-BCHrYjTL.js";import"./OffsetShower-DAQHvvGL.js";import"./PlotAreaShower-CtS1URyh.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
