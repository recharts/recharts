import{r as f,R as e}from"./iframe-BaaAHsSG.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-ChlB0m7y.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BDxXfDj3.js";import{C as k}from"./ComposedChart-Be2dfBSe.js";import{X as K}from"./XAxis-aYI2fpM3.js";import{L as v}from"./Legend-BGcjWbNP.js";import{B as a}from"./Bar-V0hyFUrF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bv3DZIw1.js";import"./Text-DTGEXNgB.js";import"./resolveDefaultProps-Cr73uuZ7.js";import"./pageBackground-B7fTEEtp.js";import"./ZIndexLayer-CjMMPibs.js";import"./index-D4xmIBj5.js";import"./index-CE_XEtoH.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DEr0nz1I.js";import"./throttle-Dj8lvlLv.js";import"./axisSelectors-D3-EkVgN.js";import"./d3-scale-Ck8yTiZB.js";import"./CartesianAxis-DPnfQAxf.js";import"./Layer-CoUaFIbR.js";import"./types-B5Uvpfau.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BIfFMhm7.js";import"./index-H_I4rIPo.js";import"./index-wqmW4YDp.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-23oR8mwB.js";import"./index-DlVxU2VG.js";import"./CartesianChart-C2TNi3kH.js";import"./ZIndexPortal-uu5Z5Bf6.js";import"./CategoricalChart-BheijUwq.js";import"./Symbols-D2tZDjg2.js";import"./symbol-BJVAlnOc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DBon_mrc.js";import"./uniqBy-D8VZiVkQ.js";import"./iteratee-C1Uno3VK.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-D5T0UDIp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D1p9HmGl.js";import"./useAnimationId-BBJNRgOy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BWukeBwd.js";import"./tooltipContext-DrhBuj3N.js";import"./dataEntryStyles-B1dajl5B.js";import"./ErrorBarContext-Cye9geJm.js";import"./activeStyles-NrCYIabX.js";import"./SetGraphicalItem-WQYWKVUP.js";import"./getZIndexFromUnknown-8sMKkH9-.js";import"./useEffectiveDataKey-Dr89jUol.js";import"./omit-D2HTLdwC.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
