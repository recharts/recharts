import{r as f,R as e}from"./iframe-Dgm4gy-U.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-mX4prg2G.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CiwacDpC.js";import{C as k}from"./ComposedChart-ByttuQ_a.js";import{X as K}from"./XAxis-CfrEw3PN.js";import{L as v}from"./Legend-Ry8mmAdO.js";import{B as a}from"./Bar-4abJSklm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D7CpXrZ4.js";import"./Text-8gs2XgOQ.js";import"./resolveDefaultProps-Dd95FcLW.js";import"./pageBackground-Cm2lHn8y.js";import"./isWellBehavedNumber-BJRZFbyv.js";import"./useId-C1YsdgdZ.js";import"./useBackwardsCompatibleTheme-BpARltC_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-IYsblH0Q.js";import"./index-DB1nW_kS.js";import"./index-B8zxjei6.js";import"./axisSelectors-mj5UOSEK.js";import"./throttle-zAOqa1T8.js";import"./d3-scale-CRCwBtC_.js";import"./CartesianAxis-B7Oepgsg.js";import"./Layer-BihfHLDn.js";import"./types-BUhHmnCY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DyR3wyNf.js";import"./index-BdUNqqcp.js";import"./index-CjMT8r2k.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-ZSLGTFtH.js";import"./index-C9uskWuj.js";import"./CartesianChart-BqW0iuwz.js";import"./chartDataContext-DoVd5A16.js";import"./CategoricalChart-DkwsSuns.js";import"./Symbols-BdXbUGBN.js";import"./symbol-G_tSVHFN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Chv-8FgP.js";import"./uniqBy-B4vXZz4G.js";import"./iteratee-DeFhKk0a.js";import"./activeStyles-DhaHnmuT.js";import"./useAnimationId-Bq4IYhf5.js";import"./dataEntryStyles-DqmWF7tK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-jgrU2osW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CQNP7AWp.js";import"./tooltipContext-nIYBKPjd.js";import"./ErrorBarContext-DQKU8Ti5.js";import"./GraphicalItemClipPath-D_X4MzO8.js";import"./SetGraphicalItem-Dc743XQT.js";import"./getZIndexFromUnknown-DUuliOZl.js";import"./useEffectiveDataKey-Dpv4-4ke.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
