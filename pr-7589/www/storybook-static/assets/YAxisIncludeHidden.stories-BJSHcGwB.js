import{r as f,R as e}from"./iframe-DUrhAGem.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis--wp8j7v5.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DdMK3B0N.js";import{C as k}from"./ComposedChart-ymO5UTEI.js";import{X as K}from"./XAxis-RIRw3T0L.js";import{L as v}from"./Legend-C6612Dil.js";import{B as s}from"./Bar-5eCSno3b.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-IffF52gj.js";import"./Layer-Dt-vE1vN.js";import"./resolveDefaultProps-BTGu5wQu.js";import"./Text-BrHlFoZT.js";import"./DOMUtils-CoHfxK0O.js";import"./isWellBehavedNumber-DFEWDh2V.js";import"./Label-Y4Dm0VZ7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CXa7SyiJ.js";import"./index-DCvD1AlG.js";import"./index-Ci9yztB-.js";import"./types-ClGgKr9E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DZdK350N.js";import"./throttle-D3vyfJ8U.js";import"./RechartsThemeContext-DPqqk1vy.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BnFDuvuz.js";import"./index-Cpmma9TD.js";import"./index-CNLWSLM9.js";import"./axisSelectors-DZbM2Ze4.js";import"./d3-scale-SkNolWO8.js";import"./CartesianChart-CWlmKWcs.js";import"./chartDataContext-DaAbIer4.js";import"./CategoricalChart-CpTQxP4M.js";import"./Symbols-DFoWMewR.js";import"./symbol-BhNE3Frx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-G25gOvED.js";import"./uniqBy-jcaqdoDx.js";import"./iteratee-B2QDbcSu.js";import"./tooltipContext-Bv8pfFpj.js";import"./AnimatedItems-wThfzOGn.js";import"./useAnimationId-VITr_DdB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D_OnYWLV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-0ZcDx16I.js";import"./RegisterGraphicalItemId-Ck0eBYhQ.js";import"./ErrorBarContext-1rKXFGMB.js";import"./GraphicalItemClipPath-DZHG2jah.js";import"./SetGraphicalItem-D3CB3LDo.js";import"./getZIndexFromUnknown-_03IosTx.js";import"./graphicalItemSelectors-DBNUyimm.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
