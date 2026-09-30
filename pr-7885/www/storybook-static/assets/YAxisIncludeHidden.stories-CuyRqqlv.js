import{r as f,R as e}from"./iframe-qocy1DQe.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BEBc8eQo.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-3RvOLzet.js";import{C as k}from"./ComposedChart-RUoVj2HF.js";import{X as K}from"./XAxis-DVDwgnrS.js";import{L as v}from"./Legend-DA5yP-XS.js";import{B as a}from"./Bar-BcCSAsSh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CT_NLtkb.js";import"./Text-Da9B2kdK.js";import"./resolveDefaultProps-CJBSV8gq.js";import"./DOMUtils-6qqCmkCb.js";import"./isWellBehavedNumber-BIQIJEIr.js";import"./useId-HrwTNVuH.js";import"./useBackwardsCompatibleTheme-IgaWvrkn.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CFBos5HM.js";import"./index-D6IIus7-.js";import"./index-BPqPq_lE.js";import"./RechartsWrapper-Br0BGP0j.js";import"./axisSelectors-DDRTV0S0.js";import"./throttle-DL_zA7f1.js";import"./d3-scale-D0IFI5Iu.js";import"./index-CS-NV7Zp.js";import"./index-C4gwL4-s.js";import"./renderedTicksSlice-BgKiD8FK.js";import"./index-DYvx6oZP.js";import"./CartesianAxis-MlycpDsd.js";import"./Layer-B3KOyccU.js";import"./types-Bss1IWFA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DQFc2W7b.js";import"./chartDataContext-kqjRO4tk.js";import"./CategoricalChart-DuhZERvG.js";import"./Symbols-Bit0cCtP.js";import"./symbol-DVcwhidU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DSPtK0Is.js";import"./uniqBy-Cc5U2Waj.js";import"./iteratee-ptocMwcL.js";import"./AnimatedItems-NvJhAvIW.js";import"./useAnimationId-BzcHu7-i.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DbjotOaB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BsQ4rgbJ.js";import"./tooltipContext-CdV-ZGTt.js";import"./RegisterGraphicalItemId-CjOhDwU5.js";import"./ErrorBarContext-B1oojupg.js";import"./GraphicalItemClipPath-CyLjJqVx.js";import"./SetGraphicalItem-CzGt4YnL.js";import"./getZIndexFromUnknown-kDZff2p4.js";import"./useGraphicalItemIdentity-Cs7JOztK.js";import"./dataEntryStyles-CDmcq6b7.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
