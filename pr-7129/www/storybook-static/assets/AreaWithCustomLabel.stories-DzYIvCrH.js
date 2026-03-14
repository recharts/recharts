import{e as t}from"./iframe-3667Tvz2.js";import{R as c}from"./arrayEqualityCheck-D9OvKJwD.js";import{C as d}from"./ComposedChart-DwAm-CG0.js";import{A as l}from"./Area-C363lx5N.js";import{R as h}from"./RechartsHookInspector-CJCnB7_4.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BtuJUOf7.js";import"./immer-UKt74SqS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-oIAnzkqM.js";import"./index-C4SUCtnx.js";import"./hooks-BZsQuy7Q.js";import"./axisSelectors-DQHNBIMP.js";import"./d3-scale-DGzXDIH7.js";import"./zIndexSlice-T5ACl1fd.js";import"./renderedTicksSlice-AmLe9sEW.js";import"./CartesianChart-DujR4c01.js";import"./chartDataContext-DwqmBR6M.js";import"./CategoricalChart-BIICkzoQ.js";import"./Curve-BaNFvaPx.js";import"./types-B-N1LhIG.js";import"./step-DREQNBhH.js";import"./Layer-DkCxZ1Nm.js";import"./ReactUtils-BGYookdr.js";import"./Label-BZ-HO-n4.js";import"./Text-BJUXCfBk.js";import"./DOMUtils-CXQ8jzVY.js";import"./ZIndexLayer-DQkUzdJa.js";import"./ActivePoints-uWw7uTV8.js";import"./Dot-CliWMADJ.js";import"./RegisterGraphicalItemId-6KUqIGYl.js";import"./GraphicalItemClipPath-B2jRUZRX.js";import"./SetGraphicalItem-9InqSUgs.js";import"./useAnimationId-QOY8B5bM.js";import"./getRadiusAndStrokeWidthFromDot-knWG_owO.js";import"./graphicalItemSelectors-DVTwV7Bz.js";import"./index-BoqoSvrt.js";import"./ChartSizeDimensions-rVAYYRrn.js";import"./OffsetShower-DYHCblSP.js";import"./PlotAreaShower-BlEzOlOg.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
