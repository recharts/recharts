import{R as t}from"./iframe-qocy1DQe.js";import{R as m}from"./zIndexSlice-3RvOLzet.js";import{L as s}from"./LineChart-B7L_o5XK.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DzOEwxYP.js";import{X as l}from"./XAxis-DVDwgnrS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DL_zA7f1.js";import"./index-D6IIus7-.js";import"./index-BPqPq_lE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CJBSV8gq.js";import"./isWellBehavedNumber-BIQIJEIr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Br0BGP0j.js";import"./axisSelectors-DDRTV0S0.js";import"./d3-scale-D0IFI5Iu.js";import"./index-CS-NV7Zp.js";import"./index-C4gwL4-s.js";import"./renderedTicksSlice-BgKiD8FK.js";import"./index-DYvx6oZP.js";import"./CartesianChart-DQFc2W7b.js";import"./chartDataContext-kqjRO4tk.js";import"./CategoricalChart-DuhZERvG.js";import"./Layer-B3KOyccU.js";import"./Curve-DAl3IIzp.js";import"./types-Bss1IWFA.js";import"./step-nn4oKmLh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-NvJhAvIW.js";import"./Label-CT_NLtkb.js";import"./Text-Da9B2kdK.js";import"./DOMUtils-6qqCmkCb.js";import"./useId-HrwTNVuH.js";import"./useBackwardsCompatibleTheme-IgaWvrkn.js";import"./ZIndexLayer-CFBos5HM.js";import"./useAnimationId-BzcHu7-i.js";import"./ActivePoints-DmiMFqmD.js";import"./Dot-j6skezxs.js";import"./RegisterGraphicalItemId-CjOhDwU5.js";import"./ErrorBarContext-B1oojupg.js";import"./GraphicalItemClipPath-CyLjJqVx.js";import"./SetGraphicalItem-CzGt4YnL.js";import"./getRadiusAndStrokeWidthFromDot-B1njTj3P.js";import"./ActiveShapeUtils-BsQ4rgbJ.js";import"./useGraphicalItemIdentity-Cs7JOztK.js";import"./CartesianAxis-MlycpDsd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
