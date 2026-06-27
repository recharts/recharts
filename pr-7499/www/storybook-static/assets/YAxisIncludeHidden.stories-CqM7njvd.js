import{r as f,R as e}from"./iframe-D4-JHLuy.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CC97e3o5.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bl2qFY1A.js";import{C as k}from"./ComposedChart-mEpO2gCy.js";import{X as K}from"./XAxis-N0htLXAu.js";import{L as v}from"./Legend-Bw66eS2q.js";import{B as s}from"./Bar-B2UXGOb8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bi1X6SaN.js";import"./CartesianAxis-Da1hp6ds.js";import"./Layer-DnbVmNuk.js";import"./resolveDefaultProps-EHkzfb1T.js";import"./Text-hRlne3oO.js";import"./DOMUtils-BF23epo9.js";import"./isWellBehavedNumber-c1UrbL-U.js";import"./Label-Dbayb2l5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BIs2Zanq.js";import"./index-CU6oIHEI.js";import"./index-CTDSjMzl.js";import"./types-B4cCoOJo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CQdRGRjO.js";import"./immer-M-cM6uYj.js";import"./RechartsWrapper-DcHNLFvh.js";import"./index-CeIhzw3-.js";import"./index-BhPwJBge.js";import"./axisSelectors-BZHqEull.js";import"./d3-scale-DE_Hgqpo.js";import"./CartesianChart-DqNanfGA.js";import"./chartDataContext-CvNOo9hu.js";import"./CategoricalChart-D1W7mN8j.js";import"./Symbols-C6h_j7RC.js";import"./symbol-CTVt6zDq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C5ufnYD8.js";import"./uniqBy-P4FasXrF.js";import"./iteratee-DvCHZIMY.js";import"./tooltipContext-BhFrLeJy.js";import"./AnimatedItems-BaefG7CY.js";import"./useAnimationId-v_oz9FgZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BxeEDcjB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DA9DBhpV.js";import"./RegisterGraphicalItemId-D8VEn74g.js";import"./ErrorBarContext-eSnspfxP.js";import"./GraphicalItemClipPath-DMJ0OWmb.js";import"./SetGraphicalItem-CpRH4JNE.js";import"./getZIndexFromUnknown-D-KMxpfM.js";import"./graphicalItemSelectors-_Htsgb84.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
