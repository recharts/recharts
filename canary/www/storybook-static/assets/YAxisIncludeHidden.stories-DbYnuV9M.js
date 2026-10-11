import{r as f,R as e}from"./iframe-DfTkQmXX.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D7HuTQbC.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CK1KsdwK.js";import{C as k}from"./ComposedChart-DiyxxUr9.js";import{X as K}from"./XAxis-DoFqVwCs.js";import{L as v}from"./Legend-kahq9B90.js";import{B as a}from"./Bar-CsWWZj8O.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-SXOQPAQ7.js";import"./Text-B1vqPWff.js";import"./resolveDefaultProps-DzYEjrKC.js";import"./pageBackground-Bwi0dJpd.js";import"./isWellBehavedNumber-BsgXnYfL.js";import"./useId-Dtq_j8MX.js";import"./useBackwardsCompatibleTheme-19GRtDCt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DPEED4Hn.js";import"./index-Ba59U2Y8.js";import"./index-CsAN8_eV.js";import"./RechartsWrapper-DxAPF2hj.js";import"./axisSelectors-BlOH_04s.js";import"./throttle-BVJmkUn0.js";import"./d3-scale-DmiuGQyG.js";import"./index-CKqFjhNi.js";import"./index-MdrQnTxf.js";import"./renderedTicksSlice-Br06-4O3.js";import"./index-B9XVTu1f.js";import"./CartesianAxis-DeGU3T7P.js";import"./Layer-B_W6fsjz.js";import"./types-D3zQeAKc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DTtp-RK_.js";import"./chartDataContext-0kN3l1x_.js";import"./CategoricalChart-W3tTj6f2.js";import"./Symbols-CWELWbKP.js";import"./symbol-z0GjC0cu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cn3V7naw.js";import"./uniqBy-DNn1deX1.js";import"./iteratee-BgZoIgJ1.js";import"./activeStyles-BILREjwj.js";import"./useAnimationId-BR_dOTuF.js";import"./dataEntryStyles-U8DJYbqc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ct4TwQSW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CGTBxphT.js";import"./tooltipContext-woF_zInE.js";import"./ErrorBarContext-CN6zyEVc.js";import"./GraphicalItemClipPath-xajKPwIx.js";import"./SetGraphicalItem-CbFA-TWr.js";import"./getZIndexFromUnknown-C9lvVoUu.js";import"./useGraphicalItemIdentity-C9Z0QIkA.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
