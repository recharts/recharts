import{r as f,R as e}from"./iframe-83g2bT9h.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DKEYM08g.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CfRH_Gkg.js";import{C as k}from"./ComposedChart-MoKKZ9CA.js";import{X as K}from"./XAxis-CPLb-uD7.js";import{L as v}from"./Legend-DZLtHiBu.js";import{B as a}from"./Bar-sXu5HZ41.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DfuHALhb.js";import"./Text-DUBqVL79.js";import"./resolveDefaultProps-BpxedNkM.js";import"./pageBackground-DKLyt_8U.js";import"./isWellBehavedNumber-BgkxdIs4.js";import"./useId-zomQiW43.js";import"./useBackwardsCompatibleTheme-BcLG_xbs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DeHUv8B_.js";import"./index-D9-kpgN8.js";import"./index-HFr4exi0.js";import"./axisSelectors-C8tSZ6WQ.js";import"./throttle-4AZ4DRQb.js";import"./d3-scale-CVvcmCdK.js";import"./CartesianAxis-DvK2UzOE.js";import"./Layer-B91IFUVw.js";import"./types-CMZudBWv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xHtkKbmz.js";import"./index-B7VmcSkv.js";import"./index-DLYfmWnd.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-p2KZrAJR.js";import"./index-D-OQyWuZ.js";import"./CartesianChart-D1Nmaq06.js";import"./chartDataContext-sHdkOGNI.js";import"./CategoricalChart-D7JsCRcw.js";import"./Symbols-C8qv3YMP.js";import"./symbol-C8Q_sjCu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BnQIDSYq.js";import"./uniqBy-B2Rp8ZH2.js";import"./iteratee-CXHp8yUW.js";import"./activeStyles-CdFniEfO.js";import"./useAnimationId-DUwxwMTt.js";import"./dataEntryStyles-B1gd_eml.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BS77cgxi.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CYOV0Fte.js";import"./tooltipContext-GOy0TlDn.js";import"./ErrorBarContext-6HrkNfKi.js";import"./GraphicalItemClipPath-qo2wW-Qb.js";import"./SetGraphicalItem-BS6yKsvN.js";import"./getZIndexFromUnknown-DNT2iAn2.js";import"./useEffectiveDataKey-B2aQWgd3.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
