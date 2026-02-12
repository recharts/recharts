import{r as f,e}from"./iframe-Dim5_luC.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-BX5wgPpW.js";import{R as A}from"./arrayEqualityCheck-DY4kDyOd.js";import{C}from"./ComposedChart-DbnqK2Sk.js";import{X as K}from"./XAxis-CajpKvi_.js";import{L as v}from"./Legend-Br876WZe.js";import{B as a}from"./Bar-vJdKeXQV.js";import{R as x}from"./RechartsHookInspector-P8u42xZf.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D3nhBTU3.js";import"./CartesianAxis-CuZKHGcg.js";import"./Layer-DsncGJyW.js";import"./Text-POGh3Ki-.js";import"./DOMUtils-OmeTbLvk.js";import"./Label-g1K_6191.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D1v8rxBH.js";import"./zIndexSlice-DWwDEXe3.js";import"./types-BxKSV5b4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DQwyA4z1.js";import"./axisSelectors-CiSFc718.js";import"./RechartsWrapper-BTGjRieY.js";import"./CartesianChart-B-LiUj8Z.js";import"./chartDataContext-yPgkGQSE.js";import"./CategoricalChart-CIgbHOM5.js";import"./Symbols-BQHr33CI.js";import"./Curve-C8164FP7.js";import"./useElementOffset-DTeN2fqC.js";import"./iteratee-C63kfqEP.js";import"./tooltipContext-CdUJRRJL.js";import"./ReactUtils-B4IuMLLa.js";import"./ActiveShapeUtils-36K2bTf3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BRrYL6fC.js";import"./useAnimationId-BMRzQV3k.js";import"./Trapezoid-BCUpEs0g.js";import"./Sector-DyfQSrST.js";import"./RegisterGraphicalItemId-BV1l7uMF.js";import"./ErrorBarContext-swBbnM0b.js";import"./GraphicalItemClipPath-D0CZwxPN.js";import"./SetGraphicalItem-BevZjJX4.js";import"./getZIndexFromUnknown-DeiyLC02.js";import"./graphicalItemSelectors-C8hsMw3D.js";import"./index-BcXSgkDx.js";import"./ChartSizeDimensions-DhXaHeyJ.js";import"./OffsetShower-BPrV8Xge.js";import"./PlotAreaShower-BgwWJf6_.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
