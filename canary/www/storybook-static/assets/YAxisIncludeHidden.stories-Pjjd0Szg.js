import{r as f,e}from"./iframe-DltNrMbJ.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-CJYvma9k.js";import{R as A}from"./arrayEqualityCheck-LkDVdEVg.js";import{C}from"./ComposedChart-8YXYxTJ4.js";import{X as K}from"./XAxis-CERTAhrM.js";import{L as v}from"./Legend-nJk7JtSm.js";import{B as a}from"./Bar-DeU_pE3W.js";import{R as x}from"./RechartsHookInspector-CkUV0TxE.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DUSmftLt.js";import"./CartesianAxis-DfRV_-M5.js";import"./Layer-CESBlQPf.js";import"./Text-Dh_cvCOq.js";import"./DOMUtils-xzfmDO5R.js";import"./Label-WGWSnZjZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BSXb5mnX.js";import"./zIndexSlice-BY2OfmK4.js";import"./types-ByzPfmmH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-BprzVDZg.js";import"./axisSelectors-CKIz14Qs.js";import"./RechartsWrapper-BkNkb6Gi.js";import"./CartesianChart-DYne5FJP.js";import"./chartDataContext-DyMLSiHH.js";import"./CategoricalChart-B77eIce_.js";import"./Symbols-VYn2rLNF.js";import"./Curve-DQJoehXa.js";import"./useElementOffset-BISJ-SQc.js";import"./iteratee-1VRBEyg4.js";import"./tooltipContext-74zqqiiW.js";import"./ReactUtils-q-DWoBEq.js";import"./ActiveShapeUtils-Dt67byha.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BEufvsiJ.js";import"./useAnimationId-BKMwNFd7.js";import"./Trapezoid-AkIt7Koc.js";import"./Sector-CucAHJS5.js";import"./RegisterGraphicalItemId-BssAkKZ1.js";import"./ErrorBarContext-D_xaXEzA.js";import"./GraphicalItemClipPath-BbPDXtNe.js";import"./SetGraphicalItem-BwO0NZge.js";import"./getZIndexFromUnknown-Cl_4XYmX.js";import"./graphicalItemSelectors-JpKVhF4p.js";import"./index-DSMvm7PG.js";import"./ChartSizeDimensions-D5hH2uJv.js";import"./OffsetShower-DW4GTDS2.js";import"./PlotAreaShower-DOQKbeSs.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ke as default};
