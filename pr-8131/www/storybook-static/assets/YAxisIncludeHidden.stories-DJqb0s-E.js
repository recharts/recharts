import{r as f,R as e}from"./iframe-B0md2XL3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Dak2FPR9.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DA0iP-6p.js";import{C as k}from"./ComposedChart-CunuTAo6.js";import{X as K}from"./XAxis-DLCMfyHC.js";import{L as v}from"./Legend-DtVtA_Ey.js";import{B as a}from"./Bar-BZBdz_4C.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B4OtwMWB.js";import"./Text-iaFwzHQc.js";import"./resolveDefaultProps-DYFy43g1.js";import"./DOMUtils-BnN7LMKo.js";import"./ZIndexLayer-n48hyeCj.js";import"./index-B6b7n9vZ.js";import"./index-CoDrYRaw.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-EKUmLX1r.js";import"./throttle-Bg4_NSFj.js";import"./axisSelectors-CGXaSNKn.js";import"./d3-scale-uqFZU7-w.js";import"./CartesianAxis-ib9y6Jw_.js";import"./Layer-CEcbE5Mj.js";import"./types-k-hf9hch.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CmqrGULL.js";import"./index-B1ySaIl-.js";import"./index-GRpTxPRT.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CWXf9YtC.js";import"./index-CPY9oK3E.js";import"./fillDefinitions-3Vzegl5l.js";import"./CartesianChart-8QvfRZzW.js";import"./ZIndexPortal-CrQK9kpR.js";import"./CategoricalChart-niTwkvl-.js";import"./Symbols-D_2SQKur.js";import"./symbol-CSqYEM7h.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DFimtnCZ.js";import"./uniqBy-BlUnuxiL.js";import"./iteratee-C8WNKkID.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CC8uMe5u.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DtE2sp0d.js";import"./useAnimationId-OzV8hXkE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DacyCGB1.js";import"./tooltipContext-9K8_RuoB.js";import"./dataEntryStyles-QaPc2U0F.js";import"./ErrorBarContext-CrVPyI6s.js";import"./activeStyles-CvpZ-3cp.js";import"./SetGraphicalItem-fxalM_Sw.js";import"./getZIndexFromUnknown-DsG5JjyG.js";import"./useEffectiveDataKey-B6E0gPoB.js";import"./omit-Do7fl70z.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
