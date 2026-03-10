import{r as f,e}from"./iframe-DuNEY226.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-QXoWtC2j.js";import{R as A}from"./arrayEqualityCheck-DDMqu3f1.js";import{C}from"./ComposedChart-DmWeIfHx.js";import{X as K}from"./XAxis-DdwDbuRS.js";import{L as v}from"./Legend-VNgnBbrg.js";import{B as a}from"./Bar-B_KtH6bR.js";import{R as x}from"./RechartsHookInspector-CfHmmsr6.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BtkWVQbW.js";import"./Layer-D_n9WiuW.js";import"./resolveDefaultProps-C-2Byojj.js";import"./Text-Dc6VXTKK.js";import"./DOMUtils-C-AY4UId.js";import"./Label-DKCGVJ9i.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CZdiz2vD.js";import"./zIndexSlice-CRDA7WbI.js";import"./immer-BVAwiqUd.js";import"./types-D9KOomKd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BQwvsrpL.js";import"./hooks-DB_oXYxy.js";import"./axisSelectors-DAR8t-c9.js";import"./d3-scale-CgGCPdr7.js";import"./RechartsWrapper-CEqZKjHf.js";import"./index-D7ubYLAP.js";import"./CartesianChart-v-wDegKF.js";import"./chartDataContext-D8l2QHPQ.js";import"./CategoricalChart-C_g1w3w0.js";import"./Symbols-Dk3gQBwn.js";import"./symbol-4CsV8iHb.js";import"./step-CHzygN7O.js";import"./useElementOffset-Cw1qFCGU.js";import"./uniqBy-BfsRDBur.js";import"./iteratee-GcQQ2EFV.js";import"./tooltipContext-BUJfSZPi.js";import"./ReactUtils-DRluxBO3.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BVtqisMr.js";import"./isPlainObject-DB3_XzF8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CkXHm1Ql.js";import"./useAnimationId-DN_Wn8rj.js";import"./Trapezoid-BXsyVm6P.js";import"./Sector-b9d-huvK.js";import"./Curve-ipLw690D.js";import"./RegisterGraphicalItemId-BWMdn6qI.js";import"./ErrorBarContext-CbQdG_x_.js";import"./GraphicalItemClipPath-CeHrZ0UX.js";import"./SetGraphicalItem-CfNV3Vyt.js";import"./getZIndexFromUnknown-BgO1nlim.js";import"./graphicalItemSelectors-D39jZ08p.js";import"./index-CE1COEz0.js";import"./ChartSizeDimensions-CTe7q-3t.js";import"./OffsetShower-CpVXhOAG.js";import"./PlotAreaShower-CXvEQ9OL.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
