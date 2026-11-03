import{r as f,R as e}from"./iframe-BC6iQeUr.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B2Rm1v3y.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DwuZ2Ow7.js";import{C as k}from"./ComposedChart-Bivk-oUr.js";import{X as K}from"./XAxis-8wiG-IT7.js";import{L as v}from"./Legend-Defdsh0z.js";import{B as a}from"./Bar-CFnvchXr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BCMvROnb.js";import"./Text-fEDBC_0o.js";import"./resolveDefaultProps-DIZ3ps7e.js";import"./DOMUtils-B8TR7nYh.js";import"./ZIndexLayer-DCc79hxk.js";import"./index-D3yqD8af.js";import"./index-CYTdWqrV.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-mzCge1J3.js";import"./throttle-MiaNLFmz.js";import"./axisSelectors-Bd1LmNHc.js";import"./d3-scale-Daj11TvY.js";import"./CartesianAxis-eBXlpwXS.js";import"./Layer-Cuu8DjLO.js";import"./types-Dwpv4Yth.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BGFaFbR8.js";import"./index-D34_hmzU.js";import"./index-DraKlH0s.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DHIomU5i.js";import"./index-B7dOZ4Mr.js";import"./fillDefinitions-B6DkeJW_.js";import"./CartesianChart-BLRdoMZg.js";import"./ZIndexPortal-jmLjufPW.js";import"./CategoricalChart-9j6tsrvq.js";import"./Symbols-DBa5o5yK.js";import"./symbol-BvmQmKKh.js";import"./path-DyVhHtw_.js";import"./useElementOffset-k-LXptTs.js";import"./uniqBy-CV8NSfie.js";import"./iteratee-Q-eBNyZk.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BFjn3eEm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNYq4UQO.js";import"./useAnimationId-Cw69Pi1k.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DxbJ9fQI.js";import"./tooltipContext-DYplll-B.js";import"./dataEntryStyles-BFig0g5r.js";import"./ErrorBarContext-uhSKqamS.js";import"./activeStyles-DfgAGK4N.js";import"./SetGraphicalItem-CqMMnBeb.js";import"./getZIndexFromUnknown-BOxsRG-K.js";import"./useEffectiveDataKey-Bk74mtUJ.js";import"./omit-Ch3LLyxF.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
