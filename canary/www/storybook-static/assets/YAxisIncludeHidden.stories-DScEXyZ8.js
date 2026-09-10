import{r as f,R as e}from"./iframe-C0BhaIHx.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DxhSN3f3.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CDOt9hko.js";import{C as k}from"./ComposedChart-Mgrr1vAv.js";import{X as K}from"./XAxis-DW1roRyb.js";import{L as v}from"./Legend-wiIoOZvZ.js";import{B as a}from"./Bar-CYldbXVE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BTrm9XD1.js";import"./Text-CsTjolj2.js";import"./resolveDefaultProps-DCmLA3K_.js";import"./DOMUtils-BbiNqhEu.js";import"./isWellBehavedNumber-D_-ia2T-.js";import"./useId-DVa-1am7.js";import"./useBackwardsCompatibleTheme-Bm34Q8-P.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-rpRhSNXU.js";import"./index-CHaO9dBD.js";import"./index-uoiqJzNo.js";import"./RechartsWrapper-BrzF7ifV.js";import"./axisSelectors-BjRn9Rmb.js";import"./throttle-_kaTGctA.js";import"./d3-scale-m2f7iS2A.js";import"./index-BOsMLxuu.js";import"./index-CxbCOQkV.js";import"./renderedTicksSlice--IxhvHeS.js";import"./index-BnJ9NTOO.js";import"./CartesianAxis-DAIP3l5S.js";import"./Layer-BVz81g-K.js";import"./types-09ibMXDf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B1wZ3fTU.js";import"./chartDataContext-D3PRni2U.js";import"./CategoricalChart-F9gORHS1.js";import"./Symbols-BvYWP5aa.js";import"./symbol-Bi9q3ZjS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-3ZN4wc9L.js";import"./uniqBy-D0MFx9I4.js";import"./iteratee-C079nQ1K.js";import"./AnimatedItems-BkfPAPcH.js";import"./useAnimationId-DAQ_cacI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ChwjE7xo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B0KqHDN3.js";import"./tooltipContext-uJ4DQRI8.js";import"./RegisterGraphicalItemId-BZlrZWzc.js";import"./ErrorBarContext-0HaXxMlO.js";import"./GraphicalItemClipPath-puDtay2S.js";import"./SetGraphicalItem-0BPxCGJF.js";import"./getZIndexFromUnknown-CjyHsOIK.js";import"./useGraphicalItemIdentity-DRraOtTx.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
