import{r as f,R as e}from"./iframe-DTHZbTt-.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D2uAEQ_1.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CwvyUZAf.js";import{C as k}from"./ComposedChart-BGyl5BrV.js";import{X as K}from"./XAxis-DNNXvE0w.js";import{L as v}from"./Legend-CgLGi-UP.js";import{B as a}from"./Bar-CCoLMQ7B.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-0KYVoNB4.js";import"./Text-D1xR-i1r.js";import"./resolveDefaultProps-kDJk6VzV.js";import"./pageBackground-D-Popr0j.js";import"./isWellBehavedNumber-Bozcvyc-.js";import"./useId-BWpg6He6.js";import"./useBackwardsCompatibleTheme-Cm_dQqJG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer--bHJC1rV.js";import"./index-Fy1PXU7Z.js";import"./index-Daz8taF-.js";import"./axisSelectors-BOmHsD9v.js";import"./throttle-_YZWlOkj.js";import"./d3-scale-BmJqysRF.js";import"./CartesianAxis-Ck9hBcPI.js";import"./Layer-DW8M9VQm.js";import"./types-DfO2mLHa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D7ZIJ8O6.js";import"./index-DguN7IkA.js";import"./index-CIOmtNBi.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BEg2HwJ0.js";import"./index-CrHWP68A.js";import"./CartesianChart-CFx76W2A.js";import"./chartDataContext-HhXd6bIQ.js";import"./CategoricalChart-BuK74uML.js";import"./Symbols-Dgbdyewp.js";import"./symbol-DLWG4co-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BXtH78i8.js";import"./uniqBy-CKgXEfs_.js";import"./iteratee-CTtZA5q0.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-C3naVa7V.js";import"./useAnimationId-Dfuq3lyA.js";import"./dataEntryStyles-DkIuZeQk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DcH2ra7A.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CMR5ure_.js";import"./tooltipContext-CTVECIpw.js";import"./ErrorBarContext-BnuvGJQ5.js";import"./GraphicalItemClipPath-EAO5wM-I.js";import"./SetGraphicalItem-SNY8eCLu.js";import"./getZIndexFromUnknown-DT3X5VoN.js";import"./useEffectiveDataKey-5jqQvgZD.js";import"./omit-CQ1xPNua.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
