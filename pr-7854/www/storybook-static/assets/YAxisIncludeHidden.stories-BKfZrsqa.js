import{r as f,R as e}from"./iframe-F7LhK7Eo.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CJvKQyTT.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B_tReVy-.js";import{C as k}from"./ComposedChart-mcVYsTsk.js";import{X as K}from"./XAxis-BKvY-R-H.js";import{L as v}from"./Legend-D7fTmgyL.js";import{B as a}from"./Bar-CVGfn7Ez.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cunaqz8i.js";import"./Text-DW85mx3b.js";import"./resolveDefaultProps-BWBKDxpl.js";import"./DOMUtils-BT8dLI2y.js";import"./isWellBehavedNumber-DjIyZMF-.js";import"./useId-DyKnYw8e.js";import"./useBackwardsCompatibleTheme-IFXQGVV2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BeZh5IO9.js";import"./index-BHnugEqK.js";import"./index-D2U0SDM0.js";import"./RechartsWrapper-ay4Rio5L.js";import"./axisSelectors-u93D5o3N.js";import"./throttle-C_DYoZtt.js";import"./d3-scale-Cx-l4XO1.js";import"./index-C3Rm0W8c.js";import"./index-DQvCajjI.js";import"./renderedTicksSlice-B1tuu0tD.js";import"./index-BWf5kuaX.js";import"./CartesianAxis-lENxpg_y.js";import"./Layer-DYdC0UVh.js";import"./types-Cc5FeE6i.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B3D6zv8Y.js";import"./chartDataContext-DhRxggLS.js";import"./CategoricalChart-D6bN-RZ3.js";import"./Symbols-BoI_88BD.js";import"./symbol-m-1Z6rEE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-NhBD0Cj6.js";import"./uniqBy-BWhaj76i.js";import"./iteratee-BIKbX6L7.js";import"./AnimatedItems-9NyDgZfV.js";import"./useAnimationId-1tb1AqGd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CxCtZOg2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B1DBYTAd.js";import"./tooltipContext-1hNJk_yk.js";import"./RegisterGraphicalItemId-G1rEfZcP.js";import"./ErrorBarContext-Cwt6Jtd7.js";import"./GraphicalItemClipPath-DGCCZDh5.js";import"./SetGraphicalItem-DG_xI-Un.js";import"./getZIndexFromUnknown-DBM0JNqH.js";import"./useGraphicalItemIdentity-CZAMumnN.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
