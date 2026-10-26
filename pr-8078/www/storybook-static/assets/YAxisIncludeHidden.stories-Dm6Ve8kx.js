import{r as f,R as e}from"./iframe-BofWz4pi.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D1oxSTTV.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DPHCingP.js";import{C as k}from"./ComposedChart-D_3KSeQ5.js";import{X as K}from"./XAxis-7mtD4Kk1.js";import{L as v}from"./Legend-BJN62WwA.js";import{B as a}from"./Bar-5dLPkDhq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CCUawDng.js";import"./Text-Cod3bNx5.js";import"./resolveDefaultProps-DKgUGYpY.js";import"./pageBackground-CLiAzPgV.js";import"./useId-CsDd5jlc.js";import"./ZIndexLayer-ZOq897pe.js";import"./index-Ch52J8fd.js";import"./index-budgZ99k.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-5SLj1vDB.js";import"./throttle-CD21hIR0.js";import"./dataEntryStyles-EsxEhXM1.js";import"./axisSelectors-BlRUD72R.js";import"./d3-scale-BBiuonxv.js";import"./CartesianAxis-DEogGjPj.js";import"./Layer-bLQQfVOZ.js";import"./types-Da0w2MOX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DguNpOt6.js";import"./index-CCD_p5-C.js";import"./index-BTJxJJp6.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-uhVYqXCO.js";import"./index-DGPf-g6A.js";import"./CartesianChart-Bw0i9iF5.js";import"./chartDataContext-f6L6P8Kq.js";import"./CategoricalChart-DMR2DLHI.js";import"./Symbols-dr6Uh6kU.js";import"./symbol-cg3YFeoa.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B4a6RQjs.js";import"./uniqBy-DiB2KEwv.js";import"./iteratee-CfR7qh40.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-B7UPTptH.js";import"./useAnimationId-CM0h2zlX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BNojMJrW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-jlvddXY2.js";import"./tooltipContext-DcHtwD0Y.js";import"./RegisterGraphicalItemId-C_30UGno.js";import"./ErrorBarContext-D5pMarzn.js";import"./SetGraphicalItem-Cxhb9Qmq.js";import"./getZIndexFromUnknown-BONwhvkQ.js";import"./useEffectiveDataKey-CF-diEWF.js";import"./omit-B1JbUKAI.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
