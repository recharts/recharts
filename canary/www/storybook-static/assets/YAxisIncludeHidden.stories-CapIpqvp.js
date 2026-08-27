import{r as f,R as e}from"./iframe-DGsKi3sD.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CmpmKkx6.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-KX0_yctO.js";import{C as k}from"./ComposedChart-ZhGI63Ch.js";import{X as K}from"./XAxis-DC55o2jW.js";import{L as v}from"./Legend-CXKBkp4r.js";import{B as s}from"./Bar-CQp-Hl0X.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-kB9Gr9Je.js";import"./Text-ChCNWouT.js";import"./resolveDefaultProps-WH78MRVQ.js";import"./DOMUtils-Bj-nNPQP.js";import"./isWellBehavedNumber-O5p8iLqQ.js";import"./useId-DbfF67AC.js";import"./useBackwardsCompatibleTheme-CdHfIa1f.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C-hUG3-A.js";import"./index-Dco7y41f.js";import"./index-Bp6gYlCO.js";import"./RechartsWrapper-DYCPiSo2.js";import"./axisSelectors-DtyBM-5t.js";import"./throttle-DCh63S7N.js";import"./d3-scale-D5k0CP0B.js";import"./index-BcRP16iL.js";import"./index-C3o7ztbZ.js";import"./renderedTicksSlice-BV6OKQcy.js";import"./index-BUKcBCac.js";import"./CartesianAxis-BxHxH-nJ.js";import"./Layer-BEEnYnIh.js";import"./types-BYQ55WzM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DqPq6dfa.js";import"./chartDataContext-YSpCe_4G.js";import"./CategoricalChart-kDHsGv00.js";import"./Symbols-D4h-5pRv.js";import"./symbol-D4m_fLa8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BOCzr69a.js";import"./uniqBy-Bjp_9c9Z.js";import"./iteratee-3-ku6Z3Y.js";import"./AnimatedItems-oaPm5uVb.js";import"./useAnimationId-CpfROKBj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-QV_I5D3C.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D1-7_dRK.js";import"./tooltipContext-DlHtQETE.js";import"./RegisterGraphicalItemId-Ci3kKosu.js";import"./ErrorBarContext-Lyc5VGnS.js";import"./GraphicalItemClipPath-DAhebsqX.js";import"./SetGraphicalItem-TmtzSo0n.js";import"./getZIndexFromUnknown-CQKa5LhS.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C4ge5-Nz.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Re=["WithIncludeHidden"];export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
