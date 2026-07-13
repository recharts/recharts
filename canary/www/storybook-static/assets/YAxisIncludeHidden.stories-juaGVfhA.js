import{r as f,R as e}from"./iframe-upOKpTfC.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-0bXs_H74.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-3kJy4_5s.js";import{C as k}from"./ComposedChart-XkmqlV9y.js";import{X as K}from"./XAxis-g3--B4Im.js";import{L as v}from"./Legend-DEGermIn.js";import{B as s}from"./Bar-iRZfNah5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CO3H2wW4.js";import"./Layer-Bv6NwOOo.js";import"./resolveDefaultProps-C5MbGZTR.js";import"./Text-CuI103ie.js";import"./DOMUtils-BQfF-HWt.js";import"./isWellBehavedNumber-DrMtPoxC.js";import"./Label-CWWfz4NX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CN5osLDH.js";import"./index-fzhcIN9D.js";import"./index-BjDbck5L.js";import"./types-Bdshst7h.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-_aeWYehA.js";import"./throttle-DFA1f5tU.js";import"./RechartsWrapper-BGh022Wu.js";import"./index-C-2GXdQU.js";import"./index-Bjw8W24w.js";import"./axisSelectors-Bm__5HSH.js";import"./d3-scale-BoRQfYQu.js";import"./CartesianChart-C0cpSp27.js";import"./chartDataContext-CULDGz5L.js";import"./CategoricalChart-CtBwRsb8.js";import"./Symbols-BA34R3qP.js";import"./symbol-DwSoZbA9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DhZxMWZm.js";import"./uniqBy-CS9AwGpr.js";import"./iteratee-D3my6Ahn.js";import"./tooltipContext-RWH8ebVp.js";import"./AnimatedItems-DNy5Onjp.js";import"./useAnimationId-ypM0JLm_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CZyj3XrW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DdQ7UgVU.js";import"./RegisterGraphicalItemId-CKwYBx4V.js";import"./ErrorBarContext-BpEoBZZy.js";import"./GraphicalItemClipPath-CwmaU6d7.js";import"./SetGraphicalItem-DYmFEset.js";import"./getZIndexFromUnknown-D66vwzSu.js";import"./graphicalItemSelectors-DPG-mFl6.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
