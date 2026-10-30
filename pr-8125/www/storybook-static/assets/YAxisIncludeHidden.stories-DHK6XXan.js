import{r as f,R as e}from"./iframe-DofrrzSz.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CsrZD7w1.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D4jXZr7P.js";import{C as k}from"./ComposedChart-CvgJm-V0.js";import{X as K}from"./XAxis-eOTmMW_3.js";import{L as v}from"./Legend-D4qwGaS7.js";import{B as a}from"./Bar-Bfvx97hH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CuxsGsNv.js";import"./Text-CCxE4_21.js";import"./resolveDefaultProps-EpIoYf6A.js";import"./DOMUtils-CiyeVOwd.js";import"./ZIndexLayer-C9xNwEQ1.js";import"./index-CmvIzJTJ.js";import"./index-CiJIMcsu.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B2VAv-kj.js";import"./throttle-Cv7JSN-h.js";import"./axisSelectors-pqZm8n4V.js";import"./d3-scale-BRGWuf4p.js";import"./CartesianAxis-BejCdWme.js";import"./Layer-29jH0q4c.js";import"./types-DwbSI8T9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C12QoSei.js";import"./index-BJz466Uq.js";import"./index-CebJFPbx.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-E_-kYNca.js";import"./index-MFcngAQ7.js";import"./CartesianChart-ofW7KWWn.js";import"./ZIndexPortal-D6LzzXvN.js";import"./CategoricalChart-swxT2d4I.js";import"./Symbols-DBYIMXup.js";import"./symbol-BNKxEPpC.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-DuwvESx8.js";import"./themeFill-BkM1x4hA.js";import"./useElementOffset-4AYFNtWz.js";import"./uniqBy-DXDzCPGj.js";import"./iteratee-BW9bJqkP.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CvvaVn8W.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DH-fHCjZ.js";import"./useAnimationId-DIc4f048.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_2mrMKm.js";import"./tooltipContext-eCkchuHu.js";import"./ErrorBarContext-Be2kUHyO.js";import"./activeStyles-DFxA9Zbs.js";import"./SetGraphicalItem-VPByvNpp.js";import"./getZIndexFromUnknown-whhWsiF3.js";import"./useEffectiveDataKey-kz6GzdqE.js";import"./omit-CEqwGjdZ.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
