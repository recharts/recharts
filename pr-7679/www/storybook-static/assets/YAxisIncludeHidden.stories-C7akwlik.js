import{r as f,R as e}from"./iframe-COdQ-_i9.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Dgz3mKRa.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BAUHEZhm.js";import{C as k}from"./ComposedChart-BtTR-vCs.js";import{X as K}from"./XAxis-LizApVv-.js";import{L as v}from"./Legend-f2h2KPX4.js";import{B as s}from"./Bar-D8h2gBO9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CFb-_bkR.js";import"./Text-BgPldVXh.js";import"./resolveDefaultProps-dt-7inwK.js";import"./DOMUtils-Di9E6LdJ.js";import"./isWellBehavedNumber-B44fORf2.js";import"./useId-CipAwz_I.js";import"./useBackwardsCompatibleTheme-Cu3drd5h.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BadBbMoS.js";import"./index-nH6MfLbp.js";import"./index-m-v483sf.js";import"./RechartsWrapper-BTy3ifzR.js";import"./index-DZp6-Cy2.js";import"./index-CaZNwhso.js";import"./throttle-DRdGH59w.js";import"./axisSelectors-DbJ1cRpx.js";import"./d3-scale-CMt_xflf.js";import"./renderedTicksSlice-hdjV5rOA.js";import"./CartesianAxis-gJenpmBs.js";import"./Layer-LpNLyWgX.js";import"./types-Blz_Jgjg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart--ZzFWipT.js";import"./chartDataContext-C8omdLZa.js";import"./CategoricalChart-BY1Qswpd.js";import"./Symbols-BcWxCTx9.js";import"./symbol-DWJ0aIu5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-sZVHnRLq.js";import"./uniqBy-CNCdFAnq.js";import"./iteratee-D1isbkYH.js";import"./AnimatedItems-ePeQa2pM.js";import"./useAnimationId-B94kpDIK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-H5GG1M9C.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CaEJ6Khj.js";import"./tooltipContext-P2uWBvLy.js";import"./RegisterGraphicalItemId-WjWZ93CB.js";import"./ErrorBarContext-C4XMoDIN.js";import"./GraphicalItemClipPath-BoTywd6M.js";import"./SetGraphicalItem-DdM0uyL7.js";import"./getZIndexFromUnknown-BsP6N-Q8.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CURy2YR3.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
