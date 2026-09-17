import{r as f,R as e}from"./iframe-CCA1dLWD.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DVlxFbm5.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bqs-eJ8p.js";import{C as k}from"./ComposedChart-DGmL1PWR.js";import{X as K}from"./XAxis-B02ZLuLQ.js";import{L as v}from"./Legend-D9pOt-by.js";import{B as a}from"./Bar-BLI225vs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C7jyVHZg.js";import"./Text-Cxmc4hoL.js";import"./resolveDefaultProps-DAFAxP68.js";import"./DOMUtils-B9q-UHbd.js";import"./isWellBehavedNumber-CUTtCnYO.js";import"./useId-C-4rQrJ2.js";import"./useBackwardsCompatibleTheme-B-BtV5HU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BsYZhZ4O.js";import"./index-C97djya6.js";import"./index-BTapAtmF.js";import"./RechartsWrapper-Ci54jWLi.js";import"./axisSelectors-ueWwuThv.js";import"./throttle-D3xpLLdH.js";import"./d3-scale-BdepyZ_B.js";import"./index-Cyg8bGg4.js";import"./index-CVq5gi49.js";import"./renderedTicksSlice-CuWBxFlw.js";import"./index-Cah2JXyu.js";import"./CartesianAxis-ClD0AQ8W.js";import"./Layer-CmH8ISrU.js";import"./types-B2426EfA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CTE6kj-2.js";import"./chartDataContext-CLCJusst.js";import"./CategoricalChart-mUCs8Qny.js";import"./Symbols-BcmRvXLE.js";import"./symbol-1PbKhfdG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DZYD1Ia0.js";import"./uniqBy-BMBICafF.js";import"./iteratee-D0uU7ZFx.js";import"./AnimatedItems-Bwhxgw5t.js";import"./useAnimationId-BZsPKArS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DTCXmGfs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-zvjqERUF.js";import"./tooltipContext-B3TuinVb.js";import"./RegisterGraphicalItemId-BRUpoP9Q.js";import"./ErrorBarContext-C-MqMGv0.js";import"./GraphicalItemClipPath-DcQmHX6S.js";import"./SetGraphicalItem-6HsvsmQk.js";import"./getZIndexFromUnknown-tzFj9-cl.js";import"./useGraphicalItemIdentity-CJ147Nvu.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
