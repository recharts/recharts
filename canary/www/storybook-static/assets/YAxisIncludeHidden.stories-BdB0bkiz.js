import{r as f,R as e}from"./iframe-BKOly897.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B-vCHNYJ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-MuW0IoWE.js";import{C as k}from"./ComposedChart-DNIn-1lF.js";import{X as K}from"./XAxis-CAN01VgH.js";import{L as v}from"./Legend-BY_4G6rL.js";import{B as a}from"./Bar-CUOogcGr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BqeeWfBr.js";import"./Text-B-p-4nXu.js";import"./resolveDefaultProps-DBtmfAg5.js";import"./pageBackground-ByY2ru8v.js";import"./ZIndexLayer-BgIgZbDQ.js";import"./index-Bgsd-oxC.js";import"./index-CcRpQNf3.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dd8oI3jG.js";import"./throttle-Dj0bMbq4.js";import"./dataEntryStyles-DNa-AVoZ.js";import"./axisSelectors-DAovfJtb.js";import"./d3-scale-FWOlMe5i.js";import"./CartesianAxis-B19wq6cj.js";import"./Layer-DdqSdn0F.js";import"./types-BW57dsKE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CNCxbMiN.js";import"./index-BW-0cZWE.js";import"./index-DAFveYs2.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BR-O-n81.js";import"./index-DlD_trIo.js";import"./CartesianChart-yrdLDQCk.js";import"./ZIndexPortal-DaAvwAYM.js";import"./CategoricalChart-BtQg_BZ4.js";import"./Symbols-owfjK1Cg.js";import"./symbol-BffQEpZj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D4wk1lFS.js";import"./uniqBy-QsHY--3m.js";import"./iteratee-C_CFKuDs.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CHIFisD0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-dSQZJlx4.js";import"./useAnimationId-Dwkyu_pp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CmV0wYzT.js";import"./tooltipContext-Dy1516kb.js";import"./RegisterGraphicalItemId-DXgo6Kex.js";import"./ErrorBarContext-CQ65MipX.js";import"./activeStyles-C5fI4Bwm.js";import"./SetGraphicalItem-BKFEq2Vz.js";import"./getZIndexFromUnknown-D3BNFson.js";import"./useEffectiveDataKey-BLEvHhBq.js";import"./omit-60X9AB9Q.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
