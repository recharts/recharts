import{r as f,R as e}from"./iframe-DqR9Wcc8.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-aADwIUIe.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-xGZRRsol.js";import{C as k}from"./ComposedChart-mWNBd2dn.js";import{X as K}from"./XAxis-D6ZHtCxW.js";import{L as v}from"./Legend-BoNDQHF7.js";import{B as s}from"./Bar-DPbRF4M1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BYPDwyti.js";import"./Text-CCjVuIgd.js";import"./resolveDefaultProps-CE9KWHQ7.js";import"./DOMUtils-gqBnduPC.js";import"./isWellBehavedNumber-CwOhzfGR.js";import"./useId-DKdBWodA.js";import"./useBackwardsCompatibleTheme-CwCCGp3S.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CGt7Qqz1.js";import"./index-CbJoLlYH.js";import"./index-D7HcE4ER.js";import"./RechartsWrapper-1r2IRn89.js";import"./index-BM32474r.js";import"./index-Dri9MlSm.js";import"./throttle-Die-14D_.js";import"./axisSelectors-C4f15nEZ.js";import"./d3-scale-CAWaFyWJ.js";import"./renderedTicksSlice-D_2jrhVU.js";import"./CartesianAxis-1hhq5YML.js";import"./Layer-DIEU6Rsu.js";import"./types-CwWmwHzD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-sKen-XIs.js";import"./chartDataContext-CtOkxvrA.js";import"./CategoricalChart-IMV6Cr9c.js";import"./Symbols-BzCZOBO3.js";import"./symbol-Bi-bNY82.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B9s5QY5V.js";import"./uniqBy-BMuxe0j6.js";import"./iteratee-DmaCZN6x.js";import"./AnimatedItems-BnD_-gzN.js";import"./useAnimationId-BRWCn8G_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-rLnjQriQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-RlM9Arec.js";import"./tooltipContext-K_Y_fPPY.js";import"./RegisterGraphicalItemId-DE2Efd51.js";import"./ErrorBarContext-mgM-6MAT.js";import"./GraphicalItemClipPath-DlZT7n4i.js";import"./SetGraphicalItem-Y-0P1f8y.js";import"./getZIndexFromUnknown-DZV73zu6.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-vE6p_m8P.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
