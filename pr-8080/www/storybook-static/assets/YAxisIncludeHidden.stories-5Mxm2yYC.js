import{r as f,R as e}from"./iframe-BzJSp-Lb.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DH3wuMUO.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CpY4G_41.js";import{C as k}from"./ComposedChart-BGxC8J4N.js";import{X as K}from"./XAxis-CLk9ccVg.js";import{L as v}from"./Legend-V6chc68W.js";import{B as a}from"./Bar-Df1CrUgg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CXAJ70oq.js";import"./Text-Di-RptE9.js";import"./resolveDefaultProps-D32Nc0UY.js";import"./pageBackground-8jgZJDd7.js";import"./useId-Cb7sX_a1.js";import"./ZIndexLayer-CGBlNVI9.js";import"./index-YB3txD15.js";import"./index-DEl98Bjo.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CKi8pQjD.js";import"./throttle-BdS6UYxD.js";import"./dataEntryStyles-eQjR1qV2.js";import"./axisSelectors-Dmo5ac34.js";import"./d3-scale-BS7oaQgh.js";import"./CartesianAxis-ImLT1R94.js";import"./Layer-Ci5AF7LX.js";import"./types-DTueBMDQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DRNaA9Q_.js";import"./index-GvdMQirt.js";import"./index-DTL6jccP.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-LKbuKCMS.js";import"./index-D2gj9RGS.js";import"./CartesianChart-BDSIE1-i.js";import"./chartDataContext-DNk2bkFc.js";import"./CategoricalChart-BXcX0RVa.js";import"./Symbols-C3MESPx5.js";import"./symbol-BGHOeo3E.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DR9OLuHh.js";import"./uniqBy-CSQkScZ5.js";import"./iteratee-xpgxqzFE.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-B_Yk1DNA.js";import"./useAnimationId-vzOulJcL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-COJJ_LvU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CPEFsget.js";import"./tooltipContext-BQCgoNZU.js";import"./RegisterGraphicalItemId-DeENaGzF.js";import"./ErrorBarContext-CPvXKihC.js";import"./SetGraphicalItem-Cc_8d-ll.js";import"./getZIndexFromUnknown-pUg2_Mae.js";import"./useEffectiveDataKey-Dlkdw6F3.js";import"./omit-CNibo81X.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
