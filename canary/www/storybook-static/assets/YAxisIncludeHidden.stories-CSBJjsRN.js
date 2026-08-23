import{r as f,R as e}from"./iframe-Bva2xGHH.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B36u7uIT.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DeikvbmU.js";import{C as k}from"./ComposedChart-CvLJWAQC.js";import{X as K}from"./XAxis-CsoDjkEh.js";import{L as v}from"./Legend-D6c_RVFa.js";import{B as s}from"./Bar-Bjnhtopz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dki1vWaX.js";import"./Text-D8IJbXoV.js";import"./resolveDefaultProps-BuBoAocm.js";import"./DOMUtils-CMvwzHzQ.js";import"./isWellBehavedNumber-D9_2opJl.js";import"./useId-Bwx6_eZW.js";import"./useBackwardsCompatibleTheme-3vkLTFmK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B1sYnbf5.js";import"./index-Bo6z76Fs.js";import"./index-DT3MRaoS.js";import"./RechartsWrapper-DkrfE3IH.js";import"./index-VUoyG6xU.js";import"./index-EwtDjp0y.js";import"./throttle-CFyzV36U.js";import"./axisSelectors-1RAYR2bl.js";import"./d3-scale-CJSi8F9P.js";import"./renderedTicksSlice-CmjvxnPV.js";import"./CartesianAxis-aOVQqLXO.js";import"./Layer-PgPW5wj-.js";import"./types-CDHj9Y5Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-KP50bz7-.js";import"./chartDataContext-DHJzh3Cw.js";import"./CategoricalChart-DYOSFUHe.js";import"./Symbols-D9JQNcnZ.js";import"./symbol-8Tla0VKV.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BC3T1f5H.js";import"./uniqBy-CeO9av7b.js";import"./iteratee-WIaZd5o8.js";import"./AnimatedItems-Dw2l639N.js";import"./useAnimationId-DDHow2US.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BGcjrFAk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-zdhhOiSb.js";import"./tooltipContext-CjkCpUHj.js";import"./RegisterGraphicalItemId-CycuLbwA.js";import"./ErrorBarContext-tOF5cXSF.js";import"./GraphicalItemClipPath-D8nHpKQ-.js";import"./SetGraphicalItem-482J7PRy.js";import"./getZIndexFromUnknown-C0llVkwV.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CkKDZXGW.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
