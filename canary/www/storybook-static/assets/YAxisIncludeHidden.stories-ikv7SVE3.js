import{r as f,R as e}from"./iframe-C4yajH80.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CKXsneZC.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BfiJerBV.js";import{C as k}from"./ComposedChart-Drcu9Hk1.js";import{X as K}from"./XAxis-BFxxSACP.js";import{L as v}from"./Legend-D8kma9hL.js";import{B as a}from"./Bar-Dwnxi2Xk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B6ownNND.js";import"./Text-Bi36EJ7d.js";import"./resolveDefaultProps-DFc2Rexf.js";import"./DOMUtils-dS8ElQc-.js";import"./ZIndexLayer-DJSGJh4F.js";import"./index-CrNHa6S5.js";import"./index-CuVCW5fj.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CwKR_Q3z.js";import"./throttle-A9at9acq.js";import"./axisSelectors-C4wAO8K7.js";import"./d3-scale-fBzFIMPy.js";import"./CartesianAxis-CiDuuMHX.js";import"./Layer-D0yKuovh.js";import"./types-CL_v27h0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-cx0ctRz4.js";import"./index-BrlBHB3n.js";import"./index-Bb-mYyLv.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-EDwJ-hpd.js";import"./index-CQyck0VW.js";import"./fillDefinitions-BST5zs50.js";import"./CartesianChart-CEN-h0dg.js";import"./ZIndexPortal-DAymcjH6.js";import"./CategoricalChart-PCFFppyT.js";import"./Symbols-B1Np59zp.js";import"./symbol-CD9hHhVA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-jHj6xKf0.js";import"./uniqBy-B9zpECzU.js";import"./iteratee-Cick1OQS.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-C_dQABL5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Co2_9m8t.js";import"./useAnimationId-BUxfS1h6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-PoKmoeJ-.js";import"./tooltipContext-CWv0OsXH.js";import"./dataEntryStyles-2Nz1ZzWI.js";import"./ErrorBarContext-ELy3xUI7.js";import"./activeStyles-DvcaieBh.js";import"./SetGraphicalItem-aXzYe790.js";import"./getZIndexFromUnknown-D-oKNjXm.js";import"./useEffectiveDataKey-RrCx3xE8.js";import"./omit-CfBlZ-ZR.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
