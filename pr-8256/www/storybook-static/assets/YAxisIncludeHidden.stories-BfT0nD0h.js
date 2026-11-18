import{r as f,R as e}from"./iframe-Z3SayaVd.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-PP-Vs1t2.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dh2HMKB6.js";import{C as k}from"./ComposedChart-i6W5PytN.js";import{X as K}from"./XAxis-BsEr8UIp.js";import{L as v}from"./Legend-64sg-l9Y.js";import{B as a}from"./Bar-DbP1KHR5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-gVjZnKx0.js";import"./Text-DdcAXxQ7.js";import"./resolveDefaultProps-DNiWcqg9.js";import"./ZIndexLayer-y38pl_-1.js";import"./index--orTKKd0.js";import"./index-wtNxUfyP.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DRpHoHNx.js";import"./throttle-Dxt6SGJ3.js";import"./axisSelectors--kuv0hpR.js";import"./d3-scale-COX3gckA.js";import"./CartesianAxis-CDmW-YMV.js";import"./Layer-R9bgEcMl.js";import"./types-C7fTXY90.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B1QrN0Ft.js";import"./index-Byv9yEMF.js";import"./index-IODgrwVj.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-rHkMTZTL.js";import"./index-eVlhMApr.js";import"./fillDefinitions-YvUR7ZoJ.js";import"./CartesianChart-C0rkW4er.js";import"./chartDataContext-MZv5qjpR.js";import"./CategoricalChart-B9nlic4H.js";import"./Symbols-D5F94Msa.js";import"./symbol-Cplhih6x.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bp-2_zay.js";import"./uniqBy-DSum8Wv6.js";import"./iteratee-JP_8kGzy.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CdjRVARh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C9s6B2mt.js";import"./useAnimationId-CJJ1SFId.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-8h_kjkj8.js";import"./tooltipContext-BhBWEJk9.js";import"./ErrorBarContext-CcYlyxVe.js";import"./activeStyles-DoLNHT3-.js";import"./SetGraphicalItem-na8KM_FV.js";import"./getZIndexFromUnknown-Bvavo77o.js";import"./useEffectiveDataKey-COaHCNkR.js";import"./omit-B8hBrCOT.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
