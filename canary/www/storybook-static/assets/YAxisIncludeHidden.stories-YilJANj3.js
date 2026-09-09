import{r as f,R as e}from"./iframe-VXxHrawH.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DtlJkghU.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DgTA0TxE.js";import{C as k}from"./ComposedChart-DtvVrtdx.js";import{X as K}from"./XAxis-D4xzCV5d.js";import{L as v}from"./Legend-BnroRKQA.js";import{B as a}from"./Bar-TERryxcl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-KqVvCdTF.js";import"./Text-DwkoCOGf.js";import"./resolveDefaultProps-D5Zdg-cB.js";import"./DOMUtils-xAHEQowW.js";import"./isWellBehavedNumber-CkFzhS37.js";import"./useId-poNdh1JU.js";import"./useBackwardsCompatibleTheme-CAqean3d.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ChcfhIs7.js";import"./index-Cou_EQ7F.js";import"./index-Ci4a_PyE.js";import"./RechartsWrapper-CQIlqS7p.js";import"./axisSelectors-BQNA_-kz.js";import"./throttle-BWlQSnjt.js";import"./d3-scale-CUjoKVS8.js";import"./index-BrnOmBWl.js";import"./index-CdTW_BBW.js";import"./renderedTicksSlice-S6Tl6gbL.js";import"./index-CcyipSPh.js";import"./CartesianAxis-Dhdcn9ZL.js";import"./Layer-B3kAMod2.js";import"./types-DHxYQYQn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BwhDl5kl.js";import"./chartDataContext-CR1OC3WJ.js";import"./CategoricalChart-CT9rs-6L.js";import"./Symbols-CFw6SlXs.js";import"./symbol-BFw8lO9u.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DVcYrHEz.js";import"./uniqBy-C4BhnRCt.js";import"./iteratee-C-nIvaib.js";import"./AnimatedItems-DqmSFpoj.js";import"./useAnimationId-UYFwfxUz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DH4DXc0Y.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C7gHs5iI.js";import"./tooltipContext-DhxFmNWz.js";import"./RegisterGraphicalItemId-DSKBKWtn.js";import"./ErrorBarContext-DOLZMgYM.js";import"./GraphicalItemClipPath-DKgFqHTa.js";import"./SetGraphicalItem-DwIcSm4l.js";import"./getZIndexFromUnknown-DM4_h6GQ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B5hnsjtf.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
