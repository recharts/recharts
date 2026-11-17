import{r as f,R as e}from"./iframe-DQIHw-Vj.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BRNNX1VG.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DLnqMvRR.js";import{C as k}from"./ComposedChart-Bq6suzwR.js";import{X as K}from"./XAxis-C1j7r1zg.js";import{L as v}from"./Legend-CK1IssTU.js";import{B as a}from"./Bar-Dxm-nh1c.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CDOIzumT.js";import"./Text-UFCPlRdh.js";import"./resolveDefaultProps-DCDPXacx.js";import"./ZIndexLayer-cKbXtIsu.js";import"./index-ddMf2qZl.js";import"./index-DvzJj3QK.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CO8YfrX5.js";import"./throttle-CsL6-oT8.js";import"./axisSelectors-BOWof0F_.js";import"./d3-scale-D3QDia2a.js";import"./CartesianAxis-uR_V8Oxl.js";import"./Layer-Dtg1l4X7.js";import"./types-DC02XBeR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DWNRUwtc.js";import"./index-CAKt4SRE.js";import"./index-ej37J0iC.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BOwBRf5q.js";import"./index-DdSRFntK.js";import"./fillDefinitions-T89P4CC8.js";import"./CartesianChart-e9rrIYqD.js";import"./chartDataContext-D7ij0_Rh.js";import"./CategoricalChart-DgxyBa1d.js";import"./Symbols-Derc8Zbt.js";import"./symbol-DHOCB5wG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B-UoXHul.js";import"./uniqBy-DLWeu4D6.js";import"./iteratee-BZDFIkpf.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CRT7gJOj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bd8I5Mu8.js";import"./useAnimationId-BGqCxB5a.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-sNC7IbT4.js";import"./tooltipContext-Bf6OH0S4.js";import"./ErrorBarContext-DeOd0WHi.js";import"./activeStyles-DlG12Hxm.js";import"./SetGraphicalItem-xxOWq2oE.js";import"./getZIndexFromUnknown-BwTxVF7X.js";import"./useEffectiveDataKey-DXNQs5X4.js";import"./omit-BvCra_Tw.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
