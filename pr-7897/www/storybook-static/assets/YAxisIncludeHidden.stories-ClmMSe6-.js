import{r as f,R as e}from"./iframe-B0sakJiE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CZvdB1-4.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C2JoSOuc.js";import{C as k}from"./ComposedChart-CtXhtoOd.js";import{X as K}from"./XAxis-BMxSzB1I.js";import{L as v}from"./Legend-C-A0bCgE.js";import{B as a}from"./Bar-C77BTpPn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CXhmz5va.js";import"./Text-YdcYRLnk.js";import"./resolveDefaultProps-ssIH5a_N.js";import"./DOMUtils-Cp8HsdRc.js";import"./isWellBehavedNumber-DiVn1zM4.js";import"./useId-ByzngA9u.js";import"./useBackwardsCompatibleTheme-yTt122QS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C7T7VX-U.js";import"./index-DsNYe81z.js";import"./index-BXQEz9WW.js";import"./RechartsWrapper-BpIUDAEt.js";import"./axisSelectors-DAvStXmd.js";import"./throttle-C7TX7owl.js";import"./d3-scale-CBENh8dV.js";import"./index-CshZKuHv.js";import"./index-B_LLgB3d.js";import"./renderedTicksSlice-BPkvdwOw.js";import"./index-7d7qLSfx.js";import"./CartesianAxis-6gx2DY-1.js";import"./Layer-CcOy9dqf.js";import"./types-BxUBO_Vd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BkOoMrfQ.js";import"./chartDataContext-Bl9ftmGr.js";import"./CategoricalChart-i5JvNUXt.js";import"./Symbols-VzAfvAVY.js";import"./symbol-BbQhUQUQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-4fRB1JA3.js";import"./uniqBy-CUMmWf25.js";import"./iteratee-XhZZr9kx.js";import"./AnimatedItems-DhCfcvtd.js";import"./useAnimationId-fISgZVPU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-RAovKYee.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DnkyzZr6.js";import"./tooltipContext-2RfoaFX7.js";import"./RegisterGraphicalItemId-BMnnO_Y6.js";import"./ErrorBarContext-lXq8p5sv.js";import"./GraphicalItemClipPath-DDSyttGC.js";import"./SetGraphicalItem-BtMMOS1d.js";import"./getZIndexFromUnknown-DgbGgnBi.js";import"./useGraphicalItemIdentity-CN480731.js";import"./dataEntryStyles-yonOgdkN.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
