import{r as f,e}from"./iframe-ZP7E3tAE.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-BhI8CLrp.js";import{R as A}from"./arrayEqualityCheck-BZegdwCU.js";import{C}from"./ComposedChart-Ict3xZeX.js";import{X as K}from"./XAxis-CN_uVChz.js";import{L as v}from"./Legend-BApGVLdg.js";import{B as a}from"./Bar-BSvXFc5g.js";import{R as x}from"./RechartsHookInspector-Bzs4iZ_z.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BqPQSvc8.js";import"./Layer-BHiu2mcd.js";import"./resolveDefaultProps-79J5uOQE.js";import"./Text-Fmn2R1e8.js";import"./DOMUtils-B5v93EaI.js";import"./Label-DQuLGrHO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CQ2HcABX.js";import"./zIndexSlice-DYNjVLba.js";import"./immer-DfBDygba.js";import"./types-BY0ZtJ6u.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DWiQ850g.js";import"./hooks-DCx4ALdg.js";import"./axisSelectors-jiBsETiM.js";import"./d3-scale-Y646Y1FN.js";import"./RechartsWrapper-CXTZX0lw.js";import"./index-B6UrQqZ7.js";import"./CartesianChart-CyeIpcsP.js";import"./chartDataContext-Cn5Bk3lF.js";import"./CategoricalChart-BiLT_62I.js";import"./Symbols-DjU9F7j-.js";import"./symbol-Db4XPyyX.js";import"./step-DXK9R3Qh.js";import"./useElementOffset-DUus7wqV.js";import"./uniqBy-BwvjcPiA.js";import"./iteratee-BocZf6ff.js";import"./tooltipContext-Da4xql8I.js";import"./ReactUtils-Jyyk6uCy.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DrBMRVee.js";import"./isPlainObject-DdPleWLd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MC9ihyGv.js";import"./useAnimationId-DzP9W11z.js";import"./Trapezoid-DEV19aif.js";import"./Sector-BSueo3lX.js";import"./Curve-BPu6gFcf.js";import"./RegisterGraphicalItemId-Cw_F4O-7.js";import"./ErrorBarContext-BLxncd0z.js";import"./GraphicalItemClipPath-D_6vSzHc.js";import"./SetGraphicalItem-Cf9rfdg9.js";import"./getZIndexFromUnknown-BrHSs6_e.js";import"./graphicalItemSelectors-Dv8aneyv.js";import"./index-B9IDBt-R.js";import"./ChartSizeDimensions-B4BdsRyY.js";import"./OffsetShower-CpH9si2J.js";import"./PlotAreaShower-DFApfivg.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Oe=["WithIncludeHidden"];export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
