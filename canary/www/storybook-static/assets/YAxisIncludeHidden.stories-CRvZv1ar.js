import{r as f,R as e}from"./iframe-BmTk4yvk.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BmZ1tujZ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Yn5j7TCZ.js";import{C as k}from"./ComposedChart-Bc1PW_h6.js";import{X as K}from"./XAxis-p_vhpROA.js";import{L as v}from"./Legend-zZbYOXdd.js";import{B as a}from"./Bar-DUH-v_z7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CYaQfkAd.js";import"./Text-U4GGp_wV.js";import"./resolveDefaultProps-Cn0PCCle.js";import"./pageBackground-QX1GlboQ.js";import"./ZIndexLayer-DvmFXfZN.js";import"./index-iOVTbJVR.js";import"./index-DmmaZxkJ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DyW5Xsuk.js";import"./throttle-C169ds0A.js";import"./axisSelectors-jta8-9EA.js";import"./d3-scale-B_DRoaP4.js";import"./CartesianAxis-DCukA67Z.js";import"./Layer-DW7OR7eh.js";import"./types-BwQb0UT4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dl_orwkE.js";import"./index-D6yCXLHc.js";import"./index-D-9h2rsp.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C4oIzQNw.js";import"./index-DOadfo9X.js";import"./CartesianChart-Fep-b6_D.js";import"./ZIndexPortal-CWm5UVGf.js";import"./CategoricalChart-D92RpbLO.js";import"./Symbols-C5McylxL.js";import"./symbol-DPYOxqZZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DovHdXKI.js";import"./uniqBy-CVbVBefT.js";import"./iteratee-Hm5_kqpS.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DAIqpE2b.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BQWOwYE7.js";import"./useAnimationId-Crx209Lx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DOogD9OD.js";import"./tooltipContext-DyPZF-9p.js";import"./dataEntryStyles-D6I3YMTN.js";import"./ErrorBarContext-BA2m5B_Z.js";import"./activeStyles-PiE_qWsW.js";import"./SetGraphicalItem-DFIrza8W.js";import"./getZIndexFromUnknown-BqKh9M0Y.js";import"./useEffectiveDataKey-B__g_9Jm.js";import"./omit-KtLDLyCm.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
