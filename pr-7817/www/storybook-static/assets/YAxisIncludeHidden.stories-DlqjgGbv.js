import{r as f,R as e}from"./iframe-C079Nsfx.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CLt4nzsu.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DLciVaZw.js";import{C as k}from"./ComposedChart-BOV6wT6A.js";import{X as K}from"./XAxis-De-1mJNj.js";import{L as v}from"./Legend-CD3bvqs8.js";import{B as a}from"./Bar-LqltPGlO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DC63Ta0S.js";import"./Text-6vWGAU42.js";import"./resolveDefaultProps-CabyU6Oc.js";import"./DOMUtils-L7J-bYO6.js";import"./isWellBehavedNumber-CDqNrIr8.js";import"./useId-DU03E5LM.js";import"./useBackwardsCompatibleTheme-DGGDmwyU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-IY8xHCFB.js";import"./index-DexGzJ_q.js";import"./index-zk8Wcx4z.js";import"./RechartsWrapper-BrZlEkAN.js";import"./axisSelectors-BAri39V9.js";import"./throttle-D3s_o_Wq.js";import"./d3-scale-BHoY9dLJ.js";import"./index-DADriLAa.js";import"./index-CQ3I_J9a.js";import"./renderedTicksSlice-DVdEowfn.js";import"./index-Duc3f3M9.js";import"./CartesianAxis-KliPXgnc.js";import"./Layer-Kj8YrSbz.js";import"./types-CUH5bwnf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BZirPUWR.js";import"./chartDataContext-VWCZx3p0.js";import"./CategoricalChart-DwP_vuON.js";import"./Symbols-B6mwN2Qu.js";import"./symbol-8JioVXKY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CMlcetBv.js";import"./uniqBy-BY9dT-HT.js";import"./iteratee-DCZNy5jY.js";import"./AnimatedItems-DS39RbqN.js";import"./useAnimationId-MWHCnbEb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-TwKN1OD2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DRAmEoLS.js";import"./tooltipContext-CHMhifGO.js";import"./RegisterGraphicalItemId-jBLm1jna.js";import"./ErrorBarContext-DRwIAR_a.js";import"./GraphicalItemClipPath-BbWylYdQ.js";import"./SetGraphicalItem-CzroE857.js";import"./getZIndexFromUnknown-CFiBTw1V.js";import"./useGraphicalItemIdentity-D2ZyzXPv.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
