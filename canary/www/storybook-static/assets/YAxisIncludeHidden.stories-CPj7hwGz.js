import{r as f,R as e}from"./iframe-y6pZoBOe.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BDc8eAjx.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BAPHOf-A.js";import{C as k}from"./ComposedChart-BoLdC1zL.js";import{X as K}from"./XAxis-B75EARC_.js";import{L as v}from"./Legend-DSqX6ZaY.js";import{B as a}from"./Bar-tWx0IQIQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-9NqXhRk3.js";import"./Text-DdGQmpzq.js";import"./resolveDefaultProps-DK41N9kV.js";import"./DOMUtils-Co8gRLU9.js";import"./isWellBehavedNumber-Cb3oTnMu.js";import"./useId-DiCeZzyc.js";import"./useBackwardsCompatibleTheme-DpzVFbqN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C7BuriGU.js";import"./index-DViwT0RC.js";import"./index-vL-3KTyV.js";import"./RechartsWrapper-Bd4_Y8lY.js";import"./axisSelectors-BmcHsTRr.js";import"./throttle-sUHqZCtQ.js";import"./d3-scale-DRlyCOFP.js";import"./index-B6N9MB9B.js";import"./index-0bNzEg3t.js";import"./renderedTicksSlice-CTLbpy90.js";import"./index-CSbalAtk.js";import"./CartesianAxis-CoHDQG06.js";import"./Layer-34ncCtUV.js";import"./types-DtUXsqBa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Bvg5MZxQ.js";import"./chartDataContext-Dpe-QKhv.js";import"./CategoricalChart-aAiDUiAX.js";import"./Symbols-BvJQgg8W.js";import"./symbol-Bpchgci6.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CqhuSHwW.js";import"./uniqBy-BLfo-8DX.js";import"./iteratee-DxrRJU94.js";import"./AnimatedItems-DIgNuRUa.js";import"./useAnimationId-9X7pomqp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CfUU1stN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CrA6HvN5.js";import"./tooltipContext-xkClZfdt.js";import"./RegisterGraphicalItemId-DljjsDCZ.js";import"./ErrorBarContext-TnpfkRXW.js";import"./GraphicalItemClipPath-6O7hO6A5.js";import"./SetGraphicalItem-BmPIFAsA.js";import"./getZIndexFromUnknown-Cp_8YTP1.js";import"./useGraphicalItemIdentity-CXZPeRzX.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
