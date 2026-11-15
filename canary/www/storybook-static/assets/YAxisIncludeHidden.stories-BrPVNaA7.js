import{r as f,R as e}from"./iframe-CywB74O-.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BQxfFMOH.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CuZ12U6x.js";import{C as k}from"./ComposedChart-DnMaCTiC.js";import{X as K}from"./XAxis-BnyIc3dE.js";import{L as v}from"./Legend-CHJA5PmZ.js";import{B as a}from"./Bar-DGXFxGfD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DQEyyaka.js";import"./Text-D8_iVJPC.js";import"./resolveDefaultProps-Gc3kbVEc.js";import"./ZIndexLayer-CHuGvNnR.js";import"./index-B71Ze7LN.js";import"./index-DBD4vW62.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CHx-smd7.js";import"./throttle-Cdx6aCwi.js";import"./axisSelectors-BlSjRH8p.js";import"./d3-scale-B6sMKT8T.js";import"./CartesianAxis-BkY9x357.js";import"./Layer-BeaWmaSV.js";import"./types-DUxXs5Ud.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-s1l-mRnQ.js";import"./index-DPjYOBE8.js";import"./index-CmTmClEE.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DNXYBwim.js";import"./index-DwB73Oyx.js";import"./fillDefinitions-CMU9craw.js";import"./CartesianChart-CiFd4vci.js";import"./chartDataContext-C42Xk_ee.js";import"./CategoricalChart-CByovhBV.js";import"./Symbols-CkA0fnmK.js";import"./symbol-Bymi0eF-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DGFvSoKL.js";import"./uniqBy-lBBs8O3F.js";import"./iteratee-Dqbbdx6l.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BnKQuw5H.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-qMfUeqmL.js";import"./useAnimationId-DiaU742M.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DRieSTBH.js";import"./tooltipContext-DdYXMl4W.js";import"./ErrorBarContext-BRsViJuO.js";import"./activeStyles-yKq-qtiq.js";import"./SetGraphicalItem-CWyrJmam.js";import"./getZIndexFromUnknown-CNUsSco3.js";import"./useEffectiveDataKey-CjiZk5NG.js";import"./omit-CvZhW0Fm.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
