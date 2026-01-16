import{r as f,e}from"./iframe-BmaSkXVD.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CtpClMsJ.js";import{Y as c}from"./YAxis-bl9CTFgn.js";import{R as A}from"./arrayEqualityCheck-DFn-H49U.js";import{C}from"./ComposedChart-BHfLW0JN.js";import{X as K}from"./XAxis-C3x6dMLi.js";import{L as v}from"./Legend-DcqkzB4u.js";import{B as a}from"./Bar-ZmKTP5oc.js";import{R as x}from"./RechartsHookInspector-C0qStJOJ.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cjwd7qt6.js";import"./CartesianAxis-CTYOybg_.js";import"./Layer-kGCv99f8.js";import"./Text-D7kjMnBu.js";import"./DOMUtils-Ci6czfq_.js";import"./Label-Ba2fKD7_.js";import"./PolarUtils-fSNmW3dt.js";import"./ZIndexLayer-B0Nv_sMb.js";import"./zIndexSlice-DNtltYbu.js";import"./types-B1enpQ2U.js";import"./hooks-DXbNb-JH.js";import"./axisSelectors-CSGKwTAZ.js";import"./RechartsWrapper-CKnhTxOl.js";import"./CartesianChart-D0l2Cukl.js";import"./chartDataContext-CSlbi7PQ.js";import"./CategoricalChart-BDvQLJnr.js";import"./Symbols-BOIH3U2b.js";import"./Curve-Ct1DVFB9.js";import"./useElementOffset-P5G-fn69.js";import"./iteratee-BPsQLCXM.js";import"./tooltipContext-C34n9vuI.js";import"./ReactUtils-DF_Mupxs.js";import"./ActiveShapeUtils-450HsfaK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DuCzHhek.js";import"./useAnimationId-CSP1LMrK.js";import"./Trapezoid-B-uAYGkA.js";import"./Sector-BIUOjaCq.js";import"./RegisterGraphicalItemId-DmnuQhvD.js";import"./ErrorBarContext-DJ_jm3x0.js";import"./GraphicalItemClipPath-BaRcGmKq.js";import"./SetGraphicalItem-Dkq9thq_.js";import"./getZIndexFromUnknown-2YRDrp7G.js";import"./graphicalItemSelectors-B6sYLObk.js";import"./index-D8VqDYui.js";import"./ChartSizeDimensions-BIJ2rdc4.js";import"./OffsetShower-CSh__zJW.js";import"./PlotAreaShower-B9ocgXZz.js";const Ce={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ke=["WithIncludeHidden"];export{t as WithIncludeHidden,Ke as __namedExportsOrder,Ce as default};
