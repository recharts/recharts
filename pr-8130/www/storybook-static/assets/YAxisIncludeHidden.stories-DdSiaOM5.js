import{r as f,R as e}from"./iframe-BmKqhsPF.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bib3dbnh.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CBQM2Gyg.js";import{C as k}from"./ComposedChart-DkiFuqQR.js";import{X as K}from"./XAxis-B1Y97cNG.js";import{L as v}from"./Legend-Boujz8jE.js";import{B as a}from"./Bar--SOdbZe-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DJuyIpr6.js";import"./Text-CrMJTYNw.js";import"./resolveDefaultProps-BDqp1YKl.js";import"./DOMUtils-DtycWmz8.js";import"./ZIndexLayer-E2zC26PS.js";import"./index-3u8XkdeO.js";import"./index-BGZm-V5p.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-3J3j4TTi.js";import"./throttle-DFLwZbH7.js";import"./axisSelectors-De-QIQw0.js";import"./d3-scale-66RSqjvR.js";import"./CartesianAxis-Ch4CXp2q.js";import"./Layer-DFK8Q48P.js";import"./types-8TEdLcfT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-1_lrB1iK.js";import"./index-B3BeYDVW.js";import"./index-BlCA3-m5.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CdEiQwLq.js";import"./index-CBz7nTI3.js";import"./fillDefinitions-miIei5Ak.js";import"./CartesianChart-DwN6Hmpg.js";import"./ZIndexPortal-DFoHfC3q.js";import"./CategoricalChart-DDmHhC4k.js";import"./Symbols-C1ZJFDve.js";import"./symbol-Cwivg1At.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dg2vO0r-.js";import"./uniqBy-DIJRTBn5.js";import"./iteratee-CzzbuyX8.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-Cw7YYHKY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dph07-O4.js";import"./useAnimationId-Cw8-NrKa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CmFmkU6o.js";import"./tooltipContext-qd_vPvGB.js";import"./dataEntryStyles-BYeCTEXf.js";import"./ErrorBarContext-DjFDtKDe.js";import"./activeStyles-B9WkYOlU.js";import"./SetGraphicalItem-DaR9Vkxk.js";import"./getZIndexFromUnknown-DrzkWzUs.js";import"./useEffectiveDataKey-etJHmmHX.js";import"./omit-OgdFWu6Y.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
