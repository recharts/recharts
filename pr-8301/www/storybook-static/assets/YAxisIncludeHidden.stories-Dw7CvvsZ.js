import{r as f,R as e}from"./iframe-B6IWu9YI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-MTRfWgoi.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CiiKnRRR.js";import{C as k}from"./ComposedChart-7NLEhX0Q.js";import{X as K}from"./XAxis-Dlj0iAIW.js";import{L as v}from"./Legend-DNKmLnLa.js";import{B as a}from"./Bar-DtJxtlCs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DTgwgIlk.js";import"./Text-BO6nkoy7.js";import"./resolveDefaultProps-D5gBkMry.js";import"./ZIndexLayer-6PrGVGr8.js";import"./index-BTlMcQeh.js";import"./index-BGlqIfcK.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-sP0_8T_l.js";import"./throttle-BURJLM__.js";import"./axisSelectors-DNbDiKxI.js";import"./d3-scale-BnDY_Nfy.js";import"./CartesianAxis-Q1_hDZPE.js";import"./Layer-DH6wa-As.js";import"./types-CluQiZar.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C5_vrS83.js";import"./index-D9tAsY9i.js";import"./index-gbAMyFwS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-ut8KRm06.js";import"./index-DqMscQEy.js";import"./fillDefinitions-CycD80fW.js";import"./CartesianChart-CXZ1AepY.js";import"./chartDataContext-CXAoEtMH.js";import"./CategoricalChart-dyk1Sqmj.js";import"./Symbols-BCHMzS19.js";import"./symbol-C2WLAmAq.js";import"./path-BBMZd4YL.js";import"./useElementOffset-toJRPtH1.js";import"./uniqBy-3fTL_ANn.js";import"./iteratee-DoKrSNie.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-B1GQ2fCv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DojOoXFW.js";import"./useAnimationId-CU9aT4qK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bk4aWoxM.js";import"./tooltipContext-BPoH_Fh4.js";import"./ErrorBarContext-DvofuvtM.js";import"./activeStyles-BITXl8mO.js";import"./SetGraphicalItem-BnKu0Jsk.js";import"./getZIndexFromUnknown-C22CLdSs.js";import"./useEffectiveDataKey-B8xnYYq1.js";import"./omit-BJqo31UA.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
