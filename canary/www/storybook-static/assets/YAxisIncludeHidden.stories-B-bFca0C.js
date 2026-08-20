import{r as f,R as e}from"./iframe-1ThqpvbR.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B1czIw6R.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D1UhtHk3.js";import{C as k}from"./ComposedChart-C-kp7sV2.js";import{X as K}from"./XAxis-P8CW3MKP.js";import{L as v}from"./Legend-DQdCByvU.js";import{B as s}from"./Bar-bFLAAD1S.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dga6ObK8.js";import"./Text-MDWEE3g_.js";import"./resolveDefaultProps-DArzca5M.js";import"./DOMUtils-BsT2H8yg.js";import"./isWellBehavedNumber-B7CQu1xd.js";import"./useId-Cq2DHNjh.js";import"./useBackwardsCompatibleTheme-CdEwSBID.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B6xphlKa.js";import"./index-DoTHKFlr.js";import"./index-QzMa9_Xi.js";import"./RechartsWrapper-DcjLdZwM.js";import"./index-CfQ7Fwii.js";import"./index-CktiEatn.js";import"./throttle-C73VAA69.js";import"./axisSelectors-1futPsBe.js";import"./d3-scale-nVhhBbRx.js";import"./renderedTicksSlice-0CGdVobN.js";import"./CartesianAxis-LO87TYgw.js";import"./Layer-CO3sdEK1.js";import"./types-BACZxUTO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-dewq0r_z.js";import"./chartDataContext-DvyAzMjZ.js";import"./CategoricalChart-XR-igInW.js";import"./Symbols-CBU3aRDI.js";import"./symbol-III9KfYB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D_JS3Ekf.js";import"./uniqBy-BWHb0M0I.js";import"./iteratee-DkQJTWAO.js";import"./AnimatedItems-CScMa6hv.js";import"./useAnimationId-xKJzFs5I.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DlLkmtYk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BlimohsT.js";import"./tooltipContext-CxbY5XPu.js";import"./RegisterGraphicalItemId-DZFAuRVF.js";import"./ErrorBarContext-DBffz6et.js";import"./GraphicalItemClipPath-Tv0C2Wnw.js";import"./SetGraphicalItem-DGTvGn78.js";import"./getZIndexFromUnknown-Bxz2s-Sx.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-GcNb_05X.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
