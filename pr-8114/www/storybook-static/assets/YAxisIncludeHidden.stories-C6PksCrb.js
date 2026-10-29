import{r as f,R as e}from"./iframe-C2PRwgnl.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CAHeoama.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-weNxwEm8.js";import{C as k}from"./ComposedChart-BLjSf-Hf.js";import{X as K}from"./XAxis-BncsxFZ4.js";import{L as v}from"./Legend-BvJGkDvQ.js";import{B as a}from"./Bar-BkX0fBVF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DdFUcTtW.js";import"./Text-D4lV4Imp.js";import"./resolveDefaultProps-aJLviuy-.js";import"./pageBackground-B4m54nd8.js";import"./ZIndexLayer-BWmWIjtz.js";import"./index-BtXSjXZr.js";import"./index-BqBIYX05.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DmG4l4yE.js";import"./throttle-CVlDdGyC.js";import"./axisSelectors-nSy-fV9M.js";import"./d3-scale-BIUnlP6Z.js";import"./CartesianAxis-DaiAwxt0.js";import"./Layer-botuDyHz.js";import"./types-CHq7dG9p.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-FbCZKIWz.js";import"./index-BxVmRSNz.js";import"./index-CkiHrneS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BOct7ur6.js";import"./index-BeFazHyq.js";import"./CartesianChart-CtjN8ua0.js";import"./ZIndexPortal-CKd--WGA.js";import"./CategoricalChart-gCAaZAhY.js";import"./Symbols-CiyVK5wN.js";import"./symbol-VU_gnnhL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cm5L0n6p.js";import"./uniqBy-B3CDwPKv.js";import"./iteratee-BrcMUC4D.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-Deq7UXnp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BnH84tO-.js";import"./useAnimationId-Dx5Gkjhg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BV6ZL_JX.js";import"./tooltipContext-DoS9_DwW.js";import"./dataEntryStyles-BHwXjzhI.js";import"./ErrorBarContext-C59RBxai.js";import"./activeStyles-a6dnVtfT.js";import"./SetGraphicalItem-DeBA8bqw.js";import"./getZIndexFromUnknown-C3Kmoc2F.js";import"./useEffectiveDataKey-lRQnp3q-.js";import"./omit-Cqn4cCIs.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
