import{r as f,R as e}from"./iframe-UUS7gS8r.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Cy8DgzpK.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DC8Mmyu0.js";import{C as k}from"./ComposedChart-DyYzfQP5.js";import{X as K}from"./XAxis-Cy2DOw7O.js";import{L as v}from"./Legend-Cj8r2L5c.js";import{B as a}from"./Bar-CC6OTG74.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cr7fVLhy.js";import"./Text-Dm1h-qE_.js";import"./resolveDefaultProps-CGDCDwfC.js";import"./DOMUtils-dYR_cylo.js";import"./pageBackground-BJvSTYQp.js";import"./ZIndexLayer-CHgyGuEd.js";import"./index-B3bpwb38.js";import"./index-DE7_Lyvr.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-5ho1KqAt.js";import"./throttle-CgxVsgWn.js";import"./axisSelectors-BhKtxZfo.js";import"./d3-scale-DXJSpI4F.js";import"./CartesianAxis-CqSL8oIY.js";import"./Layer-CAt7TJL2.js";import"./types-CpFwJGls.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-RI1nm7LM.js";import"./index-DlU_WMoq.js";import"./index-BEWOexqM.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CpoOBNO8.js";import"./index-w---ZacB.js";import"./CartesianChart-C-KduMFZ.js";import"./ZIndexPortal-DB3Ky3lt.js";import"./CategoricalChart-kgfDSXE6.js";import"./Symbols-fRcdzfv5.js";import"./fillDefinitions-TYLf-280.js";import"./symbol-BFpIpW6Y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BT8ie4xh.js";import"./uniqBy-pgmiU_pf.js";import"./iteratee-D62UJLHy.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BfhKeSlq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-lDg8xK2m.js";import"./useAnimationId-BqxzW97i.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Df31_mcI.js";import"./tooltipContext-DIhpPeC9.js";import"./dataEntryStyles-D0nTu1H4.js";import"./ErrorBarContext-BNmRSNHp.js";import"./activeStyles-C25hf-sM.js";import"./SetGraphicalItem-DsTeZeM0.js";import"./getZIndexFromUnknown-B6MYu_hM.js";import"./useEffectiveDataKey-4NPbYdMg.js";import"./omit-CpAsrXTz.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
