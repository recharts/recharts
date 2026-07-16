import{r as f,R as e}from"./iframe-DUrcY2US.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BFaz6XgS.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D23NNcc-.js";import{C as k}from"./ComposedChart-BFk3L6F0.js";import{X as K}from"./XAxis-CVek6dQA.js";import{L as v}from"./Legend-kJMEnL4G.js";import{B as s}from"./Bar-BMCbUDJ0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-jsyQa0HM.js";import"./Layer-CYHvsOgc.js";import"./resolveDefaultProps-Bkhh-EU7.js";import"./Text-DMamusUo.js";import"./DOMUtils-B_GdkGLj.js";import"./isWellBehavedNumber-U-rEAUF7.js";import"./Label-Dq5ZDKy5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-bKTnWuHr.js";import"./index-CZQ13dE7.js";import"./index-DfVYeqBk.js";import"./types-BMr8FEQl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BAoXnBM4.js";import"./throttle-u55YHgne.js";import"./RechartsWrapper-FovoggR2.js";import"./index-CeyJFFE6.js";import"./index-CE9cEvcF.js";import"./axisSelectors-BmIoikMn.js";import"./d3-scale-CjT_6rZL.js";import"./CartesianChart-UL0Qt6Ls.js";import"./chartDataContext-BTSN0B0I.js";import"./CategoricalChart-BS_7Qovh.js";import"./Symbols-DjWkH5r4.js";import"./symbol-DazsKvAc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C0Oicg6-.js";import"./uniqBy-QPknp_js.js";import"./iteratee-Chr2aMTO.js";import"./tooltipContext-BLJE2Shd.js";import"./AnimatedItems-BfwNRs0j.js";import"./useAnimationId-DrcrHxjP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D3ZfsELa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DSfcbHhF.js";import"./RegisterGraphicalItemId-BwmS1f__.js";import"./ErrorBarContext-Dl94M6VN.js";import"./GraphicalItemClipPath-BTF9cLBi.js";import"./SetGraphicalItem-CXjv9Cz3.js";import"./getZIndexFromUnknown-CZirEzLE.js";import"./graphicalItemSelectors-pAvrXMwD.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
