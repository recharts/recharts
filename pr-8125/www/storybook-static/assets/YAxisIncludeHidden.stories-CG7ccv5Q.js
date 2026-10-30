import{r as f,R as e}from"./iframe-DfPB0Wpx.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BQ4oN9O6.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Vk5rQcki.js";import{C as k}from"./ComposedChart-CjfhBU-E.js";import{X as K}from"./XAxis-COzQcKyh.js";import{L as v}from"./Legend-Cy6g-3_w.js";import{B as a}from"./Bar-BxCpO4Sd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-2zEOllgr.js";import"./Text-DaqQgel7.js";import"./resolveDefaultProps-Bt24D4BM.js";import"./DOMUtils-C1IGffYG.js";import"./ZIndexLayer-no9MVuHN.js";import"./index-Ax9OSmSr.js";import"./index-jmk38lRQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-UZRyPZtr.js";import"./throttle-DIfZf6Rg.js";import"./axisSelectors-CYP2U9Wf.js";import"./d3-scale-CsMflnTp.js";import"./CartesianAxis-CNCSz6Km.js";import"./Layer-8vRP1mbc.js";import"./types-D0-9LK1x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DnnXNCqP.js";import"./index-TI8GAjTb.js";import"./index-C7rcjmTF.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DGPnCUTJ.js";import"./index-DZEvNl2j.js";import"./CartesianChart-C7bLJAaP.js";import"./ZIndexPortal-BHohkWL-.js";import"./CategoricalChart-B65nKayz.js";import"./Symbols-DuFTa5a3.js";import"./symbol-DWiA1K--.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Dc4guk2V.js";import"./themeFill-BkM1x4hA.js";import"./useElementOffset-CqmQGpgi.js";import"./uniqBy-CDxgcpy6.js";import"./iteratee-DH59VCX2.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-Nkxiy7Jt.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CWBHAPFe.js";import"./useAnimationId-C0yM1MFO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CvH07gq7.js";import"./tooltipContext-A7BcXb7p.js";import"./ErrorBarContext-CQDbXt_x.js";import"./activeStyles-ChnEmJqB.js";import"./SetGraphicalItem-BxFlQPUr.js";import"./getZIndexFromUnknown-wwgBEGf2.js";import"./useEffectiveDataKey-DKbAeGMk.js";import"./omit-C14swPMG.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
