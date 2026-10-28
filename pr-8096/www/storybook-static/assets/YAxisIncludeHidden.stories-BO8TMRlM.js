import{r as f,R as e}from"./iframe-PkW0ejx3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B7QgfXKC.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CtEWDdkW.js";import{C as k}from"./ComposedChart-coptphr3.js";import{X as K}from"./XAxis-CyABI53G.js";import{L as v}from"./Legend-DsY3co_s.js";import{B as a}from"./Bar-gCXSeosi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-V19_IbKL.js";import"./Text-DQ7hgPmk.js";import"./resolveDefaultProps-CnX9VcG6.js";import"./pageBackground-BxU5BZDR.js";import"./ZIndexLayer-wqGg5hkh.js";import"./index-2kQDiEg9.js";import"./index-CthbcSOz.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DErot-vK.js";import"./throttle-DhIpRp7y.js";import"./axisSelectors-CBaUhvBl.js";import"./d3-scale-C_GfRdoG.js";import"./CartesianAxis-BJQP999U.js";import"./Layer-D2wEMTDW.js";import"./types-iBZQammS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BiYv8y7m.js";import"./index-bhfK5Tel.js";import"./index-DCKddudy.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DJcwwy7_.js";import"./index-DIk-TLTX.js";import"./CartesianChart-CtUUiyil.js";import"./ZIndexPortal-DB_x6J9o.js";import"./CategoricalChart-CFsdFZkP.js";import"./Symbols-BgSbEpWI.js";import"./symbol-BJli0oSq.js";import"./path-DyVhHtw_.js";import"./useElementOffset--mFjDBED.js";import"./uniqBy-Bm4ZTWFv.js";import"./iteratee-C7s5c1SC.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BcjFKpxG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DF26d-VT.js";import"./useAnimationId-JttpOibe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-hU5Uvesj.js";import"./tooltipContext-Do4-zYB2.js";import"./dataEntryStyles-BkC7RZGO.js";import"./ErrorBarContext-RvIB7RYt.js";import"./activeStyles-RIXOH0Ky.js";import"./SetGraphicalItem-rvzc4GbA.js";import"./getZIndexFromUnknown-CRFh8gux.js";import"./useEffectiveDataKey-UMh99VlP.js";import"./omit-BIyCmy59.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
