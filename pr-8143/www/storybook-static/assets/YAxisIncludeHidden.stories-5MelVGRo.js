import{r as f,R as e}from"./iframe-DSNXEUn4.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis--soXrgEQ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dz2masNo.js";import{C as k}from"./ComposedChart-CzQ5p_-Z.js";import{X as K}from"./XAxis-BIkQK5N1.js";import{L as v}from"./Legend-DjfLBMPY.js";import{B as a}from"./Bar-BgnFkBBx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CjMpSSpc.js";import"./Text-Dh3TMTW4.js";import"./resolveDefaultProps-BJdscjTc.js";import"./DOMUtils-DYnHuNon.js";import"./ZIndexLayer-C5-QklmA.js";import"./index-Cw6XMlov.js";import"./index-CTOcRvfR.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DNTU8wxf.js";import"./throttle-Cql2XGyq.js";import"./axisSelectors-BVWqqaIl.js";import"./d3-scale-CACIKaWJ.js";import"./CartesianAxis-2YdOU3ps.js";import"./Layer-0vZKA5Ep.js";import"./types-CuvQqVdH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-cMVgg74g.js";import"./index-DdyQ4Lu6.js";import"./index-C8EE5WMp.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-tZbMCMkz.js";import"./index-OleNvKsM.js";import"./fillDefinitions-C4gnViBV.js";import"./CartesianChart-BNpv4aK0.js";import"./ZIndexPortal-Gym7d-4C.js";import"./CategoricalChart-D3zd10d6.js";import"./Symbols-B3a4QAq0.js";import"./symbol-DEPa4V4_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D1SkD3Zy.js";import"./uniqBy-CXWSUzZM.js";import"./iteratee-BQECtUia.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CdZv6dYa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BONo7sHl.js";import"./useAnimationId-De32QbAN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CnL30Scg.js";import"./tooltipContext-DMIzzqPs.js";import"./dataEntryStyles-CrqYJwRR.js";import"./ErrorBarContext-BvGzHJmi.js";import"./activeStyles-BwY0V3hq.js";import"./SetGraphicalItem-DTg-QJxg.js";import"./getZIndexFromUnknown-DES5Y2c2.js";import"./useEffectiveDataKey-Bw1Ayo3J.js";import"./omit-CiJhR5Nc.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
