import{r as f,e}from"./iframe-DSZ2QiJB.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-x1YS6WwT.js";import{R as A}from"./arrayEqualityCheck-rt-62tKM.js";import{C}from"./ComposedChart-B_grCv6v.js";import{X as K}from"./XAxis-C40iw1gZ.js";import{L as v}from"./Legend-BvZZgudz.js";import{B as a}from"./Bar-Ct9DcpVT.js";import{R as x}from"./RechartsHookInspector-CbZDQ_xN.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BOemEoe1.js";import"./Layer-CfeiBM7_.js";import"./resolveDefaultProps-_H3sYQ_H.js";import"./Text-Dt_FG9bq.js";import"./DOMUtils-n5N7L4PT.js";import"./Label-DwmX4z8O.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BB6UhYUp.js";import"./zIndexSlice-Dv9Y9W3b.js";import"./immer-D42ZyI8P.js";import"./types-DHG31Cql.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C2PuzhHM.js";import"./hooks-Bla0K3sY.js";import"./axisSelectors-DvTXpJxJ.js";import"./d3-scale-Bj0Wd2Rm.js";import"./RechartsWrapper-BWBPYC1r.js";import"./index-1kC-pV_c.js";import"./CartesianChart-YjLZrE0S.js";import"./chartDataContext-BuXntJJ8.js";import"./CategoricalChart-3Wrbo8_n.js";import"./Symbols-D1J3is_N.js";import"./symbol-Bi67EGLP.js";import"./step-28_znSZY.js";import"./useElementOffset-DO-lVvkB.js";import"./uniqBy-aig2Gkf7.js";import"./iteratee-CEjlmyDu.js";import"./tooltipContext-DkQDnNhX.js";import"./ReactUtils-BPco_pTv.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-atDgqYom.js";import"./isPlainObject-eGyZT97o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-U6qmZG0w.js";import"./useAnimationId-CVC-EATQ.js";import"./Trapezoid-eVJamGS1.js";import"./Sector-Cw_z1t88.js";import"./Curve-1v3U2npm.js";import"./RegisterGraphicalItemId-DpTWPNPm.js";import"./ErrorBarContext-BIl6qq4l.js";import"./GraphicalItemClipPath-DGAu4crQ.js";import"./SetGraphicalItem-A8lByKkr.js";import"./getZIndexFromUnknown-C4JvBKUo.js";import"./graphicalItemSelectors-CYRK5fZq.js";import"./index-DDQU038C.js";import"./ChartSizeDimensions-Cqws91-P.js";import"./OffsetShower-Bc2DkPnc.js";import"./PlotAreaShower-B81JCCGH.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
