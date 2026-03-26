import{r as f,e}from"./iframe-Dt4aI4cx.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-hzK6Shx7.js";import{R as A}from"./arrayEqualityCheck-Cy9OM50o.js";import{C}from"./ComposedChart-Dj62jzJB.js";import{X as K}from"./XAxis-Cp9OOhUB.js";import{L as v}from"./Legend-Cx21nPu-.js";import{B as a}from"./Bar-BJCAdLCr.js";import{R as x}from"./RechartsHookInspector-DwUwNTd-.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C1sXhNsX.js";import"./Layer-XX14EpjR.js";import"./resolveDefaultProps-CnBFDAwN.js";import"./Text-LG7Y1Qb6.js";import"./DOMUtils-5HA3g2TS.js";import"./Label-Dmj78U1Q.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-GPk988Ay.js";import"./zIndexSlice-w9XFtOqX.js";import"./immer-yH4a-Hlo.js";import"./types-CrM7aEhh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DE3C--Q6.js";import"./hooks-Dm9h8rk1.js";import"./axisSelectors-gtHn-lFq.js";import"./d3-scale-BYMZZ-q_.js";import"./RechartsWrapper-BQTEnB61.js";import"./index-DfJHLdb0.js";import"./CartesianChart-vzcLi1ES.js";import"./chartDataContext-F8MoEuAy.js";import"./CategoricalChart-yI3i5yFY.js";import"./Symbols-QnBNzaPT.js";import"./symbol-BLeS_YRk.js";import"./step-BxKH8omU.js";import"./useElementOffset-_Rki3zcD.js";import"./uniqBy-BCx0vEEL.js";import"./iteratee-CJYw7GAe.js";import"./tooltipContext-DNo4zVkm.js";import"./ReactUtils-As56lGLj.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CylnP5Yt.js";import"./isPlainObject-CAtbLXkb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDlQaAI4.js";import"./useAnimationId-Bl7aTw__.js";import"./Trapezoid-DzQkp94u.js";import"./Sector-CDC7yo8h.js";import"./Curve-ZdoQmbTm.js";import"./RegisterGraphicalItemId-BZJpY04p.js";import"./ErrorBarContext-DF-ZGRah.js";import"./GraphicalItemClipPath-CzTif6uL.js";import"./SetGraphicalItem-ByAuxD-G.js";import"./getZIndexFromUnknown-tPFQVhGj.js";import"./graphicalItemSelectors-DHqk5KA6.js";import"./index-D9ndWW50.js";import"./ChartSizeDimensions-DFLxu7GA.js";import"./OffsetShower-BVHtCcND.js";import"./PlotAreaShower-BLT7b5XW.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
