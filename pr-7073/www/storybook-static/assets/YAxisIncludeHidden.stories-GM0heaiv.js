import{r as f,e}from"./iframe-DNAE1NhS.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-Cl8JaIdm.js";import{R as A}from"./arrayEqualityCheck-mXK7KdlW.js";import{C}from"./ComposedChart-B76NVtIH.js";import{X as K}from"./XAxis-BXzG9_su.js";import{L as v}from"./Legend-C1ZerFOP.js";import{B as a}from"./Bar-C7_VEExq.js";import{R as x}from"./RechartsHookInspector-CXdTs72e.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-ya5SmFCu.js";import"./Layer-D_bZVw-_.js";import"./resolveDefaultProps-CjxP23mN.js";import"./Text-oeG0hSrI.js";import"./DOMUtils-MNEnNJaG.js";import"./Label-Czy9EWVi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-NBg0M_kA.js";import"./zIndexSlice-Dz-Y6weB.js";import"./immer-CgyYfbuD.js";import"./types-BvNVkM_d.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-caOf_y68.js";import"./hooks-D9_8XsUT.js";import"./axisSelectors-CAHD1NoH.js";import"./d3-scale-9rqZbRzS.js";import"./RechartsWrapper-BnyLV03c.js";import"./index-zEpWvrsz.js";import"./CartesianChart-hy_UmrJw.js";import"./chartDataContext-ugJXSBb3.js";import"./CategoricalChart-B3LDNru7.js";import"./Symbols-DnMbrkmh.js";import"./symbol-CmAtNHVX.js";import"./step-DDruULJc.js";import"./useElementOffset-BjwHw1bZ.js";import"./uniqBy-DskIqC9r.js";import"./iteratee-Bv9grG7U.js";import"./tooltipContext-Cs2F9uWa.js";import"./ReactUtils-DmdO9I71.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DszuQs4M.js";import"./isPlainObject-YFgp9Ig4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cm__RLQd.js";import"./useAnimationId-BLg_egJR.js";import"./Trapezoid-D2GZv-Mv.js";import"./Sector-BPDHR2kf.js";import"./Curve-DnknT2C5.js";import"./RegisterGraphicalItemId-Bn08OEO8.js";import"./ErrorBarContext-CfrG8dxY.js";import"./GraphicalItemClipPath-aQHsATLs.js";import"./SetGraphicalItem-1nnxs2qY.js";import"./getZIndexFromUnknown-No3Kp_YB.js";import"./graphicalItemSelectors-CnnCHwYo.js";import"./index-FFJywn3r.js";import"./ChartSizeDimensions-B5bHZnUB.js";import"./OffsetShower-Bw8a_rrw.js";import"./PlotAreaShower-BJMlxwGr.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
