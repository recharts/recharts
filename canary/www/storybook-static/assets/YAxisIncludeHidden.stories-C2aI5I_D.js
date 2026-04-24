import{r as f,e}from"./iframe-iXVZ0OWw.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BONLIFGC.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-Bs7awETv.js";import{C}from"./ComposedChart-D42n6zmq.js";import{X as K}from"./XAxis-Y2bxQYNa.js";import{L as v}from"./Legend-n_SJbmrZ.js";import{B as s}from"./Bar-DpPX3MhS.js";import{R as x}from"./RechartsHookInspector-QPfA1UiQ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-8r9ztVGp.js";import"./Layer-CGbljtJR.js";import"./resolveDefaultProps-DZrbJThI.js";import"./Text-BTO53QFq.js";import"./DOMUtils-BF1xhoe1.js";import"./Label-DFdLWFZO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bsv83kPu.js";import"./zIndexSlice-D699PQjh.js";import"./immer-D9XbeXAx.js";import"./types-BHwUrVE7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CFlbd-Pg.js";import"./hooks-hExiU42m.js";import"./axisSelectors-C0i3ctr0.js";import"./d3-scale-CKEOWdk4.js";import"./RechartsWrapper-Al7ZScv5.js";import"./index-P8miOr9q.js";import"./CartesianChart-CmpgeL8p.js";import"./chartDataContext-BSmZPOfG.js";import"./CategoricalChart-C87NLSKj.js";import"./Symbols-vgP9iBxE.js";import"./symbol-C3fUoARJ.js";import"./step-C3QbnIY1.js";import"./useElementOffset-BsJy2Y1x.js";import"./uniqBy-KdXgrzGA.js";import"./iteratee-DJziDCBj.js";import"./tooltipContext-BuOnD9f8.js";import"./ReactUtils-DHe6gE8g.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DLIttevF.js";import"./isPlainObject-C5HoPG-J.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSd4AbXR.js";import"./useAnimationId-B_Uu5T7V.js";import"./Trapezoid-CQSpJBVW.js";import"./Sector-BBLCd5Jd.js";import"./Curve-8m_6XEtl.js";import"./RegisterGraphicalItemId-BvNsmO5D.js";import"./ErrorBarContext-Bl38LcUT.js";import"./GraphicalItemClipPath-CbkDaRj8.js";import"./SetGraphicalItem-BA2l-KDv.js";import"./getZIndexFromUnknown-B_TEGjvf.js";import"./graphicalItemSelectors-Sfmz7aRe.js";import"./index-czQzbvEN.js";import"./ChartSizeDimensions-iHbrzIWQ.js";import"./OffsetShower-dcduOxOC.js";import"./PlotAreaShower-BzP3r89Q.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
