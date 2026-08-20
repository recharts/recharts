import{r as f,R as e}from"./iframe-CSFRbakT.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DYaDbF01.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DpZcKFY3.js";import{C as k}from"./ComposedChart-_ImOSsn2.js";import{X as K}from"./XAxis-qtAkwMmZ.js";import{L as v}from"./Legend-JfPnabH0.js";import{B as s}from"./Bar-zt5_IDi8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-wJcYTwit.js";import"./Text-D8YyLcux.js";import"./resolveDefaultProps-C2JgeEZu.js";import"./DOMUtils-DF5CrQ-h.js";import"./isWellBehavedNumber-93OW3PM3.js";import"./useId-BBLcWa_d.js";import"./useBackwardsCompatibleTheme-BSlqd8DY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CRsGh2jd.js";import"./index-LyfzYazm.js";import"./index-_5SE_e0D.js";import"./RechartsWrapper-CTT8y5Ry.js";import"./index-Kfu3TRgb.js";import"./index-DiZSJisN.js";import"./throttle-DU_ACcBv.js";import"./axisSelectors-KHPqbB-J.js";import"./d3-scale-DhuPkMBe.js";import"./renderedTicksSlice-BfSTwOrr.js";import"./CartesianAxis-BE0DelqG.js";import"./Layer-Cas4KfrT.js";import"./types-63Ql-Qpj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BCRGB0c7.js";import"./chartDataContext-BSDgfmf3.js";import"./CategoricalChart-DTfC0HTb.js";import"./Symbols-BBe6ZWzU.js";import"./symbol-DtBce2gr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DJQtsn9U.js";import"./uniqBy-Ccjwpzh7.js";import"./iteratee-NArAVAmk.js";import"./AnimatedItems-fBpE1aA1.js";import"./useAnimationId-CTzy6jqJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DOmjHg1E.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-r1PbrWOo.js";import"./tooltipContext-Dy7lrOE6.js";import"./RegisterGraphicalItemId-BifFS_04.js";import"./ErrorBarContext-B0XwT2-o.js";import"./GraphicalItemClipPath-BvYnrcJ_.js";import"./SetGraphicalItem-w8PwKgIn.js";import"./getZIndexFromUnknown-C1CqSoWs.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Dr-Kh0al.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
