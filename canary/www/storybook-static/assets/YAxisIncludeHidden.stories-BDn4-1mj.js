import{r as f,R as e}from"./iframe-BU3iqhog.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C4ehmAHw.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cpd3Oi8q.js";import{C as k}from"./ComposedChart-CnlQVWiV.js";import{X as K}from"./XAxis-DVT5C2oc.js";import{L as v}from"./Legend-D1_75WAs.js";import{B as a}from"./Bar-DXWVXWP6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BEIJZAIQ.js";import"./Text-BrjMZ7T0.js";import"./resolveDefaultProps-4q4hBHNx.js";import"./DOMUtils-CiCEa87M.js";import"./isWellBehavedNumber-DTANvM1I.js";import"./useId-C4wpt1HA.js";import"./useBackwardsCompatibleTheme-BMMiVQGL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D4v3Xv2l.js";import"./index-JOJ-brJb.js";import"./index-CKIb-o38.js";import"./RechartsWrapper-zJDpEykE.js";import"./axisSelectors-C9pjjfER.js";import"./throttle-Dtv6RWTH.js";import"./d3-scale-BBqyl05y.js";import"./index--oAu63xI.js";import"./index-BAJoWACv.js";import"./renderedTicksSlice-DJZNDnvY.js";import"./index-Crwgfq_Z.js";import"./CartesianAxis-DRURazzH.js";import"./Layer-BUBmv9mO.js";import"./types-Cp0AAwbW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C9c1nVF1.js";import"./chartDataContext-DjOyYX_x.js";import"./CategoricalChart-B34ld9nC.js";import"./Symbols-CaZgBRan.js";import"./symbol-DHqgtrrn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BuaCyz1B.js";import"./uniqBy-B0FmK-vV.js";import"./iteratee-Dq0J-PP4.js";import"./AnimatedItems-CSVnwEYt.js";import"./useAnimationId-BUaPZS0B.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-OOh_5Fv6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DFQKKGa8.js";import"./tooltipContext-d08g8X00.js";import"./RegisterGraphicalItemId-DfUeUgid.js";import"./ErrorBarContext-qidGP01Z.js";import"./GraphicalItemClipPath-DoWFsAsl.js";import"./SetGraphicalItem-Da1y71gX.js";import"./getZIndexFromUnknown-r6eeLjIP.js";import"./useGraphicalItemIdentity-CTbnTQeV.js";import"./dataEntryStyles-CU22C1tk.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
