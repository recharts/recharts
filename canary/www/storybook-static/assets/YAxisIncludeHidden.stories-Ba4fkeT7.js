import{r as f,R as e}from"./iframe-3bLAQ3jn.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CLk6Jkaa.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-MjxnTwUQ.js";import{C as k}from"./ComposedChart-DG0emu8-.js";import{X as K}from"./XAxis-CHp4l0kA.js";import{L as v}from"./Legend-C7BG0kVL.js";import{B as a}from"./Bar-BITF_p-9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dn58gwL2.js";import"./Text-DqxBCtXi.js";import"./resolveDefaultProps-aDW5W-_U.js";import"./pageBackground-2DSYbj3P.js";import"./isWellBehavedNumber-BX_nblg7.js";import"./useId-BfAkDmBs.js";import"./useBackwardsCompatibleTheme-CCnkHGsk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DiKAWbLw.js";import"./index-awsJe2Eb.js";import"./index-xiU2DbNU.js";import"./RechartsWrapper-7ESk0vAy.js";import"./axisSelectors-qjgTgHdP.js";import"./throttle-BuQ3fxbC.js";import"./d3-scale-CEKTBlSM.js";import"./index-DCRVqNzU.js";import"./index-3A7c9_Pr.js";import"./renderedTicksSlice-C8ZppDJj.js";import"./index-6Ojv9TCM.js";import"./CartesianAxis-aAySesk6.js";import"./Layer-BIgar30Y.js";import"./types-DN7oIxRd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C-eExA3r.js";import"./chartDataContext-DAaLengz.js";import"./CategoricalChart-DMmsyMWW.js";import"./Symbols-DAUBFSn8.js";import"./symbol-DyMfbL19.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BkucEV4P.js";import"./uniqBy-Dyl9KF0J.js";import"./iteratee-CzxOMWv0.js";import"./activeStyles-CAdLKBhw.js";import"./useAnimationId-Bz90LZyV.js";import"./dataEntryStyles-BmtIjxjW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-G6aPnbc1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6QRbruv.js";import"./tooltipContext-L-_sEKJl.js";import"./ErrorBarContext-CU2IPWFH.js";import"./GraphicalItemClipPath-DfyNoqlW.js";import"./SetGraphicalItem-DodAswVv.js";import"./getZIndexFromUnknown-DPsHbfLH.js";import"./useGraphicalItemIdentity-mnMFiUCN.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
