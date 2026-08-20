import{r as f,R as e}from"./iframe-BMoFzqLG.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DTyCZ8Eb.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D2eW6ynO.js";import{C as k}from"./ComposedChart--18maMFA.js";import{X as K}from"./XAxis-CPrZIqhG.js";import{L as v}from"./Legend-SafvJPhT.js";import{B as s}from"./Bar-BiRnOtXL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C2sliePj.js";import"./Text-CWW6I1yN.js";import"./resolveDefaultProps-NXPPdTlK.js";import"./DOMUtils-zP2FF411.js";import"./isWellBehavedNumber-Cv3QLhUl.js";import"./useId-Cuy8o_CS.js";import"./useBackwardsCompatibleTheme-CT0hL_b9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bb4jsnOQ.js";import"./index-DNJh02LB.js";import"./index-CSdHnYZf.js";import"./RechartsWrapper-BMT8ka8g.js";import"./index-DW75A43Y.js";import"./index-CCv9Fz61.js";import"./throttle-CMa4JKLf.js";import"./axisSelectors-DYuvxT8H.js";import"./d3-scale-CdpdmGXg.js";import"./renderedTicksSlice-DvPuc11_.js";import"./CartesianAxis-DOx4dBf7.js";import"./Layer-BF07rJeJ.js";import"./types-DnNtWK32.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C7RJi03t.js";import"./chartDataContext-CDnovleA.js";import"./CategoricalChart-e4TDW-CP.js";import"./Symbols-Bp-WiaMS.js";import"./symbol-DJVN4EQ-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DpDs9Wpk.js";import"./uniqBy-DxO4yvi9.js";import"./iteratee-D8knRFDr.js";import"./AnimatedItems-DtpOcSHY.js";import"./useAnimationId-DECqttvr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B-0Efefj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Deesho2z.js";import"./tooltipContext-BU0RtyTL.js";import"./RegisterGraphicalItemId-BWT7SWLX.js";import"./ErrorBarContext-gECkpo90.js";import"./GraphicalItemClipPath-4HDTpBwl.js";import"./SetGraphicalItem-4-n_cNOG.js";import"./getZIndexFromUnknown-DOodkGGT.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BoSXPO7u.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
