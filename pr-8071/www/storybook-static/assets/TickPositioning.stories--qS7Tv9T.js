import{R as t}from"./iframe-B1_QfljJ.js";import{R as m}from"./zIndexSlice-Cb-_WhSJ.js";import{L as s}from"./LineChart-CPfPvG4h.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CSU9tv9c.js";import{X as l}from"./XAxis-C5w_o036.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D7IvOyg1.js";import"./index-C0R_VbD9.js";import"./index-C4Bv3TLI.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BKBpJeVO.js";import"./isWellBehavedNumber-CjzDakCh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-eNWWZf5L.js";import"./axisSelectors-7XQKMXbV.js";import"./d3-scale-Ch4lSu5M.js";import"./index-DrIBMx-a.js";import"./index-PfBmA6Mj.js";import"./renderedTicksSlice-QhE759w-.js";import"./index-D_5ex_s0.js";import"./CartesianChart-0PUgz-fD.js";import"./chartDataContext-W36SsBCK.js";import"./CategoricalChart-Bnl3KIy2.js";import"./Layer-B_0rxCBF.js";import"./Curve-BRi-m77E.js";import"./types-DbTvfnZ9.js";import"./step-CRnCkLM-.js";import"./path-DyVhHtw_.js";import"./activeStyles-Cj23hm4O.js";import"./Label-Dq-PRmXE.js";import"./Text-l_2w-j-6.js";import"./pageBackground-C2L5RPBY.js";import"./useId-5cvDRGiM.js";import"./useBackwardsCompatibleTheme-Cn0U0gME.js";import"./ZIndexLayer-DCJHrufs.js";import"./dataEntryStyles-DFEzHfWh.js";import"./useAnimationId-g_gs6Adq.js";import"./ActivePoints-DeQ4AICV.js";import"./Dot-Dys0AMJj.js";import"./RegisterGraphicalItemId-nMZsofRB.js";import"./ErrorBarContext-teR4Ylft.js";import"./SetGraphicalItem-BVP4iL4X.js";import"./getRadiusAndStrokeWidthFromDot-DrVK3vcj.js";import"./ActiveShapeUtils-DhsBwk0C.js";import"./useEffectiveDataKey-FDkhhmBo.js";import"./CartesianAxis-Bufnbb1Y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
