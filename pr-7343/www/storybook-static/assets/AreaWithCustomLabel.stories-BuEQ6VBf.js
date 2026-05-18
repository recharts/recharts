import{e as t}from"./iframe-CuZPGzPC.js";import{g as c}from"./arrayEqualityCheck-0ArgbeWo.js";import{C as d}from"./ComposedChart-O8LQGjYj.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-BT9ud0uj.js";import{R as u}from"./RechartsHookInspector-zRKZmo0i.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bk_EQyDM.js";import"./immer-YqkYbV94.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B6XKG7Lc.js";import"./index-Cvyduo3w.js";import"./hooks-CtSYEaPh.js";import"./axisSelectors-DJmfaPi-.js";import"./d3-scale-DFAjRXo_.js";import"./zIndexSlice-BDdD7Z6D.js";import"./renderedTicksSlice-CZA7_M_S.js";import"./CartesianChart-DorQ2AK5.js";import"./chartDataContext-B0jZsWqF.js";import"./CategoricalChart-BXlLUI69.js";import"./Curve-8oAwKTPO.js";import"./types-DTMUikhY.js";import"./step-CqiKd4MR.js";import"./Layer-D8WyiXT0.js";import"./ReactUtils-G6cK3lSP.js";import"./Label-zspUhklU.js";import"./Text-zA_9GeJ1.js";import"./DOMUtils-BikjfFYx.js";import"./ZIndexLayer-B4dYONTA.js";import"./ActivePoints-3HxEsaWV.js";import"./Dot-BETACs3N.js";import"./RegisterGraphicalItemId-Bjl2IzLe.js";import"./GraphicalItemClipPath-DUbxYwTC.js";import"./SetGraphicalItem-B2q_jALm.js";import"./useAnimationId-CevvSFVo.js";import"./getRadiusAndStrokeWidthFromDot-CXvTaXSz.js";import"./graphicalItemSelectors-C9V2BJim.js";import"./index-D_0WpHmK.js";import"./ChartSizeDimensions-Dt2wwaf3.js";import"./OffsetShower-D-8ojbsk.js";import"./PlotAreaShower-D985qYJk.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
