import{r as f,R as e}from"./iframe-BiVlDiGB.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B9zpHgNk.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BT91VcLs.js";import{C as k}from"./ComposedChart-CruKG_sN.js";import{X as K}from"./XAxis-DvOqqISP.js";import{L as v}from"./Legend-xr5rxJV6.js";import{B as a}from"./Bar-IAbccOsr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CTisYkFS.js";import"./Text-B7j_haGg.js";import"./resolveDefaultProps-CzQIEG40.js";import"./DOMUtils-uFQLQ8Py.js";import"./isWellBehavedNumber-6NC8t9If.js";import"./useId-Di9tEwNI.js";import"./useBackwardsCompatibleTheme-C8tb1jUV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-SmUjHGv1.js";import"./index-QwesTmYv.js";import"./index-ChXYLaG0.js";import"./RechartsWrapper-BDkbatGL.js";import"./axisSelectors-BEkueF2I.js";import"./throttle-YKevu-yW.js";import"./d3-scale-GIUO3qKs.js";import"./index-BUQ8JU-K.js";import"./index-BgrYIa47.js";import"./renderedTicksSlice-BO57uAxz.js";import"./index-BlprVplm.js";import"./CartesianAxis-CosHp30d.js";import"./Layer-CGg1zqLT.js";import"./types-D-F_NfC0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-zLDK9f_1.js";import"./chartDataContext-C02yhzPU.js";import"./CategoricalChart-C5Ob1It2.js";import"./Symbols-4jhHW0ot.js";import"./symbol-5KCJJZ1d.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C6GTdqz1.js";import"./uniqBy-yTl4EH60.js";import"./iteratee-CgYWoIDz.js";import"./AnimatedItems-0a3kF70I.js";import"./useAnimationId-BDtWHeb_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CmSHJkEx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dqrzinyd.js";import"./tooltipContext-CzNmr2k6.js";import"./RegisterGraphicalItemId-BA3j10pa.js";import"./ErrorBarContext-CYWSJ13C.js";import"./GraphicalItemClipPath-3vc4gJgj.js";import"./SetGraphicalItem-jWHGIqY5.js";import"./getZIndexFromUnknown-BQCm4Sr2.js";import"./useGraphicalItemIdentity-DlBKGkIj.js";import"./dataEntryStyles-DXwgRqj1.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
