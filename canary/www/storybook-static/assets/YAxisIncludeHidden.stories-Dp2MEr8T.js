import{r as f,R as e}from"./iframe-Cw8P3hI7.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bx4FAtcu.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B6SrSko1.js";import{C as k}from"./ComposedChart-D83sxKrW.js";import{X as K}from"./XAxis-C7unxNtQ.js";import{L as v}from"./Legend-CbroWVXU.js";import{B as a}from"./Bar-v_v98X2S.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D8Ksb0Iz.js";import"./Text-lKkTsdpR.js";import"./resolveDefaultProps-CZK0CaSv.js";import"./pageBackground-DDrjrzvM.js";import"./isWellBehavedNumber--H7puUW6.js";import"./useId-QOeP90DB.js";import"./useBackwardsCompatibleTheme-CjwvaY8l.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BaFHUXpS.js";import"./index-hRfftI4p.js";import"./index-eEhk_OBC.js";import"./axisSelectors-BdH8dG4d.js";import"./throttle-DncpYTAI.js";import"./d3-scale-Col4_9gh.js";import"./CartesianAxis-D3FnIIlC.js";import"./Layer-B6WOVeAl.js";import"./types-Cja1RPDM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-0hkvmYyZ.js";import"./index-DNE8XmUi.js";import"./index-7P4EwiS4.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DvLLBked.js";import"./index-C3ZLhd8h.js";import"./CartesianChart-D3LhbEp8.js";import"./chartDataContext-BishGWYu.js";import"./CategoricalChart-D-nlxD4a.js";import"./Symbols-CHIg8QPs.js";import"./symbol-CGYd6bv1.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DWhd5hY4.js";import"./uniqBy-DaOwrvky.js";import"./iteratee-Co4kz4Ct.js";import"./activeStyles-BMrFolB2.js";import"./useAnimationId-DEkX1hYZ.js";import"./dataEntryStyles-Bh3IKYdr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJCELj9r.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DrIy4kMk.js";import"./tooltipContext-DQ2wWc1J.js";import"./ErrorBarContext-CRE-8iE1.js";import"./GraphicalItemClipPath-DihUhOiW.js";import"./SetGraphicalItem-CCZzXSeX.js";import"./getZIndexFromUnknown-CJpURh_o.js";import"./useEffectiveDataKey-Dh15qlQo.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
