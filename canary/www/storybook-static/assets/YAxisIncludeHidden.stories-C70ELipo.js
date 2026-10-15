import{r as f,R as e}from"./iframe-DMAX8_B_.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DHMD8bK9.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BVHCVdkF.js";import{C as k}from"./ComposedChart-DTOc-N3k.js";import{X as K}from"./XAxis-C1NK8RoH.js";import{L as v}from"./Legend-DIOsb75K.js";import{B as a}from"./Bar-Cmvb1KlD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CAcaahuf.js";import"./Text-BwCj1acG.js";import"./resolveDefaultProps-Q3rDitrf.js";import"./pageBackground-BEqOe7lR.js";import"./isWellBehavedNumber-9EXxFos5.js";import"./useId-BVZoqUN1.js";import"./useBackwardsCompatibleTheme-BxWKmMDT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-YH55ha4J.js";import"./index-Dqqrq3j2.js";import"./index-t_NEKWw0.js";import"./axisSelectors-xVjud6VL.js";import"./throttle-B-jnSQsL.js";import"./d3-scale-BX29oM_v.js";import"./CartesianAxis-BiWmv3xt.js";import"./Layer-bgHLcwl9.js";import"./types-mmDyRX3a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C6uANPht.js";import"./index-KGIc8sd0.js";import"./index-CBEUuOpp.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-1Z3_sa1T.js";import"./index-BQc2wBrK.js";import"./CartesianChart-Bezscfrc.js";import"./chartDataContext-D-vUUGf6.js";import"./CategoricalChart-lpsuDSMi.js";import"./Symbols-BmVsZEwz.js";import"./symbol-1Eheypgy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-irp2r8bU.js";import"./uniqBy-DSnL4fsO.js";import"./iteratee-BgbH2_Qr.js";import"./activeStyles-B1Ozispl.js";import"./useAnimationId-DjHV_c7w.js";import"./dataEntryStyles-Bgri-3l2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-PLb_DD4F.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CH9-BPrn.js";import"./tooltipContext-C61lU4k-.js";import"./ErrorBarContext-eOToNj9e.js";import"./GraphicalItemClipPath-DrxfmPj-.js";import"./SetGraphicalItem-Car8jOkS.js";import"./getZIndexFromUnknown-B7k7nw6m.js";import"./useEffectiveDataKey-BofpFvC7.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
