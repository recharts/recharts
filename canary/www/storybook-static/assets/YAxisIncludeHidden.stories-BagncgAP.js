import{r as f,R as e}from"./iframe-Daqq5Gjo.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DuMidNRF.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BPRhy0xE.js";import{C as k}from"./ComposedChart-nQXSo27c.js";import{X as K}from"./XAxis-BQYmhAVN.js";import{L as v}from"./Legend-Br2MGfx4.js";import{B as a}from"./Bar-D9MyfRJ7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BEbt6EJA.js";import"./Text-CnYREx4K.js";import"./resolveDefaultProps-B2-XJuyk.js";import"./pageBackground-CQ6SoF4P.js";import"./isWellBehavedNumber-D9gMW2_W.js";import"./useId-Zrpp900Y.js";import"./useBackwardsCompatibleTheme-NW4H3-d4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CsxY4uLP.js";import"./index-b63f_pX_.js";import"./index-TeDug2B7.js";import"./dataEntryStyles-D69McnEv.js";import"./axisSelectors-CxfQkhDh.js";import"./throttle-BWDQ4DPb.js";import"./d3-scale-CqOqSRGC.js";import"./CartesianAxis-C_4O2on1.js";import"./Layer-ypMbTgoN.js";import"./types-t5uFUre1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CgHqHKUq.js";import"./index-aYBLVk0i.js";import"./index-DrcM2r0T.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DaLU39bO.js";import"./index-_CQPpMIB.js";import"./CartesianChart-CsvRURM2.js";import"./chartDataContext-BsJkFnDQ.js";import"./CategoricalChart-DFQLj_IQ.js";import"./Symbols-CZzVEKCy.js";import"./symbol-D88PS3Fb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CNPww-a6.js";import"./uniqBy-DNAjDb_i.js";import"./iteratee-BKpK3jiI.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-CfAxM8dt.js";import"./useAnimationId-DHlojTvw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DJo7JzER.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C9mR-tcp.js";import"./tooltipContext-h_lJalxx.js";import"./RegisterGraphicalItemId-DR1l3pXT.js";import"./ErrorBarContext-DV8sm0DW.js";import"./GraphicalItemClipPath-CdmoWeX0.js";import"./SetGraphicalItem-B-kJZLux.js";import"./getZIndexFromUnknown-CfYjdChR.js";import"./useEffectiveDataKey-P6ZrBAcn.js";import"./omit-_aKQe6iX.js";const we={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Oe=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
