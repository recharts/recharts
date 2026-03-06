import{r as f,e}from"./iframe-B_nHVd2r.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-CHeSJRY3.js";import{R as A}from"./arrayEqualityCheck-DY9D726-.js";import{C}from"./ComposedChart-D26vWmHk.js";import{X as K}from"./XAxis-CW60u556.js";import{L as v}from"./Legend-BmKGcTGD.js";import{B as a}from"./Bar-n1zhmMgY.js";import{R as x}from"./RechartsHookInspector-fNULTbt1.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CcM516-L.js";import"./Layer-CuJ2fFlM.js";import"./resolveDefaultProps-4kbUPRd1.js";import"./Text-DiyzG_aV.js";import"./DOMUtils-DYxHXfua.js";import"./Label-Dso9Y4kd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BUYIYBsc.js";import"./zIndexSlice-CcXit2BS.js";import"./immer-BI8B3IAj.js";import"./types-BNmhs72m.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BzSKsfOY.js";import"./hooks-J0Oqh1od.js";import"./axisSelectors-BMRY7YQG.js";import"./d3-scale-B9XrMCDb.js";import"./RechartsWrapper-DzqzeMkT.js";import"./index-Ccd-ueyn.js";import"./CartesianChart-DEWcUEuJ.js";import"./chartDataContext-CnxSTV7I.js";import"./CategoricalChart-BQ2UlDix.js";import"./Symbols-DkF8brZX.js";import"./symbol-DVZ8Ov9_.js";import"./step-DYOoDPDf.js";import"./useElementOffset-C3UWFn_c.js";import"./uniqBy-Co66ylAO.js";import"./iteratee-BX1xRums.js";import"./tooltipContext-B7h_-5_Q.js";import"./ReactUtils-DvQ3Bihg.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Bm79eQGO.js";import"./isPlainObject-Bku77CDs.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsvkISRN.js";import"./useAnimationId-DeeI7Yuu.js";import"./Trapezoid-Bt86oLyu.js";import"./Sector-BoI-sHTN.js";import"./Curve-RQsVLKEt.js";import"./RegisterGraphicalItemId-DYT3txR2.js";import"./ErrorBarContext-D0DhrZWs.js";import"./GraphicalItemClipPath-rjxHDAAK.js";import"./SetGraphicalItem-BcnT6vB3.js";import"./getZIndexFromUnknown-ChLH1egp.js";import"./graphicalItemSelectors-BHacZKyI.js";import"./index-D4ywjx6k.js";import"./ChartSizeDimensions-CZvd_Zg7.js";import"./OffsetShower-8fEwfkJg.js";import"./PlotAreaShower-DdlKlbvs.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
