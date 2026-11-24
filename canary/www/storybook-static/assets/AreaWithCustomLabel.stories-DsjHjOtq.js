import{R as r}from"./iframe-DFEJf-6F.js";import{R as c}from"./zIndexSlice-Bh4qmv0V.js";import{C as d}from"./ComposedChart-D1Kb8R-X.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-LL1QCni-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-e-IgV90n.js";import"./get-CjriyByo.js";import"./throttle-t_Ovqcxg.js";import"./index-UCW2HZhy.js";import"./index-BocwXP9h.js";import"./RechartsWrapper-CjcGVgxW.js";import"./axisSelectors-mOjibS9Y.js";import"./polarAxisSelectors-Bm_q4tEf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-tiUNr7pP.js";import"./index-CuX-9nTc.js";import"./index-BaTm8cby.js";import"./renderedTicksSlice-CyR8q6N_.js";import"./index-B-weJfXM.js";import"./fillDefinitions-CQ2sIcKf.js";import"./CartesianChart-Dsv7MZH7.js";import"./chartDataContext-DG3vMJ0c.js";import"./CategoricalChart-BE4FjrpO.js";import"./getRadiusAndStrokeWidthFromDot-BBakNZKq.js";import"./Layer-BocGZ-Qs.js";import"./dataEntryStyles-3agXA2tK.js";import"./Label-DJktLpOl.js";import"./Text-kTUl7smJ.js";import"./ZIndexLayer-DicbFK_2.js";import"./ActivePoints-Bn0_DXo_.js";import"./Dot-3vV8DYVs.js";import"./types-BDYL0NFs.js";import"./activeStyles-DE7rNFoN.js";import"./useAnimationId-CO4-0stH.js";import"./Symbols-Bto4wFMn.js";import"./symbol-CxF-LE8W.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BSkWbVqw.js";import"./ActiveShapeUtils-YveQ6HiU.js";import"./Curve-CKBXq4VL.js";import"./step-BD0nB0zO.js";import"./useEffectiveDataKey-Don9Yvym.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
