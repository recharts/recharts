import{r as f,R as e}from"./iframe-r_02-Jx1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bi1VNLZO.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DicCmdef.js";import{C as k}from"./ComposedChart-RzNAfe4m.js";import{X as K}from"./XAxis-CVgPbfXC.js";import{L as v}from"./Legend-CPrl_Fhi.js";import{B as s}from"./Bar-DYG1GbtG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CNQryUt-.js";import"./Text-DCZHyyNe.js";import"./resolveDefaultProps-DyxRtFzB.js";import"./DOMUtils-BlgfTScp.js";import"./isWellBehavedNumber-CBLlozNg.js";import"./useBackwardsCompatibleTheme-WaqTwaFy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DmaqXjfN.js";import"./index-1kThdQ6e.js";import"./index-wzqytK4Q.js";import"./RechartsWrapper-BQFxUNUu.js";import"./index-N0rIL4Gt.js";import"./index-3jrDyBev.js";import"./throttle-BdAdSRQA.js";import"./axisSelectors-Dk3JE-i1.js";import"./d3-scale-ZwXuuq5P.js";import"./renderedTicksSlice-DFasVLMR.js";import"./CartesianAxis-D3LO-u6r.js";import"./Layer-dybzDHm9.js";import"./types-DPBZ02ip.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BGJHdGBf.js";import"./chartDataContext-BdayT2-p.js";import"./CategoricalChart-BXr2d9-i.js";import"./Symbols-BARhuu6m.js";import"./symbol-U42lp78U.js";import"./path-DyVhHtw_.js";import"./useElementOffset-slB8K9ts.js";import"./uniqBy-9Ezk50RS.js";import"./iteratee-Bv8d6n2u.js";import"./AnimatedItems-CW8FYpXu.js";import"./useAnimationId-R3ZNERdL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D-S66SPd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BgiK615A.js";import"./tooltipContext-spJlz4jn.js";import"./RegisterGraphicalItemId-BP1XikYq.js";import"./ErrorBarContext-DmfoTXVm.js";import"./GraphicalItemClipPath-D_fliYIp.js";import"./SetGraphicalItem-ByUdxl3U.js";import"./getZIndexFromUnknown-BWx4HHIX.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CJZHVbEk.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
