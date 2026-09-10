import{r as f,R as e}from"./iframe-D-sDuIqM.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C3R1kIjz.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DkRDAG1K.js";import{C as k}from"./ComposedChart-BqFvX779.js";import{X as K}from"./XAxis-C9qauAI0.js";import{L as v}from"./Legend-CVfH-3p0.js";import{B as a}from"./Bar-B4l2brso.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-mzqnfF5y.js";import"./Text-cGP75sAD.js";import"./resolveDefaultProps-DRUr7G4m.js";import"./DOMUtils-BlK1UfYz.js";import"./isWellBehavedNumber-n1fKw3Ik.js";import"./useId-DJy_IGRL.js";import"./useBackwardsCompatibleTheme-Bt2NRZPB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dl5V_Hf6.js";import"./index-DOwSNtIW.js";import"./index-D-ZcLjnp.js";import"./RechartsWrapper-BR0dPwJa.js";import"./axisSelectors-CcFzWzBk.js";import"./throttle-BwwGSoU-.js";import"./d3-scale-D2yJqL8j.js";import"./index-sXSxEpdM.js";import"./index-DlgBIkPT.js";import"./renderedTicksSlice-DoL3t7Bc.js";import"./index-Dfhf8xit.js";import"./CartesianAxis-Bbla4SrJ.js";import"./Layer-C3zxw81n.js";import"./types-D7y8jC37.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-ZdAO4m3f.js";import"./chartDataContext-DR95QKXv.js";import"./CategoricalChart-Bvu_kn7d.js";import"./Symbols-BZPRKGG7.js";import"./symbol-v3MbjgbN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CnzQeRxh.js";import"./uniqBy-B7ZujxYX.js";import"./iteratee-pAczANug.js";import"./AnimatedItems-CAyQvTlC.js";import"./useAnimationId-BdWTgj5e.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-cVKynJUN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B7KMSlGv.js";import"./tooltipContext-FI4aLtaR.js";import"./RegisterGraphicalItemId-BpgvVZBx.js";import"./ErrorBarContext-COUU5Hme.js";import"./GraphicalItemClipPath-BqyJWtfu.js";import"./SetGraphicalItem-CoBxoWuP.js";import"./getZIndexFromUnknown-BRHZLqbc.js";import"./useGraphicalItemIdentity-CglCalgl.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
