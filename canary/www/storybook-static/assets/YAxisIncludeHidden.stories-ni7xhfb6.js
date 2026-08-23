import{r as f,R as e}from"./iframe-sd_X8bAz.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C2ggo4hE.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DbArepHL.js";import{C as k}from"./ComposedChart-CKHYOg18.js";import{X as K}from"./XAxis-DWsFwFJj.js";import{L as v}from"./Legend-DjqwkuTB.js";import{B as s}from"./Bar-K3xhMzRz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BPdPutID.js";import"./Text-BxgHUkK-.js";import"./resolveDefaultProps-bueunEgf.js";import"./DOMUtils-koMSW9nS.js";import"./isWellBehavedNumber-D-FFIB2G.js";import"./useId-D6dXaFl8.js";import"./useBackwardsCompatibleTheme-CIVTy4Me.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DVaVbWL-.js";import"./index-DQHeaU2g.js";import"./index-B4I4wfZA.js";import"./RechartsWrapper-DMlKTkdw.js";import"./index-zmb0gbyG.js";import"./index-DZ983I6W.js";import"./throttle-2gz7Gpxn.js";import"./axisSelectors-DssFyd1_.js";import"./d3-scale-C-KqVawR.js";import"./renderedTicksSlice-BaC5qXRY.js";import"./CartesianAxis-BBBNYOHg.js";import"./Layer-D66jRg_t.js";import"./types-BfsDnBCz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BDbsS6IT.js";import"./chartDataContext-B6Fdiy4W.js";import"./CategoricalChart-Cqi_maR-.js";import"./Symbols-DJnF0opw.js";import"./symbol-BkWBsow3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B-jJqGvW.js";import"./uniqBy-C6azmfxA.js";import"./iteratee-BS0tXoF4.js";import"./AnimatedItems-B5JWoVFx.js";import"./useAnimationId-iF8C_Nzd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BTlwV0De.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CFyZWuxn.js";import"./tooltipContext-CmXZvicq.js";import"./RegisterGraphicalItemId-1K3qw_t6.js";import"./ErrorBarContext-CETtzPB_.js";import"./GraphicalItemClipPath-CoP9pSKP.js";import"./SetGraphicalItem-DN7uVNhv.js";import"./getZIndexFromUnknown-Cygexnhn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-rD-nYf5o.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
