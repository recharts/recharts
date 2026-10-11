import{r as f,R as e}from"./iframe-Z4zOoLz7.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DcaBIqq9.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-07-9uDTC.js";import{C as k}from"./ComposedChart-Ci-r_zyP.js";import{X as K}from"./XAxis-vC51wnfX.js";import{L as v}from"./Legend-BLQGVug1.js";import{B as a}from"./Bar-DZqD-arU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CznRo0qq.js";import"./Text-D1NXAhAr.js";import"./resolveDefaultProps-DOQLwwUl.js";import"./pageBackground-cgE2GIfC.js";import"./isWellBehavedNumber-Ds32fXh1.js";import"./useId-d3zx3clY.js";import"./useBackwardsCompatibleTheme-DoS7t3mQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CzgpVDV6.js";import"./index-DyaBjL-T.js";import"./index-xqTHFQSV.js";import"./RechartsWrapper-B6jGY5P2.js";import"./axisSelectors-D5RAwviA.js";import"./throttle-9WzIUwC-.js";import"./d3-scale-By1WrWdl.js";import"./index-DNpJ-y1s.js";import"./index-DU7fosbq.js";import"./renderedTicksSlice-XpkPmQP6.js";import"./index-YATDX38S.js";import"./CartesianAxis-D0qgtLuE.js";import"./Layer-DROZCM5S.js";import"./types-BIzeqQN_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-r7CDK1kg.js";import"./chartDataContext-B0vVK4FP.js";import"./CategoricalChart-D5-WelqS.js";import"./Symbols--vCw1LR_.js";import"./symbol-bhdOsLww.js";import"./path-DyVhHtw_.js";import"./useElementOffset-S6uYAEYX.js";import"./uniqBy-D7Oablgk.js";import"./iteratee-BmQxJUF4.js";import"./activeStyles-Clj_q_02.js";import"./useAnimationId-CclGmA5U.js";import"./dataEntryStyles-jPYjF1-F.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BRzNxGc4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DptdzhMF.js";import"./tooltipContext-LCXgX3C4.js";import"./ErrorBarContext-DyrSqIsA.js";import"./GraphicalItemClipPath-Dh8t0UHl.js";import"./SetGraphicalItem-D_Y4scs-.js";import"./getZIndexFromUnknown-CAtKMRWb.js";import"./useGraphicalItemIdentity-Bz_dea2_.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
