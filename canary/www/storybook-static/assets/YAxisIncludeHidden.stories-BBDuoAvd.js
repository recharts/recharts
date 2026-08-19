import{r as f,R as e}from"./iframe-Ce2LNmzq.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CHPMR7tu.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-1iBSzntV.js";import{C as k}from"./ComposedChart-D8QzjQGV.js";import{X as K}from"./XAxis-ChLxoQeP.js";import{L as v}from"./Legend-P00sCpER.js";import{B as s}from"./Bar-DENSUiUI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-E5RSdERr.js";import"./Text-1GNKdZPR.js";import"./resolveDefaultProps-Bt6qRPyP.js";import"./DOMUtils-DXjDSVEa.js";import"./isWellBehavedNumber-LiGS8Ktg.js";import"./useBackwardsCompatibleTheme-C9k5uHL0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-hciQBMwm.js";import"./index-CwWtniec.js";import"./index-A8_rJiXz.js";import"./RechartsWrapper-NruqEuMP.js";import"./index-CWtZ9yph.js";import"./index-C0AYEPvF.js";import"./throttle-BPcDKDas.js";import"./axisSelectors-nf5d_TCI.js";import"./d3-scale-uRAm4Q4g.js";import"./renderedTicksSlice-DRhSVK4R.js";import"./CartesianAxis-D_IJzMyn.js";import"./Layer-CmHiQhsD.js";import"./types-D9eaN5qP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C3QGU_Gm.js";import"./chartDataContext-mV7HyGJe.js";import"./CategoricalChart-CdBHij7l.js";import"./Symbols-Dl8ZAYeK.js";import"./symbol-DLuozwbz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-e8S935ma.js";import"./uniqBy-DM1WHRb1.js";import"./iteratee-DVWRkxa3.js";import"./AnimatedItems-EYOrwSGz.js";import"./useAnimationId-DJBKMCXo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CPJem9HH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DVN9EFMa.js";import"./tooltipContext-BREnZRk1.js";import"./RegisterGraphicalItemId-BhPsp4dD.js";import"./ErrorBarContext-z5kDqZ_L.js";import"./GraphicalItemClipPath-DPYSwVHo.js";import"./SetGraphicalItem-CX7uV2i5.js";import"./getZIndexFromUnknown--q-20xm9.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Dq6j4bYq.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
