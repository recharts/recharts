import{r as f,R as e}from"./iframe-C0h7cDRB.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C8YuU25K.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-qYbn1M2d.js";import{C as k}from"./ComposedChart-Bxc6CdJK.js";import{X as K}from"./XAxis-BA_RiYmX.js";import{L as v}from"./Legend-B9myfM-R.js";import{B as a}from"./Bar-B1X53sB-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-ChRnigpx.js";import"./Text-0LVKVKzy.js";import"./resolveDefaultProps-BkghodIs.js";import"./DOMUtils-CJDZt9Se.js";import"./isWellBehavedNumber-l0bWs0-b.js";import"./useId-mBPRAmCQ.js";import"./useBackwardsCompatibleTheme-BiYiaeUI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CQRtxHWp.js";import"./index-D1hon26J.js";import"./index-DVJUv_Eo.js";import"./RechartsWrapper-Cw2PyL1_.js";import"./axisSelectors-ao6VSC3T.js";import"./throttle-BTNdvVGL.js";import"./d3-scale-D7rNqaSZ.js";import"./index-aOlaHU4z.js";import"./index-BxvBa7qS.js";import"./renderedTicksSlice-DM87J7gU.js";import"./index-BTP4J2bR.js";import"./CartesianAxis-CojQTbDy.js";import"./Layer-CDasTplA.js";import"./types-BFdAlI3B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Bz05LL8N.js";import"./chartDataContext-aa0JHiM9.js";import"./CategoricalChart-DJQlgPsa.js";import"./Symbols-CkEijzRx.js";import"./symbol-DZ3WUR_I.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CeFmnDth.js";import"./uniqBy-CNP_WPaF.js";import"./iteratee-Csb2m47f.js";import"./AnimatedItems-_8lABYqi.js";import"./useAnimationId-CdJJ5aJU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bdav8_u9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcbAXTAV.js";import"./tooltipContext-bkrU2p57.js";import"./RegisterGraphicalItemId-DAhv8npK.js";import"./ErrorBarContext-BL4xVqAn.js";import"./GraphicalItemClipPath-DAnL6xzi.js";import"./SetGraphicalItem-BPbhG1jF.js";import"./getZIndexFromUnknown-_ABQYJE8.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Dujy9U26.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
