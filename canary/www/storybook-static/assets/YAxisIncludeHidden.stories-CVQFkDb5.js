import{r as f,R as e}from"./iframe-vymQxHWj.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C5MuLC6_.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CKW_xCBG.js";import{C as k}from"./ComposedChart-Cp91ph6L.js";import{X as K}from"./XAxis-Bzr2Ibny.js";import{L as v}from"./Legend-CZiWPHM0.js";import{B as s}from"./Bar-DCO0mLA3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CMMqvv98.js";import"./Text-BroBeAan.js";import"./resolveDefaultProps-D1QpgZPc.js";import"./DOMUtils-BKNZKxmm.js";import"./isWellBehavedNumber-CX2OxNKy.js";import"./useId-DUfTRFy5.js";import"./useBackwardsCompatibleTheme-DlCKuGJZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ChwVVG6J.js";import"./index-DA8rq6pv.js";import"./index-BGTNdYjX.js";import"./RechartsWrapper-98W6zG7g.js";import"./index-Cl4zISxW.js";import"./index-C2Yz5dWj.js";import"./throttle-BK01krp9.js";import"./axisSelectors-qkXPFIdN.js";import"./d3-scale-shLsO6db.js";import"./renderedTicksSlice-_g-coWrV.js";import"./CartesianAxis-CmNHn6lS.js";import"./Layer-DHaSl27L.js";import"./types-ZBx8sWKw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D1QWtDZ4.js";import"./chartDataContext-CLrXA2d3.js";import"./CategoricalChart-htsvTMax.js";import"./Symbols-DK4z7fEx.js";import"./symbol-taMf7PYK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CqDgkesb.js";import"./uniqBy-Cz9SOFAs.js";import"./iteratee-Dg79fSga.js";import"./AnimatedItems-BAUw0A61.js";import"./useAnimationId-DSN2oeL8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-5xjAPvdj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Uk3GF-jB.js";import"./tooltipContext-BNSiOswh.js";import"./RegisterGraphicalItemId-DsxpdmKR.js";import"./ErrorBarContext-D9mVK9PP.js";import"./GraphicalItemClipPath-LHrRH_dp.js";import"./SetGraphicalItem-BeZQQame.js";import"./getZIndexFromUnknown-BaZocLEn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-1S1dbJJ6.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
