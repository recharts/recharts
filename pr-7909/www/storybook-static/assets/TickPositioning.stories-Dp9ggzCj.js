import{R as t}from"./iframe-BjBEpprL.js";import{R as m}from"./zIndexSlice-D-PTjDwF.js";import{L as s}from"./LineChart-BLK_mVgP.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-c9VeJUIK.js";import{X as l}from"./XAxis-BDZhGE0-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-NXQPRMgU.js";import"./index-CFgOxFQX.js";import"./index-BBITsrkq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B9MstDaw.js";import"./isWellBehavedNumber-BCSUkdc1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CcICmPjO.js";import"./axisSelectors-DfmJjs-d.js";import"./d3-scale-CKCE33MR.js";import"./index-BaAr_1o8.js";import"./index-MYKE-65n.js";import"./renderedTicksSlice-1EW54Ol1.js";import"./index-DMF93B4y.js";import"./CartesianChart-BrSdxCQq.js";import"./chartDataContext-D6HhxZlR.js";import"./CategoricalChart-CI19dNhZ.js";import"./Layer-vH_2ZCys.js";import"./Curve-C8b-yzs0.js";import"./types-DeKlgzSD.js";import"./step-DdKwrL1k.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BDzZfL3v.js";import"./Label-BeKD4wFi.js";import"./Text-CUza6yot.js";import"./DOMUtils-Bj0yZBJ3.js";import"./useId-ChOQ34QW.js";import"./useBackwardsCompatibleTheme-CUuvE6f4.js";import"./ZIndexLayer-Dpvj1i9H.js";import"./useAnimationId-a8RjQG0_.js";import"./ActivePoints-DYDQlTVO.js";import"./Dot-BYQ0G1Os.js";import"./RegisterGraphicalItemId-CyOHhqL8.js";import"./ErrorBarContext-CQzClf2u.js";import"./GraphicalItemClipPath-EXC5I5vP.js";import"./SetGraphicalItem-CqlMG-ES.js";import"./getRadiusAndStrokeWidthFromDot-C3KEWMVy.js";import"./ActiveShapeUtils-BcKWPZeO.js";import"./useGraphicalItemIdentity-BkQxsk2A.js";import"./CartesianAxis--AnwAjfA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,st as __namedExportsOrder,mt as default};
