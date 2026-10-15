import{r as f,R as e}from"./iframe-CjAZXmgk.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CunYyPtb.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DZ6wU0kL.js";import{C as k}from"./ComposedChart-C9HbEoPU.js";import{X as K}from"./XAxis-XXYcX2bn.js";import{L as v}from"./Legend-DMbKw1iM.js";import{B as a}from"./Bar-I4IqMcPO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DnpXC07H.js";import"./Text-VSZhuuVN.js";import"./resolveDefaultProps-B3dy_A6W.js";import"./pageBackground-CYQU4eM8.js";import"./isWellBehavedNumber-CbOfPh0Q.js";import"./useId-UofRKXbz.js";import"./useBackwardsCompatibleTheme-C26HYKO8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-maUeBX7p.js";import"./index-CXqdHhNs.js";import"./index-D72PX-EN.js";import"./axisSelectors-DVMe8D3h.js";import"./throttle-aHpS-uJF.js";import"./d3-scale-Cdy5oRLL.js";import"./CartesianAxis-CNPqH8LV.js";import"./Layer-CMYvDThQ.js";import"./types-BUTy-eCs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DRvvM2hj.js";import"./index-CgP4dGwF.js";import"./index-DoglCRE6.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-C1tX5Xq9.js";import"./index-jRxYEVM9.js";import"./CartesianChart-Bi3Tf3h4.js";import"./chartDataContext-Brj1C6P1.js";import"./CategoricalChart-ChU13xsV.js";import"./Symbols-uvqP7PSU.js";import"./symbol-DCSxYWeK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B7ar2O_j.js";import"./uniqBy-DzMYEmyq.js";import"./iteratee-BZjhhQST.js";import"./activeStyles-BjWwonc4.js";import"./useAnimationId-BxmhNVS4.js";import"./dataEntryStyles-BHBmvArk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cg0Vumjf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Lt_dXYUR.js";import"./tooltipContext-BjJ9NNny.js";import"./ErrorBarContext-CzSreuRh.js";import"./GraphicalItemClipPath-uyo9nSDN.js";import"./SetGraphicalItem-D6iWzq9o.js";import"./getZIndexFromUnknown-BvIR26nO.js";import"./useEffectiveDataKey-NmC8up5p.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
