import{r as f,e}from"./iframe-Byw-Ecda.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CNrfi_Sb.js";import{Y as c}from"./YAxis-CD7xJu8W.js";import{R as A}from"./arrayEqualityCheck-DJZ_H245.js";import{C}from"./ComposedChart-CAduK1a5.js";import{X as K}from"./XAxis-DKuVnBhX.js";import{L as v}from"./Legend-BSRpbxl-.js";import{B as a}from"./Bar-FGXUGu6W.js";import{R as x}from"./RechartsHookInspector-DU_Xges7.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DghbljUc.js";import"./CartesianAxis-C435YXcQ.js";import"./Layer-BCc3Ql-7.js";import"./Text-Co26eSaA.js";import"./DOMUtils-Cxak4Mzx.js";import"./Label-BqnP7yRk.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-CyfG8XIl.js";import"./zIndexSlice-BBcvffed.js";import"./types-C-BvOMCj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CRVJYPCv.js";import"./axisSelectors-CfRyBf_k.js";import"./RechartsWrapper-CyPBoUJ2.js";import"./CartesianChart-yzTWxCXF.js";import"./chartDataContext-BewYwNuI.js";import"./CategoricalChart-Dg1jHZIf.js";import"./Symbols-BEvrU7lm.js";import"./Curve-Dgc9kazX.js";import"./useElementOffset-74fnwz2l.js";import"./iteratee-CQ84vpct.js";import"./tooltipContext-C5cmHvPB.js";import"./ReactUtils-Cjy_uT2w.js";import"./ActiveShapeUtils-Dp9WPNg-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cx7cLZFF.js";import"./useAnimationId-QmVedw8X.js";import"./Trapezoid-CmsPiWji.js";import"./Sector-DvNfR6cX.js";import"./RegisterGraphicalItemId-Cpx6qHuO.js";import"./ErrorBarContext-Cl5G60_X.js";import"./GraphicalItemClipPath-C339LZnB.js";import"./SetGraphicalItem-DQzHPnU7.js";import"./getZIndexFromUnknown-1j0w5vtV.js";import"./graphicalItemSelectors-C-onypME.js";import"./index-Bq4G09kn.js";import"./ChartSizeDimensions-B0IYXKC6.js";import"./OffsetShower-BbVu_iXB.js";import"./PlotAreaShower-b86ZtdTd.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
