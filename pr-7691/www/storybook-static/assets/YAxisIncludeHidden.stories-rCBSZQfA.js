import{r as f,R as e}from"./iframe-CIi4aQFr.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-NZvB3wWl.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dh5k7YSi.js";import{C as k}from"./ComposedChart-B_APHvQA.js";import{X as K}from"./XAxis-CiR2CsZh.js";import{L as v}from"./Legend-DiuqNEG1.js";import{B as s}from"./Bar-Cw_PFGvd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-_CQ4siSe.js";import"./Text-MCLT9Uur.js";import"./resolveDefaultProps-DFD1zbAv.js";import"./DOMUtils-BGqmQoYm.js";import"./isWellBehavedNumber-C0qU1KvT.js";import"./useId-6CqpgxoT.js";import"./useBackwardsCompatibleTheme-rhWVmcC-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-1sxgmC4q.js";import"./index-b81EtH6z.js";import"./index-glf-Y2ea.js";import"./RechartsWrapper-ZkQqyZzz.js";import"./index-DIad8aWY.js";import"./index-DQ9ajMSc.js";import"./throttle-DwQobNkr.js";import"./axisSelectors-B5t0SRDA.js";import"./d3-scale-DpZDns7V.js";import"./renderedTicksSlice-CDlJiGOR.js";import"./CartesianAxis-DFqSm48C.js";import"./Layer--pVrB_zY.js";import"./types-jFK-aXqG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D66kwqNc.js";import"./chartDataContext-Dyx-NDOp.js";import"./CategoricalChart-DmxebrUR.js";import"./Symbols-DmvYGZj0.js";import"./symbol-Bh1A56tJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BIPd_XJO.js";import"./uniqBy-Dpw5nYtX.js";import"./iteratee-C1zppXlK.js";import"./AnimatedItems-BDFnApNF.js";import"./useAnimationId-DYWYqd07.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DZaoOiFu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DOGuq5rw.js";import"./tooltipContext-JKcJBh3_.js";import"./RegisterGraphicalItemId-Bb9-v4SQ.js";import"./ErrorBarContext-Dx6F5PJo.js";import"./GraphicalItemClipPath-3c2R7Wr9.js";import"./SetGraphicalItem-BSa5SMWZ.js";import"./getZIndexFromUnknown-DTjY6b-w.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DDMdjh60.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
