import{r as f,R as e}from"./iframe-tthEZROf.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-KrW21LMm.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-x-BIVIBz.js";import{C as k}from"./ComposedChart-DHi0lKW1.js";import{X as K}from"./XAxis-Bbu_Ekv_.js";import{L as v}from"./Legend-bPUwjHrk.js";import{B as a}from"./Bar-rK7lnicR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-43myQ-K3.js";import"./Text-Cxp0AK4z.js";import"./resolveDefaultProps--ww6vB9W.js";import"./DOMUtils-CUwo8lte.js";import"./isWellBehavedNumber-CJmmz2h5.js";import"./useId-5DCloKRu.js";import"./useBackwardsCompatibleTheme-p9GfZJFz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-3Td9gWAI.js";import"./index-DkFq0gE6.js";import"./index-oZ0OTb3C.js";import"./RechartsWrapper-CTnk9UBm.js";import"./axisSelectors-CCMb6f1X.js";import"./throttle-DytOPEyf.js";import"./d3-scale-De6zhOSb.js";import"./index-BVTzxVB3.js";import"./index-CqetqEae.js";import"./renderedTicksSlice-CpQrC_np.js";import"./index-DkBTTuWT.js";import"./CartesianAxis-CWFnwULO.js";import"./Layer-B-lEtj28.js";import"./types-DSfbGXGs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DQWCoQde.js";import"./chartDataContext-D6MYvejF.js";import"./CategoricalChart-BHtoZx7C.js";import"./Symbols-DaT7FtPk.js";import"./symbol-DH-R-VAg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CHhkCNTB.js";import"./uniqBy-OYgoWVS3.js";import"./iteratee-BwpdS3Kb.js";import"./AnimatedItems-D4IOxZdb.js";import"./useAnimationId-DDIADmfd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C1nwJrSX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--TNHR6BT.js";import"./tooltipContext-CV5KqM6S.js";import"./RegisterGraphicalItemId-3Sw_ADlZ.js";import"./ErrorBarContext-DMolzGnE.js";import"./GraphicalItemClipPath-CGwPa5y8.js";import"./SetGraphicalItem-DjBM1G-g.js";import"./getZIndexFromUnknown-BHl4g5dA.js";import"./useGraphicalItemIdentity-C5skwmjT.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
