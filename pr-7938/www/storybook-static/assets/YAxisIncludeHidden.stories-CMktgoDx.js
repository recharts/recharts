import{r as f,R as e}from"./iframe-B-SNMp2P.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Cm6hvxXf.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-MJVhEUVa.js";import{C as k}from"./ComposedChart-CkeRhKHK.js";import{X as K}from"./XAxis-DbFPHXfw.js";import{L as v}from"./Legend-CULdgsny.js";import{B as a}from"./Bar-Bq5ybiIa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-yF0NhCgr.js";import"./Text-3FjWr6Un.js";import"./resolveDefaultProps-D6GIFGnh.js";import"./DOMUtils-CVvGSXS1.js";import"./isWellBehavedNumber-0l1sLwCq.js";import"./useId-DCI_CeQs.js";import"./useBackwardsCompatibleTheme-CE1PvRpo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DTIKWgf_.js";import"./index-BIs-1f0J.js";import"./index-BZQvw8Sg.js";import"./RechartsWrapper-gPNydgch.js";import"./axisSelectors-_pmBWC24.js";import"./throttle-7fi-ZXpb.js";import"./d3-scale-CF8UPnnv.js";import"./index-Dj60m7pl.js";import"./index-DGXVsrKV.js";import"./renderedTicksSlice-2xqGDKha.js";import"./index-CvUwvd6n.js";import"./CartesianAxis-D1aWQaVv.js";import"./Layer-CVSv3BXM.js";import"./types-BNVaobqj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-K-vFTXTH.js";import"./chartDataContext-BccgPSEz.js";import"./CategoricalChart-BNp-LaIc.js";import"./Symbols-DzV4gd5Z.js";import"./symbol-DyubpzeR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BiHyJ0md.js";import"./uniqBy-B66cnVOa.js";import"./iteratee-BXTpeJD1.js";import"./AnimatedItems-D-Mi-zOF.js";import"./useAnimationId-CiVfXoZZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DleIA4hH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BCJOz4d0.js";import"./tooltipContext-CoqzaWf-.js";import"./dataEntryStyles-Bq_a6L7W.js";import"./ErrorBarContext-D0XxzFi4.js";import"./GraphicalItemClipPath-C3pTbqJ4.js";import"./SetGraphicalItem-B2JrzKrx.js";import"./getZIndexFromUnknown-D7c8GwTy.js";import"./useGraphicalItemIdentity-DsWLL8GU.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
