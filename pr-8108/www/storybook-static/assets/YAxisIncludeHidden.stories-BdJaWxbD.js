import{r as f,R as e}from"./iframe-DbrRN1n8.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DXpw8vqJ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Du0Au1R-.js";import{C as k}from"./ComposedChart-BwB9uQDU.js";import{X as K}from"./XAxis-D4Dr_tjl.js";import{L as v}from"./Legend-BV3ignIc.js";import{B as a}from"./Bar-BOPgu8U0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-A7WyPB0I.js";import"./Text-WfDu__TP.js";import"./resolveDefaultProps-Ds4rGbhG.js";import"./pageBackground-CkPB-Imo.js";import"./ZIndexLayer-DdjxUpLS.js";import"./index-CogSL5JJ.js";import"./index-D6EAQOZI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D77BuFKC.js";import"./throttle-DUdTYHJ7.js";import"./axisSelectors-DK6uFkxV.js";import"./d3-scale-DUENC00q.js";import"./CartesianAxis-BCK1OBBy.js";import"./Layer-Do_lw1Xj.js";import"./types-DkNvVUMM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-mzEE9LM4.js";import"./index-M4gkvM-3.js";import"./index-xhc0FShP.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DlyIgJor.js";import"./index-B5hYk0_Q.js";import"./CartesianChart-CDlGam4t.js";import"./ZIndexPortal-CvbthdtM.js";import"./CategoricalChart-DVK-Whre.js";import"./Symbols-CnZ9lVP1.js";import"./symbol-mpAZtHsQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CTE_e8_t.js";import"./uniqBy-KNYEdHaO.js";import"./iteratee-Dv9in7l7.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BgsnBCM1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-3NP_NJyH.js";import"./useAnimationId-CvK-4pcw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DUWP9jsa.js";import"./tooltipContext-DOKPheir.js";import"./dataEntryStyles-CKR3qDl0.js";import"./ErrorBarContext-Bfmn5FWH.js";import"./activeStyles-BV7TfXze.js";import"./SetGraphicalItem-D97kyhFi.js";import"./getZIndexFromUnknown-DGJ3xvMK.js";import"./useEffectiveDataKey-ChFOzgVO.js";import"./omit-Dvz-UHEk.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
