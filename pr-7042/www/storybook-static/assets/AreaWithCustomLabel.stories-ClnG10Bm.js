import{e as t}from"./iframe-CJQnRCN7.js";import{R as c}from"./arrayEqualityCheck-DcQtyVca.js";import{C as d}from"./ComposedChart-DY1EoIsB.js";import{A as l}from"./Area-DowzD-Pr.js";import{R as h}from"./RechartsHookInspector-DQZJ1VRL.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bn42vmR1.js";import"./immer-pCuW_8mX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DEeMF7CZ.js";import"./index-D1Dxg2z1.js";import"./hooks-D3GLo4z9.js";import"./axisSelectors-CBcJoGrJ.js";import"./d3-scale-AQeZIKmR.js";import"./zIndexSlice-D7pH0QjK.js";import"./renderedTicksSlice-6is9WC9q.js";import"./CartesianChart-pu1Q9M14.js";import"./chartDataContext-DYHRLxlR.js";import"./CategoricalChart-DZh5W8ZS.js";import"./Curve-ClJjpRlb.js";import"./types-Bb5s1IIN.js";import"./step-xPk2jUCK.js";import"./Layer-B-568WrD.js";import"./ReactUtils-BMRDQSQL.js";import"./Label-C1IYMHDK.js";import"./Text-8oP5Jeys.js";import"./DOMUtils-CpcfJsF7.js";import"./ZIndexLayer-DBz_ncGo.js";import"./ActivePoints-0FO4QfDc.js";import"./Dot-DVt8NYvp.js";import"./RegisterGraphicalItemId-CErdNO5K.js";import"./GraphicalItemClipPath-BMpRvZ7r.js";import"./SetGraphicalItem-oTp0Feor.js";import"./useAnimationId-Btjbf-3C.js";import"./getRadiusAndStrokeWidthFromDot-27Jzsgzj.js";import"./graphicalItemSelectors-BaRYOFQQ.js";import"./index-BmBTwCFz.js";import"./ChartSizeDimensions-BxOAeUa_.js";import"./OffsetShower-Bp1qc7mw.js";import"./PlotAreaShower-DPY3URo4.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
