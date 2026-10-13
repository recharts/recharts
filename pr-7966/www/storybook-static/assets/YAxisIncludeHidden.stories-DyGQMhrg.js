import{r as f,R as e}from"./iframe-BPWq5wK1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-fdw9Kawy.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice--l6A9Cgd.js";import{C as k}from"./ComposedChart-eM1OIXHR.js";import{X as K}from"./XAxis-DwVZ8t6S.js";import{L as v}from"./Legend-CrfNFMxt.js";import{B as a}from"./Bar-D_uQKEIn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DfIBtU5a.js";import"./Text-Dv2kvEh7.js";import"./resolveDefaultProps-DC_merMH.js";import"./pageBackground-BKi1BKrf.js";import"./isWellBehavedNumber-DPMDsRl8.js";import"./useId-BNAqUaya.js";import"./useBackwardsCompatibleTheme-DmujFuGs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Du5K3aCJ.js";import"./index-CBsqFzOA.js";import"./index-CMYr15XQ.js";import"./axisSelectors-B8iXPLx4.js";import"./throttle-BczP5WrX.js";import"./d3-scale-t9m5JmsQ.js";import"./CartesianAxis-XsFsrZXE.js";import"./Layer-CeC_x2uD.js";import"./types-BIKEZWlZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B7Vn66iT.js";import"./index-QtD_rERt.js";import"./index-CIFWdTWa.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DsTQCipn.js";import"./index-BlcYejsd.js";import"./CartesianChart-DDcEhH92.js";import"./chartDataContext-D-s48IOU.js";import"./CategoricalChart-D94cXkjn.js";import"./Symbols-DEpzjYFo.js";import"./symbol-2xHRf_v0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BfvhBRS5.js";import"./uniqBy-8hswHbWk.js";import"./iteratee-CyJf82nu.js";import"./activeStyles-Fhy11XH6.js";import"./useAnimationId-37s3ARsg.js";import"./dataEntryStyles-3NXA5k2R.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D1alOuUj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DkTWf27X.js";import"./tooltipContext-B9IfrR_q.js";import"./ErrorBarContext-CMoWJ2Fr.js";import"./GraphicalItemClipPath-DqP6JkJs.js";import"./SetGraphicalItem-C-FePfke.js";import"./getZIndexFromUnknown-DTDS49u5.js";import"./useEffectiveDataKey-CfXPni2y.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
