import{r as f,R as e}from"./iframe-B-yW787s.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DGNSSBsi.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CKRpx7FD.js";import{C as k}from"./ComposedChart-D5w8STA3.js";import{X as K}from"./XAxis-D0UXMK3L.js";import{L as v}from"./Legend-Dv3Zl6DL.js";import{B as s}from"./Bar-BDdLYF6G.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BlaAel8_.js";import"./Layer-DVSBdCcq.js";import"./resolveDefaultProps-D6vuKH4c.js";import"./Text-DK2M6QxL.js";import"./DOMUtils-B0UrcgO-.js";import"./isWellBehavedNumber-C_1nd4jU.js";import"./Label-BkxmYsWW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CdG-cca2.js";import"./index-B8s4lwM0.js";import"./index-BLtMs8ww.js";import"./types-DcTCoXGC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-EV44ZZNX.js";import"./throttle-B8_9WF3N.js";import"./RechartsWrapper-DSpl9lP_.js";import"./index-TzX_ldyC.js";import"./index-Dh8eUehn.js";import"./axisSelectors-d9CW9W7w.js";import"./d3-scale-8a4kRHFN.js";import"./CartesianChart-B08PHStc.js";import"./chartDataContext-DOok0Cd4.js";import"./CategoricalChart-XTSjkgZQ.js";import"./Symbols-Bg5BQdWY.js";import"./symbol-eAiDcfG8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C-wPzP_t.js";import"./uniqBy-D9O0f4RW.js";import"./iteratee-3rKsZ9vF.js";import"./tooltipContext-CumBelWf.js";import"./AnimatedItems-CYFqV_Nm.js";import"./useAnimationId-o-X37ase.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DKB06qOF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dzsbq5DH.js";import"./RegisterGraphicalItemId-DeFh6f0i.js";import"./ErrorBarContext-D17CdNj4.js";import"./GraphicalItemClipPath-_Ex-IG4N.js";import"./SetGraphicalItem-NvPtwEe2.js";import"./getZIndexFromUnknown-jJhefbAF.js";import"./graphicalItemSelectors-D2riitBr.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
