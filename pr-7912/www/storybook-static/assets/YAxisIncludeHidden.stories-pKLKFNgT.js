import{r as f,R as e}from"./iframe-zVk88q-r.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BU4R0oLg.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DfutBn7L.js";import{C as k}from"./ComposedChart-CLoKJB1N.js";import{X as K}from"./XAxis-DfHugD0J.js";import{L as v}from"./Legend-O59i4-Ol.js";import{B as a}from"./Bar-DfAi5BdA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CrnAbRyD.js";import"./Text-Nx4ACQwF.js";import"./resolveDefaultProps-B_GPAkFH.js";import"./DOMUtils-Dnj4_Ujh.js";import"./isWellBehavedNumber-C-ZPk_Xp.js";import"./useId-BC8SsZ2L.js";import"./useBackwardsCompatibleTheme-BjS2fGJi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-r6epNlFr.js";import"./index-DsALRTV8.js";import"./index-Bk0bK2TA.js";import"./RechartsWrapper-C0-bRbC3.js";import"./axisSelectors-CmXBEtTu.js";import"./throttle-BmkgAj5t.js";import"./d3-scale-CFGG9Jl0.js";import"./index-fUo0OINa.js";import"./index-DlbGxR67.js";import"./renderedTicksSlice-BX5u_Wlp.js";import"./index-C7LumEWu.js";import"./CartesianAxis-CfxKlxox.js";import"./Layer-lcnk2Jvi.js";import"./types-gJ-qKTie.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CaeWlYzw.js";import"./chartDataContext-2A6w0qLe.js";import"./CategoricalChart-DJLnAv9C.js";import"./Symbols-CCBoxX71.js";import"./symbol-BjLCTHgg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dc53Yk5t.js";import"./uniqBy-54ckHNjc.js";import"./iteratee-CnMF74mw.js";import"./AnimatedItems-CE9fFFYl.js";import"./useAnimationId-DztKFKRO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-o8c6UGkH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-a-OI7kZz.js";import"./tooltipContext-t_fGIXBw.js";import"./RegisterGraphicalItemId-DbfLY7XL.js";import"./ErrorBarContext-DAwElSG5.js";import"./GraphicalItemClipPath-BL0H_9p-.js";import"./SetGraphicalItem-1sdGamMS.js";import"./getZIndexFromUnknown-CEffNke9.js";import"./useGraphicalItemIdentity-D7Hr4JLm.js";import"./dataEntryStyles-D5I8d5IK.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
