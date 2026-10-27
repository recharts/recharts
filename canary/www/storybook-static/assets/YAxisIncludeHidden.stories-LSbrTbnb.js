import{r as f,R as e}from"./iframe-DHcJjYhp.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CgAAJes1.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cc80mhc9.js";import{C as k}from"./ComposedChart-Bv15pDbO.js";import{X as K}from"./XAxis-BsCapYe_.js";import{L as v}from"./Legend-C8YJ-FLQ.js";import{B as a}from"./Bar-mo96EehO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CDs-ZtGW.js";import"./Text-BAIudaB2.js";import"./resolveDefaultProps-BvovYCe7.js";import"./pageBackground-CtNdVSAn.js";import"./ZIndexLayer-_GMRW-y_.js";import"./index-DrarxPoz.js";import"./index-DIJK83CB.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CcC4x2tN.js";import"./throttle-GOg0Fvd7.js";import"./dataEntryStyles-DyEOYp64.js";import"./axisSelectors-CcZJHo_q.js";import"./d3-scale-CySl75ZF.js";import"./CartesianAxis-I4Gfetq1.js";import"./Layer-BayIcTfz.js";import"./types-BNrWE8hx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bl5XAOUo.js";import"./index-CKtel9-l.js";import"./index-Cln2IwYT.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DW6cza7Q.js";import"./index-D3Qy2UUT.js";import"./CartesianChart-B9teWspu.js";import"./ZIndexPortal-pZH-aZp_.js";import"./CategoricalChart-mtPMptXy.js";import"./Symbols-yzipNpVJ.js";import"./symbol-l4VrHHkB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bh8_OLoh.js";import"./uniqBy-B6G9ZnVo.js";import"./iteratee-DxJ21J1F.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CQ-NHiOO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cb_93E_H.js";import"./useAnimationId-r_2cTbPz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BGsGLrPh.js";import"./tooltipContext-CrLb3nMo.js";import"./RegisterGraphicalItemId-CLn33yWX.js";import"./ErrorBarContext-GsyzIiJa.js";import"./activeStyles-CGuSRajE.js";import"./SetGraphicalItem-CQRz0ej3.js";import"./getZIndexFromUnknown-bTFBCnQw.js";import"./useEffectiveDataKey-wQhirjtm.js";import"./omit-E6Q7P6CQ.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
