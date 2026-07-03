import{R as t}from"./iframe-Dlbg_GZB.js";import{R as m}from"./zIndexSlice-CMn4Cwlm.js";import{L as s}from"./LineChart-DkOsJWvW.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BpbqzpNB.js";import{X as l}from"./XAxis-g3Yqs_q0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C3Y4hQMj.js";import"./index-CFtDWJsT.js";import"./index-C4pT71Bv.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CIJSTnSl.js";import"./isWellBehavedNumber-BSYl2eep.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_RHeF5kh.js";import"./index-5rk_KAjc.js";import"./index-De4F06zW.js";import"./renderedTicksSlice-CsfsF6Cn.js";import"./axisSelectors-C_hiMAlk.js";import"./d3-scale-DJYjYDtT.js";import"./CartesianChart-DHiwjDYa.js";import"./chartDataContext-MC8Fu7xC.js";import"./CategoricalChart-BQo9vmvV.js";import"./Layer-DlhGxg7N.js";import"./Curve-Dcq__Vxv.js";import"./types-Ctdv5TaQ.js";import"./step-BcjH0w06.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-xmicP7QL.js";import"./Label-d3wc6rF5.js";import"./Text-BLnCmUHB.js";import"./DOMUtils-vSgsVfRP.js";import"./ZIndexLayer-feAlcx_0.js";import"./useAnimationId-K2Oa5cBe.js";import"./ActivePoints-CEnLoFiW.js";import"./Dot-DZ8iWzlt.js";import"./RegisterGraphicalItemId-Dj61QivB.js";import"./ErrorBarContext-BKnwTpIO.js";import"./GraphicalItemClipPath-8DGGiF_D.js";import"./SetGraphicalItem-jqk9vogH.js";import"./getRadiusAndStrokeWidthFromDot-rZ7RT_fb.js";import"./ActiveShapeUtils-BApyZjjc.js";import"./CartesianAxis-dbSJQeo2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ot=["TickPositioning"];export{r as TickPositioning,ot as __namedExportsOrder,it as default};
