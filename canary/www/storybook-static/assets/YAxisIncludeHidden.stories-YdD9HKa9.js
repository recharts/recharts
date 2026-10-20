import{r as f,R as e}from"./iframe-Dkncjqe5.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Dxbos16T.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-3Eut4nle.js";import{C as k}from"./ComposedChart-Dy5YJ26L.js";import{X as K}from"./XAxis-BAQVI_cg.js";import{L as v}from"./Legend-CzQeFDEi.js";import{B as a}from"./Bar-D1LOMIF8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-V2ZN4uKZ.js";import"./Text-BwfQxnJz.js";import"./resolveDefaultProps-DKbDW2P0.js";import"./pageBackground-CmllYwCr.js";import"./isWellBehavedNumber-h0zKWQQH.js";import"./useId-ZYm6mEVk.js";import"./useBackwardsCompatibleTheme-BCpg7K4A.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DaEkt6aU.js";import"./index-DuZYSu8x.js";import"./index-CEbzYCUB.js";import"./axisSelectors-DzgXC3ir.js";import"./throttle-fiJaoKIv.js";import"./d3-scale-D7_DItYV.js";import"./CartesianAxis-Dwpurh4e.js";import"./Layer-CZ9ZIOVu.js";import"./types-BHEXbjwq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DBigkG9b.js";import"./index-Bw7gNQT7.js";import"./index-BWQ516bg.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BbHdyrKZ.js";import"./index-DULW3GES.js";import"./CartesianChart-_Rd0DLP-.js";import"./chartDataContext-BPkdx2D0.js";import"./CategoricalChart-DpeOMck6.js";import"./Symbols-ijaf1hhE.js";import"./symbol-DXJ6pf0F.js";import"./path-DyVhHtw_.js";import"./useElementOffset-y8lH1pNC.js";import"./uniqBy-B0GiVIZ3.js";import"./iteratee-DxR0_ujM.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-DQuNqkwN.js";import"./useAnimationId-MEfDv_ZE.js";import"./dataEntryStyles-DXfoX1Tx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-A_cS0CAA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B1bflkee.js";import"./tooltipContext-zJ5iECbC.js";import"./ErrorBarContext-e-s-GcHB.js";import"./GraphicalItemClipPath-DPL4dOJ-.js";import"./SetGraphicalItem-Bg3q-OfM.js";import"./getZIndexFromUnknown-BewmFjSj.js";import"./useEffectiveDataKey-CjhYhiH-.js";import"./omit-C58MDPW2.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
