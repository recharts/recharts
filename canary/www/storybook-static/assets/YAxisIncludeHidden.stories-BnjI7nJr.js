import{r as f,R as e}from"./iframe-C98xM-14.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CaqCP2Lk.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-PFqQVngT.js";import{C as k}from"./ComposedChart-DEvNrsRG.js";import{X as K}from"./XAxis-CsWwdt7Q.js";import{L as v}from"./Legend-DuYK6dO2.js";import{B as s}from"./Bar-DyAmsiQM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-6WZ-bs73.js";import"./Text-CdsOrPG8.js";import"./resolveDefaultProps-BpgNO45K.js";import"./DOMUtils-Cyba50bX.js";import"./isWellBehavedNumber-B0B1V1Mw.js";import"./useId-gkj8hVD1.js";import"./useBackwardsCompatibleTheme-CnvikNkE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-_jlJOhPE.js";import"./index-BfkVHUSN.js";import"./index-lWYWFl_c.js";import"./RechartsWrapper-DNpWLRvv.js";import"./axisSelectors-DE9vQUUE.js";import"./throttle-Cpn-KPW0.js";import"./d3-scale-BIaFt0TH.js";import"./index-B33qjCts.js";import"./index-CRw9oTKs.js";import"./renderedTicksSlice-BVBdj9en.js";import"./index-Bwd0n8ve.js";import"./CartesianAxis-BhBvKKe-.js";import"./Layer-DV2USN9H.js";import"./types-C3nHa31Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DdfFkL89.js";import"./chartDataContext-BX4jELOi.js";import"./CategoricalChart-Cg6rdWul.js";import"./Symbols-D5VKxaV3.js";import"./symbol-Bb_1-nQc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BwcDYxj_.js";import"./uniqBy-KZWDygXq.js";import"./iteratee-CBQ5EdUG.js";import"./AnimatedItems-CTflnzuI.js";import"./useAnimationId-B6O86EG4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EqmP3HLD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-bQFjdaPv.js";import"./tooltipContext-CWvdZnjM.js";import"./RegisterGraphicalItemId-CrKJMoiy.js";import"./ErrorBarContext-eOyXWxlr.js";import"./GraphicalItemClipPath-Dn-XuIGK.js";import"./SetGraphicalItem-CJTGWUG8.js";import"./getZIndexFromUnknown-LWe_bofs.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BPErp3cx.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
