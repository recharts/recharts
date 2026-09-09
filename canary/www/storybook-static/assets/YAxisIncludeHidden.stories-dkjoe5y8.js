import{r as f,R as e}from"./iframe-BzcDVKKs.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BWHP_SYF.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BTTYVccT.js";import{C as k}from"./ComposedChart-DGju_FYc.js";import{X as K}from"./XAxis-DmxgzYYf.js";import{L as v}from"./Legend-CIG02wIC.js";import{B as a}from"./Bar-B4ygsPp5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CtBQk67s.js";import"./Text-24J6FH-o.js";import"./resolveDefaultProps-BtypfTmg.js";import"./DOMUtils-Bp1Ea9M_.js";import"./isWellBehavedNumber-kEkRMq_8.js";import"./useId-BlYRNzJn.js";import"./useBackwardsCompatibleTheme-ncr2oU_w.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DXdU7RWt.js";import"./index-Km9DigXp.js";import"./index-DjfWl8QV.js";import"./RechartsWrapper-CGczEQWO.js";import"./axisSelectors-IdMVp5Ng.js";import"./throttle-DDPbgHA_.js";import"./d3-scale-C4pPFzlU.js";import"./index-BATPxOFC.js";import"./index-9IUtScc_.js";import"./renderedTicksSlice-Cv0ctYuN.js";import"./index-DrsmB6aN.js";import"./CartesianAxis-HfL3rF1Y.js";import"./Layer-B4cUMoCn.js";import"./types-Cgo5Tovd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BPCp3bVQ.js";import"./chartDataContext-DN2d-1N9.js";import"./CategoricalChart-BpKMrWac.js";import"./Symbols-BZfeJPUl.js";import"./symbol-L7dlPYrt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-VjV8E2aW.js";import"./uniqBy-eOMq6B75.js";import"./iteratee-DrjruNpI.js";import"./AnimatedItems-tb47PotV.js";import"./useAnimationId-B_k41OIp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DA-7Dq-R.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ck9I3ldI.js";import"./tooltipContext-CB8didm_.js";import"./RegisterGraphicalItemId-D5DmGuV-.js";import"./ErrorBarContext-C3FB8ozV.js";import"./GraphicalItemClipPath-Cfm3NAku.js";import"./SetGraphicalItem-CNRXuHZw.js";import"./getZIndexFromUnknown-DS03evKO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-tWVYkbkT.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
