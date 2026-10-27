import{r as f,R as e}from"./iframe-i00IWHKS.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-GmTTpsne.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CSTmF3GT.js";import{C as k}from"./ComposedChart-CYmWoyp6.js";import{X as K}from"./XAxis-BA_nHJl6.js";import{L as v}from"./Legend-DqBmZZp9.js";import{B as a}from"./Bar-B9oXQd8E.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C4qEKDUL.js";import"./Text-CB-MiyEA.js";import"./resolveDefaultProps-BglOfK6k.js";import"./pageBackground-e_M9BLsj.js";import"./ZIndexLayer-C49fDhwr.js";import"./index-CbwirX63.js";import"./index-CPuGrPsk.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-krKyM9nF.js";import"./throttle-VVsSQFBk.js";import"./axisSelectors-CrzJ0No2.js";import"./d3-scale-fdx5emX3.js";import"./CartesianAxis-EZZmQ9Qc.js";import"./Layer-DmbMEBZx.js";import"./types-BWYuSzJG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DZPzUM4n.js";import"./index-Cdxh422T.js";import"./index-CocutCkO.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-HLZ5nOEz.js";import"./index-Cpb1euZl.js";import"./CartesianChart-cAT52TQ5.js";import"./ZIndexPortal-DfOIGQM0.js";import"./CategoricalChart-CvwnoS-7.js";import"./Symbols-DazPmVzQ.js";import"./symbol-BISg9N3x.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Df6LRa99.js";import"./uniqBy-3FD8HgkX.js";import"./iteratee-B5sUlY-H.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-C1CnC_KK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BPmgsHsk.js";import"./useAnimationId-COvKagcg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CYbFkl4W.js";import"./tooltipContext-DNhcr-uc.js";import"./dataEntryStyles-BgF2g0Ub.js";import"./ErrorBarContext-DjefL6kX.js";import"./activeStyles-DhZp3R57.js";import"./SetGraphicalItem-Cn81nTMh.js";import"./getZIndexFromUnknown-YHqU1bKG.js";import"./useEffectiveDataKey-Cy_6W0Je.js";import"./omit-Cb5vh7qN.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
