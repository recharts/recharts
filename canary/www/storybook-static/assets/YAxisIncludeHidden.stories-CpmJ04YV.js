import{r as f,R as e}from"./iframe-DsTklGd_.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BOZCya1S.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BtbFiuZY.js";import{C as k}from"./ComposedChart-CSeGHIwL.js";import{X as K}from"./XAxis-CCdXtDxp.js";import{L as v}from"./Legend-DM9P43pw.js";import{B as a}from"./Bar-BWbRYXCQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D9BiQh3x.js";import"./Text-BbSBkVqk.js";import"./resolveDefaultProps-Bms6p2jX.js";import"./pageBackground-BHVKZknb.js";import"./isWellBehavedNumber-CnKVaaX2.js";import"./useId-Dh4XaEh2.js";import"./useBackwardsCompatibleTheme-DVVyS6sc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DFFwnPWa.js";import"./index-BXaEWxS9.js";import"./index-CDyKR3cz.js";import"./axisSelectors-DYheqAyK.js";import"./throttle-DdQ2CShf.js";import"./d3-scale-m8FOg4h4.js";import"./CartesianAxis-CPZLjXk4.js";import"./Layer-CZKgQj5k.js";import"./types-CPppnSS0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BKqQhYx3.js";import"./index-DPiom88R.js";import"./index-DwiZHk90.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DgwcOqsJ.js";import"./index-blk6unfu.js";import"./CartesianChart-CPHbQoR9.js";import"./chartDataContext-PmdzKedQ.js";import"./CategoricalChart-DoFDJCgx.js";import"./Symbols-C05NrL44.js";import"./symbol-BCG62I2C.js";import"./path-DyVhHtw_.js";import"./useElementOffset-uGLvwzdi.js";import"./uniqBy-Mv52plNv.js";import"./iteratee-Dj6SgMgn.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-CRt5O3EE.js";import"./useAnimationId-DDiQkgxw.js";import"./dataEntryStyles-Cfp8oK59.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-VOQBKS27.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cg3stx7N.js";import"./tooltipContext-CwPVMJgZ.js";import"./ErrorBarContext-BpgUGbiX.js";import"./GraphicalItemClipPath-K8g7er1I.js";import"./SetGraphicalItem-Bi7lJTO4.js";import"./getZIndexFromUnknown-kLkkUETN.js";import"./useEffectiveDataKey-yxNF_elp.js";import"./omit-30vhy62S.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
