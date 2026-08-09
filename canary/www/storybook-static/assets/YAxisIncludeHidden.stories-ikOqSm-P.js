import{r as f,R as e}from"./iframe-DIhQo_8Y.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DaA2UazR.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CGgr09GZ.js";import{C as k}from"./ComposedChart-CJrQmGqR.js";import{X as K}from"./XAxis-BpVdYfJg.js";import{L as v}from"./Legend-Ck9PLJoP.js";import{B as s}from"./Bar-Kz_BrgZq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CVkJGixO.js";import"./Text-5eA_PDhZ.js";import"./resolveDefaultProps-hi_Ykzi4.js";import"./DOMUtils-Cs86oaAG.js";import"./isWellBehavedNumber-BiD1hUdH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B8ZTodeV.js";import"./index-Dgm3vG4i.js";import"./index-BF8H9JZN.js";import"./RechartsWrapper-DRimQmLV.js";import"./index-BC5_sjA-.js";import"./index-RbONCBjN.js";import"./throttle-B5VRQcq4.js";import"./axisSelectors-Gg8H4O2J.js";import"./d3-scale-DTMlXSKJ.js";import"./renderedTicksSlice-Co5rDdJd.js";import"./CartesianAxis-4De8rCJ6.js";import"./Layer-BQPvkkvd.js";import"./types-ZiiagxD1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C_YQ-08p.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DwM9PUKm.js";import"./chartDataContext-DFyWuVHZ.js";import"./CategoricalChart-CgO2X-rw.js";import"./Symbols-DuXAJdRg.js";import"./symbol-BW1nMcv9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CD90jGAB.js";import"./uniqBy-DEkqq9OP.js";import"./iteratee-C_S5i7R9.js";import"./tooltipContext-C34pjxqs.js";import"./AnimatedItems-DEBP1yTo.js";import"./useAnimationId-CRkvHyGK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-brCqUJwM.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DPvlIPGu.js";import"./RegisterGraphicalItemId-DMf10IHd.js";import"./ErrorBarContext-RhNJ5kjd.js";import"./GraphicalItemClipPath-BlWn4Cda.js";import"./SetGraphicalItem-CDNxzvex.js";import"./getZIndexFromUnknown-CLUSxSKU.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BJfLPceb.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
