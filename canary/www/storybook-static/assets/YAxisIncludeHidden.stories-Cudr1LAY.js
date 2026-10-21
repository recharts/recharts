import{r as f,R as e}from"./iframe-BFObQXXM.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DaKTxPc7.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BvSBG_sk.js";import{C as k}from"./ComposedChart-DfJYfYyB.js";import{X as K}from"./XAxis-qu1te6gL.js";import{L as v}from"./Legend-BUrmqvrT.js";import{B as a}from"./Bar-PsQrhJgr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DDOQ4R0s.js";import"./Text-CJhUB4hq.js";import"./resolveDefaultProps-BRFxqhI5.js";import"./pageBackground-C-W7t-2X.js";import"./isWellBehavedNumber-Di8XhGY_.js";import"./useId-C4vD49YQ.js";import"./useBackwardsCompatibleTheme-SoWlTCM6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dx_I1S2M.js";import"./index-BDLQEm-M.js";import"./index-DuyOw6al.js";import"./axisSelectors-CVf0-qpU.js";import"./throttle-DjO6J8yc.js";import"./d3-scale-Da5OAhLE.js";import"./CartesianAxis-LKjUZ976.js";import"./Layer-B5sm7Diz.js";import"./types-D0QZpxYL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ElbwHqBe.js";import"./index-D88_648m.js";import"./index-DgBcae_n.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D0l9eNV0.js";import"./index-D3gbqmrd.js";import"./CartesianChart-D-DmleFH.js";import"./chartDataContext-DLE8D3iQ.js";import"./CategoricalChart-CTQAivkk.js";import"./Symbols-rXANFg6Z.js";import"./symbol-DPnnNtEa.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CATtOAUw.js";import"./uniqBy-Cqj_Zr9d.js";import"./iteratee-CKc5G6nr.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-CWTGeeaa.js";import"./useAnimationId-5IpIdjB8.js";import"./dataEntryStyles-BYgKVvun.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-X-8XVq24.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-3kPY9Bl6.js";import"./tooltipContext-CdkIG2hT.js";import"./ErrorBarContext-A6KbAgUZ.js";import"./GraphicalItemClipPath-Veko-L0U.js";import"./SetGraphicalItem-UiOjxlQM.js";import"./getZIndexFromUnknown-1u_AnGGE.js";import"./useEffectiveDataKey-DoMzN8uO.js";import"./omit-N4rjywGu.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
