import{r as f,e}from"./iframe-d3qCsCxk.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-DMMOmwli.js";import{Y as c}from"./YAxis-BYMuo7gN.js";import{R as A}from"./arrayEqualityCheck-BSeezrw4.js";import{C}from"./ComposedChart-D8dIpZCb.js";import{X as K}from"./XAxis-BmRFblia.js";import{L as v}from"./Legend-Bx9chdmL.js";import{B as a}from"./Bar-DwsO9kUw.js";import{R as x}from"./RechartsHookInspector-ILLh7APk.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BEotyltG.js";import"./CartesianAxis-CyPlzw3T.js";import"./Layer-CUjYvDWI.js";import"./Text-Bh5Zv3nu.js";import"./DOMUtils-ClX6mTKm.js";import"./Label-oam-p3Cf.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D3LUzJCs.js";import"./zIndexSlice-umaRj-LL.js";import"./types-B3TZRrDh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice--Joe2iCZ.js";import"./hooks-BtAJA35U.js";import"./axisSelectors-dcntBxT_.js";import"./RechartsWrapper-B3juZhR0.js";import"./CartesianChart-BmufPzla.js";import"./chartDataContext-DW0jkWxK.js";import"./CategoricalChart-0siU3dfK.js";import"./Symbols-XJ3mO982.js";import"./Curve-D8rLd4C3.js";import"./useElementOffset-DxduRCjN.js";import"./iteratee-BsAJ3adM.js";import"./tooltipContext-CVRUuPKw.js";import"./ReactUtils-DxKtCUtQ.js";import"./ActiveShapeUtils-Yg-0vCe1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D73JO-29.js";import"./useAnimationId-OmpdHa5n.js";import"./Trapezoid-BSm40zBl.js";import"./Sector-VkuL4GRN.js";import"./RegisterGraphicalItemId-CAywyS_0.js";import"./ErrorBarContext-BMBoMP-k.js";import"./GraphicalItemClipPath-BCrb_h12.js";import"./SetGraphicalItem-CRxXrGVb.js";import"./getZIndexFromUnknown-BTj_ur5k.js";import"./graphicalItemSelectors-CKDXMRcS.js";import"./index-DStWVrKL.js";import"./ChartSizeDimensions-B6KXJ3cA.js";import"./OffsetShower-BqFAEUk2.js";import"./PlotAreaShower-CwAbREDh.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
