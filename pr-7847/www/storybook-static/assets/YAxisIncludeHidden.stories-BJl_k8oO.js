import{r as f,R as e}from"./iframe-hd_pfHvo.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bfby8-tG.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dp2BKzs8.js";import{C as k}from"./ComposedChart-CLRu4YV9.js";import{X as K}from"./XAxis-DIhH_NdP.js";import{L as v}from"./Legend-C27DvpnH.js";import{B as a}from"./Bar-BRKuXka0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DeYie9Lh.js";import"./Text-C6732HHA.js";import"./resolveDefaultProps-drD7xYIQ.js";import"./DOMUtils-B5fqbFU1.js";import"./isWellBehavedNumber-C1tuJPSP.js";import"./useId-_Yta7G-c.js";import"./useBackwardsCompatibleTheme-SiYIdPDZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BHjO29Bs.js";import"./index-v0QewD8A.js";import"./index-SCBhOffb.js";import"./RechartsWrapper-CyksNjdk.js";import"./axisSelectors-eHIx7hMS.js";import"./throttle-C2q4COo1.js";import"./d3-scale-CciOkO_z.js";import"./index-C3NZEEPx.js";import"./index-Dl1k2Uag.js";import"./renderedTicksSlice-CD7ArbZx.js";import"./index-zFom7GTd.js";import"./CartesianAxis-Bczd13d5.js";import"./Layer-egOiXfr6.js";import"./types-B1tRcN2v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-lsa6cjfM.js";import"./chartDataContext-BzYnwGm5.js";import"./CategoricalChart-DK0H-Nig.js";import"./Symbols-CB0dVqBg.js";import"./symbol-7gumIrmR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bjp7QiHs.js";import"./uniqBy-4GbLHGYo.js";import"./iteratee-BHWq50Tg.js";import"./AnimatedItems-DCH1YBa_.js";import"./useAnimationId-D0lfWmyy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DOvVk1du.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BDpXGuZx.js";import"./tooltipContext-NM9A8S-z.js";import"./RegisterGraphicalItemId-_fhB3pIC.js";import"./ErrorBarContext-BU3wkqbx.js";import"./GraphicalItemClipPath-Bsg-Zi-D.js";import"./SetGraphicalItem-CYmPmGcd.js";import"./getZIndexFromUnknown-BFl9LL1A.js";import"./useGraphicalItemIdentity-hHj77cNE.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
