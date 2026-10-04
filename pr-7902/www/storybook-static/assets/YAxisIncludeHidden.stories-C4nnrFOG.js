import{r as f,R as e}from"./iframe-BnuuYCdy.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C9KSlBTW.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BbvX8GRP.js";import{C as k}from"./ComposedChart-BSlw0HFk.js";import{X as K}from"./XAxis-SZJEJq9X.js";import{L as v}from"./Legend-DPJag0h4.js";import{B as a}from"./Bar-CHZjzYVB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B4GoECSR.js";import"./Text-CGVn4Fi7.js";import"./resolveDefaultProps-BKuWdgA8.js";import"./DOMUtils-uoptzxcb.js";import"./isWellBehavedNumber-Bo6YgW7B.js";import"./useId-DfmsLig3.js";import"./useBackwardsCompatibleTheme-B5XCxlLZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-exEMosZg.js";import"./index-BBLVSC9o.js";import"./index-DGdfhc42.js";import"./RechartsWrapper-yuVx-GfW.js";import"./axisSelectors-LqE-nBKd.js";import"./throttle-hzsPLVCI.js";import"./d3-scale-Xitmtu6a.js";import"./index-B7n-SwGH.js";import"./index-Bpn4eiX5.js";import"./renderedTicksSlice-BB-WXCKZ.js";import"./index-Co63ZXDS.js";import"./CartesianAxis-D94E5CAk.js";import"./Layer-CdUwTkt1.js";import"./types-CkU7DeC5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Csg_49y8.js";import"./chartDataContext-Cfs5ZB_U.js";import"./CategoricalChart-D69sax0F.js";import"./Symbols-RXJzCMmL.js";import"./symbol-DE3j17Yl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BPllDPPS.js";import"./uniqBy-M64kr61G.js";import"./iteratee-UDge6fuf.js";import"./AnimatedItems-DduhreQ3.js";import"./useAnimationId-DPByLvsu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BvS7JAyC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-7-0YNMZJ.js";import"./tooltipContext-BPbc6Zci.js";import"./RegisterGraphicalItemId-DPzJCfll.js";import"./ErrorBarContext-Bs4CO-eU.js";import"./GraphicalItemClipPath-Dkj0uJsh.js";import"./SetGraphicalItem-DVMg4m0V.js";import"./getZIndexFromUnknown-CXpxDvsd.js";import"./useGraphicalItemIdentity-C2Y0PCNK.js";import"./dataEntryStyles-BmilyqJ9.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
