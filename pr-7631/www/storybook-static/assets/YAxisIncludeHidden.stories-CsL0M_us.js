import{r as f,R as e}from"./iframe-D8LGzSZk.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D48rI8id.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D4In7Qwm.js";import{C as k}from"./ComposedChart-DvTjgPom.js";import{X as K}from"./XAxis-C_x0Pf4s.js";import{L as v}from"./Legend-DK3nJZyc.js";import{B as s}from"./Bar-T1UWal2Z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bqhs0VHz.js";import"./Text-Ck4AHDur.js";import"./resolveDefaultProps-BeJ0S4OV.js";import"./DOMUtils-wR-VJIN5.js";import"./isWellBehavedNumber-D4yK7wtr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DHXeXlB8.js";import"./index-NWBmwsqT.js";import"./index-BaqTm3t4.js";import"./RechartsWrapper-CZZbYxLA.js";import"./index-fhqam811.js";import"./index-DA6ZImtD.js";import"./throttle-DBP8ZUoh.js";import"./axisSelectors-BOb7-s4k.js";import"./d3-scale-MiqNvyLk.js";import"./renderedTicksSlice-CA4Xyl-r.js";import"./CartesianAxis-B5BkrXXa.js";import"./Layer-BAr2SIyH.js";import"./types-DdZOgyMd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CPh4O7nx.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D_d2iI6W.js";import"./chartDataContext-Cw__b2Gb.js";import"./CategoricalChart-CdB0xgvp.js";import"./Symbols-hPRj1Yr-.js";import"./symbol-Ds5VUmm2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-_N-y_9xm.js";import"./uniqBy-BhmhM53_.js";import"./iteratee-BE8kvPGN.js";import"./tooltipContext-swNBaiMH.js";import"./AnimatedItems-CHvu2d7x.js";import"./useAnimationId-BUbByZru.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-3deEvB_z.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-325OC07p.js";import"./RegisterGraphicalItemId-Co71u55H.js";import"./ErrorBarContext-CERdVHDL.js";import"./graphicalItemIdentity-Cj_WIcRj.js";import"./SetGraphicalItem-CcV_dEEg.js";import"./getZIndexFromUnknown-DxESD6Ma.js";import"./graphicalItemSelectors-B38khyAG.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
