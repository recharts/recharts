import{r as f,R as e}from"./iframe-BfpZEj1J.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BjTIc8Tf.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DN9OEqSU.js";import{C as k}from"./ComposedChart-sYHyq_r0.js";import{X as K}from"./XAxis-CaBw27aw.js";import{L as v}from"./Legend-BUEXHc_c.js";import{B as a}from"./Bar-DG_3Vyc9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cr-kSyez.js";import"./Text-C5CT5OBg.js";import"./resolveDefaultProps-RgMSUlUO.js";import"./pageBackground-DtTiB4cX.js";import"./useId-CWVkYNpQ.js";import"./ZIndexLayer-BnqS0DyP.js";import"./index-lWFIbTSl.js";import"./index-BjD6SDXa.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D5cajvkJ.js";import"./throttle-of37Yc3d.js";import"./dataEntryStyles-B31S2PZ0.js";import"./axisSelectors-DdEmqG6y.js";import"./d3-scale-DAHzu_9m.js";import"./CartesianAxis-ChtcS9gQ.js";import"./Layer-CLoP9xkX.js";import"./types-Dmnhw6yf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DAkeOnVU.js";import"./index-BZ99J-Wl.js";import"./index-Wmom0di-.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DgjurVnr.js";import"./index-CWp6QAhS.js";import"./CartesianChart-BMikS9ic.js";import"./chartDataContext-CDRBSiAQ.js";import"./CategoricalChart-AcKzUHIb.js";import"./Symbols-DlN3yTjK.js";import"./symbol-WMObR4nv.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ESpol_qM.js";import"./uniqBy-C05yYfI4.js";import"./iteratee-UOUNNVON.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles--hoQ05pe.js";import"./useAnimationId-CO5y2Yl_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DBeYy_hq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CX9J7Siy.js";import"./tooltipContext-BGMe3OR6.js";import"./RegisterGraphicalItemId-B270wFxD.js";import"./ErrorBarContext-CGuCRP-n.js";import"./SetGraphicalItem-BEEPPsSN.js";import"./getZIndexFromUnknown-xdrsezLL.js";import"./useEffectiveDataKey-CijXZAWm.js";import"./omit-CliYB69i.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
