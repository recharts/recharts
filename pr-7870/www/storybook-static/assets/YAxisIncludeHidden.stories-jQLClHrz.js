import{r as f,R as e}from"./iframe-DfzMHjuD.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CYvNJGV-.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D65nx7n2.js";import{C as k}from"./ComposedChart-BZJdnfJq.js";import{X as K}from"./XAxis-CcmvQ4-M.js";import{L as v}from"./Legend-D5XVzkm8.js";import{B as a}from"./Bar-Cf7SOWEu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DHYmqyDD.js";import"./Text-KIvPk-oI.js";import"./resolveDefaultProps-BhiSE-fR.js";import"./DOMUtils-DZvMhBn7.js";import"./isWellBehavedNumber-B84GX6Iq.js";import"./useId-jHWdyPm9.js";import"./useBackwardsCompatibleTheme-BN8Sccns.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DjEP4vsT.js";import"./index-DQvdEvgc.js";import"./index-CHbvF_w5.js";import"./RechartsWrapper-Btc41qHc.js";import"./axisSelectors-Dv8-JHab.js";import"./throttle-B4jaia1x.js";import"./d3-scale-DkoGb7PH.js";import"./index-CrtWwB5P.js";import"./index-CHqtXhJ0.js";import"./renderedTicksSlice-YMBm5Aq7.js";import"./index-D-FQmlHp.js";import"./CartesianAxis-B2_CRuSv.js";import"./Layer-BgMBl2n9.js";import"./types-BoXpTlVd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CgfuN-gF.js";import"./chartDataContext-BU-za_rr.js";import"./CategoricalChart-BaFSqBAh.js";import"./Symbols-C-vyMKGy.js";import"./symbol-B2B_dEQS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-WbfHTGT4.js";import"./uniqBy-BbVKU46e.js";import"./iteratee-Biw9ni9t.js";import"./AnimatedItems-D8ukjbdC.js";import"./useAnimationId-BwLSFp-D.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D_LZlwBF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CUP96Mlj.js";import"./tooltipContext-DrzzqN4f.js";import"./RegisterGraphicalItemId-FhHKtG3E.js";import"./ErrorBarContext-CbViVQBZ.js";import"./GraphicalItemClipPath-qYVsG-0u.js";import"./SetGraphicalItem-CfEkxgRj.js";import"./getZIndexFromUnknown-B6OJjnBR.js";import"./useGraphicalItemIdentity-CnOmH2BL.js";import"./dataEntryStyles-n1cjPY1K.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
