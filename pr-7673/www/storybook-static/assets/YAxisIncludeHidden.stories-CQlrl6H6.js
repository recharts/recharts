import{r as f,R as e}from"./iframe-WAmwAwqv.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CvqgpJJX.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B7760TIp.js";import{C as k}from"./ComposedChart-CXlUTja7.js";import{X as K}from"./XAxis-C0HQ7bAn.js";import{L as v}from"./Legend-BexoLQlr.js";import{B as s}from"./Bar-DtzCBq5G.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BI58xTcy.js";import"./Text-BQOM4h-3.js";import"./resolveDefaultProps-SfzQDdEE.js";import"./DOMUtils-BipZejVj.js";import"./isWellBehavedNumber-BFdGE5VX.js";import"./useId-C6WCz-Hg.js";import"./useBackwardsCompatibleTheme-BbiUPV5J.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BMgwtUUQ.js";import"./index-dES25ELm.js";import"./index-BtWjEEaM.js";import"./RechartsWrapper-DKs-TVlY.js";import"./index-BrLHScrZ.js";import"./index-BaF8VV2T.js";import"./throttle-DaWJmTtS.js";import"./axisSelectors-P4MAoEAr.js";import"./d3-scale-B9CJnMVD.js";import"./renderedTicksSlice-QjUf-6mF.js";import"./CartesianAxis-BJa8Ix1s.js";import"./Layer-CduouMU4.js";import"./types-MF287rET.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-1FQk5Fvk.js";import"./chartDataContext-DyeMEqHY.js";import"./CategoricalChart-BhQV0u5E.js";import"./Symbols-DkWxdQn-.js";import"./symbol-BXLJz2oe.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DQMWT-KB.js";import"./uniqBy-D-IG-Bst.js";import"./iteratee-CJxJZXFJ.js";import"./AnimatedItems-Dygs4a37.js";import"./useAnimationId-DhhiM2kh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dn9uS56j.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C0CPvy3n.js";import"./tooltipContext-7QY3PMZJ.js";import"./RegisterGraphicalItemId-eBpDv0na.js";import"./ErrorBarContext-BIoHTUJq.js";import"./GraphicalItemClipPath-Dnbhxb72.js";import"./SetGraphicalItem-CTKvKbys.js";import"./getZIndexFromUnknown-DHVcH0sj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-bvq1Naac.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
