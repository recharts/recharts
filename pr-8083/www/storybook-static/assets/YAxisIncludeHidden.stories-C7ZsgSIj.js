import{r as f,R as e}from"./iframe-xm0njxpX.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-NECyBpPr.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BXJXmFQu.js";import{C as k}from"./ComposedChart-CTFFybCq.js";import{X as K}from"./XAxis-BO1QGjPl.js";import{L as v}from"./Legend-BdswvNJP.js";import{B as a}from"./Bar-HGS41inY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-S9WiqPCG.js";import"./Text-B0-TExiI.js";import"./resolveDefaultProps-B61AogRi.js";import"./pageBackground-DWSrNR00.js";import"./useId-BgEUuOn0.js";import"./ZIndexLayer-DyZHr2FP.js";import"./index-sPTpvkxI.js";import"./index-BJuRFged.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DQe6GYeu.js";import"./throttle-CQYnjh9B.js";import"./dataEntryStyles-6HljWj9B.js";import"./axisSelectors-CvRpVDMX.js";import"./d3-scale-DRKVpWRJ.js";import"./CartesianAxis-C-JfYURt.js";import"./Layer-BK3cybNP.js";import"./types-dJ8tHIrH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BXAMy43b.js";import"./index--0VHY1xY.js";import"./index-A2yfNmgu.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B8IVe3Ss.js";import"./index-BwWTg3c5.js";import"./CartesianChart-BJCMshR7.js";import"./chartDataContext-Dzgvzmie.js";import"./CategoricalChart-CF01fl7y.js";import"./Symbols-DCRo0j9j.js";import"./symbol-BSoKxRAd.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DlepEBex.js";import"./uniqBy-0D-LcbqQ.js";import"./iteratee-IqDasbN4.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-DbHXCiJk.js";import"./useAnimationId-CEkjnsp2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-y41hMVV_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BgjHc8Mn.js";import"./tooltipContext-jY8SRIcz.js";import"./RegisterGraphicalItemId-CvVXplwq.js";import"./ErrorBarContext-iSnZN3fR.js";import"./SetGraphicalItem-BWe-V4S4.js";import"./getZIndexFromUnknown-5YUkMLyI.js";import"./useEffectiveDataKey-L1KgQlH4.js";import"./omit-lelMGAAU.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
