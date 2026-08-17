import{r as f,R as e}from"./iframe-D_SBmach.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DDmw5Iip.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C-84-lKY.js";import{C as k}from"./ComposedChart-D6p63Jnk.js";import{X as K}from"./XAxis-DH-ZgwOK.js";import{L as v}from"./Legend-DMOWzC1s.js";import{B as s}from"./Bar-CuhljhLO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CdDqsnQd.js";import"./Text-Bw10gxla.js";import"./resolveDefaultProps-Bvyrx_D_.js";import"./DOMUtils-DrunKDJC.js";import"./isWellBehavedNumber-CqdfCsRm.js";import"./useBackwardsCompatibleTheme-CD7phNhZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B6Mf8DJp.js";import"./index-cqta4xpR.js";import"./index-B3RrYXmh.js";import"./RechartsWrapper-CFoCu-Y8.js";import"./index-rdN2tPCT.js";import"./index-Dl7bNBwv.js";import"./throttle-Dlx_LjAj.js";import"./axisSelectors-T3miAVW7.js";import"./d3-scale-BqLpL1Tc.js";import"./renderedTicksSlice-D04XWQ7B.js";import"./CartesianAxis-BQ5_-jT8.js";import"./Layer-Be605v_j.js";import"./types-CKo4Bnww.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-TtiOfZnr.js";import"./chartDataContext-DBogxY-2.js";import"./CategoricalChart-lLmfaMcS.js";import"./Symbols-BcJmvpQX.js";import"./symbol-D3RE43u2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DsoUZQYy.js";import"./uniqBy-DSeKXx74.js";import"./iteratee-C0hKcmwL.js";import"./AnimatedItems-DZGph_C9.js";import"./useAnimationId-BA2h0Ua8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DL8Pps38.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CZ0w88RB.js";import"./tooltipContext-j8SRSGe2.js";import"./RegisterGraphicalItemId-Cdozmspz.js";import"./ErrorBarContext-B-lCMwxo.js";import"./GraphicalItemClipPath-D8_vcKpW.js";import"./SetGraphicalItem-BiSwI4Xl.js";import"./getZIndexFromUnknown-Dk9H2hpn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DMdb4hau.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
