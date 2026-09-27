import{r as f,R as e}from"./iframe-BrVE5RSW.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BAuMZklG.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CHsJbjJD.js";import{C as k}from"./ComposedChart-CCPBzUyH.js";import{X as K}from"./XAxis-B0eJFub6.js";import{L as v}from"./Legend-DSgchmmp.js";import{B as a}from"./Bar-Pe-TgSdc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DySzAUNx.js";import"./Text-B4ZIZNbZ.js";import"./resolveDefaultProps-BD9NC1fi.js";import"./DOMUtils-IYFeeRl2.js";import"./isWellBehavedNumber-BVgmnW9g.js";import"./useId-DbY0de1j.js";import"./useBackwardsCompatibleTheme-CF13ge8-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BERp6HrO.js";import"./index-LfrCHYrZ.js";import"./index-Sva1rZOH.js";import"./RechartsWrapper-DQVN278-.js";import"./axisSelectors-BDU1QiXu.js";import"./throttle-BQaLLzka.js";import"./d3-scale-BmnvRTpm.js";import"./index-C5upL2ad.js";import"./index-SZqQo-6K.js";import"./renderedTicksSlice-DXuyBJO_.js";import"./index-BmC-zE0O.js";import"./CartesianAxis-Cn4O1F7T.js";import"./Layer-BvSPpSNQ.js";import"./types-CE2qBNHK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D0yCkzIu.js";import"./chartDataContext-3sx737Gw.js";import"./CategoricalChart-B2Hi-_kM.js";import"./Symbols-Dam4qE3U.js";import"./symbol-DBtAd547.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BEglwowY.js";import"./uniqBy-Dh9tSYdQ.js";import"./iteratee-C1RNAWyh.js";import"./AnimatedItems-Bzkg4GxV.js";import"./useAnimationId-CaCeoqu2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DCi554Vz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DIhJJb_m.js";import"./tooltipContext-BTPPPf7b.js";import"./RegisterGraphicalItemId-Cg9vlh9g.js";import"./ErrorBarContext-CRbR2c4o.js";import"./GraphicalItemClipPath-C1RnAz3w.js";import"./SetGraphicalItem-BFu8ftGQ.js";import"./getZIndexFromUnknown-CBATyizs.js";import"./useGraphicalItemIdentity-BCiQfNgb.js";import"./dataEntryStyles-CFPmkDJC.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
