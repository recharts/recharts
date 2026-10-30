import{r as f,R as e}from"./iframe-C9f0XnT9.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D9OAInhW.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CHa-NfW0.js";import{C as k}from"./ComposedChart-ta3a0B_A.js";import{X as K}from"./XAxis-C5bj5GgQ.js";import{L as v}from"./Legend-BJJ5wo6A.js";import{B as a}from"./Bar-BpGF-611.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-HDB1mOS9.js";import"./Text-BBa2fCF5.js";import"./resolveDefaultProps-OglZgdvE.js";import"./DOMUtils-CkdhxU4H.js";import"./ZIndexLayer-Dk9V8YH1.js";import"./index-lRcOI8Cy.js";import"./index-Dd8czCIR.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DnDsCJfT.js";import"./throttle-KQYU95ys.js";import"./axisSelectors-DJl001RI.js";import"./d3-scale-BRci95pZ.js";import"./CartesianAxis-C2y0lK-Z.js";import"./Layer-BGqt9quM.js";import"./types-Cq0tVQAG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CaUdmayY.js";import"./index-Bf7Rq1hF.js";import"./index-C_QD7AAh.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DtDu-9p6.js";import"./index-DJqYT1Am.js";import"./CartesianChart-CjAW9dlX.js";import"./ZIndexPortal-DsfmsICI.js";import"./CategoricalChart-C4AmyGV7.js";import"./Symbols-CSFO1ejf.js";import"./symbol-BFxxKdiv.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Bof1DRSv.js";import"./useElementOffset-BPNvSWcg.js";import"./uniqBy-DOejL97I.js";import"./iteratee-Bq0h_QlS.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CjS5fbS8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DGCSZqUI.js";import"./useAnimationId-BNUZJ-Q8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-IcXhTV6f.js";import"./tooltipContext-DUeYh7_A.js";import"./ErrorBarContext-BjUzcwSB.js";import"./activeStyles-BitiIAzx.js";import"./SetGraphicalItem-BKb40hJg.js";import"./getZIndexFromUnknown-BmwONUf1.js";import"./useEffectiveDataKey-B2_fgQbM.js";import"./omit-A9eYUcZ3.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
