import{r as f,R as e}from"./iframe-CrWtoPAX.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-xU-pi3Qa.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DMPrIjTD.js";import{C as k}from"./ComposedChart-CrLeVh0b.js";import{X as K}from"./XAxis-6CbcM3Se.js";import{L as v}from"./Legend-DR98L8UP.js";import{B as a}from"./Bar-CqrMZ8nV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-9ANtnaX1.js";import"./Text-CyQrUZZg.js";import"./resolveDefaultProps-Cl_vq3lE.js";import"./pageBackground-B_OyKJz4.js";import"./useId-CevBbkmx.js";import"./ZIndexLayer-mnQ0PTjZ.js";import"./index-CQ_XqvtJ.js";import"./index-D6uwIsxD.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DnnAPhgk.js";import"./throttle-ByP8enHW.js";import"./dataEntryStyles-CcroDQaP.js";import"./axisSelectors-B0-aB2Y5.js";import"./d3-scale-Pq_E9xXF.js";import"./CartesianAxis-D6bXO0ci.js";import"./Layer-Bc-8Aj4A.js";import"./types-sEVDNypc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CetFWcek.js";import"./index-gHXYJ75j.js";import"./index-BbFlaPL7.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-MJk6C7sG.js";import"./index-IYAiXkdd.js";import"./CartesianChart--l1pMg4t.js";import"./chartDataContext-BATi9LfG.js";import"./CategoricalChart-CRgz8QMs.js";import"./Symbols-BmauIne2.js";import"./symbol-C4lC381C.js";import"./path-DyVhHtw_.js";import"./useElementOffset-VqEKxajU.js";import"./uniqBy-CQj06pFN.js";import"./iteratee-DXOgM9Ce.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-D8qfovJq.js";import"./useAnimationId-DIVMX3ZS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNbdX1IY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BHD3PSWQ.js";import"./tooltipContext-DgMOrrVJ.js";import"./RegisterGraphicalItemId-DIduc0Gm.js";import"./ErrorBarContext-BGhx7PeS.js";import"./SetGraphicalItem-B4ZcrH9I.js";import"./getZIndexFromUnknown-CBjIuuRk.js";import"./useEffectiveDataKey-DRFzjTt4.js";import"./omit-BCdzxml0.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
