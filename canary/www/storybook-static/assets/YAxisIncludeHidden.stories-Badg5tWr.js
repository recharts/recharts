import{r as f,R as e}from"./iframe-Bw423yT3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-OVaFJ7CI.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C0Ur0qQv.js";import{C as k}from"./ComposedChart-Cz46LnAr.js";import{X as K}from"./XAxis-DoB4s5YX.js";import{L as v}from"./Legend-BDuWMGHQ.js";import{B as s}from"./Bar-KrOtFTVD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CDuT1dKE.js";import"./Text-C_UyMP2R.js";import"./resolveDefaultProps-DecYMRDs.js";import"./DOMUtils-B-o7bCMD.js";import"./isWellBehavedNumber-Bhsok9Kl.js";import"./useId-DVN36WJe.js";import"./useBackwardsCompatibleTheme-BiX6i8Ds.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BMLxUbw3.js";import"./index-CSmn3lR3.js";import"./index-Cmb77t22.js";import"./RechartsWrapper-Bq4pCedS.js";import"./index-DY-6WoYl.js";import"./index-Dzxogdh4.js";import"./throttle-DoQ6jmeU.js";import"./axisSelectors-DvFF09lq.js";import"./d3-scale-B6w1DC_B.js";import"./renderedTicksSlice-C7gnJRFb.js";import"./CartesianAxis-Crdg7aw6.js";import"./Layer-D4oXIaGo.js";import"./types-Ds-DwS6F.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-KYAmso8l.js";import"./chartDataContext-ChmL2TgJ.js";import"./CategoricalChart-BFEAf3EH.js";import"./Symbols-BuIuBD8Q.js";import"./symbol-CqIeDhWk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ChV6ndkv.js";import"./uniqBy-DXUX_vZx.js";import"./iteratee-CM1mNqCJ.js";import"./AnimatedItems-hYYLyghD.js";import"./useAnimationId-Ys0eqrlL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B-9AixLW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DXmjz54Y.js";import"./tooltipContext-DCAYRXV5.js";import"./RegisterGraphicalItemId-C_cjgYuq.js";import"./ErrorBarContext-BUSWNFOb.js";import"./GraphicalItemClipPath-C6OEajox.js";import"./SetGraphicalItem-OiZoorhv.js";import"./getZIndexFromUnknown-BT_u-srI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DR5-8UeR.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
