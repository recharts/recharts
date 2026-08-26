import{r as f,R as e}from"./iframe-NQEVGrWF.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-8qH7fIq5.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CP33F7KF.js";import{C as k}from"./ComposedChart-Cgzz0lSa.js";import{X as K}from"./XAxis-C4UfJE-i.js";import{L as v}from"./Legend-Dbo2ZiNx.js";import{B as s}from"./Bar-FkVi__-R.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B9UYxviU.js";import"./Text-DakXKvvI.js";import"./resolveDefaultProps-CGKk3whs.js";import"./DOMUtils-CiNl2Unk.js";import"./isWellBehavedNumber-Dsnr4nI4.js";import"./useId-DDLNeh8Q.js";import"./useBackwardsCompatibleTheme-B1LwAuqZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-n1tytnrA.js";import"./index-B9NPWI0k.js";import"./index-CRVzIMtc.js";import"./RechartsWrapper-B7RacVym.js";import"./axisSelectors-5o3NJxix.js";import"./throttle-CkddbLRN.js";import"./d3-scale-C0DHVJ_t.js";import"./index-aCLowHDg.js";import"./index-B8SC5NXw.js";import"./renderedTicksSlice-Cd3xmYKN.js";import"./index-DGDKtdxG.js";import"./CartesianAxis-Ne7lbJuc.js";import"./Layer-BG4rdiih.js";import"./types-BJqKvaYz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BeI0IYJq.js";import"./chartDataContext-CvCTBKTZ.js";import"./CategoricalChart-CoPL0zMa.js";import"./Symbols-Z_H01_3F.js";import"./symbol-Bi3mL6io.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CMLR-6Dm.js";import"./uniqBy-CTK2n1vo.js";import"./iteratee-CTZe6gh0.js";import"./AnimatedItems-DrvzgAVh.js";import"./useAnimationId-CyMrVWUy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dp4_4O8h.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DwrA3FQy.js";import"./tooltipContext-CFcU80iG.js";import"./RegisterGraphicalItemId-DJee5cpk.js";import"./ErrorBarContext-D6gOrQXq.js";import"./GraphicalItemClipPath-Bh5K_QLr.js";import"./SetGraphicalItem-D8Gbozo5.js";import"./getZIndexFromUnknown-CvWpadTN.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BjkPEz73.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
