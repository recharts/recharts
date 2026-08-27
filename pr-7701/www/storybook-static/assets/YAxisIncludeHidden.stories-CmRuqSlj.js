import{r as f,R as e}from"./iframe-JTvlYrAE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CVrRck7n.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D7ZMgfig.js";import{C as k}from"./ComposedChart-dEDwCA-a.js";import{X as K}from"./XAxis-D-RPwoLI.js";import{L as v}from"./Legend-bHHty92c.js";import{B as s}from"./Bar-DeLKz9gc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DVdjMuKO.js";import"./Text-Dg334Fxc.js";import"./resolveDefaultProps-BQ8E1HnC.js";import"./DOMUtils-9u-qTQJC.js";import"./isWellBehavedNumber-DZJ-wKuN.js";import"./useId-Ddv-MCTo.js";import"./useBackwardsCompatibleTheme-DrI3o7cI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DRiAaxZ2.js";import"./index-oSnD0z-O.js";import"./index-DIk0NYXt.js";import"./RechartsWrapper-DxDGjzAu.js";import"./axisSelectors-5nOHG62L.js";import"./throttle-CXxUHuO5.js";import"./d3-scale-CyiZcwJt.js";import"./index-6AYKMmGX.js";import"./index-C7e_DiH0.js";import"./renderedTicksSlice-DqB8pESJ.js";import"./index-C2cjqz89.js";import"./CartesianAxis-BCWZ119m.js";import"./Layer-OemeYySJ.js";import"./types-BAT4N-Js.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Car3Atj3.js";import"./chartDataContext-r6ewa5Wc.js";import"./CategoricalChart-Dv8UcXMC.js";import"./Symbols-tWRjxaQS.js";import"./symbol-BTwm-ytb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DZ6FTXmj.js";import"./uniqBy-CY-58Mlk.js";import"./iteratee-ByQfU6mD.js";import"./AnimatedItems-CtaNoYLp.js";import"./useAnimationId-B-nvf5O7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C-NwM-8_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BXOO9Xzj.js";import"./tooltipContext-B3YdOV5b.js";import"./RegisterGraphicalItemId-5DR47K5z.js";import"./ErrorBarContext-C1DfV54u.js";import"./GraphicalItemClipPath-BqO5vOXC.js";import"./SetGraphicalItem-3AS-SEti.js";import"./getZIndexFromUnknown-DeP3-gvQ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BaBnkWw8.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Re=["WithIncludeHidden"];export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
